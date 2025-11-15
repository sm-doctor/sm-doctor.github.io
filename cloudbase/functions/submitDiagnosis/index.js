// 腾讯CloudBase云函数 - DeepSeek API集成和邮件发送
// CloudBase云函数版本

const nodemailer = require('nodemailer');

// CloudBase云函数主入口
exports.main = async (event, context) => {
  try {
    // 从event中获取请求数据
    const { symptom, email } = event.body ? JSON.parse(event.body) : event;

    // 输入验证
    if (!symptom || !email) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({ message: '缺少必要参数' })
      };
    }

    // 调用DeepSeek API获取诊断信息
    const diagnosisResult = await getDeepSeekDiagnosis(symptom);

    // 发送邮件到用户邮箱
    await sendEmailToUser(email, symptom, diagnosisResult);

    // 发送邮件到管理员邮箱
    await sendEmailToAdmin(email, symptom, diagnosisResult);

    // 返回成功响应
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ message: '处理成功，请检查邮箱' })
    };
  } catch (error) {
    console.error('处理请求时出错:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ message: '处理失败，请稍后重试' })
    };
  }
};

// 调用DeepSeek API获取诊断信息
async function getDeepSeekDiagnosis(symptom) {
  // 从环境变量获取API密钥
  const deepSeekApiKey = process.env.DEEPSEEK_API_KEY || 'sk-c9028e7fcd31411e8a6e3233119ad7bb';
  const deepSeekUrl = 'https://api.deepseek.com/chat/completions';

  // 构建请求体
  const requestBody = {
    model: 'deepseek-chat',
    messages: [
      {
        role: 'system',
        content: '你是一位专业的中医健康顾问，请根据用户描述的病症提供专业、详细且有帮助的中医诊断建议。请包含病症分析、可能的中医辨证、调理建议和注意事项等内容。回答语言与用户保持一致。'
      },
      {
        role: 'user',
        content: `请对以下病症提供中医诊断和建议：\n${symptom}`
      }
    ],
    temperature: 0.7,
    max_tokens: 1000
  };

  // 发送请求到DeepSeek API
  // CloudBase环境中需要使用node-fetch或axios
  // 这里使用fetch API（CloudBase Node.js 14+环境支持）
  const fetch = require('node-fetch');
  const response = await fetch(deepSeekUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${deepSeekApiKey}`
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    throw new Error(`DeepSeek API错误: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// 创建邮件传输器
function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'www.sm.doctor@icloud.com',
      pass: process.env.EMAIL_PASS || 'zusr-vpyq-sizt-whlk'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

// 发送邮件给用户
async function sendEmailToUser(userEmail, symptom, diagnosis) {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: 'www.sm.doctor@icloud.com',
    to: userEmail,
    subject: '您的健康诊询结果',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>健康诊询结果</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #296a29; }
          .symptom { background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .diagnosis { background-color: #f0f8f0; padding: 20px; border-radius: 5px; margin: 15px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>您的健康诊询结果</h2>
          <p>尊敬的用户：</p>
          <p>以下是您提交的健康咨询结果：</p>
          
          <div class="symptom">
            <strong>您的病症描述：</strong>
            <p>${symptom}</p>
          </div>
          
          <div class="diagnosis">
            <strong>中医诊断建议：</strong>
            <p>${diagnosis}</p>
          </div>
          
          <p>请注意：以上信息仅供参考，不能替代专业医师的诊断和治疗。如有严重不适，请及时就医。</p>
          
          <div class="footer">
            <p>此邮件由系统自动发送，请勿回复。</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
}

// 发送邮件给管理员
async function sendEmailToAdmin(userEmail, symptom, diagnosis) {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: 'www.sm.doctor@icloud.com',
    to: 'bluey@139.com',
    subject: '新的健康诊询请求',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>新的健康诊询请求</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #296a29; }
          .info-box { background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { margin-top: 30px; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>新的健康诊询请求</h2>
          <p>有新的用户提交了健康诊询请求：</p>
          
          <div class="info-box">
            <p><strong>用户邮箱：</strong> ${userEmail}</p>
            <p><strong>病症描述：</strong> ${symptom}</p>
          </div>
          
          <div class="info-box">
            <p><strong>DeepSeek诊断结果：</strong></p>
            <p>${diagnosis}</p>
          </div>
          
          <div class="footer">
            <p>此邮件由系统自动发送，用于管理员监控。</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
}