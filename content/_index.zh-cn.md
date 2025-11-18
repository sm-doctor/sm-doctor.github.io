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
  <div style="max-width: 600px; width: 100%; position: relative;">
    <!-- 加载动画 -->
    <div id="iframe-loader" style="position: absolute;top: 0; left: 0; width: 100%; height: 350px; background-color: transparent; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 10; border-radius: 8px;">
        <!-- 加载动画图标 -->
        <div style="border: 3px solid #f3f3f3; border-top: 3px solid #296a29; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin-bottom: 15px;"></div>
        <!-- 加载文字 -->
        <p style="margin: 0; color: #666; font-size: 15px;">加载中...</p>
    </div>
    <!-- iframe内容 -->
    <iframe id="zhenxun-iframe" src="https://zhenxun.sm.doctor/" width="100%" height="350px" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" sandbox="allow-same-origin allow-scripts" title="SMD·AI" style="background-color: transparent; max-width: 600px; min-width: 320px;" allowtransparency="true">
        您的浏览器不支持iframe标签，无法显示嵌入内容。
    </iframe>
    <!-- 加载动画样式 -->
    <style>
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
    <!-- 加载动画脚本 -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const iframe = document.getElementById('zhenxun-iframe');
            const loader = document.getElementById('iframe-loader');
            // 设置加载动画容器的初始高度
            loader.style.height = '350px';
            // 监听iframe加载完成事件
            iframe.onload = function() {
                // 隐藏加载动画
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500); // 稍微延迟以确保内容完全显示
                // 加载完成后，向iframe发送消息请求高度调整
                try {
                    iframe.contentWindow.postMessage({ type: 'request-height' }, 'https://zhenxun.sm.doctor/');
                } catch (e) {
                    console.log('无法向iframe发送高度请求消息:', e);
                }
            };
            // 处理加载超时情况
            setTimeout(() => {
                if (loader && loader.style.display !== 'none') {
                    loader.innerHTML = '<p style="color: #666; font-size: 16px;">加载较慢，请稍候...</p>';
                }
            }, 5000);
        });
    </script>
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
            }, "https://zhenxun.sm.doctor/");
            
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
    
    // 处理iframe的高度调整请求
    if (event.data && event.data.type === 'height-update' && typeof event.data.height === 'number') {
        const iframe = document.getElementById('zhenxun-iframe');
        try {
            // 设置一个最小高度以防止内容为空时iframe完全消失
            const minHeight = 350;
            // 应用从iframe接收到的高度，确保不小于最小高度
            iframe.style.height = Math.max(minHeight, event.data.height + 20) + 'px';
        } catch (e) {
            console.error('通过消息调整iframe高度时出错:', e);
        }
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