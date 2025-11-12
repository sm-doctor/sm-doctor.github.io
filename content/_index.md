---
title: "Human Health Initiative"
description: ""
---



<!-- LOGO -->
<div style="display: block; color: inherit; font-size: clamp(70px, 15vw, 85px); margin-bottom: -15px; ">{{< icon "logo" >}}</div>

<!-- 标题 -->
<div style="display: flex; justify-content: center; align-items: center;">
  <div id="heading-container" style="width: 350px; text-align: justify; text-align-last: justify; -moz-text-align-last: justify; text-justify: inter-ideograph; max-width: 100%; box-sizing: border-box;">
   <span style="font-weight: bold; font-size: clamp(18px, 5vw, 26.5px); display: block; text-align: center; text-align-last: justify; line-height: 130%;">Systemic Medicine Doctor</span>
   <span style="font-size: clamp(12px, 3vw, 16px); display: block; text-align: center; text-align-last: justify; line-height: 130%; white-space: nowrap;">Theory and Application of Systemic Medicine</span>
  </div>
</div>
<style>
  /* 移动端媒体查询 */
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


<!-- 在线病症诊断询框 -->
<div style="display: flex; justify-content: center; width: 100%;">
  <div class="zhenxun" style="width: 100%; max-width: 600px; min-width: 300px;">
   <input type="text" id="symptom-input" placeholder="Enter symptom name!" class="zhenxun-input">
   <button id="show-diagnosis-form" class="zhenxun-button">Consult</button>
  </div>
</div>
<!-- 常见病症列表 -->
<div style="display: flex; justify-content: center; width: 100%;">
<div style="width: 100%; max-width: 600px; text-align: justify; text-align-last: left; font-size: calc(14px - 2px); line-height: 180%;">
<span style="color: #818692; font-size: 13px; font-weight: bold;">Common&nbsp;Symptoms:&nbsp;</span><a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Flu</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Cold</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; 
text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').
value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Hypertension</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Fever</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Diabetes</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Asthma</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Arthritis</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Migraine</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Allergy</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Insomnia</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Fatigue</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Dizziness</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Lethargy</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Irritability</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">Malaise</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=''; document.getElementById('diagnosis-modal').style.display='block';">More...</a>
</div>
</div>


<!-- 诊询信息填写表单模态框 -->
<div id="diagnosis-modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(6, 9, 7, 0.6); overflow: auto; padding: 20px; box-sizing: border-box;">
    <!-- 进度提示框 -->
    <div id="progress-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
        <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div style="margin-bottom: 20px;">
                <!-- 简单的加载动画 -->
                <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #818692; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            </div>
            <p style="font-size: 16px; color: #333; margin: 0;">Submitting, please wait...</p>
        </div>
    </div>
    
<!-- 成功提示框 -->
<div id="success-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
        <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div style="margin-bottom: 20px; font-size: 40px; color: #4CAF50;">✓</div>
            <p style="font-size: 16px; color: #333; margin: 0 0 20px 0;">Sent successfully!</p>
            <button id="success-confirm-btn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Confirm</button>
        </div>
    </div>
    
<!-- 失败提示框 -->
<div id="error-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
        <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%;">
            <div style="margin-bottom: 20px; font-size: 40px; color: #F44336;">✗</div>
            <p id="error-message" style="font-size: 16px; color: #333;">Failed to send:</p>
        </div>
    </div>
    
  <!-- 加载动画样式 -->
  <style>
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  </style>
  
  <!-- 关闭按钮 - 定位在整个页面的右上角 -->
  <button type="button" onclick="document.getElementById('diagnosis-modal').style.display='none'" style="position: absolute; top: 20px; right: 20px; width: 60px; height: 60px; background-color: rgba(0,0,0,0.5); color: white; border: 0; border-radius: 0; cursor: pointer; font-size: 30px; line-height: 60px; text-align: center; z-index: 1001;">×</button>
  <div style="width: 500px; max-width: 95%; margin: 100px auto; position: relative;">
    <form id="diagnosis-form" class="custom-formcontact-container">
  <!-- 隐藏的时间字段 -->
  <input type="hidden" name="time" value="Mar 10 2025 08:46">
 <!-- 病症名称字段 -->
  <input class="custom-formcontact-input" type="text" id="diagnosis-symptom" name="title" placeholder="Symptom Name" required><br>
  <!-- 症状详述文本框 -->
  <textarea class="custom-formcontact-textarea" style="margin: 6px auto 0px;" id="symptom-details" name="message" placeholder="Detailed Symptom Description"></textarea><br>
  <!-- 用户名字段 -->
  <input class="custom-formcontact-input" style="margin: 6px auto;" type="text" id="name" name="name" placeholder="Your Name*" required><br>
  <!-- 电子邮件字段 -->
  <input class="custom-formcontact-input" style="margin: 6px auto;" type="email" id="email" name="email" placeholder="Email Address*" required><br>
  <button type="submit" class="zhenxun-button" style="width: 100%; margin: 10px auto; height: 43px;">Submit</button>
  </form>
</div>
</div>


<!-- 引入本地emailjs库 -->
<script src="/js/email.min.js"></script>

<script type="text/javascript">
    window.onload = function() {
        // 初始化emailjs
        emailjs.init("W0m4iaMF_-hyk9hqB"); // 使用新的公钥
        
        // 诊询表单提交处理
        document.getElementById('diagnosis-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // 收集表单数据
            const data = {
                name: document.getElementById("name").value,
                title: document.getElementById("diagnosis-symptom").value,
                message: document.getElementById("symptom-details").value,
                email: document.getElementById("email").value,
                time: document.querySelector("input[name='time']").value
            };
            
            console.log("Sending data:", data);
            
            // 显示进度提示框 - 设置为flex确保正确居中
            document.getElementById('progress-modal').style.display = 'flex';
            
            // 使用emailjs发送表单数据
            emailjs.send("service_icloud", "zhenxun_template", data) // 使用新的service ID和template ID
                .then(() => {
                    console.log('Sent successfully!');
                    // Hide progress modal
                    document.getElementById('progress-modal').style.display = 'none';
                    // Show success modal
                    document.getElementById('success-modal').style.display = 'flex';
                }, (error) => {
                    console.log('Failed to send...', error);
                    // Hide progress modal
                    document.getElementById('progress-modal').style.display = 'none';
                    // Show error modal and set error message
                    document.getElementById('error-message').textContent = `Failed to send: ${error.text}`;
                    document.getElementById('error-modal').style.display = 'flex';
                });
        }); // Close submit event listener
        
        // 成功提示框关闭处理
        document.getElementById('success-modal').addEventListener('click', function() {
            document.getElementById('success-modal').style.display = 'none';
            // Close modal and reset form
            document.getElementById('diagnosis-modal').style.display = 'none';
            document.getElementById('diagnosis-form').reset();
        });
        
        // 成功提示框确定按钮处理
        document.getElementById('success-confirm-btn').addEventListener('click', function() {
            document.getElementById('success-modal').style.display = 'none';
            // Close modal and reset form
            document.getElementById('diagnosis-modal').style.display = 'none';
            document.getElementById('diagnosis-form').reset();
        });
        
        // 失败提示框关闭处理
        document.getElementById('error-modal').addEventListener('click', function() {
            document.getElementById('error-modal').style.display = 'none';
        });
        
        // 防止点击内容内部时关闭模态框
        document.querySelectorAll('#success-modal > div, #error-modal > div').forEach(function(modalContent) {
            modalContent.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
        
        // 显示诊询表单按钮处理
        document.getElementById('show-diagnosis-form').addEventListener('click', function() {
            const symptom = document.getElementById('symptom-input').value;
            // If input is empty, set default value to "Symptom Name"
            document.getElementById('diagnosis-symptom').value = symptom || 'Symptom Name';
            document.getElementById('diagnosis-modal').style.display = 'block';
        });
        
        // 点击模态框外部关闭
        document.getElementById('diagnosis-modal').addEventListener('click', function(event) {
            // If clicking on the modal itself (background) and not its children
            if (event.target === this) {
                this.style.display = 'none';
            }
        });
    };
</script>