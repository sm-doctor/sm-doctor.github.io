---
title: "联系我们"
layout: "simple"
showHero: true
---

<div class="custom-contact-parent">

  <div class="custom-contact-child1">
  <div style="color: inherit; font-size: 22px; margin-top: 35px;">发电子邮件给我们</div>
  <script src="/js/email.min.js"></script>
   <form class="custom-formcontact-container" id="contact-form">
       <input class="custom-formcontact-input" type="text" id="name" placeholder="姓名" required><p>
       <input class="custom-formcontact-input" type="email" id="email" placeholder="邮箱" required><p>
       <textarea class="custom-formcontact-textarea" id="message" placeholder="留言" required></textarea><p>
       <button type="submit" class="custom-formcontact-button">发送</button>
   </form>
  </div>

  <div class="custom-contact-child2"></div>
  
  <!-- 进度提示框 -->
  <div id="progress-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="margin-bottom: 20px;">
              <!-- 简单的加载动画 -->
              <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #818692; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
          </div>
          <p style="font-size: 16px; color: #333; margin: 0;">提交中，请稍候...</p>
      </div>
  </div>
  
  <!-- 成功提示框 -->
  <div id="success-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="margin-bottom: 20px; font-size: 40px; color: #4CAF50;">✓</div>
          <p style="font-size: 16px; color: #333; margin: 0 0 20px 0;">发送成功！</p>
          <button id="success-confirm-btn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">确定</button>
      </div>
  </div>
  
  <!-- 失败提示框 -->
  <div id="error-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%;">
          <div style="margin-bottom: 20px; font-size: 40px; color: #F44336;">✗</div>
          <div style="min-height: 50px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; margin-bottom: 10px;">
              <p id="error-message" style="font-size: 16px; color: #333; margin: 0;">发送失败：</p>
          </div>
          <button id="error-confirm-btn" style="padding: 10px 20px; background-color: #F44336; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">确定</button>
      </div>
  </div>
  
  <!-- 加载动画样式 -->
  <style>
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  </style>
  
  
  <!-- 社交媒体链接与公众号 -->
  <div class="custom-contact-child3">
   <div style="color: inherit; font-size: 22px; margin-top: 35px;">关注我们的公众号</div>
   <img style="margin-top: 8px; width: 275px;" src="/images/weixin.jpg">
  <div style="margin-top:0px; white-space: nowrap; text-align: center;">
  <a href="#" class="custom-icon-sm">{{< icon "weixin" >}}</a>
  <a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAg0e3TfgJwAzj2dS6wu8Mg3dWTIzAjTGU26mQGm4AKjQ/" target="_blank" class="custom-icon-sm">{{< 
  icon "toutiao" >}}</a>
  <a href="https://www.xiaohongshu.com/user/profile/5d423fc90000000016034bc6?xsec_token=YBvkMf6BM6shT8zJAPAaDS4TdQNUmu4WskjU5MrT_0mss%3D&xsec_source=app_share&
  xhsshare=WeixinSession&appuid=5d423fc90000000016034bc6&apptime=1741686168&share_id=5759c5c385644ebf8cf03fea99c2e53e&share_channel=wechat/" target="_blank" 
  class="custom-icon-sm">{{< icon "redbook" >}}</a>
  <a href="https://zhihu.com/people/nscm/" target="_blank" class="custom-icon-sm">{{< icon "zhihu" >}}</a>
  <a href="https://m.weibo.cn/u/6178605197/" target="_blank" class="custom-icon-sm">{{< icon "xinlangweibo" >}}</a>
  <a href="mailto:ohulab.org@ohulab.org" target="_blank" class="custom-icon-sm">{{< icon "email" >}}</a>
  </div>
  
  </div>
</div>

<!-- 在这里添加JavaScript代码，确保所有DOM元素都已加载 -->
<script>
  emailjs.init("vdP5Xufc7ya4tda5p"); // 替换为你的 Public Key
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log("发送数据:", data); // 调试用
    
    // 显示进度提示框
    document.getElementById('progress-modal').style.display = 'flex';
    
    emailjs.send("service_30kcso8", "template_0lan0r9", data) // 业务ID service 和模板ID template
      .then(() => {
        console.log('发送成功！');
        // 隐藏进度提示框
        document.getElementById('progress-modal').style.display = 'none';
        // 显示成功提示框
        document.getElementById('success-modal').style.display = 'flex';
      }, (error) => {
        console.log('发送失败...', error);
        // 隐藏进度提示框
        document.getElementById('progress-modal').style.display = 'none';
        // 设置错误信息并显示错误提示框
        document.getElementById('error-message').textContent = '发送失败：' + (error.text || '未知错误');
        document.getElementById('error-modal').style.display = 'flex';
      });
  });
  
  // 成功提示框关闭处理
  document.getElementById('success-modal').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    // 重置表单
    document.getElementById('contact-form').reset();
  });
  
  // 成功提示框确定按钮处理
  document.getElementById('success-confirm-btn').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    // 重置表单
    document.getElementById('contact-form').reset();
  });
  
  // 失败提示框关闭处理
  document.getElementById('error-modal').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // 失败提示框确定按钮处理
  document.getElementById('error-confirm-btn').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // 防止点击内容内部时关闭模态框
  document.querySelectorAll('#success-modal > div, #error-modal > div').forEach(function(modalContent) {
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
</script>

<br>

### 深圳炎黄健康科技有限公司

TEL1: +86 177-2251-0596 （中国大陆）<br>
TEL2: +852 5941-9145 （中国香港）