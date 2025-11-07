---
title: "人類健康計劃"
description: ""
---



<!-- LOGO -->
<div style="display: block; color: inherit; font-size: clamp(70px, 15vw, 85px); margin-bottom: -10px; ">{{< icon "logo" >}}</div>

<!-- HEADING 中英文 -->
<div style="display: flex; justify-content: center; align-items: center;">
  <div id="heading-container" style="width: 350px; text-align: justify; text-align-last: justify; -moz-text-align-last: justify; text-justify: inter-ideograph; max-width: 100%; box-sizing: border-box;">
   <span style="font-weight: bold; font-size: clamp(18px, 5vw, 26.5px); display: block; text-align: center; text-align-last: justify; line-height: 120%;">Systemic Medicine Doctor</span>
   <span style="font-size: clamp(25px, 5vw, 31px); display: block; text-align: center; text-align-last: justify; line-height: 120%; white-space: nowrap;">系統療法的理論與應用</span>
  </div>
</div>
<style>
  /* 針對移動設備的媒體查詢 */
  @media (max-width: 480px) {
    #heading-container {
      width: 270px !important;
      text-align: justify !important;
      text-align-last: justify !important;
    }
    #heading-container span {
      display: block !important;
      text-align: center !important;
      text-align-last: justify !important;
    }
    /* 减小Consult按钮文字大小并增加上下padding */
    .zhenxun-button {
      font-size: calc(var(--btn-font-size, 16px) - 2px) !important;
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }
  }
</style>


<!-- 在線病症診斷詢框 -->
<div style="display: flex; justify-content: center; width: 100%;">
  <div class="zhenxun" style="width: 100%; max-width: 600px; min-width: 300px;">
   <input type="text" id="symptom-input" placeholder="輸入病症名稱或描述！" class="zhenxun-input">
   <button id="show-diagnosis-form" class="zhenxun-button">診詢</button>
  </div>
</div>
<!-- 常見病症列表 -->
<div style="display: flex; justify-content: center; width: 100%;">
<div style="width: 100%; max-width: 600px; text-align: justify; text-align-last: left; font-size: calc(14px - 2px); line-height: 180%;">
<span style="color: #818692; font-size: 13px;">常見病症：</span><a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">高血壓</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">糖尿病</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">頸椎病</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">腰椎間盤突出</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">胃炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">過敏性鼻炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">支氣管炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">肩周炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">高脂血症</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">乏力</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">嗜睡</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">抑鬱低落</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">失眠</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">肩頸腰背酸痛</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">過敏症</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">頭暈頭痛</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: 
inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').
style.display='block';">更多...</a>
</div>
</div>


<!-- 診詢信息填寫表單模態框 -->
<div id="diagnosis-modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(6, 9, 7, 0.6); overflow: auto; padding: 20px; box-sizing: border-box;">
    <!-- 進度提示框 -->
    <div id="progress-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
        <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div style="margin-bottom: 20px;">
                <!-- 簡單的加載動畫 -->
                <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #818692; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            </div>
            <p style="font-size: 16px; color: #333; margin: 0;">正在提交，請稍候...</p>
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
            <p id="error-message" style="font-size: 16px; color: #333;">發送失敗：</p>
        </div>
    </div>
    
  <!-- 加載動畫樣式 -->
  <style>
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  </style>
  
  <!-- 關閉按鈕 - 位於整個頁面右上角 -->
  <button type="button" onclick="document.getElementById('diagnosis-modal').style.display='none'" style="position: absolute; top: 20px; right: 20px; width: 60px; height: 60px; background-color: rgba(0,0,0,0.5); color: white; border: 0; border-radius: 0; cursor: pointer; font-size: 30px; line-height: 60px; text-align: center; z-index: 1001;">×</button>
  <div style="width: 500px; max-width: 95%; margin: 100px auto; position: relative;">
    <form id="diagnosis-form" class="custom-formcontact-container">
  <!-- 隱藏時間字段 -->
  <input type="hidden" name="time" value="Mar 10 2025 08:46">
 <!-- 病症名字段 -->
  <input class="custom-formcontact-input" type="text" id="diagnosis-symptom" name="title" placeholder="病症名稱" required><br>
  <!-- 症狀詳述文本域 -->
  <textarea class="custom-formcontact-textarea" style="margin: 6px auto 0px;" id="symptom-details" name="message" placeholder="症狀詳細描述"></textarea><br>
  <!-- 名稱字段 -->
  <input class="custom-formcontact-input" style="margin: 6px auto;" type="text" id="name" name="name" placeholder="用戶名*" required><br>
  <!-- 郵箱字段 -->
  <input class="custom-formcontact-input" style="margin: 6px auto;" type="email" id="email" name="email" placeholder="電子郵件*" required><br>
  <button type="submit" class="zhenxun-button" style="width: 100%; margin: 10px auto; height: 43px;">提交</button>
  </form>
</div>
</div>


<!-- 引入本地emailjs库 -->
<script src="/js/email.min.js"></script>

<script type="text/javascript">
    window.onload = function() {
        // 初始化emailjs
        emailjs.init("W0m4iaMF_-hyk9hqB"); // 使用新的公钥
        
        // 診詢表單提交處理
        document.getElementById('diagnosis-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 收集表單數據
            const data = {
                name: document.getElementById("name").value,
                title: document.getElementById("diagnosis-symptom").value,
                message: document.getElementById("symptom-details").value,
                email: document.getElementById("email").value,
                time: document.querySelector("input[name='time']").value
            };
            
            console.log("發送數據:", data);
            
            // 顯示進度提示框 - 設為flex以確保正確的居中布局
            document.getElementById('progress-modal').style.display = 'flex';
            
            // 使用emailjs發送表單數據
            emailjs.send("service_icloud", "zhenxun_template", data) // 使用新的service ID和template ID
                .then(() => {
                    console.log('發送成功!');
                    document.getElementById('progress-modal').style.display = 'none';
                    document.getElementById('success-modal').style.display = 'flex';
                }, (error) => {
                    console.log('發送失敗...', error);
                    document.getElementById('progress-modal').style.display = 'none';
                    document.getElementById('error-message').textContent = `發送失敗: ${error.text}`;
                    document.getElementById('error-modal').style.display = 'flex';
                });
        }); // 關閉submit事件監聽器
        
        // 成功提示框點擊關閉處理
        document.getElementById('success-modal').addEventListener('click', function() {
            document.getElementById('success-modal').style.display = 'none';
            // 關閉模態框並重置表單
            document.getElementById('diagnosis-modal').style.display = 'none';
            document.getElementById('diagnosis-form').reset();
        });
        
        // 成功提示框確定按鈕處理
        document.getElementById('success-confirm-btn').addEventListener('click', function() {
            document.getElementById('success-modal').style.display = 'none';
            // 關閉模態框並重置表單
            document.getElementById('diagnosis-modal').style.display = 'none';
            document.getElementById('diagnosis-form').reset();
        });
        
        // 失敗提示框點擊關閉處理
        document.getElementById('error-modal').addEventListener('click', function() {
            document.getElementById('error-modal').style.display = 'none';
        });
        
        // 防止點擊內部內容時關閉提示框
        document.querySelectorAll('#success-modal > div, #error-modal > div').forEach(function(modalContent) {
            modalContent.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
        
        // 顯示診詢表單的按鈕處理
        document.getElementById('show-diagnosis-form').addEventListener('click', function() {
            const symptom = document.getElementById('symptom-input').value;
            // 如果輸入框為空，設置默認值為"病症名稱"
            document.getElementById('diagnosis-symptom').value = symptom || '病症名稱';
            document.getElementById('diagnosis-modal').style.display = 'block';
        });
        
        // 點擊模態框空白處關閉模態框
        document.getElementById('diagnosis-modal').addEventListener('click', function(event) {
            // 如果點擊的是模態框本身（背景）而不是其子元素
            if (event.target === this) {
                this.style.display = 'none';
            }
        });
    };
</script>
