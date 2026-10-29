# 002 — Harness, đặt cạnh Prompt và Context

Đã duyệt: 205 giây, 30 fps. Mốc trong `storyboard.md`.

Người xem là người chưa làm kỹ thuật, và cả người đang sửa câu lệnh cho hệ thống mà kết quả vẫn lệch. Một clip cho cả hai. Harness là phần khó, nên clip đi chậm ở vòng kiểm, không dồn nó vào vài câu.

Một thông điệp: Prompt, Context, và Harness là ba việc khác nhau. Câu giao việc giúp hiểu việc. Tờ giấy đặt sẵn món cần có. Harness là vòng sau đó: được làm gì, đối chiếu, thiếu thì quay lại, đủ thì dừng, và bạn xem lại trước khi nhận. Một danh sách có dấu xong, mà không ai quay lại, chưa phải vòng đó.

Ví dụ đời thường: nhờ người nhà đi chợ nấu cơm tối. Câu kỹ thuật cùng cấu trúc: giao hệ thống một việc. Câu nhắn là Prompt. Tờ giấy, tiền, và tên chợ là Context. Cổng quầy, dấu trên từng món, cú quay lại, lúc dừng, và người nhà xem giỏ là Harness.

Việc làm được sau clip: khi một việc giao cho hệ thống bị lệch, chỉ ra nó lệch ở câu giao việc, ở thông tin đặt sẵn, hay ở vòng kiểm. Nhận ra một danh sách nằm yên không phải vòng kiểm.

Khoảng trống: hook cho thấy giỏ về thiếu rau. Phần sau cho thấy câu rõ hơn vẫn quên món, tờ giấy ghi sai thì mua sai, tờ giấy đúng vẫn chưa đếm giỏ. Rồi vòng kiểm đi từng bước. Rồi một dấu "xong" hiện trong khi chỗ rau vẫn trống.

Gửi cho người đang chỉ sửa câu prompt.

Giọng: KorvaTTS trên máy, giọng Gia Bảo. Dải dưới là phụ đề của câu đọc. Chữ trên hình giữ `40`. File đọc nói bốn mươi.

## Nguồn, và chỗ không đưa lên hình

Anthropic, bài [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents): Prompt engineering là cách viết và sắp câu lệnh. Context engineering là cách chọn và giữ thông tin trong lúc hệ thống đọc, gồm cả phần nằm ngoài câu lệnh.

Harness engineering chưa có một định nghĩa chính thức duy nhất. Nhiều bài 2026 mô tả Harness là phần chạy quanh mô hình: việc được phép làm, lần làm lại, bài kiểm, lúc nào thì dừng. Cùng các bài đó không đồng ý Harness nằm trên Context hay là một dạng của Context. Trên hình không ghi năm, không ghi ai đặt tên, không ghi công thức "Agent = Model + Harness". Bốn bước trên hình là cách clip dẫn chuyện, không phải danh sách chuẩn của ngành.

Ba món trong giỏ (rau thơm, thịt, mì) là sơ đồ minh họa, không phải số đo. Không có `measure.md`.

## Câu follow

Dùng đúng câu của series, không viết lại:

> Hãy Follow Anh 40 học AI để cập nhật nhiều thông tin về AI hơn.

## Thời lượng đã chốt

121,2 giây, 30 fps, 3636 frame. 35 câu giảng cộng câu follow. Mỗi câu dài bằng file tiếng, rồi 0,3 giây trước câu sau. Câu follow không có khoảng đó. Dải dưới 54 px.

- 0–8,667 sân giỏ
- 8,667–20,767 sân câu nhắn
- 20,767–39,8 sân mặt bàn
- 39,8–67,867 sân vòng kiểm
- 67,867–84,533 sân từng bước của hệ thống
- 84,533–93,833 sân dấu xong giả
- 93,833–103,667 sân ba giỏ
- 103,667–116,967 sân quy tắc
- 116,967–121,2 follow
