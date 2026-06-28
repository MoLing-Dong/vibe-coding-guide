# Claude Code 全平台安装指南（2026）

> 本文面向 macOS、Windows、Linux / WSL 用户，重点说明安装路径、Node.js 是否必要、国内网络下的替代方案，以及 Claude 账号登录和 API 计费接入方式。

## 1. 先看结论

大多数用户优先使用 **官方原生安装器**，它不要求你先安装 Node.js：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

Node.js 不是 Claude Code 的通用前置条件。只有在你选择 `npm install -g @anthropic-ai/claude-code`、需要 npm 镜像绕过下载问题，或你的项目本身依赖 Node 工具链时，才需要安装 Node.js。

## 2. 系统与账号要求

Claude Code 支持 macOS 13+、Windows 10 1809+ / Windows Server 2019+、Ubuntu 20.04+、Debian 10+、Alpine 3.19+，建议至少 4GB RAM，并保持稳定联网。

账号接入有几类：

- Claude Pro / Max：个人用户用 Claude.ai 账号登录。
- Claude Team / Enterprise：团队成员用组织邀请的 Claude.ai 账号登录。
- Claude Console：使用 Console 账号和 API 计费。
- 云厂商：Amazon Bedrock、Google Vertex AI、Microsoft Foundry。

如果你要在多个供应商、官方账号和中转 API 之间切换，先阅读 [AI 编程切换工具分析](./ai-coding-switch-tools.md)，再决定是否引入配置管理工具。

## 3. Node.js 与国内网络策略

Node.js 的作用不是“运行 Claude Code 必须依赖”，而是提供 npm 安装通道。官方 npm 包会拉取对应平台的原生二进制，安装后的 `claude` 命令本身不依赖 Node 运行。

可选安装方式：

### 3.1 使用 fnm 管理 Node.js

```bash
curl -fsSL https://fnm.vercel.app/install | bash
fnm install --lts
fnm use lts-latest
fnm default lts-latest
```

Windows：

```powershell
winget install Schniz.fnm
fnm install --lts
```

### 3.2 传统方式安装 Node.js

- 官方安装包：从 `nodejs.org` 下载 LTS。
- macOS：`brew install node`。
- Windows：使用 Node.js MSI 安装包或 `winget install OpenJS.NodeJS.LTS`。
- Linux：使用发行版包管理器，或 NodeSource 源。

如果国内网络访问官方安装器不稳定，可以改用 npm 路径并设置镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install -g @anthropic-ai/claude-code
```

## 4. 安装方式选择

| 方式 | 是否需要 Node.js | 推荐场景 |
| --- | --- | --- |
| 原生安装器 | 否 | 大多数个人用户，自动更新 |
| Homebrew / WinGet | 否 | 用系统包管理器统一维护 |
| apt / dnf / apk | 否 | Linux 服务器或企业镜像源 |
| npm | 是 | 官方下载域名受限、需要固定版本或 npm 工作流 |
| 桌面应用 | 否 | 不想使用终端的 macOS / Windows 用户 |

### 4.1 macOS / Linux / WSL

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

Homebrew：

```bash
brew install --cask claude-code
```

### 4.2 Windows

PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

CMD：

```batch
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

WinGet：

```powershell
winget install Anthropic.ClaudeCode
```

Windows 原生模式适合 Windows 项目。需要更完整的 Linux 工具链和沙箱时，优先使用 WSL 2。

## 5. 认证与 API 接入

首次运行：

```bash
claude
```

Claude Code 会打开浏览器完成登录。如果浏览器无法回跳，按提示复制登录 URL 或粘贴登录码。

### 5.1 官方账号登录

适合个人订阅和团队订阅用户：

- Claude Pro / Max 使用 Claude.ai 账号。
- Claude Team / Enterprise 使用组织账号。
- 订阅配额和组织权限由 Claude.ai / Team / Enterprise 管理。

### 5.2 Claude Console API 计费

适合按量付费、CI、服务器、团队 API 预算独立管理的场景。你需要 Console 账号、API key 和相应权限：

```bash
export ANTHROPIC_API_KEY=sk-ant-xxxxxxxx
claude
```

API 方式按 token 计费，不消耗 Claude Pro / Max 订阅配额。建议在 Console 设置预算和用量上限。

### 5.3 云厂商接入

企业可以通过 Bedrock、Vertex AI 或 Microsoft Foundry 接入。此时模型请求和认证走对应云厂商，需要按官方文档配置环境变量和云凭据。

## 6. 验证、更新与卸载

验证安装：

```bash
claude --version
claude doctor
```

更新方式：

| 安装方式 | 更新命令 |
| --- | --- |
| 原生安装器 | 自动后台更新，或运行 `claude update` |
| Homebrew | `brew upgrade claude-code` |
| WinGet | `winget upgrade Anthropic.ClaudeCode` |
| npm | `npm install -g @anthropic-ai/claude-code@latest` |

卸载时分三层处理：二进制、配置目录、IDE / 桌面插件。配置通常在 `~/.claude/` 和 `~/.claude.json`，删除前先确认是否还要保留历史设置。

## 7. 常见问题

**`claude: command not found`**：关闭终端重开，或运行 `claude doctor` 查看 PATH 修复建议。

**PowerShell 报 `irm` 不存在**：你可能在 CMD 中执行了 PowerShell 命令。换到 PowerShell，或使用 CMD 安装命令。

**npm 权限错误**：不要使用 `sudo npm install -g`。改用 fnm、官方 Node 安装器，或配置 npm 用户级全局目录。

**安装脚本下载失败**：检查是否能访问 `downloads.claude.ai`、`storage.googleapis.com`、`claude.ai`。国内网络下可尝试 npm + 镜像、系统包管理器或企业代理。

## 8. 还需要根据场景确认

安装前最好再确认这些需求：

1. 你要用订阅配额还是 API 按量计费。
2. 是否需要在国内网络、公司代理或离线服务器中安装。
3. 是否需要多供应商、中转 API 或一键切换配置。
4. 是否需要 WSL 2 沙箱、Git for Windows、IDE 插件或桌面应用。
5. 是否要统一管理 MCP、项目提示词和团队规范。
6. 是否已经设置 API 用量预算、密钥保管和配置备份。

## 9. 参考资料

- Claude Code 安装文档：https://code.claude.com/docs/en/setup
- Claude Code 认证文档：https://code.claude.com/docs/en/iam
- 企业网络配置：https://code.claude.com/docs/en/corporate-proxy
- 安装故障排查：https://code.claude.com/docs/en/troubleshoot-install
