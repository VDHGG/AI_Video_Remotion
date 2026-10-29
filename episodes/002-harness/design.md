# Design

Sơ đồ, không quay chợ, không vẽ ứng dụng nhắn tin rồi gọi là đã chạy. Điện thoại trên hình là hình chữ nhật có một câu, nhãn `SƠ ĐỒ MINH HỌA`. Giọng Gia Bảo đọc phụ đề. Chữ trên hình giữ `40`. Miệng đọc bốn mươi.

Nền gốc `#0c0f14`. Nhãn `#f4f1ea`. Số và câu hỏi `#e7c56a`. Bước đang chạy, phía xong `#7dcec4`. Chỗ thiếu, phía hỏng `#e07a5f`. Ô `#1c2430`. Font Be Vietnam Pro Bold, `public/fonts/BeVietnamPro-Bold.ttf`.

Chữ không vào 168 px trên cùng, không dưới y=1330. Cỡ nhãn từ 28 px. Dải dưới 54 px, rộng 936 px, bắt đầu ở y=1088, cách dòng 1,22. Câu dài được xuống tối đa ba dòng, đáy vẫn trên y=1330. Một câu một lúc, dài bằng câu đang đọc. Từ thường sáng `#7dcec4` rồi về kem. Một từ có vai thì ở lại đúng màu. Dải không chép lại nhãn đã in trên sơ đồ.

Đổi sân thì cắt. Nền đổi trong cùng nhát cắt. Không vệt che chữ, không glitch, không rung. Sân mới đã có vật ở frame đầu. Trong một sân, cứ 2–4 giây có một dấu mới. Cú nhảy khoảng 0,16–0,2 giây, ease ra. Vệt nhảy, không bò.

Ba món rau thơm, thịt, mì là đồ trong sơ đồ, không phải số đo. Bốn bước của Harness là cách dẫn chuyện trong clip, không ghi là danh sách chuẩn của ngành.

Mỗi câu dài bằng file tiếng của câu đó. Mốc giây nằm trong `storyboard.md`.

## Sân giỏ

Nền hơi ấm, tâm `#242a33`, mép `#12161c`.

Đứng yên: một giỏ trên sàn, ba chỗ. Thịt và mì đã nằm trong giỏ. Chỗ rau trống, viền `#e07a5f`. Một điện thoại sơ đồ cạnh giỏ, câu `Mua đồ nấu cơm tối.` Cạnh giỏ, hai dòng hook: `Mua đồ nấu cơm tối.` màu kem, `Giỏ về thiếu rau.` màu `#e07a5f`. Nhãn nhỏ `SƠ ĐỒ MINH HỌA`.

Chạy: vệt chạm chỗ rau trống, dừng ở đó. Chỗ trống không tự đầy.

Dải dưới:

- Bạn chỉ nhắn một câu, rồi đợi giỏ đồ về. `đợi` ở lại `#e07a5f`.
- Về tới nhà, giỏ thiếu rau. `thiếu` ở lại `#e07a5f`.
- Câu đã gửi. Rau vẫn không có trong giỏ. `không có` ở lại `#e07a5f`.

## Sân câu nhắn

Chủ thể đổi: từ giỏ sang câu nhắn. Cắt. Nền ấm hơn, tâm `#2a1c16`, mép `#16110e`.

Đứng yên: điện thoại sơ đồ lớn ở giữa. Giỏ nhỏ ở góc dưới, chỗ rau vẫn trống. Nhãn `Prompt`.

Chạy: câu cũ mờ. Câu mới hiện từng cụm, màu `#e7c56a`: rau thơm, thịt, mì, chợ đầu ngõ. Giỏ nhỏ không đổi sau khi câu đã rõ.

Dải dưới:

- Prompt engineering là cách bạn viết câu giao việc. `Prompt` ở lại `#7dcec4`.
- Câu mới ghi rau thơm, thịt, mì, và chợ đầu ngõ. `rau thơm` ở lại `#e7c56a`.
- Câu rõ giúp người đi chợ hiểu việc. `hiểu` ở lại `#7dcec4`.
- Người đi chợ vẫn có thể quên rau. `quên` ở lại `#e07a5f`.

## Sân mặt bàn

Chủ thể đổi: từ câu nhắn sang đồ đặt trên bàn. Cắt. Nền lạnh, tâm `#16343c`, mép `#0e1718`.

Đứng yên: mặt bàn. Điện thoại thu về một góc. Nhãn `Context`. Giỏ ở mép, chỗ rau trống.

Chạy: tờ giấy, tờ tiền, và mảnh `chợ đầu ngõ` lần lượt đáp xuống, mỗi thứ một nhịp khoảng 0,2 giây, ease ra. Tờ giấy ghi rau thơm, thịt, mì. Rồi dòng rau thơm đổi thành một món sai màu `#e07a5f`, một bó rau sai hiện ra và bị gạt khỏi giỏ, không ở lại. Dòng trên giấy trở lại rau thơm. Chỗ rau trong giỏ vẫn trống. Không có dấu tick.

Dải dưới:

- Context engineering là đồ bạn đặt sẵn trước mặt người đi chợ. `Context` ở lại `#7dcec4`.
- Tờ giấy, tiền, và tên chợ nằm trên bàn. `trên bàn` ở lại `#7dcec4`.
- Tờ giấy ghi sai rau, người đi chợ mua sai rau. `sai` ở lại `#e07a5f`.
- Với hệ thống, đó là tài liệu và việc vừa xảy ra, đặt sẵn lúc nó làm. `đặt sẵn` ở lại `#7dcec4`.
- Đủ đồ trên bàn. Chưa ai đếm lại giỏ. `Chưa` ở lại `#e07a5f`.

## Sân vòng kiểm

Chủ thể đổi: từ mặt bàn sang đường đi của cùng một lần chợ. Cắt. Nền lạnh, tâm `#12343a`, mép `#0c1416`.

Đứng yên từ frame đầu của sân: danh sách ba dòng, quầy rau, một quầy đồ ăn vặt ở mép, giỏ dưới. Nhãn `Harness`. Nhãn nhỏ `SƠ ĐỒ MINH HỌA`. Câu nhắn và tờ giấy thu nhỏ, nằm trong vòng, không biến mất.

Các dấu vào lần lượt, sân không đổi:

- Cổng quầy rau mở, màu `#7dcec4`. Quầy đồ ăn vặt tối lại, một gạch `#e07a5f`.
- Vệt nhảy tới thịt, dòng thịt sáng `#7dcec4`, thịt đã ở trong giỏ. Nhảy tới mì, cùng vậy. Nhảy tới rau, dòng rau sáng `#e07a5f`, chỗ trong giỏ trống.
- Vệt nhảy sang quầy rau. Một bó rau sáng `#7dcec4`. Nhảy về đúng chỗ trống. Chỗ đó đầy.
- Dấu `đã xem` màu kem hiện cạnh giỏ.
- Quầy đồ ăn vặt vẫn tối. Không có món thứ tư chui vào giỏ.

Dải dưới:

- Harness engineering là vòng quanh lần đi chợ, sau khi câu và tờ giấy đã có. `Harness` ở lại `#7dcec4`.
- Câu nhắn và tờ giấy nằm trong vòng này. Vòng hỏi việc đã xong chưa. `xong chưa` ở lại `#e7c56a`.
- Được vào quầy rau. Không mua món ngoài danh sách. `quầy rau` ở lại `#7dcec4`.
- Làm xong, nhìn lại từng dòng. Thịt có, mì có, rau chưa có. `chưa có` ở lại `#e07a5f`.
- Thiếu rau thì quay lại quầy. Chưa mang giỏ thiếu về nhà. `quay lại` ở lại `#7dcec4`.
- Đủ ba món thì về. Người nhà xem giỏ, rồi mới nấu. `xem giỏ` ở lại `#7dcec4`.
- Không ghé thêm quầy cho có. `Không` ở lại `#e07a5f`.

## Sân từng bước của hệ thống

Chủ thể đổi: từ chợ sang việc hệ thống làm. Cắt. Nền lạnh, tâm `#16343c`, mép `#0e1718`.

Không phải bốn ô chữ giống nhau. Năm dấu, mỗi dấu lặp lại một vật vừa thấy ở chợ, vào từng dấu một và ở lại:

- Cổng nhỏ, nhãn `được phép`.
- Ba dòng, dòng rau trống, nhãn `đối chiếu`.
- Mũi tên quay lại quầy, nhãn `làm lại`.
- Một gạch dừng, nhãn `dừng`.
- Dấu mắt, nhãn `bạn xem`.

Dải dưới:

- Với hệ thống, vòng này cũng đi từng bước. `từng bước` ở lại `#7dcec4`.
- Chỉ làm việc bạn đã cho phép. `cho phép` ở lại `#7dcec4`.
- Làm xong thì đối chiếu với việc đã giao. `đối chiếu` ở lại `#7dcec4`.
- Thiếu thì làm lại. `làm lại` ở lại `#7dcec4`.
- Đủ thì dừng. `dừng` ở lại `#e7c56a`.
- Việc quan trọng thì bạn xem lại trước khi nhận. `xem lại` ở lại `#e7c56a`.

## Sân dấu xong giả

Chủ thể đổi: từ vòng đang chạy sang một vòng không chạy. Cắt. Nền ấm, tâm `#2a1c16`, mép `#16110e`.

Đứng yên: cùng danh sách ba món. Giỏ thiếu rau. Quầy rau tối, không có vệt nhảy sang quầy.

Chạy: một dấu `xong` màu `#e07a5f` rơi xuống danh sách. Chỗ rau trong giỏ vẫn trống. Không ai đi tới quầy.

Dải dưới:

- Có danh sách. Không ai quay lại quầy. `Không ai` ở lại `#e07a5f`.
- Giỏ vẫn thiếu rau. Dấu xong vẫn hiện. `xong` ở lại `#e07a5f`.
- Tờ giấy nằm yên. Quay lại quầy thì vòng mới chạy. `Quay lại` ở lại `#7dcec4`.

## Sân ba giỏ

Chủ thể đổi: từ một vòng giả sang ba kết quả của cùng một lần đi. Cắt. Nền tâm `#16181c`, mép `#0c0f14`.

Không chia ba cột dọc. Ba hàng ngang, mỗi hàng một giỏ đủ rộng để thấy trên điện thoại. Hàng vào từng hàng một và ở lại.

- Hàng 1, nền ấm, nhãn `Chỉ có câu nhắn`. Giỏ thiếu rau. Thanh dài màu `#e07a5f`.
- Hàng 2, nhãn `Có tờ giấy`. Đủ tên món trên giấy, một chỗ trong giỏ vẫn trống. Dấu `?` màu `#e7c56a`.
- Hàng 3, nền lạnh, nhãn `Có vòng kiểm`. Giỏ đủ ba món. Thanh ngắn màu `#7dcec4`, đủ cao để còn là một thanh. Thanh không theo một tỉ lệ đo.

Dải dưới:

- Chỉ có câu nhắn, giỏ về thiếu rau. `thiếu` ở lại `#e07a5f`.
- Có tờ giấy, đúng món cần mua, vẫn có thể thiếu. `thiếu` ở lại `#e07a5f`.
- Có vòng kiểm, thiếu rau thì quay lại, rồi mới về. `quay lại` ở lại `#7dcec4`.

## Sân quy tắc

Chủ thể đổi: từ ba giỏ sang việc bạn chọn lúc hệ thống lệch. Cắt. Nền tâm `#12161c`, mép `#0c0f14`.

Đứng yên: tiêu đề `Khi việc bị lệch`. Ba dòng vào từng dòng một và ở lại.

- `Sửa câu` màu `#e7c56a`. Dòng nhỏ: hệ thống hiểu sai việc.
- `Đưa tài liệu` màu `#7dcec4`. Dòng nhỏ: thiếu thông tin, hoặc tài liệu đang sai.
- `Dựng vòng kiểm` màu `#7dcec4`. Dòng nhỏ: làm xong vẫn cần biết đúng hay sai.

Rồi một dòng chốt, `Câu nhắn` màu kem, `không kiểm được giỏ` màu `#e07a5f`.

Dải dưới:

- Sửa câu khi hệ thống hiểu sai việc bạn giao. `Sửa câu` ở lại `#e7c56a`.
- Đưa tài liệu khi hệ thống thiếu thông tin, hoặc tài liệu đang sai. `tài liệu` ở lại `#7dcec4`.
- Dựng vòng kiểm khi làm xong vẫn cần biết đúng hay sai. `vòng kiểm` ở lại `#7dcec4`.
- Câu nhắn không kiểm được giỏ. `không kiểm` ở lại `#e07a5f`.

## Follow

Cắt. Nền tâm `#12161c`, mép `#0c0f14`. Ba dòng, đúng câu đã chốt. Không thêm nút. Không thêm ý.

- Hãy Follow
- Anh 40 học AI
- để cập nhật nhiều thông tin về AI hơn.

`Anh 40 học AI` màu `#e7c56a`. Hai dòng kia màu `#f4f1ea`.
