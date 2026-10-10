# 作品集进度与偏好

更新日期：2026-10-10（Asia/Shanghai）
状态：用户要求暂时停止工作；本地保存，尚未发布本轮修改。

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
