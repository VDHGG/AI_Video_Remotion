# Project brief: Hệ thống sản xuất video TikTok bằng Remotion

> **Định hướng:** motion design điện ảnh cao cấp + demo giao diện sản phẩm thật + kể chuyện hướng đến giữ chân người xem.  
> **Đầu ra prototype:** video dọc tiếng Việt 20–30 giây, preview và render lặp lại bằng Remotion; nội dung tách khỏi code trình bày.

## 1. Mục tiêu và phạm vi

Xây dựng dây chuyền có kiểm soát: chọn ý tưởng cho một nhóm người xem; viết lời thoại tự nhiên; chuyển thành beat hình ảnh; dùng footage giao diện thật để chứng minh; dùng Remotion cho motion, typography, đồ họa, caption và audio; render, xem trên điện thoại, sửa; ghi dữ liệu để cải thiện hook, nhịp và payoff.

Remotion định nghĩa composition bằng React component, width, height, FPS, duration và ID; props cho phép thay nội dung giữa các lần render. Đây là nền tảng phù hợp cho video theo dữ liệu. [Composition](https://www.remotion.dev/docs/composition) · [Parameterized videos](https://www.remotion.dev/docs/parameterized-rendering)

**Preset thử nghiệm:** 1080×1920, 9:16, 30 FPS, khoảng 24 giây; có hook, demo rõ, motion graphic, voiceover hoặc audio placeholder, caption và payoff. Không framework nào bảo đảm viral: kết quả còn phụ thuộc ý tưởng, khán giả, phân phối và phản hồi thật.

**Trong prototype:** một composition chủ đạo; scene data có kiểu; title/body/UI footage/video/voice/caption/music; Studio preview; MP4 render; README; QA và quyền asset.  
**Ngoài bản đầu:** tự tìm trend/đăng bài, tự sinh script không biên tập, dashboard/cloud render, cam kết lượt xem, giả lập UI rồi gọi là demo thật.

### Cách đo

Theo dõi thời lượng xem trung bình, tỷ lệ xem hết, điểm rơi, xem lại, chia sẻ, lưu và bình luận có nội dung nếu nền tảng cung cấp. Không tối ưu một chỉ số riêng: hook có thể kéo lượt xem nhưng giảm completion nếu phần thân không trả lời lời hứa.

## 2. Chiến lược nội dung

Trước khi viết, xác định: (1) người xem cụ thể; (2) tình huống họ gặp; (3) điều họ biết/làm được sau video. Chọn một kết quả nhỏ, cụ thể.

**Trụ cột để thử:** một việc khó thành dễ; trước/sau; thử nghiệm có kết quả; lỗi hay gặp và cách sửa; giải thích bằng sơ đồ; demo theo tình huống; so sánh có tiêu chí.

| Tiêu chí ý tưởng (1–5) | Câu hỏi |
|---|---|
| Liên quan | Nhóm người xem cụ thể có nhận ra vấn đề? |
| Tính mới | Có góc nhìn/ví dụ mới? |
| Chứng minh | Có demo, kết quả, vật thể hoặc sơ đồ? |
| Độ gọn | Trọn một ý trong 20–30 giây? |
| Giá trị | Có lý do để lưu hoặc gửi? |
| Trung thực | Chứng minh được lời hứa mà không phóng đại? |

## 3. Tiếng Việt tự nhiên, tránh AI slop

- Viết như đang giải thích cho một người, không như đọc diễn văn.
- Ưu tiên từ thông dụng, câu chủ động, động từ cụ thể; một câu một ý.
- Dùng “mình”, “bạn” nếu hợp giọng thương hiệu, không chèn máy móc.
- Giữ chi tiết đời thường, ví dụ thật, giới hạn và quan sát bất ngờ.
- Đọc thành tiếng; sửa câu đúng ngữ pháp nhưng nghe không giống lời nói.
- Giải thích thuật ngữ ngay lần đầu.

**Tránh:** mở đầu chung chung; lời hứa “chắc chắn viral/thay đổi cuộc đời”; tính từ không chứng cứ; công thức lặp cho mọi clip; open loop không được trả lời; đọc lại nguyên văn mọi chữ trên màn hình.

**Câu hỏi biên tập:** bỏ tên sản phẩm video còn ích không? Claim nào thiếu bằng chứng? Người xem biết demo chứng minh điều gì? Cắt được 20% chữ không? Hook được trả lời ở cuối không? Câu này có thể nói tự nhiên trong hội thoại không?

45–70 từ cho clip 20–30 giây là giả thuyết sản xuất; đo lại theo tốc độ nói và khoảng nghỉ thực tế.

## 4. Story structure, hook và cadence

| Thời gian | Vai trò | Hình ảnh |
|---|---|---|
| 0–2s | Hook: vì sao dừng lại? | Kết quả, mâu thuẫn, hình lạ hoặc câu cụ thể |
| 2–5s | Bối cảnh: vấn đề gì? | Tình huống ngắn/trạng thái trước |
| 5–12s | Demo: có thật không? | Footage UI thật, thao tác nhấn rõ |
| 12–19s | Insight: điểm mấu chốt? | Motion graphic hoặc so sánh |
| 19–25s | Payoff: nhận được gì? | Kết quả, quy tắc, giới hạn |
| 25–30s | Kết/CTA nhẹ | Gợi ý thử hoặc hình kết |

Ba mẫu: **vấn đề → thao tác → kết quả**; **kết quả trước → cách làm → nguyên tắc**; **quan niệm phổ biến → thử nghiệm → kết luận có giới hạn**.

- Nêu chủ đề sớm; hook cụ thể và hiểu được khi tắt tiếng.
- Open loop phải được trả lời trước khi mở câu hỏi mới.
- Mỗi 2–4 giây có thay đổi có ý nghĩa: thông tin, crop, trạng thái UI, góc nhìn hoặc âm thanh. Không cần cắt liên tục.
- Giữ demo đủ lâu để đọc thao tác.
- Payoff giải đáp hook hoặc đưa kết quả cụ thể.
- CTA khớp nội dung; lời mời áp dụng tốt hơn tương tác chung chung khi mục tiêu là áp dụng.

## 5. Visual system: cinematic nhưng rõ

**Nguyên tắc:** một tiêu điểm mỗi khung; tương phản trước hiệu ứng; khoảng trống; motion có chức năng; UI thật là bằng chứng; giữ palette/type/motion language nhưng thay bố cục theo ý tưởng.

- Canvas 1080×1920, 9:16, 30 FPS.
- Giữ chữ/số liệu ở vùng trung tâm để tránh nút cạnh phải và caption phía dưới; xác nhận giao diện TikTok hiện hành trước khi khóa template.
- Không đặt chữ sát mép; crop UI có chủ đích.
- Gợi ý nền xanh than/graphite, một màu nhấn, một màu phụ. Không dùng màu làm tín hiệu duy nhất.
- Font phải hỗ trợ dấu tiếng Việt. Tối đa hai họ: display và sans dễ đọc.
- Type scale riêng cho hook/headline/body/label; hook thường 1–2 dòng.
- Kiểm tra dấu không bị cắt; contrast cao; hạn chế glow/noise/gradient làm giảm rõ.
- Caption có nền/viền khi footage phức tạp; chia theo cụm nghĩa; xem ở tốc độ thật và màn hình nhỏ.
- Tránh nhấp nháy/rung liên tục; thông tin chính không chỉ truyền bằng âm thanh.

Remotion có API frame-based như useCurrentFrame, interpolate, spring; Sequence đặt nội dung vào timeline với thời gian tương đối. [API overview](https://www.remotion.dev/docs/api) · [Timing](https://www.remotion.dev/docs/timing) · [Animating properties](https://www.remotion.dev/docs/animating-properties)

**Motion language:** reveal bằng opacity/dịch chuyển ngắn; focus crop/phóng nhẹ UI; connect bằng line/shape; transform để giải thích; impact ngắn cho payoff; cut thẳng khi đổi ý. Để nhịp tĩnh ở kết quả. Cùng frame phải cho cùng hình; tránh timer thời gian thực và randomness không seed. Gom duration/easing/motion token vào cấu hình.

## 6. Footage, voiceover, caption và audio

### Quay UI

1. Chọn một luồng thao tác chứng minh một lời hứa.
2. Chuẩn bị dữ liệu sạch, không lộ thông tin riêng tư.
3. Tăng scale UI; tắt notification/tab thừa.
4. Quay dư vài giây trước/sau; giữ file gốc.
5. Ghi sản phẩm, version, ngày quay, quyền công bố, nguồn asset.
6. Crop/highlight vùng quan trọng; cắt chờ nhưng giữ nhân quả.
7. Ghi nhãn “minh họa” nếu không phải footage thật; không ghép flow không tồn tại.

Dùng component video đúng version Remotion được scaffold; asset public có thể tham chiếu bằng staticFile. [Video](https://www.remotion.dev/docs/videos/) · [staticFile](https://www.remotion.dev/docs/staticfile)

### Audio

- Thu voice sau khi script gần chốt; tự nhiên, rõ, không giống quảng cáo.
- Giữ khoảng nghỉ; giảm noise vừa phải; marker theo câu giúp sync.
- Với TTS, nghe lại tên riêng, tiếng Anh, số và ngữ điệu Việt.
- Caption sửa theo lời nói thật; nhấn 1–3 từ khóa, không tô mọi từ. Có thể burn-in và giữ SRT/VTT nếu cần. [Captions](https://www.remotion.dev/docs/captions/)
- Voiceover ưu tiên; nhạc nhỏ dưới lời; SFX chỉ gắn hành động có nghĩa; fade audio.
- Remotion có component audio riêng, đồng bộ theo timeline. [Audio](https://www.remotion.dev/docs/media/audio)
- Xác minh quyền sử dụng nhạc, font, voice, SFX, footage, logo và stock.

## 7. Kiến trúc Remotion

### Quyết định

- TypeScript + React, scaffold từ template chính thức hiện hành.
- Composition mặc định 1080×1920, 30 FPS; duration theo timeline/props.
- Tách composition, scene components, content data, theme tokens và utilities.
- Mỗi scene là component nhỏ có props typed; không nhúng script khắp JSX.
- Dùng schema/validation; calculateMetadata nếu duration/dimensions phụ thuộc dữ liệu. [Parameterized videos](https://www.remotion.dev/docs/parameterized-rendering) · [Dynamic metadata](https://www.remotion.dev/docs/dynamic-metadata)
- Giữ package Remotion cùng version; bắt đầu render cục bộ.

~~~text
remotion-tiktok/
├─ public/assets/{footage,images,audio,fonts}/
├─ src/
│  ├─ Root.tsx
│  ├─ compositions/TikTokVideo.tsx
│  ├─ scenes/{Hook,Context,Demo,Insight,Payoff}Scene.tsx
│  ├─ components/{CaptionLine,PhoneFrame,Highlight,SafeArea}.tsx
│  ├─ data/{sample-video,schema}.ts
│  ├─ theme/{colors,typography,motion}.ts
│  └─ utils/{frames,validate-video}.ts
├─ scripts/validate-content.ts
├─ out/
└─ README.md
~~~

Cấu trúc gợi ý; ưu tiên template thực tế.

### Schema gợi ý

Frame là đơn vị timeline. start/duration là số nguyên, không vượt tổng duration.

~~~ts
type SceneBase = {
  id: string;
  startFrame: number;
  durationInFrames: number;
  voiceover?: string;
  captionText?: string;
  emphasisWords?: string[];
};

type Scene =
  | (SceneBase & {
      type: 'hook' | 'text';
      headline: string;
      supportingText?: string;
      visual?: { kind: 'shape' | 'image'; src?: string; label?: string };
    })
  | (SceneBase & {
      type: 'demo';
      src: string;
      trimBeforeFrames?: number;
      playbackRate?: number;
      focus?: { x: number; y: number; width: number; height: number };
      callout?: { text: string; x: number; y: number };
    })
  | (SceneBase & {
      type: 'comparison';
      left: { label: string; lines: string[] };
      right: { label: string; lines: string[] };
    })
  | (SceneBase & {
      type: 'payoff';
      headline: string;
      takeaway: string;
      cta?: string;
    });

type VideoProject = {
  id: string;
  title: string;
  fps: 30;
  width: 1080;
  height: 1920;
  durationInFrames: number;
  scenes: Scene[];
  audio?: { voiceoverSrc?: string; musicSrc?: string; musicGain?: number };
};
~~~

**Validation:** scene IDs duy nhất; duration dương/frame không âm; không vượt composition; gap chỉ khi chủ ý; asset tồn tại hoặc placeholder; playbackRate hợp lệ; cảnh báo headline dài; voice/caption có vị trí; demo chỉ tham chiếu asset được phép.

**Timeline minh họa 24 giây (720 frame):**

~~~ts
const sampleVideo = {
  id: 'one-clear-demo', title: 'Từ yêu cầu dài đến bản nháp dùng được',
  fps: 30, width: 1080, height: 1920, durationInFrames: 720,
  scenes: [
    { id: 'hook', type: 'hook', startFrame: 0, durationInFrames: 75,
      headline: 'Mất 20 phút để viết brief?',
      supportingText: 'Thử bắt đầu bằng đầu ra cần có.' },
    { id: 'context', type: 'text', startFrame: 75, durationInFrames: 105,
      headline: 'Đừng bắt đầu bằng một prompt dài',
      supportingText: 'Chốt người xem, vấn đề và kết quả trước.' },
    { id: 'demo', type: 'demo', startFrame: 180, durationInFrames: 240,
      src: 'assets/footage/brief-demo.mp4',
      captionText: 'Sau đó mới điền từng phần vào brief.' },
    { id: 'insight', type: 'comparison', startFrame: 420, durationInFrames: 150,
      left: { label: 'Mơ hồ', lines: ['Viết hay hơn'] },
      right: { label: 'Rõ', lines: ['Viết 3 hook cho chủ shop'] } },
    { id: 'payoff', type: 'payoff', startFrame: 570, durationInFrames: 150,
      headline: 'Chốt đầu ra trước, viết prompt sau.',
      takeaway: 'Bạn sẽ biết câu trả lời có đạt hay không.',
      cta: 'Lưu lại cho brief tiếp theo.' }
  ]
};
~~~

Nội dung minh họa; footage không mặc định tồn tại. Nếu thiếu, dùng placeholder có nhãn.

## 8. Quy trình, QA và đo lường

**Vai trò:** producer chọn người xem/premise/evidence; script editor kiểm tra tự nhiên và trung thực; storyboard ánh xạ câu sang hình; Remotion engineer xây timeline; QA reviewer xem nội dung/hình/tiếng/export/quyền.

**Cổng:** idea (một người xem/vấn đề/kết quả) → script (hook được trả lời, đọc thành tiếng) → storyboard (mỗi beat có hình chứng minh) → animatic → polish → export. Quy trình: idea → script → storyboard → footage/audio → animatic → polish → render → QC → sửa → render cuối.

**Quality gates:** một luận điểm; claim kiểm chứng được; UI đủ lớn/lâu; chữ không tràn/mất dấu/đè vùng giao diện; font và contrast đọc được trên điện thoại; không frame lỗi; voice không clipping, nhạc không lấn; caption đúng lời và sync; hiểu được khi tắt tiếng; MP4 scrub đầu/giữa/cuối; không lộ dữ liệu cá nhân; quyền media được ghi nhận.

### Scorecard (1–5; dưới 3 cần sửa)

| Tiêu chí | Mức 5 nghĩa là |
|---|---|
| Hook | Cụ thể, hấp dẫn, được trả lời |
| Tự nhiên | Như người thật nói, có chi tiết riêng |
| Payoff | Trả lời lời hứa, dễ nhớ |
| Phân cấp hình | Dẫn mắt rõ, có khoảng thở |
| Demo | Rõ thao tác, chứng minh claim |
| Nhịp | Thay đổi có nghĩa, đủ thời gian hiểu |
| Audio/caption | Rõ, sync, tự nhiên |
| Render | Lặp lại ổn, QC xong |
| Tái sử dụng | Nội dung/assets thay qua data |

Sau khi đăng, đọc completion/retention cùng share/save và phản hồi. Thử hai hook cùng thân bài hoặc hai thân bài cùng hook; mỗi lượt chỉ đổi một yếu tố chính và ghi giả thuyết trước.

## 9. Milestones

1. **Môi trường/license:** xác nhận Node/package manager; scaffold và ghi version; rà license.
2. **Composition:** video 24 giây, 5 scene, data riêng, preview Studio.
3. **Motion system:** tokens, caption, safe area, highlight, transition; animation deterministic.
4. **Footage/audio:** thay placeholder bằng recording; thêm voice/caption/music có quyền.
5. **Render/QA:** MP4 đầu-cuối, xem tốc độ thật, sửa, ghi hướng dẫn.
6. **Thử nghiệm nội dung:** biến thể có kiểm soát, chỉ đổi một yếu tố.

## 10. Render và licensing

**Preset:** 1080×1920; 9:16; 30 FPS; 20–30 giây (600–900 frame); MP4/H.264; AAC nếu có audio; caption burn-in; output out/<video-id>.mp4.

Đây là preset dự án, không phải yêu cầu Remotion hay bảo đảm tối ưu nền tảng. CLI nhận composition, output path, codec. [Render](https://www.remotion.dev/docs/render) · [CLI](https://www.remotion.dev/docs/cli/render) · [Codec](https://www.remotion.dev/docs/options/codec)

Tạo project và preview theo tài liệu hiện hành:

~~~bash
npx create-video@latest --yes --blank remotion-tiktok
cd remotion-tiktok
npm run dev
~~~

Cài Remotion Agent Skills nếu phù hợp:

~~~bash
npx remotion skills add
~~~

Render với entry point và composition ID thực tế:

~~~bash
npx remotion render <entry-point> TikTokVideo out/sample.mp4 --codec=h264
~~~

Trên Windows, truyền props qua JSON file thường ổn định hơn inline JSON. [Create project](https://www.remotion.dev/docs/) · [Passing props](https://www.remotion.dev/docs/passing-props)

### Rủi ro

| Rủi ro | Giảm thiểu |
|---|---|
| Câu chung/AI slop | Đọc thành tiếng, thêm ví dụ/evidence, bỏ câu thừa |
| Motion quá nhiều | Một tiêu điểm/scene, xem tốc độ thật |
| UI nhỏ | Quay scale lớn, crop, giữ shot |
| Nhồi tính năng | Một claim/video, bỏ ý phụ, tăng thời gian demo |
| Demo sai lệch | Giữ source, xác thực claim, ghi nhãn minh họa |
| Render lệch preview | Asset cục bộ, kiểm path/font, render file cuối |
| Quyền media mơ hồ | Asset register lưu nguồn/license |
| API thay đổi | Đọc docs theo version, khóa packages |
| License không phù hợp | Xác định tổ chức/quy mô trước khi dùng thương mại |

License Remotion hiện nêu free license cho cá nhân, tổ chức phi lợi nhuận, công ty tối đa 3 nhân viên, hoặc trường hợp đang đánh giá chưa dùng thương mại; nhóm khác cần Company License. Điều khoản có thể đổi, hãy kiểm tra bản hiện hành trước khi dùng thương mại. [License repository](https://github.com/remotion-dev/remotion/blob/main/packages/core/LICENSE.md) · [License page](https://www.remotion.pro/license)

Đây là thông tin tham khảo, không phải tư vấn pháp lý. Kiểm tra riêng license package/plugin/template/font/footage/nhạc/voice.

## 11. Prompt cho IDE coding agent

~~~text
Bạn đang làm trong repository Remotion mới hoặc hiện có. Trước khi sửa code, đọc README, package.json, source và tài liệu Remotion chính thức phù hợp version đang cài.

MỤC TIÊU
Tạo prototype TikTok bằng Remotion theo hướng motion design điện ảnh cao cấp + demo UI sản phẩm thật + storytelling giữ chân. Video tiếng Việt, 9:16, 1080x1920, 30 FPS, khoảng 24 giây. Không hứa chắc viral.

NỘI DUNG
- 5 beat: hook 0–2.5s; context 2.5–6s; demo 6–14s; insight 14–19s; payoff 19–24s.
- Script ngắn, tự nhiên, cụ thể; loại sáo ngữ/lời hứa quá mức.
- Hook phải được trả lời; mỗi cảnh thêm một ý; payoff có takeaway.
- Thiếu footage thì dùng placeholder có nhãn; không bịa demo sản phẩm.
- Nội dung ở data riêng, không hardcode khắp JSX.

VISUAL
- Tối giản, cinematic, khoảng thở, tương phản rõ, font hỗ trợ dấu tiếng Việt.
- Một tiêu điểm mỗi cảnh; motion dẫn mắt/giải thích.
- Safe area cho TikTok/caption; headline đọc trên điện thoại.
- Có demo/placeholder được crop/highlight.
- Tạo component dùng lại cho caption, headline, safe area, highlight.
- Animation deterministic theo frame, không timer thời gian thực/randomness không seed.

KỸ THUẬT
- Dùng version Remotion và pattern của template hiện tại.
- Composition có ID, width, height, fps, duration, default props/schema nếu hợp lý.
- Dùng frame API và Sequence khi phù hợp.
- Tách scenes, components, data, theme tokens, utilities.
- Dùng cơ chế asset chính thức; xử lý asset thiếu bằng placeholder.
- Validation: ID duy nhất, frame/duration hợp lệ, timeline trong composition, asset tồn tại hoặc placeholder.
- README có môi trường, preview, thay data/assets và render MP4.
- Render H.264 MP4 1080x1920, 30 FPS vào out/ nếu môi trường cho phép.

QUY TRÌNH
1. Kiểm tra repository/dependency versions; báo kế hoạch ngắn.
2. Làm vertical slice chạy được rồi mới polish.
3. Chạy bước build/render sẵn có; không tạo test suite mới nếu không cần.
4. Nếu render lỗi do môi trường/asset, nêu rõ và giữ project previewable.
5. Cuối cùng liệt kê file sửa, lệnh chạy, video nếu render được, giới hạn.

NGUYÊN TẮC
- Không thêm dependency nếu Remotion đủ.
- Không tạo abstraction thừa.
- Không dùng media/font không rõ quyền.
- Ghi rõ placeholder, không bịa asset.
- Ưu tiên tài liệu chính thức đúng version, không dùng snippet cũ máy móc.
~~~

## 12. Checklist bàn giao

- [ ] Studio mở được; composition đúng thông số.
- [ ] Thay script/scenes/assets qua data.
- [ ] Có hook, context, demo, insight, payoff.
- [ ] Caption hiển thị đúng dấu tiếng Việt.
- [ ] Placeholder rõ nếu thiếu footage/audio.
- [ ] Không asset thiếu/chữ bị cắt.
- [ ] Render MP4 hoặc nêu nguyên nhân môi trường cụ thể.
- [ ] Đã xem đầu/giữa/cuối ở tốc độ thật.
- [ ] README có lệnh preview/render và cách thay nội dung.
- [ ] Có ghi chú license và quyền media.

## Nguồn chính thức đã đối chiếu

Các chi tiết kỹ thuật được đối chiếu với tài liệu Remotion vào **28-10-2026**; coding agent cần kiểm tra lại theo version đang cài.

- [Remotion docs / create project](https://www.remotion.dev/docs/)
- [Coding agents](https://www.remotion.dev/docs/ai/coding-agents)
- [Composition](https://www.remotion.dev/docs/composition)
- [Parameterized videos](https://www.remotion.dev/docs/parameterized-rendering)
- [Dynamic metadata](https://www.remotion.dev/docs/dynamic-metadata)
- [API overview](https://www.remotion.dev/docs/api)
- [Timing](https://www.remotion.dev/docs/timing)
- [Animating properties](https://www.remotion.dev/docs/animating-properties)
- [Video](https://www.remotion.dev/docs/videos/)
- [Audio](https://www.remotion.dev/docs/media/audio)
- [Captions](https://www.remotion.dev/docs/captions/)
- [Render](https://www.remotion.dev/docs/render)
- [CLI render](https://www.remotion.dev/docs/cli/render)
- [Codec](https://www.remotion.dev/docs/options/codec)
- [Passing props](https://www.remotion.dev/docs/passing-props)
- [License repository](https://github.com/remotion-dev/remotion/blob/main/packages/core/LICENSE.md)
- [Remotion license page](https://www.remotion.pro/license)

---

## Kết luận

Prototype cần chứng minh rằng một ý tưởng cụ thể có thể đi từ script tiếng Việt tự nhiên đến video dọc có demo thật, visual system nhất quán, caption dễ đọc và render lặp lại bằng Remotion. Bắt đầu với một video mẫu, QA như sản phẩm biên tập, rồi mới mở rộng thành thư viện template và quy trình nhiều video.

