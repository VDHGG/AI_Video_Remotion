export type StageId =
  | "basket"
  | "prompt"
  | "table"
  | "loop"
  | "system"
  | "fake"
  | "compare"
  | "rule"
  | "follow";

export type Beat = {
  text: string;
  highlight: string;
  highlightColor: string;
  speechFrames: number;
  frames: number;
};

export type Stage = {
  id: StageId;
  center: string;
  edge: string;
  sweep: string;
  beats: Beat[];
};

const gold = "#e7c56a";
const teal = "#7dcec4";
const coral = "#e07a5f";

export const stages: Stage[] = [
  {
    id: "basket",
    center: "#242a33",
    edge: "#12161c",
    sweep: gold,
    beats: [
      {
        text: "Bạn chỉ nhắn một câu, rồi đợi giỏ đồ về.",
        highlight: "đợi",
        highlightColor: coral,
        speechFrames: 86,
        frames: 95,
      },
      {
        text: "Về tới nhà, giỏ thiếu rau.",
        highlight: "thiếu",
        highlightColor: coral,
        speechFrames: 65,
        frames: 74,
      },
      {
        text: "Câu đã gửi. Rau vẫn không có trong giỏ.",
        highlight: "không có",
        highlightColor: coral,
        speechFrames: 82,
        frames: 91,
      },
    ],
  },
  {
    id: "prompt",
    center: "#2a1c16",
    edge: "#16110e",
    sweep: coral,
    beats: [
      {
        text: "Prompt engineering là cách bạn viết câu giao việc.",
        highlight: "Prompt",
        highlightColor: teal,
        speechFrames: 85,
        frames: 94,
      },
      {
        text: "Câu mới ghi rau thơm, thịt, mì,\nvà chợ đầu ngõ.",
        highlight: "rau thơm",
        highlightColor: gold,
        speechFrames: 106,
        frames: 115,
      },
      {
        text: "Câu rõ giúp người đi chợ hiểu việc.",
        highlight: "hiểu",
        highlightColor: teal,
        speechFrames: 66,
        frames: 75,
      },
      {
        text: "Người đi chợ vẫn có thể quên rau.",
        highlight: "quên",
        highlightColor: coral,
        speechFrames: 70,
        frames: 79,
      },
    ],
  },
  {
    id: "table",
    center: "#16343c",
    edge: "#0e1718",
    sweep: teal,
    beats: [
      {
        text: "Context engineering là đồ bạn đặt sẵn\ntrước mặt người đi chợ.",
        highlight: "Context",
        highlightColor: teal,
        speechFrames: 113,
        frames: 122,
      },
      {
        text: "Tờ giấy, tiền, và tên chợ nằm trên bàn.",
        highlight: "trên bàn",
        highlightColor: teal,
        speechFrames: 89,
        frames: 98,
      },
      {
        text: "Tờ giấy ghi sai rau, người đi chợ mua sai rau.",
        highlight: "sai",
        highlightColor: coral,
        speechFrames: 96,
        frames: 105,
      },
      {
        text: "Với hệ thống, đó là tài liệu và việc vừa xảy ra,\nđặt sẵn lúc nó làm.",
        highlight: "đặt sẵn",
        highlightColor: teal,
        speechFrames: 149,
        frames: 158,
      },
      {
        text: "Đủ đồ trên bàn. Chưa ai đếm lại giỏ.",
        highlight: "Chưa",
        highlightColor: coral,
        speechFrames: 79,
        frames: 88,
      },
    ],
  },
  {
    id: "loop",
    center: "#12343a",
    edge: "#0c1416",
    sweep: teal,
    beats: [
      {
        text: "Harness engineering là vòng quanh lần đi chợ,\nsau khi Prompt và Context đã có.",
        highlight: "Harness",
        highlightColor: teal,
        speechFrames: 150,
        frames: 159,
      },
      {
        text: "Prompt và Context nằm trong vòng này.\nVòng hỏi việc đã xong chưa.",
        highlight: "xong chưa",
        highlightColor: gold,
        speechFrames: 130,
        frames: 139,
      },
      {
        text: "Được vào quầy rau.\nKhông mua món ngoài danh sách.",
        highlight: "quầy rau",
        highlightColor: teal,
        speechFrames: 96,
        frames: 105,
      },
      {
        text: "Làm xong, nhìn lại từng dòng.\nThịt có, mì có, rau chưa có.",
        highlight: "chưa có",
        highlightColor: coral,
        speechFrames: 126,
        frames: 135,
      },
      {
        text: "Thiếu rau thì quay lại quầy.\nChưa mang giỏ thiếu về nhà.",
        highlight: "quay lại",
        highlightColor: teal,
        speechFrames: 112,
        frames: 121,
      },
      {
        text: "Đủ ba món thì về.\nNgười nhà xem giỏ, rồi mới nấu.",
        highlight: "xem giỏ",
        highlightColor: teal,
        speechFrames: 112,
        frames: 121,
      },
      {
        text: "Không ghé thêm quầy cho có.",
        highlight: "Không",
        highlightColor: coral,
        speechFrames: 53,
        frames: 62,
      },
    ],
  },
  {
    id: "system",
    center: "#16343c",
    edge: "#0e1718",
    sweep: teal,
    beats: [
      {
        text: "Với hệ thống, vòng này cũng đi từng bước.",
        highlight: "từng bước",
        highlightColor: teal,
        speechFrames: 80,
        frames: 89,
      },
      {
        text: "Permission.\nChỉ làm việc bạn đã cho phép.",
        highlight: "Permission",
        highlightColor: teal,
        speechFrames: 84,
        frames: 93,
      },
      {
        text: "Check.\nLàm xong thì đối chiếu với việc đã giao.",
        highlight: "Check",
        highlightColor: teal,
        speechFrames: 91,
        frames: 100,
      },
      {
        text: "Retry.\nThiếu thì làm lại.",
        highlight: "Retry",
        highlightColor: teal,
        speechFrames: 61,
        frames: 70,
      },
      {
        text: "Stop.\nĐủ thì dừng.",
        highlight: "Stop",
        highlightColor: gold,
        speechFrames: 54,
        frames: 63,
      },
      {
        text: "Review.\nBạn xem lại trước khi nhận.",
        highlight: "Review",
        highlightColor: gold,
        speechFrames: 76,
        frames: 85,
      },
    ],
  },
  {
    id: "fake",
    center: "#2a1c16",
    edge: "#16110e",
    sweep: coral,
    beats: [
      {
        text: "Có danh sách. Không ai quay lại quầy.",
        highlight: "Không ai",
        highlightColor: coral,
        speechFrames: 74,
        frames: 83,
      },
      {
        text: "Giỏ vẫn thiếu rau. Dấu done vẫn hiện.",
        highlight: "done",
        highlightColor: coral,
        speechFrames: 79,
        frames: 88,
      },
      {
        text: "Tờ giấy nằm yên.\nQuay lại quầy thì vòng mới chạy.",
        highlight: "Quay lại",
        highlightColor: teal,
        speechFrames: 99,
        frames: 108,
      },
    ],
  },
  {
    id: "compare",
    center: "#16181c",
    edge: "#0c0f14",
    sweep: gold,
    beats: [
      {
        text: "Chỉ có Prompt, giỏ về thiếu rau.",
        highlight: "thiếu",
        highlightColor: coral,
        speechFrames: 73,
        frames: 82,
      },
      {
        text: "Có Context, đúng món cần mua,\nvẫn có thể thiếu.",
        highlight: "thiếu",
        highlightColor: coral,
        speechFrames: 95,
        frames: 104,
      },
      {
        text: "Có Harness, thiếu rau thì quay lại,\nrồi mới về.",
        highlight: "quay lại",
        highlightColor: teal,
        speechFrames: 100,
        frames: 109,
      },
    ],
  },
  {
    id: "rule",
    center: "#12161c",
    edge: "#0c0f14",
    sweep: teal,
    beats: [
      {
        text: "Sửa Prompt khi hệ thống hiểu sai việc bạn giao.",
        highlight: "Sửa Prompt",
        highlightColor: gold,
        speechFrames: 91,
        frames: 100,
      },
      {
        text: "Đưa Context khi hệ thống thiếu thông tin,\nhoặc Context đang sai.",
        highlight: "Context",
        highlightColor: teal,
        speechFrames: 117,
        frames: 126,
      },
      {
        text: "Dựng Harness khi làm xong\nvẫn cần biết đúng hay sai.",
        highlight: "Harness",
        highlightColor: teal,
        speechFrames: 100,
        frames: 109,
      },
      {
        text: "Prompt không kiểm được giỏ.",
        highlight: "không kiểm",
        highlightColor: coral,
        speechFrames: 55,
        frames: 64,
      },
    ],
  },
  {
    id: "follow",
    center: "#12161c",
    edge: "#0c0f14",
    sweep: gold,
    beats: [
      {
        text: "Hãy Follow Anh 40 học AI để cập nhật nhiều thông tin về AI hơn.",
        highlight: "Anh 40 học AI",
        highlightColor: gold,
        speechFrames: 127,
        frames: 127,
      },
    ],
  },
];

export const stageStarts: number[] = [];
{
  let cursor = 0;
  for (const stage of stages) {
    stageStarts.push(cursor);
    cursor += stage.beats.reduce((sum, beat) => sum + beat.frames, 0);
  }
}

export const totalFrames = stages.reduce(
  (sum, stage) => sum + stage.beats.reduce((inner, beat) => inner + beat.frames, 0),
  0,
);

export const voiceCues: {file: string; from: number; speechFrames: number}[] = [];
{
  let from = 0;
  for (const stage of stages) {
    stage.beats.forEach((beat, index) => {
      voiceCues.push({
        file: `${stage.id}-${String(index + 1).padStart(2, "0")}`,
        from,
        speechFrames: beat.speechFrames,
      });
      from += beat.frames;
    });
  }
}

if (totalFrames !== 3636) {
  throw new Error(`Expected 3636 frames (121.2s), got ${totalFrames}`);
}

export const beatAt = (frame: number, beats: Beat[]) => {
  let cursor = 0;
  for (let index = 0; index < beats.length; index++) {
    const duration = beats[index].frames;
    if (frame < cursor + duration) {
      return {index, local: frame - cursor, duration, beat: beats[index]};
    }
    cursor += duration;
  }
  const last = beats.length - 1;
  return {
    index: last,
    local: beats[last].frames - 1,
    duration: beats[last].frames,
    beat: beats[last],
  };
};
