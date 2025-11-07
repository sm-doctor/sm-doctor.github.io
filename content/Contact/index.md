---
title: "Contact"
layout: "simple"
showHero: true
---

<div class="custom-contact-parent">
  <div class="custom-contact-child1">
  <div style="color: inherit; font-size: 22px; margin-top: 35px;">Send an email to us</div>
  <script src="/js/email.min.js"></script>
   <form class="custom-formcontact-container" id="contact-form">
       <input class="custom-formcontact-input" type="text" id="name" placeholder="Name" required><p>
       <input class="custom-formcontact-input" type="email" id="email" placeholder="Email" required><p>
       <textarea class="custom-formcontact-textarea" id="message" placeholder="Message" required></textarea><p>
       <button type="submit" class="custom-formcontact-button">Send</button>
   </form>
  </div>

  <div class="custom-contact-child2"></div>
  
  <!-- Progress Modal -->
  <div id="progress-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="margin-bottom: 20px;">
              <!-- Simple loading animation -->
              <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #818692; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
          </div>
          <p style="font-size: 16px; color: #333; margin: 0;">Submitting, please wait...</p>
      </div>
  </div>
  
  <!-- Success Modal -->
  <div id="success-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%; min-height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div style="margin-bottom: 20px; font-size: 40px; color: #4CAF50;">✓</div>
          <p style="font-size: 16px; color: #333; margin: 0 0 20px 0;">Sent successfully!</p>
          <button id="success-confirm-btn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Confirm</button>
      </div>
  </div>
  
  <!-- Error Modal -->
  <div id="error-modal" style="display: none; position: fixed; z-index: 1002; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); justify-content: center; align-items: center;">
      <div style="background-color: white; padding: 40px; border-radius: 8px; text-align: center; width: 300px; max-width: 90%;">
          <div style="margin-bottom: 20px; font-size: 40px; color: #F44336;">✗</div>
          <div style="min-height: 50px; padding: 10px; background-color: #f9f9f9; border-radius: 4px; margin-bottom: 10px;">
              <p id="error-message" style="font-size: 16px; color: #333; margin: 0;">Sending failed:</p>
          </div>
          <button id="error-confirm-btn" style="padding: 10px 20px; background-color: #F44336; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Confirm</button>
      </div>
  </div>
  
  <!-- Loading Animation Style -->
  <style>
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
  </style>
  
  <div class="custom-contact-child3">
   <div style="color: inherit; font-size: 22px; margin-top: 35px;">Official WeChat account</div>
   <img style="margin-top: 8px; width: 275px;" src="/images/weixin.jpg">
   
  <div style="margin-top:0px; white-space: nowrap; text-align: center;">
  <a href="#" class="custom-icon-sm">{{< icon "weixin" >}}</a>
  <a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAg0e3TfgJwAzj2dS6wu8Mg3dWTIzAjTGU26mQGm4AKjQ/" target="_blank" class="custom-icon-sm">{{< icon "toutiao" >}}</a>
  <a href="https://www.xiaohongshu.com/user/profile/5d423fc90000000016034bc6" target="_blank" class="custom-icon-sm">{{< icon "redbook" >}}</a>
  <a href="https://zhihu.com/people/nscm/" target="_blank" class="custom-icon-sm">{{< icon "zhihu" >}}</a>
  <a href="https://m.weibo.cn/u/6178605197/" target="_blank" class="custom-icon-sm">{{< icon "xinlangweibo" >}}</a>
  <a href="mailto:ohulab.org@ohulab.org" target="_blank" class="custom-icon-sm">{{< icon "email" >}}</a>
  </div>
  
  </div>
</div>

<!-- JavaScript code placed at the bottom to ensure DOM is loaded -->
<script>
  emailjs.init("vdP5Xufc7ya4tda5p"); // Replace with your Public Key
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log("Send data:", data); // For debugging
    
    // Show progress modal
    document.getElementById('progress-modal').style.display = 'flex';
    
    emailjs.send("service_30kcso8", "template_0lan0r9", data) // service ID and template ID
      .then(() => {
        console.log('Sent successfully!');
        // Hide progress modal
        document.getElementById('progress-modal').style.display = 'none';
        // Show success modal
        document.getElementById('success-modal').style.display = 'flex';
      }, (error) => {
        console.log('Sending failed...', error);
        // Hide progress modal
        document.getElementById('progress-modal').style.display = 'none';
        // Set error message and show error modal
        document.getElementById('error-message').textContent = 'Sending failed: ' + (error.text || 'Unknown error');
        document.getElementById('error-modal').style.display = 'flex';
      });
  });
  
  // Success modal close handling
  document.getElementById('success-modal').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    // Reset form
    document.getElementById('contact-form').reset();
  });
  
  // Success modal confirm button handling
  document.getElementById('success-confirm-btn').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    // Reset form
    document.getElementById('contact-form').reset();
  });
  
  // Error modal close handling
  document.getElementById('error-modal').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // Error modal confirm button handling
  document.getElementById('error-confirm-btn').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // Prevent closing modal when clicking inside content
  document.querySelectorAll('#success-modal > div, #error-modal > div').forEach(function(modalContent) {
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
</script>


<br><br>