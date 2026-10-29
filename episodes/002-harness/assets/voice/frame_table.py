import json
import math
from pathlib import Path

rows = json.loads((Path(__file__).resolve().parent / "durations.json").read_text(encoding="utf-8"))
fps = 30
gap = 9
speech = [math.ceil(row["seconds"] * fps) for row in rows]
frames = [count + (0 if index == len(speech) - 1 else gap) for index, count in enumerate(speech)]
print("sum", sum(frames))
cursor = 0
for index, row in enumerate(rows):
    end = cursor + frames[index]
    print(f"{row['id']}\t{speech[index]}\t{frames[index]}\t{cursor / fps:.3f}-{end / fps:.3f}")
    cursor = end
