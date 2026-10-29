"""Speak the 36 caption lines. On-screen text stays unchanged, including 40."""

import json
from pathlib import Path

from korvatts import TTS

OUT = Path(__file__).resolve().parent

# Screen text is what the caption shows. Spoken text is what Gia Bảo reads.
LINES = [
    ("basket-01", "Bạn chỉ nhắn một câu, rồi đợi giỏ đồ về."),
    ("basket-02", "Về tới nhà, giỏ thiếu rau."),
    ("basket-03", "Câu đã gửi. Rau vẫn không có trong giỏ."),
    ("prompt-01", "Prompt engineering là cách bạn viết câu giao việc."),
    ("prompt-02", "Câu mới ghi rau thơm, thịt, mì,\nvà chợ đầu ngõ."),
    ("prompt-03", "Câu rõ giúp người đi chợ hiểu việc."),
    ("prompt-04", "Người đi chợ vẫn có thể quên rau."),
    ("table-01", "Context engineering là đồ bạn đặt sẵn\ntrước mặt người đi chợ."),
    ("table-02", "Tờ giấy, tiền, và tên chợ nằm trên bàn."),
    ("table-03", "Tờ giấy ghi sai rau, người đi chợ mua sai rau."),
    ("table-04", "Với hệ thống, đó là tài liệu và việc vừa xảy ra,\nđặt sẵn lúc nó làm."),
    ("table-05", "Đủ đồ trên bàn. Chưa ai đếm lại giỏ."),
    ("loop-01", "Harness engineering là vòng quanh lần đi chợ,\nsau khi Prompt và Context đã có."),
    ("loop-02", "Prompt và Context nằm trong vòng này.\nVòng hỏi việc đã xong chưa."),
    ("loop-03", "Được vào quầy rau.\nKhông mua món ngoài danh sách."),
    ("loop-04", "Làm xong, nhìn lại từng dòng.\nThịt có, mì có, rau chưa có."),
    ("loop-05", "Thiếu rau thì quay lại quầy.\nChưa mang giỏ thiếu về nhà."),
    ("loop-06", "Đủ ba món thì về.\nNgười nhà xem giỏ, rồi mới nấu."),
    ("loop-07", "Không ghé thêm quầy cho có."),
    ("system-01", "Với hệ thống, vòng này cũng đi từng bước."),
    ("system-02", "Permission.\nChỉ làm việc bạn đã cho phép."),
    ("system-03", "Check.\nLàm xong thì đối chiếu với việc đã giao."),
    ("system-04", "Retry.\nThiếu thì làm lại."),
    ("system-05", "Stop.\nĐủ thì dừng."),
    ("system-06", "Review.\nBạn xem lại trước khi nhận."),
    ("fake-01", "Có danh sách. Không ai quay lại quầy."),
    ("fake-02", "Giỏ vẫn thiếu rau. Dấu done vẫn hiện."),
    ("fake-03", "Tờ giấy nằm yên.\nQuay lại quầy thì vòng mới chạy."),
    ("compare-01", "Chỉ có Prompt, giỏ về thiếu rau."),
    ("compare-02", "Có Context, đúng món cần mua,\nvẫn có thể thiếu."),
    ("compare-03", "Có Harness, thiếu rau thì quay lại,\nrồi mới về."),
    ("rule-01", "Sửa Prompt khi hệ thống hiểu sai việc bạn giao."),
    ("rule-02", "Đưa Context khi hệ thống thiếu thông tin,\nhoặc Context đang sai."),
    ("rule-03", "Dựng Harness khi làm xong\nvẫn cần biết đúng hay sai."),
    ("rule-04", "Prompt không kiểm được giỏ."),
    ("follow-01", "Hãy Follow Anh 40 học AI để cập nhật nhiều thông tin về AI hơn."),
]


def spoken(text: str) -> str:
    flat = " ".join(text.split())
    return flat.replace("Anh 40 học AI", "Anh bốn mươi học AI")


def main() -> None:
    tts = TTS()
    rows = []
    for name, screen in LINES:
        say = spoken(screen)
        wav, duration = tts.synthesize(
            say,
            voice="gia_bao",
            lang="vi",
            total_steps=32,
            speed=1.05,
        )
        path = OUT / f"{name}.wav"
        tts.save_audio(wav, str(path))
        rows.append(
            {
                "id": name,
                "screen": screen,
                "spoken": say,
                "seconds": round(float(duration), 3),
            }
        )
        print(f"{name}\t{duration:.3f}s", flush=True)
    (OUT / "durations.json").write_text(
        json.dumps(rows, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"TOTAL\t{sum(row['seconds'] for row in rows):.3f}s", flush=True)


if __name__ == "__main__":
    main()
