# Design

Sơ đồ, không vẽ cửa sổ database. Không có tiếng. Dòng chữ dưới sơ đồ dẫn chuyện, một câu một lúc, sát đáy vùng an toàn.

Nền `#0c0f14`. Nhãn `#f4f1ea`. Số và câu hỏi `#e7c56a`. Bước đang chạy `#7dcec4`. Chỗ ghi đắt hơn `#e07a5f`. Font Be Vietnam Pro Bold, `public/fonts/BeVietnamPro-Bold.ttf`.

Chữ không vào 168 px trên cùng, không dưới y=1330. Cỡ từ 28 px. Số đo (`1,3 ms`, `0,04 ms`, `5,2 ms`, `8,2 ms`, `460 KB`) là chữ lớn của sân đó. `8` và `2` trên sân đầu là số dòng của sơ đồ, nhỏ hơn số đo.

Đổi sân thì cắt. Sân mới đã có vật ở frame đầu. Không có vệt che chữ.

## Sân đọc, 0–16 giây

Năm giây đầu là quyển danh bạ. Vệt nhảy A, Đ, M, rồi N. Hai câu hook đứng cạnh sách. Nền hơi trung tính. Sau đó sách thu lại, nền chuyển lạnh, bảng nhóm hiện ra. Câu `nhóm = 7` màu vàng. Vệt nằm trên dòng đầu. Cột này trong file đo tên là `bucket`.

Chạy: vệt nhảy từng dòng, khoảng nửa giây một dòng, rồi nhảy tới hai dòng số 7. Dòng không khớp đổi nền. Nhãn `8 dòng đã đọc` rồi `2 dòng khớp`.

Dòng dưới đổi từng câu. Một từ mang màu vai.

## Sân hai đường, 16–40 giây

Đứng yên: hai sơ đồ đường đi, cùng các số nhóm với sân trước. Nhãn trái "đọc hết bảng", nhãn phải "nhảy nhờ Index".

Chạy: vệt trái đi hết các dòng, thanh dài màu chỗ tốn kém, số `1,3 ms`. Vệt phải chỉ nhảy hai dòng số 7, thanh ngắn màu bước đang chạy, số `0,04 ms`. Thanh ngắn đủ cao để còn là một thanh.

Dòng nhỏ: 50.000 dòng, câu đếm nhóm = 7, lần ở giữa của 9 lần đo.

## Sân ghi, 40–60 giây

Đứng yên: vài dòng bảng và hai dòng Index.

Chạy: một dòng `nhóm 7` vào, dòng Index mới sáng màu chỗ tốn kém. Số `5,2 ms` rồi `8,2 ms` đứng cạnh nhau. `460 KB` ở dưới, kèm nhãn file 50.000 dòng. Nhãn 8.000 dòng gắn với hai số phần nghìn giây, vì đó là lần ghi trong bộ nhớ.

## Sân lúc chưa đáng thêm, 60–84 giây

Tiêu đề đứng yên, có chữ "sơ đồ". Bốn hình lần lượt trong cùng một khung:

- Ba dòng, vệt đi hết.
- Nhiều dòng cùng một giá trị.
- Một giá trị đổi, dòng Index sáng màu chỗ tốn kém.
- Câu hỏi cột note, khối Index của cột nhóm giữ màu nhãn.

Bốn dòng danh sách vào từng dòng một và ở lại.

## Sân quy tắc, 84–102 giây

Bảng với dòng 7 đang sáng. Rồi một bảng thứ hai, dòng `nhóm 7` cũng sáng, nhãn "bảng đem ghép". Mũi tên nối hai bảng. Hai dòng "đo lúc đọc" và "đo lúc ghi" vào sau.

## Follow, 102–110 giây

Ba dòng, đúng câu đã chốt. Tên kênh màu vàng. Không thêm nút.
