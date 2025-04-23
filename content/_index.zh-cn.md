---
title: "人类健康计划"
description: ""
---

<div style="width: 100%; text-align: center; background-color: rgba(4, 18, 1, 0.4); padding: 1px; margin-bottom: 7px; border-radius: 20px; letter-spacing: 1.5px; color:inherit; line-height: 2; opacity: 0.5;">--- 项目三大底层逻辑 ---</div>

<div style="width: 100%; text-align: left;">{{< list cardView=true limit=3 where="Type" value="sample" >}}</div>

<div style="margin-top:20px; white-space: nowrap;">
<a href="contact/" class="custom-icon-sm">{{< icon "weixin" >}}</a>
<a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAg0e3TfgJwAzj2dS6wu8Mg3dWTIzAjTGU26mQGm4AKjQ/" target="_blank" class="custom-icon-sm">{{< 
icon "toutiao" >}}</a>
<a href="https://www.xiaohongshu.com/user/profile/5d423fc90000000016034bc6?xsec_token=YBvkMf6BM6shT8zJAPAaDS4TdQNUmu4WskjU5MrT_0mss%3D&xsec_source=app_share&
xhsshare=WeixinSession&appuid=5d423fc90000000016034bc6&apptime=1741686168&share_id=5759c5c385644ebf8cf03fea99c2e53e&share_channel=wechat/" target="_blank" 
class="custom-icon-sm">{{< icon "redbook" >}}</a>
<a href="https://zhihu.com/people/nscm/" target="_blank" class="custom-icon-sm">{{< icon "zhihu" >}}</a>
<a href="https://weibo.com/jincijiayuan/" target="_blank" class="custom-icon-sm">{{< icon "xinlangweibo" >}}</a>
<a href="mailto:ohulab.org@gmail.com" target="_blank" class="custom-icon-sm">{{< icon "email" >}}</a>
</div>

<!--

<!-- 简体中文版首页右下角图片广告 -->
<!-- 浮动图片样式 -->
<style>
.floating-image {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 180px;
    height: 180px;
    cursor: pointer;
    z-index: 9999;
    transition: all 0.3s ease;
}

.floating-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 保持图片比例 */
    transition: transform 0.3s ease;
    border-radius: 15px;
}

.floating-image:hover {
    transform: scale(1.1);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .floating-image {
        width: 130px;
        height: 130px;
        right: 20px;
        bottom: 20px;
    }
}
</style>

<!-- 浮动图片脚本 -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // 创建容器链接
    const floatLink = document.createElement('a');
    floatLink.className = 'floating-image';
    floatLink.href = 'dawutong'; // 替换你的目标链接
    floatLink.target = '_self';
    floatLink.title = '引爆大梧桐生态融合区招商引资';
    floatLink.setAttribute('aria-label', '联系我们');

    // 创建图片元素
    const floatImg = document.createElement('img');
    floatImg.src = '/ad.jpg'; // 替换为你的图片URL
    floatImg.alt = '引爆大梧桐生态融合区招商引资';

    // 添加点击动画
    floatLink.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // 组合元素
    floatLink.appendChild(floatImg);
    document.body.appendChild(floatLink);
});
</script>
