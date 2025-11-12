---
title: "人类健康计划"
description: ""
---


<!-- LOGO与HEADING 中文 -->
<div style="display: flex; justify-content: center; align-items: center; flex-wrap: nowrap; width: 100%; padding: 0;">
  <div style="width: 100%; max-width: 600px; min-width: 300px; display: flex; justify-content: center; align-items: center;">
    <div style="color: inherit; font-size: clamp(24px, 5vw, 36px); display: flex; align-items: center; justify-content: center;">
      {{< icon "logo" >}}
    </div>
    <div style="text-align: left; font-weight: bold; font-size: clamp(15px, 3vw, 22px); display: flex; align-items: center; margin-left: 5px; overflow: hidden; white-space: nowrap;">
      系统疗法：医养一体化健康解决方案
    </div>
  </div>
</div>

<!-- 诊询文本框 -->
<div style="display: flex; justify-content: center; width: 100%; padding: 0;">
  <div class="zhenxun zhenxun-custom" style="width: 100%; max-width: 600px; min-width: 300px; display: flex; flex-direction: column; align-items: stretch; box-sizing: border-box;">
    <textarea id="symptom-input" placeholder="输入病症名称或描述！" class="zhenxun-input" style="background-color: transparent; color: currentColor; border: 0; border-radius: 5px; padding: 18px; min-height: 100px; font-size: 16px; margin-bottom: 10px; resize: none; width: 100%; box-sizing: border-box; outline: none !important; overflow: hidden;"></textarea>
    <script>
    // 自动调整textarea高度
    function autoResizeTextarea(textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = (textarea.scrollHeight) + 'px';
    }
    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
      const textarea = document.getElementById('symptom-input');
      if (textarea) {
        // 初始设置高度
        autoResizeTextarea(textarea);      
        // 输入时自动调整高度
        textarea.addEventListener('input', function() {
          autoResizeTextarea(this);
        });
        // 窗口大小变化时重新调整
        window.addEventListener('resize', function() {
          autoResizeTextarea(textarea);
        });
      }
    });
    </script>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <button style="background-color: transparent; border: 1.5px solid #8e9692; border-radius: 50px; padding: 10px; cursor: pointer; margin-left: 15px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.035 15.956a1.29 1.29 0 0 0 1.821-.004l6.911-6.911a3.15 3.15 0 0 0 0-4.457l-.034-.034a3.15 3.15 0 0 0-4.456 0l-7.235 7.234a5.031 5.031 0 0 0 7.115 7.115l6.577-6.577a1.035 1.035 0 0 1 1.463 1.464l-6.576 6.577A7.1 7.1 0 0 1 4.579 10.32l7.235-7.234a5.22 5.22 0 0 1 7.382 0l.034.034a5.22 5.22 0 0 1 0 7.383l-6.91 6.91a3.36 3.36 0 0 1-4.741.012l-.006-.005-.012-.011a3.346 3.346 0 0 1 0-4.732L12.76 7.48a1.035 1.035 0 0 1 1.464 1.463l-5.198 5.198a1.277 1.277 0 0 0 0 1.805z" clip-rule="evenodd" fill="currentColor"></path></svg>
      </button>
      <!-- 首页诊询箭头按钮 -->
      <style>
        #show-diagnosis-form:hover {
          background-color: #296a29 !important;
        }
        #show-diagnosis-form:active {
          background-color: #1a3b1a !important;
        }
      </style>
      <span style="color: #818692; font-size: 15px; margin-right: 10px;">一站式健康终极解决方案</span>
      <button id="show-diagnosis-form" style="background-color: #000000; color: white; border: none; border-radius: 30px; padding: 10px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; margin-bottom: 10px; margin-right: 15px; transition: background-color 0.3s ease;">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.3125 0.981648C8.66767 1.05456 8.97902 1.20565 9.2627 1.4338C9.48724 1.61444 9.73029 1.85939 9.97949 2.1086L14.707 6.83614L13.293 8.2502L9 3.95723V15.0432H7V3.95723L2.70703 8.2502L1.29297 6.83614L6.02051 2.1086C6.26971 1.85939 6.51277 1.61444 6.7373 1.4338C6.97662 1.24132 7.28445 1.04548 7.6875 0.981648C7.8973 0.948471 8.1031 0.956625 8.3125 0.981648Z" fill="currentColor"></path></svg>
      </button>
    </div>
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



<div style="width: 100%; text-align: left; margin-top: 50px;">{{< list cardView=true limit=3 where="Type" value="sample" >}}</div>