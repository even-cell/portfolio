# 作品集进度与偏好

更新日期：2026-10-15（Asia/Shanghai）
状态：用户已授权将当前版本备份到 GitHub 并部署到 Cloudflare；部署结果以本次发布记录为准。

## 用户确认的预览方式

手机端预览使用独立页面 public/mobile-preview.html：灰色背景、深色圆角手机边框、内部约 390px 宽的真实网站 iframe，可滚动、点击作品及返回首页。用户明确喜欢并要求记住这种形式。今后请求手机预览时优先打开此页面，不要只调整浏览器 viewport 并宣称已有手机展示窗口。
地址：http://localhost:3000/mobile-preview.html

## 当前实现

依据 Figma：https://www.figma.com/design/7bePh6ER2EltLtdmxq4wPe/网站修改?node-id=0-1
- 按设计外观调整首页介绍、字号、字重、字距与留白。
- 共用 ContactSection：Contact / Notice 分区、新邮箱 herecomeseven@gmail.com、微信 alake1960、版权信息、原始 Even Zhang 矢量字标。
- 尚然堂及通感详情使用 ProjectInfo，标题、介绍和四项项目资料以自然文档流及响应式网格布局。
- NEXT 桌面三图并列，标题与间距调整，图片下文字仅供辅助阅读；手机纵向排列。
- NÉRO 保持原有简版项目信息；各详情页接入新联系页尾。
- 手机与桌面布局适配，不机械照搬 Figma 的绝对定位、图层层次或固定高度。

## 检查与边界

TypeScript 检查及生产构建通过；检查过 1440px 桌面、390px 手机、320px 窄屏。最后还微调了窄屏字号、邮箱布局和详情画廊间距。
原项目素材、图片展示和交互继续保留。sources/ 为只读，不修改。
截图检查曾触发 macOS 屏幕录制权限提示。已解释用途；今后优先采用不需要系统录屏权限的检查方式。

## 下次继续

先读取本文件与 Git 状态，保留现有修改。用户尚未提出下一轮修改项。
本地首页：http://localhost:3000/
启动（依赖已安装）：将 /Users/alake/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin 加入 PATH，然后在此目录运行 node node_modules/vinext/dist/cli.js dev --host 127.0.0.1 。默认端口 3000；运行前检查已有服务，避免重复启动。

## 2026-10-12 最新保存与上线记录

- GitHub： https://github.com/even-cell/portfolio ，main 提交 `3d98fce06fc09e3ecfcc9f7f9704fc8279f94aad`。
- 正式网站： https://www.evenzhang.work 。Cloudflare Worker：`evenportfolio`。
- Cloudflare 版本：`73ae6c2f-3c08-4565-9084-3abef97eec46`。
- 最新版本包含 ABOUT 简介页、全站导航、手机折叠菜单；ABOUT 当前页面常驻下划线已去除，悬停效果保留。
- 首页欢迎语在“创造视觉”后固定断行，下一行以“体验”开始。
- 首页作品卡和 NEXT 卡保持直角（16px 圆角试验已撤回）。卡片间距统一 12px；手机 NEXT 仅显示第一个作品卡，电脑显示三个。
- 中文统一 PingFang SC/TC/HK 优先，原字重不变；无苹方的设备回退系统无衬线字体。
- 线上首页、ABOUT、三个作品详情均返回 200，线上 CSS 已确认包含 PingFang 和 12px 间距。类型检查和生产构建通过。
- 同排卡片实测底边仅差约 0.008px，截图中的不齐主要是深浅图像边界的视觉差异，未修改卡片尺寸。
- 部署命令使用现有生成配置并指定正确 Worker：`node node_modules/wrangler/bin/wrangler.js deploy --config dist/server/wrangler.json --name evenportfolio --keep-vars`。不要使用默认 sites-project 名称新建目标。
- GitHub 凭据辅助程序当前依赖 `/tmp/portfolio-gh/gh_2.99.0_macOS_arm64/bin/gh`；临时目录清理后可能需要恢复官方 CLI。含图片的推送使用本次参数 `git -c http.version=HTTP/1.1 -c http.postBuffer=157286400 push origin main` 成功。
- 本文件为上线后本地交接记录；网站代码已同步。下次先读取本文件和 Git 状态，保留所有现有工作。

## 2026-10-12 本地交互调整
- 详情头图移除 sticky、滚动上移和淡出动画，改为普通文档流，与介绍自然衔接。
- 首页所有作品卡默认隐藏遮罩和标题；触控按下显示，松手、取消、离开或失焦清除。鼠标悬停和键盘焦点保留。
- 类型检查通过；浏览器确认全部十张卡片默认 opacity 为 0、详情头图 animation/transform 为 none，详情链接正常。
- 本轮仅修改本地预览，尚未发布。

## 2026-10-13 页尾动效试版
- 用户确认保留 V1 全宽匀速滚动，SVG 接缝间距已修正。备份：../output/footer-marquee-v1-approved/（contact-section.tsx、globals.css、footer-marquee.svg）。
- V2 波浪动效已试验并撤回，不是当前版本。

- 用户要求撤回第二版：已恢复确认的 V1 全宽匀速循环及接缝间距；V2 组件未接入页面。

## 当前交接状态（2026-10-13）
- 当前页尾使用用户提供的 SVG，全宽从右向左匀速循环，65 秒一轮；保留原区域高度及上下留白。
- SVG viewBox 宽度为 6845.01，末尾补齐留白，2026 与烟花符号以及符号与 E 的间距一致。
- V1 已确认保留；备份位于 ../output/footer-marquee-v1-approved/。
- V2 未引用组件移至 ../output/footer-fluid-v2-experiment/，避免与当前版本混淆。
- 手机预览曾显示 ResizeObserver loop 错误；发生于 V2 试验/撤回期间，确切触发源未确认。已确认 V1 不引用 canvas 动效，并重新加载手机预览清除旧运行状态。
- 本地地址：http://localhost:3000/；手机框预览：http://localhost:3000/mobile-preview.html。
- 保留此前详情页动效移除、手机卡片按压显示遮罩等改动；未推送或发布本轮修改。
- 本次保存为代码及配置快照 ../output/portfolio-progress-2026-10-13.tar.gz；媒体原件仍在 public/，快照不重复打包大型媒体。

## 2026-10-15 发布版本
- 手机菜单全屏覆盖，导航居中，展开加入依次回弹动画，展开时阻止背景滚动。
- 手机首页作品卡片间距 6px，比例仍为 1.52:1；桌面间距保持 12px。
- 手机页尾字标放大约 35%，45 秒循环；桌面保持原尺寸和 65 秒循环。
- 一并包含 10 月 12–13 日已确认的详情页、卡片触控和 V1 页尾改动。
- TypeScript 检查和生产构建通过；发布目标 GitHub even-cell/portfolio main、Cloudflare evenportfolio（www.evenzhang.work）。
