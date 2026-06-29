# 项目级 AGENTS.md

`AGENTS.md` 是给 AI 编程助手看的项目说明书。它把项目结构、常用命令、风格约定和安全边界写清楚，让每次会话少一点重复解释。

## 1. 适合写什么

`AGENTS.md` 应该写稳定、可复用、对代码修改有约束的信息。

适合：

- 项目结构。
- 构建、测试、类型检查命令。
- 代码风格和命名约定。
- 目录职责。
- 不要编辑的生成文件。
- 提交或 PR 要求。
- 安全注意事项。

不适合：

- 临时需求。
- 一次性任务计划。
- 过期路线图。
- 私密 token 或内部账号。

## 2. 推荐结构

```md
# Repository Guidelines

## Project Structure

## Development Commands

## Coding Style

## Testing and Verification

## Git and PR Guidelines

## Security Notes

## AI Collaboration Rules
```

标题不需要花哨，AI 更需要稳定结构。

## 3. 写清楚命令

命令要具体到可以直接执行。

```md
## Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the local dev server.
- `npm run build`: build the site.
- `npm run typecheck`: run TypeScript checks.

Run `npm run build` before handing off documentation changes.
Run both `npm run build` and `npm run typecheck` before handing off theme or config changes.
```

不要只写“运行测试”。要告诉 AI 运行哪个命令。

## 4. 标明禁止区域

很多项目都有生成文件、缓存目录或部署产物。

```md
Do not edit generated output in:
- `docs/.vitepress/.temp/`
- `docs/.vitepress/cache/`
- `docs/.vitepress/dist/`
```

这类信息能显著减少无关 diff。

## 5. 写出内容规范

文档项目尤其需要写标题、文件名和语言结构。

```md
Use lowercase kebab-case filenames.
Chinese pages live under `docs/zh/`.
English pages live under `docs/en/`.
Article headings use Arabic-numbered hierarchy:
- `# Page Title`
- `## 1. Section`
- `### 1.1 Subsection`
```

如果你希望 AI 长期遵守某种格式，应该写进项目级说明。

## 6. 加 AI 协作规则

可以明确 AI 的工作方式。

```md
## AI Collaboration Rules

- Read relevant files before editing.
- Keep changes scoped to the current task.
- Do not refactor unrelated files.
- Preserve existing style and structure.
- Run documented verification commands before handoff.
- Mention commands that could not be run.
```

这些规则看似普通，但能让不同会话保持一致。

## 7. 维护 AGENTS.md

`AGENTS.md` 会过期，所以要维护。

适合更新的时机：

- 新增重要目录。
- 更换构建或测试命令。
- 新增文档格式规范。
- 改变部署方式。
- 多次发现 AI 在同一件事上犯错。

如果某条规则只为一次任务服务，不要写进项目级文件，写在任务提示词里。

## 8. 最小模板

```md
# Repository Guidelines

## Project Structure

Describe source directories, generated directories, and ownership boundaries.

## Commands

- `npm run dev`: start local development.
- `npm run build`: build production output.
- `npm run typecheck`: run TypeScript checks.

## Style

Describe naming, formatting, heading, and language rules.

## Verification

State which commands are required for different change types.

## Safety

List files or secrets that must not be edited or committed.
```

好的 `AGENTS.md` 像一位沉默的项目维护者：每次 AI 进来，都先把边界讲清楚。
