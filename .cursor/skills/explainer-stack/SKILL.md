---
name: explainer-stack
description: Local free stack for this repo's Vietnamese TikTok explainers. Use when choosing tools, comparing scripts, captioning, adding voice, or deciding what not to install.
---

# Explainer stack

Đọc `.cursor/rules/free-only.mdc` và `.cursor/rules/explainer-stack.mdc` trước. Skill này là các bước. Rule là điều cấm.

## Render

Remotion, render trên máy. Đọc tài liệu Remotion hiện tại trước khi sửa composition. Không lấy độ dài của một video mẫu làm khuôn clip.

## So sánh kịch bản

Viết 2–3 hook. Giữ hook nào mà phần hình chứng minh được.

Chấm mỗi bản:

- Đúng việc đang nói, chỗ chưa kiểm chứng được ghi là chưa kiểm chứng.
- Hook đọc một lần đã hiểu.
- Payoff là thứ người xem nhìn thấy, không phải câu hứa thêm.
- Câu tiếng Việt nói được. Hết câu sáo. Chạy skill `humanizer` trước khi chốt chữ lên hình.
- Người không làm kỹ thuật đọc một lần đã hiểu. Từ bài đang dạy giữ tiếng Anh và đứng cạnh ví dụ đời thường. Từ phổ thông như note giữ tiếng Anh. Câu cuối đúng câu follow trong `.cursor/rules/human-voice.mdc`. Không dịch cả clip sang ví dụ.

Khi cần so vài prompt cạnh nhau và máy đã có promptfoo:

```bash
npx promptfoo eval
```

Điểm do model chấm chỉ để lọc. Người chọn bản đưa vào storyboard. Đừng cài promptfoo chỉ để làm một clip.

## Hình, tiếng, phụ đề

- UI đang chạy: quay bằng ShareX, đưa file vào `episodes/<id>/assets/`.
- Khái niệm không có UI: sơ đồ trong composition, `design.md` ghi là sơ đồ. Dựng theo skill `stage-picture`: một sân, vai màu, nền đổi theo sân, bảng trước/sau khi so sánh, con trỏ nhảy. Chưa có tiếng thì dải dưới là lời giảng, mỗi câu khoảng 5–6 giây.
- Thiếu footage: placeholder có nhãn. Không vẽ cửa sổ giả.
- Giọng: người thu, hoặc không có tiếng. KorvaTTS chỉ khi người làm dự án nói rõ muốn thử giọng máy cho episode đó.
- Có file tiếng: Whisper trên máy, model small, language `vi`. Người đọc transcript trước khi gắn caption. WhisperX chỉ khi cần thời điểm từng từ và lệnh đã có trên máy.

## Sau khi đăng

Thêm một dòng vào `episodes/<id>/results.md`: ngày, độ dài, một chỉ số TikTok đang hiện, giả thuyết lúc làm, một thay đổi cho video sau. Đổi hook hoặc cách chứng minh, không đổi cả format cùng lúc. Chưa đăng thì không bịa chỉ số.
