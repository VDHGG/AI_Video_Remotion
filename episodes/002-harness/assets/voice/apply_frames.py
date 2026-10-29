"""Write approved 121.2s beat lengths into timeline.ts. One-shot, kept so the numbers can be checked."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
TIMELINE = ROOT / "src" / "harness" / "timeline.ts"

PAIRS = [
    (86, 95),
    (65, 74),
    (82, 91),
    (85, 94),
    (106, 115),
    (66, 75),
    (70, 79),
    (113, 122),
    (89, 98),
    (96, 105),
    (149, 158),
    (79, 88),
    (150, 159),
    (130, 139),
    (96, 105),
    (126, 135),
    (112, 121),
    (112, 121),
    (53, 62),
    (80, 89),
    (84, 93),
    (91, 100),
    (61, 70),
    (54, 63),
    (76, 85),
    (74, 83),
    (79, 88),
    (99, 108),
    (73, 82),
    (95, 104),
    (100, 109),
    (91, 100),
    (117, 126),
    (100, 109),
    (55, 64),
    (127, 127),
]

text = TIMELINE.read_text(encoding="utf-8")
text = text.replace(
    """export type Beat = {
  text: string;
  highlight: string;
  highlightColor: string;
  frames: number;
};""",
    """export type Beat = {
  text: string;
  highlight: string;
  highlightColor: string;
  speechFrames: number;
  frames: number;
};""",
)
text = text.replace(
    """const f = {
  s5: 150,
  s55: 165,
  s6: 180,
  s8: 240,
};

""",
    "",
)
matches = list(re.finditer(r"frames: f\.s\d+,", text))
if len(matches) != len(PAIRS):
    raise SystemExit(f"expected {len(PAIRS)} frame fields, found {len(matches)}")
for (speech, frames), match in zip(reversed(PAIRS), reversed(matches)):
    replacement = f"speechFrames: {speech},\n        frames: {frames},"
    text = text[: match.start()] + replacement + text[match.end() :]

old_check = """if (totalFrames !== 205 * FPS) {
  throw new Error(`Expected ${205 * FPS} frames, got ${totalFrames}`);
}"""
new_check = """export const voiceCues: {file: string; from: number; speechFrames: number}[] = [];
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
}"""
if old_check not in text:
    raise SystemExit("duration check not found")
text = text.replace(old_check, new_check)
text = text.replace('import {FPS} from "../theme";\n\n', "")
TIMELINE.write_text(text, encoding="utf-8")
print("updated", TIMELINE)
