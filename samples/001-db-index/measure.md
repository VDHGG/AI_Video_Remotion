# Đo trên máy này

Ngày chạy: 2026-10-27. Python 3.11.9, module `sqlite3` của thư viện chuẩn. Máy không có lệnh `sqlite3`. Script: `measure.py`. File `demo.db` đã xóa sau khi đo.

Bảng `orders`: 50.000 dòng, `bucket = id % 100`, `note = 'row'`. Câu đếm: `SELECT count(*) FROM orders WHERE bucket = 7`. Khớp 500 dòng.

Một lần chạy nóng bị bỏ. Median của 9 lần sau:

- Chưa có index: `SCAN orders`. Median 1,289 ms. Lên hình: 1,3 ms.
- Sau `CREATE INDEX idx_orders_bucket ON orders(bucket)`: `SEARCH orders USING COVERING INDEX idx_orders_bucket (bucket=?)`. Median 0,037 ms. Lên hình: 0,04 ms.

File demo trước index: 696.320 byte. Sau index: 1.167.360 byte. Index thêm 471.040 byte, lên hình là 460 KB.

Ghi, bảng trong bộ nhớ, 8.000 dòng, 5 lần, lấy median:

- Chưa có index: 5,2 ms.
- Đã tạo index trên `bucket` rồi mới ghi: 8,2 ms.

Index của câu đếm là covering index: `count(*)` không cần cột `note`. Số 1,3 ms và 0,04 ms là cho câu đếm này, không phải cho mọi `SELECT`.
