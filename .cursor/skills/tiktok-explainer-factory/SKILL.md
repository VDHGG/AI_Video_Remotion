---
name: tiktok-explainer-factory
description: Builds reusable Vietnamese TikTok AI explainer videos with local Remotion. Use when creating, editing, previewing, or rendering a vertical explainer, episode template, caption, hook, or MP4 in this repo.
---

# TikTok explainer factory

Đọc `.cursor/rules/free-only.mdc` và `.cursor/rules/clip-loop.mdc` trước. Rule là cổng. Skill này là lệnh và thứ tự.

Remotion owns the render contract. Before editing a composition, read the current Remotion docs for `Composition`, `Sequence`, `useCurrentFrame`, `staticFile`, and local render. Animation comes from the frame number, so the same frame always looks the same.

Mẫu cách làm nằm ở `samples/001-db-index/`. Episode sau đạt lời giảng, cú nhảy, bảng trước/sau, và nhịp của gói đó. Thêm ví dụ đời thường ở sân đầu và nền đổi theo sân. Không chép bài index sang chủ đề khác.

## Output

- 1080×1920. Một fps cho cả series, ghi trong `Root`. Duration follows the episode, not a fixed 20, 25, or 30 second slot. A clip stays at or under 5 minutes. A technical test may be about 5 seconds.
- Do not set a real episode's `durationInFrames`, storyboard timestamps, or render length until the person approves a proposed duration.
- Vietnamese on screen. Diacritics must render. Font is Be Vietnam Pro Bold in `public/fonts/BeVietnamPro-Bold.ttf`, loaded with `staticFile`.
- Portrait safe zone: no words in the top 168 px or below y=1330. Readable type is at least 28 px.
- Frame 0 is the hook beside an everyday object already doing the action. Follow `.cursor/rules/stage-picture.mdc`.

## Layout

```text
src/
├── Root.tsx
└── Explainer.tsx
public/
└── fonts/
episodes/
└── <id>/
    ├── brief.md
    ├── script.md
    ├── design.md
    ├── storyboard.md
    ├── measure.md
    ├── REVIEW.md
    └── assets/
```

Một composition dùng lại. Thư mục episode giữ gói nội dung và footage. Đổi nội dung episode. Không nhân bản composition cho từng episode.

## Closed loop

Giọng, bảng, cú nhảy, dải chữ, và vùng an toàn đã chốt. Không hỏi lại. Dừng để duyệt thời lượng, mọi bước tốn tiền, và bản draft.

1. Lập gói bằng skill `tiktok-idea-to-package`. Có một ví dụ đời thường. Đề xuất thời lượng. Dừng.
2. Sau khi có số giây, viết `storyboard.md`. Chạy skill `humanizer` lên mọi câu người xem đọc, theo `.cursor/rules/human-voice.mdc`.
3. Sửa composition Remotion. Mỗi sân là một `Sequence`. Đổi sân thì đổi nền. Chỗ so sánh là cột trước/sau. Con trỏ nhảy. Chuyển động lấy từ `useCurrentFrame`.
4. Xuất still tại mốc đổi sân và mốc giữa mỗi câu chữ. Nhìn frame: vùng an toàn, dấu tiếng Việt, cú nhảy, cả hai thanh nhìn ra, nền đã đổi, câu chữ còn trên hình trong lúc sơ đồ chạy.

```bash
npx remotion still Explainer exports/frames/<id>-<mốc>.png --frame=<frame>
```

5. Ghi phần tự đối chiếu trong `.cursor/rules/clip-loop.mdc` vào `episodes/<id>/REVIEW.md`. Chưa đạt thì sửa, chưa render.
6. Render trên máy, đường ra tuyệt đối.

```bash
npx remotion render Explainer E:/path/to/repo/exports/previews/<id>.mp4
```

Bản draft chờ người duyệt nhận.

7. File không rỗng và `ffprobe` khớp số giây đã duyệt. Đưa đường file. Chờ.

Không Lambda. Không render cloud. Không publish. Test kỹ thuật khoảng 5 giây được render khi still đã sạch.

## Dải chữ khi chưa có tiếng

Dải dưới là lời giảng. Một hoặc hai câu nói được, trên hình khoảng 5–6 giây. Trong lúc đó sơ đồ vẫn có dấu mới mỗi 2–4 giây. Một từ mang màu vai. Câu nói người xem đang hỏi gì, hệ thống làm gì, và số thuộc bảng nào.

Khi đã có tiếng: Whisper trên máy, model small, language `vi`. Người đọc transcript trước khi đưa lên hình. Model mặc định tiếng Anh sẽ dịch câu tiếng Việt.

## Cấm

HeyGen trả phí, Lambda, cloud render, thêm một renderer thứ hai, đăng TikTok tự động, và câu khẳng định một thiết lập xóa lịch sử chat hoặc ngừng mọi lưu dữ liệu.
