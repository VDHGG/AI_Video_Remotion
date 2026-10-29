---
name: stage-picture
description: Picture-first layout for this repo's vertical explainers. Use when designing a beat, a diagram, on-screen type, color, a table, or a storyboard frame. One stage, role colors, a ground that shifts with the scene, motion that is the proof.
---

# Sân khấu và hình

Đọc `.cursor/rules/stage-picture.mdc` trước. Rule đó là ràng buộc. Skill này là thứ tự làm một beat.

Câu người xem đọc vẫn chạy skill `humanizer` theo `.cursor/rules/human-voice.mdc`. Số và nguồn vẫn lấy từ `measure.md` hoặc trang đã ghi trong brief. Skill này không thêm số.

## Trước khi vẽ một beat

1. Viết một câu người xem cần thấy. Nếu beat là sân đầu, câu đó là ví dụ đời thường đã ghi trong `brief.md`.
2. Chọn vật trên sân: danh bạ, ngăn kéo, bảng, hai cột trước/sau, một số, một cửa sổ lệnh thật.
3. Hỏi beat này thêm gì lên sân đang có. Thêm được thì giữ sân. Chủ thể đổi thì mới mở sân mới, và nền lệch theo sân mới.
4. Gán vai màu: vàng cho số hoặc câu hỏi, `#7dcec4` cho bước đang chạy và phía nhanh, `#e07a5f` cho chỗ tốn kém và phía chậm. Nhãn còn lại `#f4f1ea`.
5. Viết một hoặc hai câu giảng dưới sân. Tô một từ. Giữ câu khoảng 5–6 giây. Trong khoảng đó sân vẫn nhận một dấu mới.

## So sánh

Hai cột hoặc một bảng trên cùng một sân. Cột chậm nền ấm, thanh dài màu `#e07a5f`. Cột nhanh nền lạnh, thanh ngắn màu `#7dcec4`. Số lớn hơn đơn vị. Người chưa đọc dải chữ vẫn chỉ được phía nào tốn hơn.

Hàng vào từng dòng một. Bốn mục thì để bốn.

## Chuyển động

Con trỏ nhảy giữa các chỗ khớp, mỗi cú khoảng 0,16–0,2 giây, ease ra. Vài nhịp ngắn là đủ để thấy nó đang tìm. Không cho con trỏ bò hết bảng.

Trong một sân, cứ 2–4 giây có một dấu mới trong lúc câu giảng còn trên màn. Hình và chữ không cùng đứng quá 3 giây.

Đổi sân thì cắt, hoặc một vệt màu dưới nửa giây, và nền đổi trong cùng nhịp đó.

## Cấm trên hình

- Gradient tím, font Inter, card lồng card, ba ô ngang nhau chỉ để đủ bộ.
- Mỗi câu một card chữ mới, cùng cỡ, cùng chỗ.
- Glow trên mọi từ.
- Phụ đề chui xuống dưới y=1330.
- Vẽ giao diện phần mềm rồi ghi là đã chạy.
- Cả clip một nền phẳng khi chủ thể đã đổi.
- Thanh nhanh mỏng đến mức không thấy trên điện thoại.

## Khi đưa vào composition

Một sân là một `Sequence`. Beat thêm dấu thì animate trong Sequence đó, theo `useCurrentFrame`. Đổi sân thì sang Sequence kế và đổi nền.

`design.md` ghi với mỗi sân: vật nào đứng yên, thứ gì chạy, nền lệch lạnh hay ấm, từ nào đổi màu, số nào và nhãn nguồn nào, và bảng trước/sau nếu beat là so sánh. Chưa duyệt thời lượng thì phần này chưa có giây.
