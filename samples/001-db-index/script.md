# Script

Tổng 110 giây. Đã duyệt: giữ 110. Không có tiếng. Dòng chữ dưới dẫn chuyện, mỗi câu khoảng 5–6 giây. Lên hình gọi Index, nhóm, lần ở giữa, ghép, và note. File đo giữ tên cột `bucket` và từ median.

Giọng nói với người đang học: "bạn", "hệ thống", "bảng của bạn". Số chỉ lấy từ `measure.md`.

## Ba hook

Chọn hook này. Hai câu đứng cạnh bảng từ frame 0.

> Có Index thì tìm nhanh hơn.
> Lúc thêm dòng thì chậm hơn.

Dự phòng, không dùng:

> Hỏi một cột. Chưa có Index thì phải đọc hết bảng.

> Bạn thêm Index cho nhanh. Đo lúc ghi chưa?

## Chữ trên hình

Sân đọc, 0–16 giây. Câu `nhóm = 7` ở trên bảng. Cột này trong file đo tên là `bucket`.

- Bạn tìm một tên trong danh bạ. Mở đúng chữ cái, khỏi đọc hết trang.
- Bạn hỏi có bao nhiêu dòng thuộc nhóm 7. Hệ thống đi lần lượt từng dòng.
- Có Index thì hệ thống nhảy tới dòng nhóm 7. Tám dòng này là sơ đồ. Bảng của bạn có 50.000 dòng.

Sân hai đường, 16–40 giây.

- Bạn đếm dòng nhóm 7 trên bảng 50.000 dòng. Bên trái là lúc đọc hết bảng.
- Bên phải đã có Index ở cột nhóm. Hệ thống nhảy tới đúng dòng. Lần ở giữa là 0,04 ms.
- Hai số là lần ở giữa của 9 lần đo. Index đủ để đếm, khỏi mở cột note.
- Sang phần ghi, bạn thêm một dòng. Hệ thống còn phải sửa Index theo dòng đó.
- Dòng nhỏ dưới số: 50.000 dòng, câu đếm nhóm = 7, lần ở giữa của 9 lần đo.

Sân ghi, 40–60 giây.

- Bạn ghi thêm một dòng nhóm 7. Index của cột đó phải ghi thêm dòng này.
- 8.000 dòng ghi trong bộ nhớ. Chưa có Index: 5,2 ms. Đã có Index: 8,2 ms.
- File 50.000 dòng trên đĩa nặng thêm 460 KB. Hai số vừa rồi là phần nghìn giây, đo trong bộ nhớ.

Sân lúc chưa đáng thêm, 60–84 giây. Từng trường hợp một, mỗi trường hợp một sơ đồ.

- Bảng còn ít dòng thì đọc hết cũng xong nhanh. Index chưa giúp thêm bao nhiêu.
- Cột này hầu hết cùng một giá trị. Index vẫn phải đọc nhiều dòng.
- Cột bị sửa liên tục thì mỗi lần ghi, hệ thống sửa dòng và sửa Index.
- Câu hỏi không dùng cột nhóm thì Index không giúp gì. Đo lúc đọc và lúc ghi trước khi thêm.

Sân quy tắc, 84–102 giây.

- Đặt Index lên cột bạn hay hỏi. Ở đây là cột nhóm.
- Hoặc đặt lên cột bạn hay dùng để ghép hai bảng. Hai bảng gặp nhau ở nhóm 7.
- Đặt xong thì đo lại lúc đọc và lúc ghi trên bảng của bạn. Số phần nghìn giây sẽ khác hai số vừa rồi.

Follow, 102–110 giây.

- Hãy Follow Anh 40 học AI để cập nhật nhiều thông tin về AI hơn.
