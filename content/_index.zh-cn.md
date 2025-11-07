---
title: "人类健康计划"
description: ""
---


<!-- LOGO -->
<div style="display: block; color: inherit; font-size: clamp(70px, 15vw, 85px); margin-bottom: -10px; ">{{< icon "logo" >}}</div>

<!-- HEADING 中英文 -->
<div style="display: flex; justify-content: center; align-items: center;">
  <div id="heading-container" style="width: 350px; text-align: justify; text-align-last: justify; -moz-text-align-last: justify; text-justify: inter-ideograph; max-width: 100%; box-sizing: border-box;">
   <span style="font-weight: bold; font-size: clamp(18px, 5vw, 26.5px); display: block; text-align: center; text-align-last: justify; line-height: 120%;">Systemic Medicine Doctor</span>
   <span style="font-size: clamp(25px, 5vw, 31px); display: block; text-align: center; text-align-last: justify; line-height: 120%;">系统疗法的理论与应用</span>
  </div>
</div>
<style>
  /* 针对移动设备的媒体查询 */
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
   <input type="text" id="symptom-input" placeholder="输入病症名称或描述！" class="zhenxun-input">
   <button id="show-diagnosis-form" class="zhenxun-button">诊询</button>
  </div>
</div>
<!-- 常见病症列表 -->
<div style="display: flex; justify-content: center; width: 100%;">
<div style="width: 100%; max-width: 600px; text-align: justify; text-align-last: left; font-size: calc(14px - 2px); line-height: 180%;">
<span style="color: #818692; font-size: 13px;">常见病症：</span><a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">高血压</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">糖尿病</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">颈椎病</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">腰椎间盘突出</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">胃炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">过敏性鼻炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">支气管炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">肩周炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">高脂血症</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">乏力</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">嗜睡</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">抑郁低落</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">失眠</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">肩颈腰背酸痛</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">过敏症</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').style.display='block';">头晕头痛</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: 
inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('diagnosis-symptom').value=this.textContent; document.getElementById('diagnosis-modal').
style.display='block';">更多...</a>
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
            <p style="font-size: 16px; color: #333; margin: 0;">正在提交，请稍候...</p>
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
            <p id="error-message" style="font-size: 16px; color: #333;">发送失败：</p>
        </div>
    </div>
    
  <!-- 加载动画样式 -->
  <style>
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  </style>
  
  <!-- 关闭按钮 - 位于整个页面右上角 -->
  <button type="button" onclick="document.getElementById('diagnosis-modal').style.display='none'" style="position: absolute; top: 20px; right: 20px; width: 60px; height: 60px; background-color: rgba(0,0,0,0.5); color: white; border: 0; border-radius: 0; cursor: pointer; font-size: 30px; line-height: 60px; text-align: center; z-index: 1001;">×</button>
  <div style="width: 500px; max-width: 95%; margin: 100px auto; position: relative;">
  <form id="diagnosis-form" class="custom-formcontact-container">
  <!-- 隐藏时间字段 -->
  <input type="hidden" name="time" value="Mar 10 2025 08:46">
 <!-- 病症名字段 -->
  <input class="custom-formcontact-input" type="text" id="diagnosis-symptom" name="title" placeholder="病症名称" required><br>
  <!-- 症状详述文本域 -->
  <textarea class="custom-formcontact-textarea" style="margin: 6px auto 0px;" id="symptom-details" name="message" placeholder="症状详细描述"></textarea><br>
  <!-- 名称字段 -->
  <input class="custom-formcontact-input" style="margin: 6px auto;" type="text" id="name" name="name" placeholder="用户名*" required><br>
  <!-- 邮箱字段 -->
  <input class="custom-formcontact-input" style="margin: 6px auto;" type="email" id="email" name="email" placeholder="电子邮件*" required><br>
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
            
            console.log("发送数据:", data);
            
            // 显示进度提示框 - 设为flex以确保正确的居中布局
            document.getElementById('progress-modal').style.display = 'flex';
            
            // 使用emailjs发送表单数据
            emailjs.send("service_icloud", "zhenxun_template", data) // 使用新的service ID和template ID
                .then(() => {
                    console.log('发送成功!');
                    // 隐藏进度提示框
                    document.getElementById('progress-modal').style.display = 'none';
                    // 显示成功提示框
                    document.getElementById('success-modal').style.display = 'flex';
                }, (error) => {
                    console.log('发送失败...', error);
                    // 隐藏进度提示框
                    document.getElementById('progress-modal').style.display = 'none';
                    // 显示错误提示框并设置错误信息
                    document.getElementById('error-message').textContent = `发送失败: ${error.text}`;
                    document.getElementById('error-modal').style.display = 'flex';
                });
        }); // 闭合submit事件监听器
        
        // 成功提示框点击关闭处理
        document.getElementById('success-modal').addEventListener('click', function() {
            document.getElementById('success-modal').style.display = 'none';
            // 关闭模态框并重置表单
            document.getElementById('diagnosis-modal').style.display = 'none';
            document.getElementById('diagnosis-form').reset();
        });
        
        // 成功提示框确定按钮处理
        document.getElementById('success-confirm-btn').addEventListener('click', function() {
            document.getElementById('success-modal').style.display = 'none';
            // 关闭模态框并重置表单
            document.getElementById('diagnosis-modal').style.display = 'none';
            document.getElementById('diagnosis-form').reset();
        });
        
        // 失败提示框点击关闭处理
        document.getElementById('error-modal').addEventListener('click', function() {
            document.getElementById('error-modal').style.display = 'none';
        });
        
        // 防止点击内部内容时关闭提示框
        document.querySelectorAll('#success-modal > div, #error-modal > div').forEach(function(modalContent) {
            modalContent.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
        
        // 显示诊询表单的按钮处理
        document.getElementById('show-diagnosis-form').addEventListener('click', function() {
            const symptom = document.getElementById('symptom-input').value;
            // 如果输入框为空，设置默认值为"病症名称"
            document.getElementById('diagnosis-symptom').value = symptom || '病症名称';
            document.getElementById('diagnosis-modal').style.display = 'block';
        });
        
        // 点击模态框空白处关闭模态框
        document.getElementById('diagnosis-modal').addEventListener('click', function(event) {
            // 如果点击的是模态框本身（背景）而不是其子元素
            if (event.target === this) {
                this.style.display = 'none';
            }
        });
    };
</script>
