---
title: "人类健康计划"
description: ""
---


<!-- LOGO与HEADING 中文 -->
<header style="width: 100%; display: flex; justify-content: center; align-items: center; padding: 0;">
  <div style="width: 100%; max-width: 600px; min-width: 300px; display: flex; flex-direction: column; align-items: center;">
    <div style="color: inherit; font-size: clamp(55px, 15vw, 80px); display: flex; align-items: center; justify-content: center;">
      {{< icon "logo" >}}
    </div>
    <h1 style="text-align: center; font-weight: bold; font-size: clamp(18px, 3vw, 30px); margin: 5px 0 0; overflow: hidden; line-height: 1.2;">
      一站式健康解决方案
    </h1>
  </div>
</header>


<!-- 嵌入zhenxun.sm.doctor -->
<div style="display: flex; justify-content: center; width: 100%; padding: 20px 0;">
  <div style="max-width: 600px; width: 100%;">
    <iframe id="zhenxun-iframe" src="https://zhenxun.sm.doctor/" width="100%" height="350px" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" sandbox="allow-same-origin allow-scripts" title="SMD·AI" style="background-color: transparent;" allowtransparency="true">
      您的浏览器不支持iframe标签，无法显示嵌入内容。
    </iframe>
  </div>
</div>

<script>
// 获取当前主题模式的函数
function getCurrentTheme() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// 向iframe发送主题模式信息
function sendThemeToIframe(forceUpdate = false) {
    const iframe = document.getElementById("zhenxun-iframe");
    const currentTheme = getCurrentTheme();
    
    // 避免重复发送相同的主题
    if (!forceUpdate && iframe.lastTheme === currentTheme) {
        return;
    }
    
    if (iframe && iframe.contentWindow) {
        try {
            // 设置iframe的className以直接应用样式
            iframe.className = currentTheme;
            
            // 尝试直接发送消息
            iframe.contentWindow.postMessage({ 
                type: 'theme-change',
                theme: currentTheme,
                timestamp: Date.now()
            }, "http://localhost:3001");
            
            // 记录最后发送的主题
            iframe.lastTheme = currentTheme;
            
            console.log(`主题已发送到iframe: ${currentTheme}`);
        } catch (e) {
            console.error("无法向iframe发送消息:", e);
            // 添加重试机制
            setTimeout(() => sendThemeToIframe(true), 500);
        }
    }
}

// 检查iframe是否已加载完成
function checkIframeLoaded() {
    const iframe = document.getElementById("zhenxun-iframe");
    
    if (iframe) {
        // 检查iframe是否已加载完成
        if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
            sendThemeToIframe(true);
            return true;
        }
        
        // 如果未加载完成，继续检查
        setTimeout(checkIframeLoaded, 100);
    }
    
    return false;
}

// 处理来自iframe的响应消息
function handleIframeMessage(event) {
    // 验证消息来源
    if (event.origin !== "https://zhenxun.sm.doctor/") {
        return;
    }
    
    // 处理iframe的确认消息
    if (event.data && event.data.type === 'theme-ack') {
        console.log(`iframe已确认收到主题: ${event.data.theme}`);
    }
}

// 页面加载完成后设置初始主题
window.addEventListener("DOMContentLoaded", function() {
    // 设置消息监听器来接收iframe的响应
    window.addEventListener("message", handleIframeMessage, false);
    
    // 使用更可靠的iframe加载检测
    checkIframeLoaded();
    
    // 同时设置一个超时，确保主题最终会被发送
    setTimeout(() => sendThemeToIframe(true), 1000);
    
    // 监听主题切换事件
    const switcher = document.getElementById("appearance-switcher");
    const switcherMobile = document.getElementById("appearance-switcher-mobile");
    
    // 增强的事件监听方式
    function setupThemeSwitcher(element) {
        if (!element) return;
        
        // 使用更可靠的事件监听方式
        element.addEventListener('click', function() {
            // 使用setTimeout确保主题切换完成后再发送
            setTimeout(() => sendThemeToIframe(), 0);
        });
    }
    
    setupThemeSwitcher(switcher);
    setupThemeSwitcher(switcherMobile);
    
    // 监听系统主题变化
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        
        mediaQuery.addEventListener("change", function() {
            // 延迟一下确保系统主题变化完成
            setTimeout(() => sendThemeToIframe(), 100);
        });
        
        // 立即发送一次当前系统主题
        sendThemeToIframe();
    }
    
    // 监听DOM变化，检测主题类名的直接修改
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                // 延迟一下确保DOM更新完成
                setTimeout(() => sendThemeToIframe(), 0);
            }
        });
    });
    
    // 开始观察根元素的class属性变化
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });
});
</script>



<div style="width: 100%; text-align: left; margin-top: 0px;">{{< list cardView=true limit=3 where="Type" value="sample" >}}</div>