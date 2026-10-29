# DB INDEX — V7 | KỊCH BẢN FINAL ĐỀ XUẤT & STORYBOARD HYPERFRAMES

**Chủ đề:** Database Index — khi nào giúp đọc nhanh, khi nào phải đánh đổi  
**Trạng thái:** Bản biên tập đề xuất để duyệt trước khi render; chưa kiểm tra với video v5 hoặc `measure.md` gốc  
**Thời lượng:** 110 giây (0–102 giây nội dung, 102–110 giây CTA)  
**Định dạng:** 1080 × 1920, 9:16, 60 fps, **không âm thanh**  
**Đối tượng:** Người mới học công nghệ, đã nghe đến database nhưng chưa rõ Index để làm gì  
**Thông điệp duy nhất:** *Index có thể giúp tìm nhanh, nhưng không miễn phí: nó tốn thêm công khi ghi và thêm dung lượng. Hãy đo trước khi thêm.*

> **Bản v7 không phá thiết kế v6:** giữ cấu trúc 6 sân, độ dài 110 giây, bảng màu, font, câu follow cố định, cách gọi `Index` / `nhóm` / `lần ở giữa` / `ghép`, dòng phụ đề 45 px và ý tưởng motion chủ đạo. Chỉnh lời, nhãn, nhịp reveal và một số chỗ dễ hiểu lầm. Các chi tiết motion bổ sung dưới đây là *đề xuất dựng*, không phải mô tả những gì đang có trong video v5.

---

## A. Audit v6 — sửa vấn đề từ lớn đến nhỏ

| Mức độ | Vấn đề v6 | Tại sao cần sửa | Quyết định v7 |
|---|---|---|---|
| P0 — chính xác | “Không hỏi cột nhóm thì Index đứng yên” | Việc truy vấn không dùng Index không đồng nghĩa Index không được cập nhật lúc ghi. | Đổi thành “Ít truy vấn dùng cột đó? Index có thể không đáng.” |
| P0 — số liệu | Minh họa 8 dòng/2 khớp đứng gần bài đo 50.000 dòng, thực tế 500 khớp | Dễ khiến khán giả nhầm số lượng được đo hoặc hiểu sai animation. | Gắn nhãn **SƠ ĐỒ MINH HỌA: 8 dòng · 2 khớp**, và ở bài đo gắn **BẢNG THỬ: 50.000 dòng · 500 khớp**. |
| P1 — overclaim | 1,3 vs 0,04 ms đặt cạnh nhau như chân lý chung | Kết quả phụ thuộc truy vấn, máy, hệ quản trị, chỉ mục, cách đo. | Ghi **“Kết quả phép thử này”**, nêu **“lần ở giữa của 9 lần đo”**; không tuyên bố mọi Index đều nhanh hơn từng ấy. |
| P1 — diễn giải | “Index đủ để đếm, khỏi mở cột note” | Dễ bị hiểu Index lúc nào cũng thay việc đọc dữ liệu. | Chỉ nói: **truy vấn đếm nhóm 7 không cần cột `note`**; trong bài đo này Index có lợi. |
| P1 — nhịp kể | Hook sớm tiết lộ lợi/hại nhưng chưa đặt câu hỏi hấp dẫn | Người xem thấy kiến thức, chưa có lý do ở lại. | Dùng đối lập **“TÌM NHANH” / “GHI CHẬM?”**, rồi dẫn bằng ví dụ danh bạ. |
| P1 — readability | Một số dải chữ dài, nhồi nhiều dữ kiện trong 5–6 giây | Người xem phải vừa đọc, vừa nhìn animation; 45 px dễ sang 3 dòng. | Mỗi beat có **một câu ngắn**, tối đa 2 dòng; số lớn hiện trên hình, câu dưới chỉ kể ý. |
| P2 — giọng điệu | Lặp “bạn”, “hệ thống”, “dòng”, “sửa Index” | Tạo cảm giác được máy tóm tắt, ít nhịp nói. | Chuyển sang câu gần lời kể, hỏi ngắn, câu có nhịp: “Nhưng cái giá xuất hiện…” |
| P2 — đơn vị | 471.040 byte được ghi là 460 KB | 471.040 byte = 460 KiB; “KB” là cách gọi gần đúng theo chuẩn nhị phân. | Giữ **≈460 KB** trên hình theo quy ước v6; kiểm tra lại cách ghi đơn vị nếu muốn tuyệt đối chính xác. |

### Những gì đã đúng, cần giữ

- Ví dụ **danh bạ** gần gũi, không cần người xem biết SQL.
- Hai nửa màu **lục/đọc nhanh** và **cam/chi phí ghi** có ngữ nghĩa rõ.
- Video **không tiếng**, chữ chạy theo motion là phương án phù hợp với dạng infographic.
- Phân biệt thử nghiệm **đọc 50.000 dòng**, **ghi 8.000 dòng trong bộ nhớ**, và **chi phí lưu trữ trên đĩa** là đúng hướng; không được gộp ba thí nghiệm thành một.
- Kết câu nhắc **đo cả lúc đọc và ghi** là kết luận có ích hơn khẩu hiệu “luôn tạo Index”.

---

## B. Hướng kể chuyện v7

1. **Móc câu (0–5s):** “Tìm nhanh, nhưng ghi chậm?” — tạo nghịch lý.
2. **Giải thích (5–16s):** Danh bạ dẫn tới bảng; Index là lối chỉ đến đúng vị trí, không phải phép màu.
3. **Bằng chứng (16–34s):** Cho xem kết quả phép đếm, rồi giải thích cách đo, tránh tâng bốc con số.
4. **Cú đảo chiều (34–60s):** Ghi thêm dữ liệu làm Index phát sinh việc và dung lượng.
5. **Ra quyết định (60–102s):** Bốn trường hợp nên cân nhắc, cách chọn cột, kết bằng nguyên tắc đo.
6. **CTA (102–110s):** Giữ câu chuẩn kênh, không nhồi thêm ý.

---

## C. Kịch bản triển khai — timeline khóa 110 giây

**Quy ước:** “Dải dưới” là câu người xem đọc, **không phải lời đọc/voiceover**. “Nhãn lớn” là visual nằm trên đồ họa, không lặp nguyên câu dải dưới. Thời gian là thời gian clip tuyệt đối.

### SÂN 1 — HIỂU INDEX QUA DANH BẠ | 0:00–0:16

**Màu:** tâm `#242a33`, mép `#12161c` khi có danh bạ; chuyển lạnh sang tâm `#16343c`, mép `#0e1718` khi có bảng.

#### 0:00–0:05 — Hook đối lập

**Dải dưới (giữ nguyên từng chữ):**  
> Cần tìm tên? Mở đúng chữ cái, khỏi lật cả danh bạ.

**Trên hình:** Mở ngay bằng hai vế hook, không cần intro/logo:
- Lục: **“INDEX: TÌM NHANH”**.
- Cam: **“NHƯNG GHI CHẬM?”**.
- Quyển danh bạ xuất hiện lớn, các thẻ A → Đ → M → N sáng tuần tự; dừng ở N, một hàng sáng lục.

**Motion:** Hook vào trong 0,35 giây đầu; danh bạ mở bằng một góc xoay rất nhỏ (không bounce quá đà). Nhấn thẻ N lâu hơn các thẻ trước. Để người xem hiểu “tìm đúng chỗ” bằng mắt.

#### 0:05–0:10 — Đổi vật quen thuộc thành bảng

**Dải dưới:**  
> Trong bảng dữ liệu, ta cũng cần tìm dòng thuộc nhóm 7.

**Trên hình:** Danh bạ thu thành góc rồi morph sang bảng **8 dòng**. Hiện câu hỏi màu vàng **`nhóm = 7`**. Vệt quét đi qua toàn bộ 8 dòng; những dòng không khớp hơi tối đi.

**Nhãn bắt buộc:** `SƠ ĐỒ MINH HỌA` (chữ nhỏ nhưng đọc được). Đừng gắn “50.000 dòng” vào bảng 8 dòng.

#### 0:10–0:16 — Chỉ ra lối tắt

**Dải dưới:**  
> Index chỉ tới dòng phù hợp, thay vì dò từng dòng.

**Trên hình:** Vệt nhảy tới hai dòng nhóm 7. Hai dòng sáng lục; label **“8 dòng · 2 khớp”**. Một đường mảnh từ khối `Index` sang các dòng phù hợp làm rõ “chỉ tới”.

**Motion:** Hai điểm đến sáng tuần tự, không nhấp nháy liên tục. Cuối sân, để một nhãn **“Từ minh họa → sang phép đo thật”** hiện rất ngắn làm cầu nối.

### SÂN 2 — INDEX GIÚP ĐỌC NHANH THẾ NÀO? | 0:16–0:40

**Màu:** tâm `#16343c`, mép `#0e1718`. Câu hỏi `nhóm = 7` giữ cố định để khán giả biết đây là **cùng một truy vấn**.

**Trên cùng:** nhãn **`BẢNG THỬ: 50.000 dòng · 500 dòng nhóm 7`**. Hai nửa: trái **CHƯA CÓ INDEX**, phải **CÓ INDEX**.

#### 0:16–0:22 — Đo khi chưa có Index

**Dải dưới:**  
> Chưa có Index: đếm nhóm 7 mất 1,3 ms.

**Trên hình:** Nửa trái quét qua toàn bộ bảng biểu tượng. Số **1,3 ms** lớn màu vàng; thanh cam kéo dài. Đặt nhãn nhỏ “Đọc qua bảng”.

**Motion:** Có đầu và cuối; tránh vệt quét chạy vòng lặp khiến người xem nghĩ phép đo chưa xong.

#### 0:22–0:28 — Đo khi có Index

**Dải dưới:**  
> Có Index: cùng phép đếm chỉ còn 0,04 ms.

**Trên hình:** Nửa phải nhảy vào mục nhóm 7 của Index. Số **0,04 ms** lớn màu vàng; thanh lục ngắn. Nửa trái vẫn còn để so sánh.

**Lưu ý:** Thanh minh họa sự tương phản. Nếu không dựng đúng tỉ lệ thời gian, không gọi là biểu đồ theo tỉ lệ.

#### 0:28–0:34 — Chứng cứ thay vì khoe số

**Dải dưới:**  
> Hai số là lần ở giữa của 9 lần đo.

**Trên hình:** Dưới hai số hiện ba dòng, tối giản:
- `Bảng: 50.000 dòng`
- `Phép thử: đếm nhóm = 7`
- `Lần ở giữa · 9 lần đo`.

**Nhãn nhỏ nếu đủ chỗ:** `Đã bỏ lượt làm nóng`. Không đưa một lời khẳng định chung chung như “nhanh gấp 30 lần” nếu chưa giải thích hoàn cảnh.

#### 0:34–0:40 — Cú chuyển sang mặt trái

**Dải dưới:**  
> Đọc nhanh hơn. Nhưng thêm dòng mới lại tốn việc hơn.

**Trên hình:** Nhãn **“THẾ CÒN LÚC GHI?”** hiện giữa hai cột. Một dòng `nhóm 7 · dòng mới` đi vào bảng; màu của đoạn cập nhật dần chuyển lục → cam.

**Motion:** Giảm sáng toàn bộ các thanh cũ trong 0,5 giây, ưu tiên nét cam nối từ dòng mới sang khối Index; chuyển nền ấm trước 0:40.

### SÂN 3 — CHI PHÍ LÚC GHI VÀ LƯU TRỮ | 0:40–1:00

**Màu:** tâm `#2a1c16`, mép `#16110e`; màu cam chỉ dùng cho **việc phát sinh thêm**. Không dùng quá nhiều chuyển động bút/ánh sáng.

#### 0:40–0:46,6 — Tại sao ghi tốn hơn?

**Dải dưới:**  
> Mỗi lần thêm dòng, máy còn phải cập nhật Index.

**Trên hình:** Dòng mới `nhóm 7` chui vào bảng, sau đó một đường cam chạy tới ô `Index`; mục `7` sáng lên. Dùng animation hai nhịp **(1) Ghi dòng → (2) Cập nhật Index** để tạo nhân quả.

**Không nên:** Vẽ một bản sao toàn bộ dòng vào Index; Index chỉ cần được hiểu là cấu trúc tìm kiếm bổ sung.

#### 0:46,6–0:53,2 — So sánh tốc độ ghi

**Dải dưới:**  
> Ghi 8.000 dòng trong bộ nhớ: từ 5,2 lên 8,2 ms.

**Trên hình:** Hai số lớn:
- Lục: **`Chưa có Index · 5,2 ms`**.
- Cam: **`Có Index · 8,2 ms`**.

**Nhãn nguồn ngay dưới:** **`Thử ghi 8.000 dòng · trong bộ nhớ`**. Thanh cam dài hơn thanh lục; không làm khán giả tưởng đây là thời gian ghi ra ổ đĩa.

#### 0:53,2–1:00 — Chi phí dung lượng

**Dải dưới:**  
> Index còn chiếm thêm khoảng 460 KB trên đĩa.

**Trên hình:** Biểu tượng ổ đĩa + một ô Index cộng thêm; số **`≈460 KB`** lớn, vàng. Dòng nguồn nhỏ: `Bảng thử 50.000 dòng`.

**Kỹ thuật:** Theo thông tin trong v6, 471.040 byte tương đương 460 KiB. Nếu xuất bản cần nghiêm ngặt về đơn vị, dùng `460 KiB` thay vì `460 KB`, hoặc giữ dấu `≈` như bản này.

### SÂN 4 — KHI NÀO CHƯA NÊN VỘI THÊM? | 1:00–1:24

**Màu:** tâm `#2a2218`, mép `#14120f`. Tiêu đề vàng **“ĐỪNG VỘI THÊM INDEX KHI…”** (không cam kết tuyệt đối “không đáng thêm”). Một danh sách 4 mục tích lũy; mỗi lần thêm một mục, đồ họa bên phải đổi theo.

#### 1:00–1:06 — Bảng nhỏ

**Dải dưới:**  
> Bảng ít dòng? Quét hết cũng có thể đã đủ nhanh.

**Trên hình:** Ba dòng xuất hiện, vệt quét đi hết rất nhanh. Danh sách mục 1: **`Bảng ít dòng`**.

#### 1:06–1:12 — Ít giá trị phân biệt

**Dải dưới:**  
> Cột có rất ít giá trị khác nhau? Đừng vội thêm Index.

**Trên hình:** Bốn dòng đều `nhóm 7`, cùng vàng. Danh sách mục 2: **`Nhiều dòng trùng giá trị`**.

**Chú ý nội dung:** Index vẫn *có thể* giúp trong vài trường hợp (index-only scan, một số chiến lược thực thi). Đừng diễn tả đây là nguyên tắc cấm tuyệt đối.

#### 1:12–1:18 — Cột thay đổi nhiều

**Dải dưới:**  
> Ghi hoặc sửa liên tục? Index cũng phải cập nhật theo.

**Trên hình:** `nhóm 7 → nhóm 8`; ô Index cập nhật cam. Danh sách mục 3: **`Cột bị ghi/sửa thường xuyên`**.

#### 1:18–1:24 — Ít được dùng trong truy vấn

**Dải dưới:**  
> Ít truy vấn dùng cột đó? Index có thể không đáng.

**Trên hình:** Bong bóng truy vấn hỏi `note`, trong khi Index đang nằm ở cột `nhóm`; cột nhóm không sáng. Danh sách mục 4: **`Ít truy vấn cần cột đó`**.

**Sửa lỗi v6:** Không viết hoặc đọc “Index đứng yên”. Dù truy vấn không dùng Index, thao tác ghi vào bảng vẫn có thể khiến Index phát sinh công cập nhật.

### SÂN 5 — CHỌN INDEX BẰNG CÁCH NÀO? | 1:24–1:42

**Màu:** tâm `#152028`, mép `#10141a`. Chỉ một câu hỏi trung tâm: **“CỘT NÀO ĐÁNG THỬ?”**.

#### 1:24–1:30 — Lọc dữ liệu

**Dải dưới:**  
> Bắt đầu từ cột bạn hay dùng để lọc dữ liệu.

**Trên hình:** Câu `nhóm = 7`; dòng phù hợp sáng lục. Label lớn **`Hay lọc → cân nhắc Index`**. Vệt đi tới mục 7, không cần thêm số mới.

#### 1:30–1:36 — Ghép hai bảng

**Dải dưới:**  
> Hoặc cột dùng để ghép hai bảng, rồi kiểm tra lại.

**Trên hình:** Hai bảng nối bằng đường lục tại cột chung `nhóm`. Label **`Hay ghép → cân nhắc Index`**. Giữ tiếng Việt “ghép”, không đưa chữ `join` lên clip.

#### 1:36–1:42 — Chốt nguyên tắc

**Dải dưới:**  
> Index không miễn phí. Hãy đo cả lúc đọc lẫn lúc ghi.

**Trên hình:** Hai thẻ đối xứng **`ĐO LÚC ĐỌC`** màu lục, **`ĐO LÚC GHI`** màu cam; chính giữa là dấu hỏi **`CÓ ĐÁNG KHÔNG?`** màu vàng. Đừng trưng lại tất cả số đã thấy. Đây là khoảnh khắc để người xem nhớ thông điệp.

### SÂN 6 — CTA CHUẨN KÊNH | 1:42–1:50

**Không có dải dưới. Không thêm câu khác.** Nền tâm `#241e12`, mép `#101318`; một vành vàng xoay nhẹ sau chữ.

Câu **phải đúng nguyên văn**:

> Hãy Follow Anh 40 học AI để cập nhật nhiều thông tin về AI hơn.

Tách thành đúng ba cụm trong khung:

1. **`Hãy Follow`** — 52 px, mở lục rồi về kem.
2. **`Anh 40 học AI`** — 64 px, vàng, vào khoảng 1:43,2; gạch vàng chạy dưới tên.
3. **`để cập nhật nhiều thông tin về AI hơn.`** — 40 px, bắt đầu khoảng 1:45,5; từng từ sáng.

Giữ kích thước như v6. Không nút, không logo phụ, không hashtag, không đổi CTA.

---

## D. Art direction & Motion language — dùng xuyên suốt

| Thành phần | Quy cách khóa |
|---|---|
| Canvas | 1080 × 1920 px, portrait 9:16, 60 fps, 110 s |
| Font | **Be Vietnam Pro Bold**, có hỗ trợ dấu tiếng Việt; không tự thay thành font khác nếu chưa duyệt |
| Chữ thường | `#f4f1ea` |
| Số/câu hỏi/brand | `#e7c56a` |
| Nhảy đúng / thao tác có lợi lúc đọc | `#7dcec4` |
| Chi phí / phải quét / cập nhật lúc ghi | `#e07a5f` |
| Chưa nhấn trong caption | `#9a9388` |
| Nền bảng | `#1c2430` |
| Nền gốc | `#0c0f14` và radial gradient theo từng sân |
| Dải dưới | **45 px**, tối đa **2 dòng**, rộng 936 px, bắt đầu khoảng **y=1148**, line-height 1,28 |
| Vùng an toàn | Không đặt chữ trong 168 px phía trên; **không đặt chữ dưới y=1330**; các nhãn khác tối thiểu 28 px |
| Text animation | Một câu mỗi beat, **word-by-word highlight**; từ bắt đầu sáng bằng màu vai trò, sau đó về kem, riêng số và từ khóa giữ màu vai trò |
| Nhịp chuyển cảnh | Morph/crossfade 0,3–0,5 s; không dùng glitch, whip pan mạnh, zoom 3D, particle dày hoặc rung chữ |
| Âm thanh | **Không voiceover, không TTS, không nhạc, không SFX** |

### Quy tắc chống AI slop trên hình

- Mọi chuyển động phải giải thích quan hệ: **quét** là tốn, **nhảy** là tìm, **cập nhật** là phát sinh việc. Không animate chỉ để lấp thời gian.
- Không để sơ đồ nhảy hai dòng rồi ghi nhãn “500 dòng” ngay trên chính sơ đồ tám dòng. Nhãn **“minh họa”** và nhãn **“bảng thử”** phải phân biệt.
- Tránh hiệu ứng số liên tục tăng giả hoặc biểu đồ không khớp số. Ưu tiên **reveal số cố định** sau khi vệt chạy xong.
- Đừng làm tất cả chữ vàng/lục cùng lúc. Một khung hình có tối đa **1 thông tin chính** và **1–2 nhãn phụ**.
- Với video không tiếng, giữ sự kiện chính ở trên hình ít nhất ~1 giây sau khi animation hoàn thành, đừng cắt ngay khi người xem vừa kịp đọc.
- CTA là outro rõ ràng, **không tiếp tục truyền tải kiến thức ở 8 giây cuối**.

---

## E. Map số liệu — khóa nội dung trước khi render

| Nội dung trên hình | Cơ sở *được v6 tường thuật* | Quy tắc hiển thị |
|---|---|---|
| **1,3 ms** | Median 1,289 ms, câu đếm khi chưa có Index | Ghi tròn đến một chữ số thập phân |
| **0,04 ms** | Median 0,037 ms, câu đếm khi có Index | Ghi tròn đến hai chữ số thập phân |
| **9 lần đo** | Chín lượt đo sau khi loại lượt làm nóng | Nói “lần ở giữa”, không ghi “trung bình” |
| **50.000 dòng** | Bảng `orders` | Chỉ dùng cho bài thử đọc + nhãn chi phí lưu trữ |
| **500 dòng nhóm 7** | Cột `bucket = 7` trong bảng 50.000 dòng | Là dữ liệu thử thật theo v6, **khác 2 dòng minh họa** |
| **8 dòng · 2 khớp** | Bảng sơ đồ thu nhỏ v6 | Bắt buộc gắn nhãn **SƠ ĐỒ MINH HỌA** |
| **5,2 ms / 8,2 ms** | Thử ghi 8.000 dòng trong bộ nhớ | Tuyệt đối không gọi là thời gian ghi file ra đĩa |
| **≈460 KB** | Index thêm 471.040 byte theo v6 | Có dấu ≈; lưu ý tương đương 460 KiB |
| **`note`** | Cột được nhắc trong v6 | Giữ tên gốc khi cần, nhưng không bắt buộc đưa vào phụ đề kể chuyện |

**Giới hạn kiểm chứng:** Người biên tập mới nhận được `v6.md`; chưa có tệp `measure.md` và `001-db-index-110-v5.mp4` để kiểm tra độc lập toàn bộ benchmark, frame, và asset. Trước khi xuất bản, đối chiếu lại số liệu với `measure.md` thật và so sánh visual với bản render thực tế.

---

## F. Checklist duyệt sản phẩm sau khi gen

### Nội dung — bắt buộc
- [ ] Hook đọc ra vấn đề trong 2 giây đầu: **Index tìm nhanh nhưng có thể làm ghi chậm**.
- [ ] Cảnh ví dụ 8 dòng luôn có nhãn **SƠ ĐỒ MINH HỌA**; cảnh benchmark có **50.000 dòng / 500 khớp**.
- [ ] 1,3 và 0,04 ms đi cùng **cùng một phép đếm**, không làm như hai kiểu truy vấn khác nhau.
- [ ] Chín lượt đo được mô tả là **“lần ở giữa”**, không phải “trung bình”.
- [ ] 5,2 và 8,2 ms gắn với **ghi 8.000 dòng trong bộ nhớ**.
- [ ] ≈460 KB được mô tả là **dung lượng thêm do Index**.
- [ ] Không xuất hiện những câu tuyệt đối: “Index lúc nào cũng nhanh”, “cột trùng giá trị không bao giờ nên tạo Index”, “không truy vấn thì Index đứng yên”.
- [ ] CTA khớp 100% câu chuẩn và chỉ xuất hiện 102–110 giây.

### Dựng — bắt buộc
- [ ] Tổng đúng 110 s, 1080×1920, 60 fps, không âm thanh.
- [ ] **Tất cả** 17 câu ở dải dưới hiển thị tối đa hai dòng và không bị tràn y=1330, kể cả font có dấu.
- [ ] Số lớn hiển thị đủ lâu, không bị chữ phía dưới che khuất.
- [ ] Vệt quét và vệt nhảy khác nhau bằng hình thức chuyển động, không chỉ khác màu.
- [ ] Các thanh so sánh không ngầm tuyên bố tỉ lệ chính xác nếu chiều dài không theo tỉ lệ.
- [ ] Không chữ nào xuất hiện trong 168 px phía trên; không chữ dưới y=1330.
- [ ] Kiểm tra các frame mốc: 0s, 4s, 10s, 15s, 20s, 25s, 31s, 37s, 44s, 50s, 56s, 63s, 69s, 75s, 81s, 87s, 93s, 99s, 104s, 109s.

---

## G. Kết luận biên tập

**Có thể chốt để dựng bản thử v7 sau khi xác minh benchmark gốc.** Điểm khác biệt quyết định không nằm ở việc thêm hiệu ứng: đó là việc đưa người xem qua một tình huống có **lợi ích rõ → bằng chứng → chi phí → quy tắc chọn**. Nhờ vậy, người mới không chỉ nhớ rằng Index “nhanh hơn”, mà hiểu **nhanh ở đâu, tốn ở đâu và khi nào mới đáng dùng**.
