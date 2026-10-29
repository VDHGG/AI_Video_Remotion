# AI Video Remotion

Đọc file này trước. Đây là xưởng làm clip TikTok giải thích AI bằng tiếng Việt, dựng và xuất trên máy này. Kênh là Anh 40 học AI.

Một composition Remotion dùng lại cho mọi episode. Nội dung từng clip nằm trong `episodes/<id>/`. Rule sản xuất nằm trong `.cursor/rules/`. Bản giao việc dài, viết cho agent, nằm ở `git.md`.

## Việc đã xong

Môi trường chạy được: Node, Remotion 4.0.539, React 19, font Be Vietnam Pro Bold (OFL) trong `public/fonts/`.

`samples/001-db-index/` là gói mẫu về Index trong database. Gói đó chốt lời giảng, cú nhảy, bảng trước/sau, và nhịp. Episode sau đạt mức đó. Không lấy bài Index làm nội dung clip khác.

Episode đang làm là `episodes/002-harness/`. Một clip, 121,2 giây, 30 fps, 1080×1920, 3636 frame. Chủ đề: Prompt, Context, và Harness là ba việc khác nhau, kể bằng lần đi chợ nấu cơm tối. Chín sân: giỏ, câu nhắn, mặt bàn, vòng kiểm, hệ thống, dấu xong giả, ba giỏ, quy tắc, câu follow.

Giọng là KorvaTTS chạy trên máy, giọng nam Gia Bảo (`gia_bao`), giấy phép Apache-2.0. 36 câu phụ đề bám 36 file tiếng. Chữ trên hình giữ `Anh 40 học AI`. Miệng đọc “bốn mươi”. Giữa hai câu có 0,3 giây, câu follow không có khoảng đó.

Bản để xem: `exports/previews/002-harness.mp4`. Thư mục `exports/` không đưa lên git. Máy vừa render có file này. Máy clone về thì tự render lại.

Clip chưa đăng TikTok. Chưa có số xem.

## Một clip đi qua đâu

1. `episodes/<id>/brief.md` — người xem, ví dụ đời thường, giới hạn của ý, thời lượng đã duyệt.
2. `script.md` — hook và lời. Người duyệt câu chữ.
3. `design.md` — mỗi sân có vật gì, nền gì, cái gì chạy.
4. `storyboard.md` — mốc giây. Viết sau khi thời lượng được duyệt.
5. Code trong `src/`. `src/harness/timeline.ts` giữ câu phụ đề và số frame. `stages.tsx` vẽ sân. `Explainer.tsx` ghép sân và phát tiếng.
6. `REVIEW.md` — tự đối chiếu still và file draft.
7. Render ra `exports/previews/<id>.mp4`. Người làm dự án nhận bản đó rồi mới tính episode sau.

Đổi độ dài một episode đã duyệt là một lần xin duyệt mới. Trần của xưởng này là 5 phút.

## Hình và tiếng

Khung dọc 1080×1920. Không chữ trong 168 px trên cùng, không chữ dưới y=1330. Dải phụ đề 54 px, bắt đầu ở y=1120.

Màu giữ cả series. Nền gốc `#0c0f14`, lệch lạnh hoặc ấm theo sân. Nhãn `#f4f1ea`. Số và câu hỏi `#e7c56a`. Bước đang chạy `#7dcec4`. Chỗ tốn kém `#e07a5f`.

Có giao diện thật thì quay ShareX. Khái niệm không có màn hình thì vẽ sơ đồ và ghi là sơ đồ. Episode 002 là sơ đồ, không phải footage chợ.

Tiếng ưu tiên người tự thu. Episode 002 được duyệt thử giọng máy. KorvaTTS cài trong `.venv-tts/` (không đưa lên git). Lần chạy đầu tải weight về cache Hugging Face của máy, khoảng vài trăm MB, không gọi API trả phí. Lệnh đọc lại 36 câu: `episodes/002-harness/assets/voice/synth_lines.py`. File nguồn và `durations.json` nằm cùng thư mục đó. Remotion chỉ phát file trong `public/`, nên bản copy để render nằm ở `public/voice/002-harness/`.

Có file tiếng rồi thì Whisper trên máy, model small, language `vi`, người đọc lại transcript trước khi sửa phụ đề. Episode này phụ đề lấy từ câu đã duyệt, thời điểm lấy từ file tiếng.

## Cái không được tiêu tiền

Làm trên máy: Remotion, FFmpeg, font OFL, KorvaTTS. Remotion miễn phí cho cá nhân hoặc công ty tối đa 3 người. Điều khoản: [remotion.dev/license](https://www.remotion.dev/license).

Chưa được gọi khi chưa có câu đồng ý chi tiền: HeyGen, ElevenLabs, voice clone, avatar, Remotion Lambda, render cloud. Giọng cloud và nhạc có bản quyền không nằm trong stack.

## Lệnh

```console
npm i
npm run dev
npx remotion render Explainer E:/RnDWork/AI_Video_Remotion/exports/previews/002-harness.mp4
```

`npm run dev` mở Remotion Studio. Composition tên `Explainer`.

Đọc lại giọng, sau khi đã có `.venv-tts`:

```console
.venv-tts\Scripts\python.exe episodes\002-harness\assets\voice\synth_lines.py
```

Rồi chép `episodes/002-harness/assets/voice/*.wav` sang `public/voice/002-harness/`.

## Đọc tiếp

| Việc | Chỗ |
|---|---|
| Luật thời lượng, giọng, sân, tiền, chu trình | `.cursor/rules/` |
| Cách agent dựng clip | `.cursor/skills/`, `.cursor/agents/explainer-factory.md` |
| Tài liệu Remotion đã cài trong repo | `.agents/skills/` |
| Nghiên cứu TikTok và stack | `docs/tiktokDA.md` |
| Brief sản xuất lúc dựng xưởng | `docs/Brainstrom.md` |
| Gói clip Harness | `episodes/002-harness/` |
| Gói mẫu Index | `samples/001-db-index/` |
