# OpenAI Codex CLI 全平台安装指南（2026）

> 本文面向 macOS、Windows、Linux / WSL 用户，说明 Codex CLI 的安装路径、Node.js 是否必要、国内网络替代方案，以及 ChatGPT 登录和 OpenAI API Key 两种接入方式。

## 1. 先看结论

大多数用户优先使用 **官方原生安装器**，不需要先安装 Node.js：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Windows PowerShell：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

Node.js 只在 npm 安装路径、项目本身需要 Node 工具链、或国内网络下需要借 npm 镜像绕过下载不稳定时才需要。

## 2. Codex CLI 是什么

Codex CLI 是 OpenAI 的终端原生编程代理，适合在本地仓库中阅读代码、修改文件、运行命令、做代码审查和执行自动化任务。它和 Codex App、IDE 扩展、Codex Cloud 使用不同入口，但可以共享部分本地认证和配置。

如果你还在比较 Codex、Claude Code、Gemini CLI，以及供应商切换工具，请先看 [AI 编程切换工具分析](./ai-coding-switch-tools.md)。

## 3. 账号与认证方式

Codex CLI 支持两种 OpenAI 登录方式：

- **ChatGPT 登录**：使用 ChatGPT 订阅和工作区权限，适合个人和团队日常开发。
- **API Key 登录**：使用 OpenAI Platform API 账户按量计费，适合 CI、脚本、无头环境和预算独立管理。

Codex Cloud 需要 ChatGPT 登录；本地 Codex CLI 和 IDE 扩展支持 ChatGPT 登录与 API Key 登录。

## 4. Node.js 与国内网络策略

Codex 原生安装器不依赖 Node.js。只有这些场景需要 Node.js：

1. 使用 `npm install -g @openai/codex`。
2. 你的项目需要 `npm`、`pnpm`、`vite`、`tsc` 等 Node 工具链。
3. 国内网络无法稳定访问官方安装器，需要通过 npm 镜像安装。

### 4.1 使用 fnm 安装 Node.js

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

### 4.2 传统安装方式

- 官方安装包：从 `nodejs.org` 下载 LTS。
- macOS：`brew install node`。
- Windows：安装 Node.js LTS MSI，或运行 `winget install OpenJS.NodeJS.LTS`。
- Linux：使用发行版包管理器，或 NodeSource 源。

国内 npm 镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install -g @openai/codex
```

注意包名必须是 `@openai/codex`，不是 `codex`。

## 5. 安装方式选择

| 方式 | 是否需要 Node.js | 推荐场景 |
| --- | --- | --- |
| 原生安装器 | 否 | 大多数用户，自动更新 |
| npm | 是 | 国内网络替代、固定版本、npm 工作流 |
| Homebrew | 否 | macOS 包管理器用户 |
| WinGet | 否 | Windows 包管理器用户 |
| GitHub Releases 二进制 | 否 | 离线、内网、受限环境 |

### 5.1 macOS / Linux / WSL

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex --version
```

无人值守安装：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | CODEX_NON_INTERACTIVE=1 sh
```

### 5.2 Windows

PowerShell：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

WinGet：

```powershell
winget install OpenAI.CodexCLI
```

Windows 原生沙箱仍有平台差异。如果项目依赖 Linux 工具链、bash 脚本或更完整沙箱，优先使用 WSL 2。

### 5.3 直接下载二进制

网络受限时，可以从 GitHub Releases 下载对应平台二进制，放入 PATH：

```bash
chmod +x codex-linux-x86_64
sudo mv codex-linux-x86_64 /usr/local/bin/codex
codex --version
```

## 6. 登录与 API 接入

首次运行：

```bash
codex
```

如果没有有效会话，Codex 默认引导你使用 ChatGPT 登录。也可以显式运行：

```bash
codex login
```

### 6.1 ChatGPT 登录

适合个人订阅和团队工作区。浏览器登录完成后，凭据会缓存到本地。远程或无浏览器环境可以使用设备码：

```bash
codex login --device-auth
```

如果你已经有 ChatGPT / Codex access token，也可以从 stdin 导入：

```bash
printenv CODEX_ACCESS_TOKEN | codex login --with-access-token
```

### 6.2 OpenAI API Key 登录

适合按量计费、脚本和 CI。API Key 从 OpenAI Platform 生成：

```bash
codex login --api-key
```

非交互自动化可使用 `codex exec` 的环境变量：

```bash
CODEX_API_KEY=sk-xxxxxxxx codex exec "检查项目并给出改进建议"
```

API Key 使用 OpenAI Platform 计费和数据策略，不消耗 ChatGPT 订阅内的 Codex 使用额度。不要把 API Key 写入仓库、Issue 或截图。

### 6.3 自定义模型供应商

Codex 还支持在 `~/.codex/config.toml` 中配置 custom model provider。你可以选择：

- `requires_openai_auth = true`：使用 OpenAI 登录态，适合 OpenAI 兼容代理。
- `env_key = "MY_PROVIDER_API_KEY"`：从环境变量读取第三方供应商 Key。
- 不设置认证：用于本地模型或无需鉴权的服务。

多供应商、中转 API、账号切换和 MCP 同步需求，建议参考 [AI 编程切换工具分析](./ai-coding-switch-tools.md)。

## 7. 基础使用与安全模式

启动交互式 TUI：

```bash
codex
```

直接给一个任务：

```bash
codex "解释这个项目的目录结构"
```

常用命令：

```bash
codex doctor        # 诊断安装、认证、配置和运行环境
codex resume        # 恢复历史会话
codex logout        # 移除本地认证凭据
codex exec "..."    # 非交互执行任务
```

Codex 的权限模式可在会话内用 `/permissions` 调整。日常建议从默认的 Auto / workspace-write 开始；`--dangerously-bypass-approvals-and-sandbox` 只适合隔离 CI，不要在本地开发机随手使用。

## 8. 项目配置与 AGENTS.md

Codex 会读取项目中的 `AGENTS.md`，把它作为持久项目指令。当前仓库已经用 `AGENTS.md` 规定了文章标题格式、构建命令和贡献规范。新增文章时请遵守：

- 页面标题只保留一个 `#`。
- 章节标题使用 `## 1. ...`。
- 小节使用 `### 1.1 ...`。
- 更深层使用 `#### 1.1.1 ...`。

全局配置位于 `~/.codex/config.toml`，常见内容包括默认模型、沙箱、审批策略、MCP server 和自定义 provider。

## 9. 更新与卸载

| 安装方式 | 更新命令 |
| --- | --- |
| 原生安装器 | `codex update` 或重新运行安装脚本 |
| npm | `npm install -g @openai/codex@latest` |
| Homebrew | `brew upgrade codex` |
| WinGet | `winget upgrade OpenAI.CodexCLI` |

卸载示例：

```bash
npm uninstall -g @openai/codex
rm -rf ~/.codex
```

如果使用系统钥匙串或凭据管理器，先运行：

```bash
codex logout
```

## 10. 常见问题

**`codex: command not found`**：关闭终端重开，或运行 `codex doctor` 查看 PATH 建议。npm 用户检查 `npm config get prefix`。

**装错了 `codex` 包**：卸载无关包，重新安装官方包：

```bash
npm uninstall -g codex
npm install -g @openai/codex
```

**浏览器登录失败**：远程机器使用 `codex login --device-auth`，或改用 API Key。

**公司代理或 TLS 拦截**：设置 CA 证书路径：

```bash
export CODEX_CA_CERTIFICATE=/path/to/corporate-root-ca.pem
codex login
```

**网络安装失败**：优先尝试原生安装器；失败后尝试 npm 镜像、GitHub Releases 二进制，或通过代理下载。

## 11. 还需要根据场景确认

1. 使用 ChatGPT 订阅额度，还是 OpenAI API 按量计费。
2. 是否需要国内网络、公司代理、离线包或内网镜像。
3. 是否需要 WSL 2、Git、shell completion、IDE 扩展或 Codex App。
4. 是否需要自定义 provider、中转 API、多账号切换。
5. 是否需要统一管理 MCP、Skills、Prompts 和 `AGENTS.md`。
6. 是否已经设置 API Key 权限、预算、轮换和本地凭据存储方式。

## 12. 参考资料

- Codex CLI 手册：https://developers.openai.com/codex/cli
- Codex 认证：https://developers.openai.com/codex/auth
- Codex 配置：https://developers.openai.com/codex/config
- Codex AGENTS.md：https://developers.openai.com/codex/guides/agents-md
- OpenAI Codex GitHub：https://github.com/openai/codex
