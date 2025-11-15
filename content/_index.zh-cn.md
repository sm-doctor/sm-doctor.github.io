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
    <h1 style="text-align: center; font-weight: bold; font-size: clamp(18px, 3vw, 22px); margin: 5px 0 0; overflow: hidden; line-height: 1.2;">
      一站式健康终极解决方案
    </h1>
  </div>
</header>

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
      <span style="color: #818692; font-size: 16px; margin-right: 10px;">
      炎黄健康AI
      </span>
      <button id="show-diagnosis-form" style="background-color: #000000; color: white; border: none; border-radius: 30px; padding: 10px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; margin-bottom: 10px; margin-right: 15px; transition: background-color 0.3s ease;">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.3125 0.981648C8.66767 1.05456 8.97902 1.20565 9.2627 1.4338C9.48724 1.61444 9.73029 1.85939 9.97949 2.1086L14.707 6.83614L13.293 8.2502L9 3.95723V15.0432H7V3.95723L2.70703 8.2502L1.29297 6.83614L6.02051 2.1086C6.26971 1.85939 6.51277 1.61444 6.7373 1.4338C6.97662 1.24132 7.28445 1.04548 7.6875 0.981648C7.8973 0.948471 8.1031 0.956625 8.3125 0.981648Z" fill="currentColor"></path></svg>
      </button>
    </div>
  </div>
</div>

<!-- 常见病症列表 -->
<div style="display: flex; justify-content: center; width: 100%;">
<div style="width: 100%; max-width: 600px; text-align: justify; text-align-last: left; font-size: calc(14px - 2px); line-height: 180%;">
<span style="color: #818692; font-size: 13px;">常见病症：</span><a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">高血压</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">糖尿病</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">颈椎病</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">腰椎间盘突出</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">胃炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">过敏性鼻炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">支气管炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">肩周炎</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">高脂血症</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">乏力</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">嗜睡</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">抑郁低落</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">失眠</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">肩颈腰背酸痛</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">过敏症</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">头晕头痛</a>
<a href="javascript:void(0)" style="border: 1px solid #818692; border-radius: 5px; padding: 0 5px; color: #818692; text-decoration: none; display: inline-block; margin: 1.5px 1.5px;" onclick="document.getElementById('symptom-input').value=this.textContent;">更多...</a>
</div>
</div>

<!-- 邮箱输入模态框 -->
<div id="email-modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.8); overflow: hidden; padding: 0; box-sizing: border-box; justify-content: center; align-items: center;">
  <div style="width: 500px; max-width: 95%; background-color: white; border-radius: 8px; padding: 30px; box-sizing: border-box;">
    <button type="button" onclick="document.getElementById('email-modal').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 24px; cursor: pointer; color: #888;">×</button>
    <h2 style="text-align: center; color: #333; margin-bottom: 20px;">输入您的邮箱地址</h2>
    <form id="email-form">
      <input type="hidden" id="symptom-data" value="">
      <input type="email" id="user-email" placeholder="请输入您的邮箱地址" required style="width: 100%; padding: 12px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; box-sizing: border-box;">
      <button type="submit" style="width: 100%; padding: 12px; background-color: #000000; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; transition: background-color 0.3s;">提交</button>
    </form>
  </div>
</div>

<!-- 进度提示框 -->
<div id="progress-modal" style="display: none; position: fixed; z-index: 1001; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.8); justify-content: center; align-items: center; overflow: hidden; padding: 0; box-sizing: border-box;">
  <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <div style="margin-bottom: 20px;">
      <!-- 简单的加载动画 -->
      <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #818692; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
    </div>
    <p style="font-size: 16px; color: #333; margin: 0;">正在处理，请稍候...</p>
  </div>
</div>

<!-- 成功提示框 -->
<div id="success-modal" style="display: none; position: fixed; z-index: 1001; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.8); justify-content: center; align-items: center; overflow: hidden; padding: 0; box-sizing: border-box;">
  <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <div style="margin-bottom: 20px; font-size: 40px; color: #4CAF50;">✓</div>
    <p style="font-size: 16px; color: #333; margin: 0 0 20px 0;">稍后检查邮箱获取诊询信息</p>
    <button id="success-confirm-btn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">确定</button>
  </div>
</div>

<!-- 失败提示框 -->
<div id="error-modal" style="display: none; position: fixed; z-index: 1001; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.8); justify-content: center; align-items: center; overflow: hidden; padding: 0; box-sizing: border-box;">
  <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%;">
    <div style="margin-bottom: 20px; font-size: 40px; color: #F44336;">✗</div>
    <p id="error-message" style="font-size: 16px; color: #333;">处理失败，请稍后重试</p>
  </div>
</div>

<!-- 加载动画样式 -->
<style>
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

<script type="text/javascript">
  // 页面加载完成后初始化
  document.addEventListener('DOMContentLoaded', function() {
    // 显示邮箱模态框的按钮处理
    document.getElementById('show-diagnosis-form').addEventListener('click', function() {
      const symptom = document.getElementById('symptom-input').value.trim();
      if (!symptom) {
        alert('请输入病症名称或描述');
        return;
      }
      
      // 存储病症信息到隐藏字段
      document.getElementById('symptom-data').value = symptom;
      // 显示邮箱输入模态框
      document.getElementById('email-modal').style.display = 'flex';
    });
    
    // 邮箱表单提交处理
    document.getElementById('email-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const symptom = document.getElementById('symptom-data').value;
      const email = document.getElementById('user-email').value;
      
      // 显示进度提示框
      document.getElementById('progress-modal').style.display = 'flex';
      
      // 确定API端点（本地开发、生产环境或CloudBase）
      // 配置区域 - 请根据部署环境修改以下配置
      const useCloudBase = true; // 设置为true使用CloudBase，false使用Vercel
      const cloudBaseEnvId = 'your-env-id'; // 替换为你的CloudBase环境ID
      
      let apiEndpoint;
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // 本地开发环境
        apiEndpoint = 'http://localhost:3000/api/submitDiagnosis';
      } else if (useCloudBase) {
        // CloudBase生产环境
        apiEndpoint = `https://${cloudBaseEnvId}.service.tcloudbase.com/submitDiagnosis`;
      } else {
        // Vercel生产环境
        apiEndpoint = '/api/submitDiagnosis';
      }
      
      // 发送数据到Vercel云函数或本地测试服务器
      fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          symptom: symptom,
          email: email
        }),
        // 添加超时设置
        signal: AbortSignal.timeout(15000) // 15秒超时
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`网络响应异常: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // 隐藏进度提示框
        document.getElementById('progress-modal').style.display = 'none';
        
        // 显示成功提示框
        document.getElementById('success-modal').style.display = 'flex';
        
        // 重置表单
        document.getElementById('email-form').reset();
        document.getElementById('email-modal').style.display = 'none';
        document.getElementById('symptom-input').value = '';
      })
      .catch(error => {
        console.error('错误:', error);
        // 隐藏进度提示框
        document.getElementById('progress-modal').style.display = 'none';
        
        // 显示错误提示框
        document.getElementById('error-message').textContent = `处理失败: ${error.message}`;
        document.getElementById('error-modal').style.display = 'flex';
      });
    });
    
    // 成功提示框关闭处理
    document.getElementById('success-confirm-btn').addEventListener('click', function() {
      document.getElementById('success-modal').style.display = 'none';
    });
    
    // 失败提示框点击关闭处理
    document.getElementById('error-modal').addEventListener('click', function() {
      document.getElementById('error-modal').style.display = 'none';
    });
    
    // 邮箱模态框点击关闭处理
    document.getElementById('email-modal').addEventListener('click', function(event) {
      if (event.target === this) {
        this.style.display = 'none';
      }
    });
    
    // 防止点击内部内容时关闭提示框
    document.querySelectorAll('#success-modal > div, #error-modal > div, #email-modal > div').forEach(function(modalContent) {
      modalContent.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    });
  });
</script>



<div style="width: 100%; text-align: left; margin-top: 50px;">{{< list cardView=true limit=3 where="Type" value="sample" >}}</div>