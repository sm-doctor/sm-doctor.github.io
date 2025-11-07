---
title: "聯絡我們"
layout: "simple"
showHero: true
---

<div class="custom-contact-parent">
  <div class="custom-contact-child1">
  <div style="color: inherit; font-size: 22px; margin-top: 35px;">發電子郵件給我們</div>
  <script src="/js/email.min.js"></script>
   <form class="custom-formcontact-container" id="contact-form">
       <input class="custom-formcontact-input" type="text" id="name" placeholder="姓名" required><p>
       <input class="custom-formcontact-input" type="email" id="email" placeholder="郵箱" required><p>
       <textarea class="custom-formcontact-textarea" id="message" placeholder="留言" required></textarea><p>
       <button type="submit" class="custom-formcontact-button">發送</button>
   </form>
  </div>

  <div class="custom-contact-child2"></div>
  
  <!-- 進度提示框 -->
  <div id="progress-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="margin-bottom: 20px;">
              <!-- 簡單的加載動畫 -->
              <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #818692; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
          </div>
          <p style="font-size: 16px; color: #333; margin: 0;">提交中，請稍候...</p>
      </div>
  </div>
  
  <!-- 成功提示框 -->
  <div id="success-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="margin-bottom: 20px; font-size: 40px; color: #4CAF50;">✓</div>
          <p style="font-size: 16px; color: #333; margin: 0 0 20px 0;">發送成功！</p>
          <button id="success-confirm-btn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">確定</button>
      </div>
  </div>
  
  <!-- 失敗提示框 -->
  <div id="error-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%;">
          <div style="margin-bottom: 20px; font-size: 40px; color: #F44336;">✗</div>
          <div style="min-height: 50px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; margin-bottom: 10px;">
              <p id="error-message" style="font-size: 16px; color: #333; margin: 0;">發送失敗：</p>
          </div>
          <button id="error-confirm-btn" style="padding: 10px 20px; background-color: #F44336; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">確定</button>
      </div>
  </div>
  
  <!-- 加載動畫樣式 -->
  <style>
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  </style>
  
  <div class="custom-contact-child3">
    <div style="color: inherit; font-size: 22px; margin-top: 35px;">關注我們的公衆號</div>
    <img style="margin-top: 8px; width: 275px;" src="/images/weixin.jpg">
    
  <div style="margin-top:0px; white-space: nowrap; text-align: center;">
    <a href="#" class="custom-icon-sm">{{< icon "weixin" >}}</a>
    <a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAg0e3TfgJwAzj2dS6wu8Mg3dWTIzAjTGU26mQGm4AKjQ/" target="_blank" class="custom-icon-sm">{{< icon "toutiao" >}}</a>
    <a href="https://www.xiaohongshu.com/user/profile/5d423fc90000000016034bc6?xsec_token=YBvkMf6BM6shT8zJAPAaDS4TdQNUmu4WskjU5MrT_0mss%3D&xsec_source=app_share&xhsshare=WeixinSession&appuid=5d423fc90000000016034bc6&apptime=1741686168&share_id=5759c5c385644ebf8cf03fea99c2e53e&share_channel=wechat/" target="_blank" class="custom-icon-sm">{{< icon "redbook" >}}</a>
    <a href="https://zhihu.com/people/nscm/" target="_blank" class="custom-icon-sm">{{< icon "zhihu" >}}</a>
    <a href="https://m.weibo.cn/u/6178605197/" target="_blank" class="custom-icon-sm">{{< icon "xinlangweibo" >}}</a>
    <a href="#" target="_blank" class="custom-icon-sm">{{< icon "email" >}}</a>
  </div>

  </div>
</div>

<!-- 在這裡添加JavaScript代碼，確保所有DOM元素都已加載 -->
<script>
  emailjs.init("vdP5Xufc7ya4tda5p"); // 替換為你的 Public Key
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log("發送數據:", data); // 調試用
    
    // 顯示進度提示框
    document.getElementById('progress-modal').style.display = 'flex';
    
    emailjs.send("service_30kcso8", "template_0lan0r9", data) // 業務ID service 和模板ID template
      .then(() => {
        console.log('發送成功！');
        // 隱藏進度提示框
        document.getElementById('progress-modal').style.display = 'none';
        // 顯示成功提示框
        document.getElementById('success-modal').style.display = 'flex';
      }, (error) => {
        console.log('發送失敗...', error);
        // 隱藏進度提示框
        document.getElementById('progress-modal').style.display = 'none';
        // 設置錯誤信息並顯示錯誤提示框
        document.getElementById('error-message').textContent = '發送失敗：' + (error.text || '未知錯誤');
        document.getElementById('error-modal').style.display = 'flex';
      });
  });
  
  // 成功提示框關閉處理
  document.getElementById('success-modal').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    // 重置表單
    document.getElementById('contact-form').reset();
  });
  
  // 成功提示框確定按鈕處理
  document.getElementById('success-confirm-btn').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    // 重置表單
    document.getElementById('contact-form').reset();
  });
  
  // 失敗提示框關閉處理
  document.getElementById('error-modal').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // 失敗提示框確定按鈕處理
  document.getElementById('error-confirm-btn').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // 防止點擊內容內部時關閉模態框
  document.querySelectorAll('#success-modal > div, #error-modal > div').forEach(function(modalContent) {
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
</script>

<br>

### 深圳炎黃健康科技有限公司

TEL1: +86 177-2251-0596 （中國大陸）<br>
TEL2: +852 5941-9145 （中國香港）