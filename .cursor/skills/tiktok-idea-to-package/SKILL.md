---
name: tiktok-idea-to-package
description: Turns a raw Vietnamese idea into a TikTok AI explainer package — audience, hooks, structure, visual plan, and a duration proposal. Use when the user gives a rough topic, asks for content, a script, a storyboard, or a design package before a vertical explainer is built.
---

# Ý tưởng thô thành gói episode

Đọc `.cursor/rules/free-only.mdc`, `.cursor/rules/clip-duration.mdc`, `.cursor/rules/explainer-stack.mdc`, và `.cursor/rules/stage-picture.mdc` trước. Công cụ nằm ở skill `explainer-stack`. Cách dựng mỗi beat nằm ở skill `stage-picture`. Render và font thuộc skill `tiktok-explainer-factory`. Câu người xem đọc thì chạy skill `humanizer` trước khi chốt. Skill này dừng ở gói nội dung và thiết kế.

Nguồn khung: `docs/tiktokDA.md`. Khung này là cách thiết kế, không phải công thức viral.

## Việc cần làm

Từ một câu thô (ví dụ "INDEX trong data và trade off của nó"), lập gói trong `episodes/<id>/`:

| File | Khi nào viết | Nội dung |
|---|---|---|
| `brief.md` | Trước khi duyệt thời lượng | Khán giả, một thông điệp, một ví dụ đời thường, khoảng trống tò mò, việc người xem làm được sau khi xem, giới hạn của ý, claim nào cần nguồn trước khi lên câu, đề xuất thời lượng |
| `script.md` | Trước khi duyệt thời lượng | 3 hook khác cách mở, một hook được chọn, cấu trúc, lời dẫn theo beat **chưa gắn giây** |
| `design.md` | Trước khi duyệt thời lượng | Mỗi beat là UI thật, sơ đồ chuyển động, hay zoom; cái gì phải quay, cái gì cấm giả |
| `storyboard.md` | Sau khi người duyệt thời lượng | Cùng các beat, thêm mốc giây cộng lại đúng số đã duyệt |

Chưa duyệt thời lượng thì không có `storyboard.md`, không khóa `durationInFrames`, không render episode.

## Ý nhìn được trên sân

Một chủ đề chưa đủ để làm clip. "Giới thiệu AI agents" bị loại. Ý được viết khi có một kết quả nhìn được trên sân.

Trước khi chốt hook, đọc hook đã chọn và payoff của episode đã có. Trùng hình thì đổi góc.

Ba hook phải khác cách mở. Ba câu diễn lại một ý không tính. Hook hứa điều payoff và hình không chứng minh thì bỏ.

Khi ý có chỗ không đúng, một beat nói chỗ đó.

Câu dùng một từ mà sân chưa chỉ thì ví dụ đời thường đứng trên sân đó, hoặc câu đợi sân sau.

## Sáu phần, đủ mỗi phần một việc

| Phần | Câu hỏi | Trong gói |
|---|---|---|
| Hook | Vì sao dừng lướt? | Một hình ở giây 0 cộng một câu. Hứa điều phần sau chứng minh được |
| Curiosity | Còn muốn biết gì? | Một câu hỏi cụ thể, không giấu kết luận đến phút cuối |
| Demonstration | Đang nhìn thấy gì? | Bằng chứng nhìn được. Chữ trên nền tối không tính là chứng minh |
| Progression | Cảnh này thêm thông tin gì? | Bỏ được mà không mất ý thì bỏ |
| Payoff | Nhận được gì sau khi xem? | Một kết quả, một cách làm, hoặc một quy tắc quyết định |
| Shareability | Gửi cho ai, vì sao? | Một lý do cụ thể. Không viết câu kêu gọi like |

Bốn kiểu hook, chọn một: kết quả bất ngờ, vấn đề cụ thể, thử nghiệm, phá một hiểu lầm. Hook phải khớp payoff. Mở bằng ví dụ đời thường, chỉ ra mâu thuẫn, hứa một hình người xem sẽ thấy.

Ba cấu trúc kể, chọn một: kết quả trước rồi giải thích, vấn đề rồi thử rồi kết quả, hiểu lầm rồi bằng chứng rồi kết luận.

## Thiết kế hình

Mỗi beat chọn đúng một kiểu:

- **UI thật** — quay màn hình công cụ đang chạy (ShareX). Prompt, lỗi, trước/sau, kết quả đều là việc đã xảy ra.
- **Sơ đồ chuyển động** — khái niệm trừu tượng (index, hàng đợi, trade off) khi chưa có công cụ để quay, hoặc khi quay không làm ý rõ hơn.
- **Zoom** — phóng vùng thao tác trên footage thật. Không zoom một ảnh vẽ giả làm bằng chứng.

Thiếu footage thì ghi `placeholder` và nói thiếu gì. Không vẽ giao diện giả rồi gọi là đã chạy.

## Ví dụ đời thường

Trước thuật ngữ, một vật người không làm kỹ thuật đã dùng: danh bạ, ngăn kéo, giá sách, hàng chờ. `brief.md` ghi một câu ví dụ và một câu kỹ thuật cùng cấu trúc. `design.md` đặt vật đó lên sân đầu. Sân sau mới là bảng, cột, hoặc lệnh.

Lời người xem đọc theo `.cursor/rules/human-voice.mdc`. Từ bài đang dạy giữ tiếng Anh. Từ phổ thông như note và Follow giữ tiếng Anh. Tên cột và phép đo không phải bài học thì nói bằng việc người xem nhận ra: nhóm thay cho bucket, lần ở giữa thay cho median, ghép thay cho join, trừ khi người duyệt giữ từ tiếng Anh đó. Không dịch cả clip sang ví dụ. Câu cuối mọi clip là câu follow chuẩn trong rule.

## Nền và bảng

Mỗi sân trong `design.md` ghi nền: tối, lệch lạnh hoặc ấm so với `#0c0f14`. Beat so sánh thì hai cột trước/sau. Phía chậm `#e07a5f`, phía nhanh `#7dcec4`. Con trỏ nhảy tới chỗ khớp.

Ảnh và chữ dọc 1080×1920: không đặt chữ trong 168 px trên cùng, không đặt chữ dưới y=1330, cỡ chữ đọc được từ 28 px. Frame 0 đã có ví dụ đời thường đang làm việc. Mỗi beat trong `design.md` ghi vật đứng yên, thứ chạy, nền, từ đổi màu, và số kèm nhãn nguồn. Dải chữ là lời giảng, mỗi câu khoảng 5–6 giây.

## Đề xuất thời lượng

Ước lượng sau khi liệt kê beat, trước khi gắn giây.

Clip: không sàn cố định, trần 5 phút (300 giây). Mỗi beat là một ý người xem kịp nhận ra, không phải một nhịp cắt. Tiếng Việt trên màn hình cần dòng ngắn và đủ lâu để đọc.

Viết đề xuất ngay trong `brief.md` và trong tin nhắn cho người duyệt:

```text
Đề xuất: Ns
Ngắn hơn: As — mất: ...
Dài hơn: Bs — thêm: ...
Vì sao Ns: ...
Chốt Ns, chọn phương án kia, hay sửa?
```

Dừng. Chỉ viết `storyboard.md` sau khi có số giây được duyệt. Tổng các mốc phải bằng số đó.

## Kiểm tra trước khi đưa gói

- `brief.md` có một ví dụ đời thường, và sân đầu trong `design.md` dùng ví dụ đó.
- Ý có một kết quả nhìn được trên sân. Ba hook khác cách mở. Hook đã chọn và payoff không trùng episode trước.
- Khi ý có biên, một beat nói chỗ đó. Câu dùng từ nào thì sân đó đã chỉ từ ấy, hoặc câu đợi sân sau.
- Thông tin kỹ thuật có nguồn trong `brief.md`. Chỗ chưa kiểm chứng ghi là chưa kiểm chứng. Tên, số, và kết quả trên hình lấy từ `brief.md` hoặc `measure.md`.
- Lời hứa của hook xuất hiện trong payoff.
- Có ít nhất một beat demonstration không phải chữ thuần.
- Không có beat nào chỉ để cho video "có vẻ nhanh".
- Giọng đọc: người tự thu, hoặc chỉ caption. Không gọi TTS trả phí. KorvaTTS local chỉ khi người duyệt muốn thử giọng máy.
