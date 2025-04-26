---
title: "独立管理三个GitHub账户的仓库"
date: 2025-01-01
draft: false
description: ""
tags: [""]
showViews: false
showLikes: false
showAuthor: true
showZenMode: false
showTableOfContents: true
layoutBackgroundHeaderSpace: false
sharingLinks: false
showComments: false
---

为了独立管理三个GitHub账户的仓库，需分别配置SSH密钥和Git用户信息，并确保不同账户的仓库使用对应的配置。以下是具体步骤：

### 1. 生成并配置SSH密钥
**生成三个密钥对**：
```bash
ssh-keygen -t rsa -b 4096 -C "315030@qq.com" -f ~/.ssh/id_rsa_sm-doctor
ssh-keygen -t rsa -b 4096 -C "ohulab.org@gmail.com" -f ~/.ssh/id_rsa_ohulab-org
ssh-keygen -t rsa -b 4096 -C "bluey@139.com" -f ~/.ssh/id_rsa_blueyasi
```

**将公钥添加到GitHub账户**：
- 分别复制每个公钥（如`~/.ssh/id_rsa_work.pub`）内容。
- 登录对应GitHub账户，进入 **Settings → SSH and GPG keys**，添加新SSH密钥。

**配置SSH客户端**：
编辑 `~/.ssh/config` 文件，添加以下内容：
```config
# 工作账户
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_work

# 个人账户
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_personal

# 其他账户
Host github.com-other
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_other
```

### 2. 配置Git用户信息
**按目录设置条件配置**：
在全局配置 `~/.gitconfig` 中添加条件包含：
```config
[includeIf "gitdir:~/work/"]
    path = ~/.gitconfig-work
[includeIf "gitdir:~/personal/"]
    path = ~/.gitconfig-personal
[includeIf "gitdir:~/other/"]
    path = ~/.gitconfig-other
```

**创建各账户的Git配置文件**：
- `~/.gitconfig-work`：
  ```config
  [user]
      name = Work Name
      email = work@example.com
  ```
- `~/.gitconfig-personal`：
  ```config
  [user]
      name = Personal Name
      email = personal@example.com
  ```
- `~/.gitconfig-other`：
  ```config
  [user]
      name = Other Name
      email = other@example.com
  ```

### 3. 克隆与仓库管理
**克隆仓库时使用对应Host别名**：
```bash
git clone git@github.com-work:work-username/repo.git ~/work/repo
git clone git@github.com-personal:personal-username/repo.git ~/personal/repo
git clone git@github.com-other:other-username/repo.git ~/other/repo
```

**修改现有仓库的远程URL**：
```bash
git remote set-url origin git@github.com-work:work-username/repo.git
```

### 4. 验证配置
**测试SSH连接**：
```bash
ssh -T git@github.com-work  # 应显示工作账户的欢迎信息
ssh -T git@github.com-personal
ssh -T git@github.com-other
```

**检查Git用户信息**：
在对应目录下执行：
```bash
git config user.name  # 应显示该目录配置的用户名
git config user.email # 应显示对应的邮箱
```

### 5. 日常使用注意事项
- **目录隔离**：确保不同账户的仓库存放在对应的目录（如`~/work`、`~/personal`），以便自动应用Git配置。
- **SSH别名**：克隆或添加远程仓库时，使用配置的Host别名（如`github.com-work`）。
- **避免全局配置冲突**：移除全局用户配置（若存在），仅通过条件包含设置。

### 总结
通过上述步骤，三个GitHub账户将完全独立：
- **SSH密钥隔离**：每个账户使用独立密钥认证。
- **Git配置隔离**：基于仓库目录自动切换用户信息。
- **远程仓库别名**：通过修改URL确保使用正确的SSH配置。

此方案有效避免了账户冲突，确保提交记录和权限管理正确无误。