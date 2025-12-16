---
title: "Google Cloud Platform (GCP)免费VPN方案"
date: 2025-01-01
draft: false
description: ""
tags: [""]
showViews: false
showLikes: false
showAuthor: false
showZenMode: false
showTableOfContents: true
layoutBackgroundHeaderSpace: false
sharingLinks: false
showComments: false
---


这是一个非常详细且针对性极强的实操指南。为了确保你能够顺利落地执行，我将上述方案拆解为**手把手**的操作步骤，并补充了所有需要的**官方/GitHub 源码链接**。

请务必准备好一张外币信用卡（Visa/MasterCard）用于激活 Google Cloud Platform (GCP)，虽然我们利用的是免费额度，但谷歌验证身份需要绑定卡片（通常会预扣 $1 美元验证后退还）。

---

### 第一阶段：GCP 服务器创建（基础设施搭建）

**目标**：申请一台符合“永久免费”条件且适合国内连接的服务器。
**官方地址**：[Google Cloud Platform 控制台](https://console.cloud.google.com/)

1.  **注册与激活**：登录谷歌账号，进入控制台，点击顶部的“激活”或“免费试用”，填写信用卡信息完成验证。
2.  **创建项目**：在顶部导航栏左侧，点击“选择项目” -> “新建项目”，随便起个名（如 `my-vpn-project`）。
3.  **创建虚拟机**：
    *   菜单栏（左上角三横线）-> **Compute Engine** -> **虚拟机实例** -> **创建实例**。
4.  **关键参数配置（必须严格核对，否则扣费）**：
    *   **名称**：随意（如 `vless-server`）。
    *   **区域 (Region)**：选择 **`us-west1` (Oregon)**。（这是离中国最近的免费层级允许区域）。
    *   **可用区 (Zone)**：`us-west1-a` 或 `b` 均可。
    *   **机器配置**：
        *   通用 -> **E2** 系列。
        *   机器类型 -> **`e2-micro`** (2 个 vCPU，1 GB 内存)。*注：这是免费套餐指定的机型。*
    *   **启动磁盘**：
        *   点击“更改”。
        *   操作系统：选择 **Debian**。
        *   版本：**Debian 11 (Bullseye)** 或 **Debian 12 (Bookworm)**。
        *   磁盘类型：**标准永久性磁盘**。
        *   大小：**30 GB** （免费额度是30G，默认是10G，建议改为30G）。
    *   **网络接口（核心省钱点）**：
        *   展开“高级选项” -> “网络” -> “网络接口”。
        *   点击默认的接口，找到 **“网络服务层级”**。
        *   **务必切换为：`标准 (Standard)`**。
        *   *解释：标准层级每月有 200GB 免费出口流量，且路由通常直连（虽然优先级低），高级层级 (Premium) 只有从澳洲等地出发才免费，美国出发是收费的。*
    *   **防火墙**：勾选 “允许 HTTP 流量” 和 “允许 HTTPS 流量”。
5.  **点击“创建”**。等待几十秒，当看到“外部 IP”出现时，实例即创建成功。

---

### 第二阶段：环境配置与面板安装

**目标**：安装 BBR 加速算法和 3X-UI 面板。

1.  **连接服务器**：
    *   在 GCP 实例列表中，点击该实例右侧的 **SSH** 按钮，会弹出一个网页版的黑色命令行窗口。
2.  **获取 Root 权限**：
    *   在黑色窗口输入：
        ```bash
        sudo -i
        ```
3.  **开启 BBR 加速（解决拥堵的关键）**：
    *   依次复制并运行以下命令：
        ```bash
        echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
        echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
        sysctl -p
        ```
    *   *验证*：输入 `lsmod | grep bbr`，如果看到 `tcp_bbr` 字样说明开启成功。
4.  **安装 3X-UI 面板**：
    *   这里使用 MHSanaei 维护的优化版本，支持 Reality 协议。
    *   **GitHub 项目地址**：[https://github.com/mhsanaei/3x-ui](https://github.com/mhsanaei/3x-ui)
    *   **安装命令**（复制粘贴回车）：
        ```bash
        bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
        ```
    *   **安装交互过程**：
        *   `Do you want to install...` -> 输入 `y`。
        *   `username` (用户名) -> 设置一个你记得住的，例如 `admin`。
        *   `password` (密码) -> 设置一个复杂的密码。
        *   `port` (端口) -> 输入 **2053** (或者其他，只要不和 80/443 冲突)。
5.  **安装完成**：脚本跑完后，会显示绿色的面板访问地址。先别点，因为防火墙还没开。

---

### 第三阶段：GCP 防火墙放行

**目标**：让外部网络能访问你的面板端口（2053）和 VPN 端口（8443）。

1.  回到 GCP 网页控制台。
2.  搜索栏输入 “防火墙”，选择 **VPC 网络 -> 防火墙**。
3.  点击上方 **“创建防火墙规则”**。
    *   **名称**：`allow-vless-all`
    *   **流量方向**：入站 (Ingress)
    *   **对匹配项执行的操作**：允许 (Allow)
    *   **目标**：网络中的所有实例
    *   **来源 IPv4 范围**：`0.0.0.0/0`
    *   **协议和端口**：
        *   勾选 **TCP**。
        *   勾选 **UDP**。
        *   端口输入框填写：`1000-65535` (这样省事，把除了系统保留端口外的都开了)。
4.  点击 **“创建”**。

---

### 第四阶段：配置 VLESS-Reality 节点

**目标**：配置“偷”大厂域名的伪装协议。

1.  **登录面板**：
    *   打开浏览器，访问 `http://你的外部IP:2053` （注意是 http 不是 https）。
    *   输入刚才设置的账号密码登录。
2.  **创建节点**：
    *   点击左侧 **“入站列表”** -> **“添加入站”**。
3.  **详细参数配置（核心步骤，请仔细核对）**：
    *   **备注**：`GCP-US`
    *   **协议**：`vless`
    *   **监听端口**：**8443** (这是最像 HTTPS 流量的端口)。
    *   **传输**：`tcp`
    *   **安全性**：**`reality`** (选中后会多出一堆设置)。
    *   **Reality 设置**：
        *   **uTLS**：`chrome`
        *   **Dest** (目标网站)：`www.amazon.com:443` 或 `learn.microsoft.com:443` (推荐 Microsoft，连接极快)。
        *   **SNI**：自动同步 Dest，即 `learn.microsoft.com`。
        *   **ShortId**：点击输入框右侧的小闪电图标 ⚡️ 自动生成。
        *   **Private Key**：点击输入框右侧的 `Get New Key` 按钮自动生成。
4.  **保存**：点击底部的“添加”按钮。

---

### 第五阶段：客户端连接与下载

**目标**：在你的手机/电脑上安装软件并连接。

#### 1. 获取连接代码
在 3X-UI 面板的入站列表中，找到刚才创建的那一行，点击 **“操作”** -> **“二维码”**（手机扫）或 **“复制链接”**（电脑用）。链接通常以 `vless://` 开头。

#### 2. 客户端下载地址 (务必使用支持 Reality 的版本)

*   **Windows 电脑**：
    *   软件：**v2rayN**
    *   **下载地址**：[GitHub Releases](https://github.com/2dust/v2rayN/releases)
    *   *操作*：下载 `v2rayN-Core.zip` -> 解压运行 -> Ctrl+V 粘贴剪贴板的链接 -> 底部系统代理选择“自动配置系统代理”。

*   **Android 安卓手机**：
    *   软件：**v2rayNG**
    *   **下载地址**：[GitHub Releases](https://github.com/2dust/v2rayNG/releases)
    *   *操作*：下载最新的 `.apk` 安装 -> 点击右上角“+” -> 从剪贴板导入 -> 点击选中节点 -> 点击右下角 V 图标连接。

*   **iOS (iPhone/iPad)**：
    *   *注意：国区 App Store 无法下载，需要美区 Apple ID。*
    *   **Shadowrocket** (小火箭 - 推荐): 收费 $2.99。最稳定。
    *   **V2Box** (免费): 直接在美区商店搜 V2Box。
    *   *操作*：Shadowrocket 打开会自动识别剪贴板的 vless 链接，点击添加即可。

*   **macOS (苹果电脑)**：
    *   软件：**V2Box** 或 **Foxray**。
    *   **下载地址**：[V2Box GitHub](https://github.com/skkrip7/V2Box/releases)

---

### 常见问题与排错

1.  **连不上（Ping 不通）**：
    *   GCP 的 IP 偶尔会分到已经被 GFW 封锁的 IP。去 [ip138.com](https://www.ip138.com/) 查一下你的 IP，如果国外能通国内不通，就是 IP 被墙了。
    *   **解决**：删掉虚拟机，重新按第一步创建，直到刷到一个干净的 IP。
2.  **速度慢**：
    *   检查是否按照第一步选了 **标准层级 (Standard)**。
    *   检查是否执行了 **BBR 加速命令**。
    *   晚高峰（20:00 - 23:00）GCP 免费线路必然会慢，这是物理带宽拥堵，非技术配置能解。
3.  **扣费问题**：
    *   只要你是 `e2-micro` + `us-west1` + `标准网络层级` + `30G磁盘`，在流量不超过 200GB/月的情况下，费用应当是 $0。
    *   建议每个月去 GCP 账单页面看一眼，避免误操作。

按照这套流程，你将拥有一个目前**最抗封锁、完全免费、且由你自己完全掌控**的科学上网节点。