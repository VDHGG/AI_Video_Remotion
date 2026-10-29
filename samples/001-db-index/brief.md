# 001 — Index và cái giá của nó

Đã duyệt: 110 giây, 60 fps. Bản 85 giây không dùng.

Người xem là người mới viết câu lọc, đang nghe "cứ thêm index cho nhanh".

Một thông điệp: index trên cột dùng để lọc làm câu đếm trong demo này nhanh hơn, và làm câu ghi cùng bảng đắt hơn, file nặng hơn.

Việc làm được sau clip: chọn cột hay lọc hoặc hay join, rồi đo cả đọc lẫn ghi. Bỏ index khi bảng ít dòng, cột ít giá trị khác nhau, cột bị sửa liên tục, hoặc câu lọc không đụng cột đó.

Khoảng trống: hook nói cả hai phía. Phần sau cho thấy trên cùng một bảng, vệt đọc đi hết các dòng rồi nhảy tới đúng dòng, và lúc ghi thì khối index phải sửa theo.

Nguồn số: `measure.md`, một lần chạy SQLite local ngày 2026-10-27. Chỗ chưa đo trên máy này thì không có số. 1,3 ms và 0,04 ms là lần ở giữa của câu đếm `bucket = 7` trên 50.000 dòng, Index đủ để đếm mà không mở cột note. Không phải mọi câu hỏi. Trên hình nói Index, nhóm, lần ở giữa, ghép, và note. File đo giữ tên cột và từ median.

Giọng: không thu. Chữ trên hình là lời. Không TTS.

Gửi cho người đang tạo index trên mọi cột.

## Thời lượng đã chốt

110 giây, 60 fps. Mốc trong `storyboard.md`.

- 0–20 sân đọc: hook, vệt đi hết dòng, rồi nhảy
- 20–48 cùng bảng, hai số câu đếm
- 48–70 sân ghi
- 70–88 bốn trường hợp chưa đáng thêm
- 88–100 quy tắc
- 100–110 follow
