import {Easing, interpolate} from "remotion";
import {C, CAPTION_SIZE, CAPTION_TOP, CAPTION_WIDTH, FONT} from "../theme";

const paint = (line: string, highlight: string, color: string) => {
  const at = line.indexOf(highlight);
  if (at < 0) {
    return [{text: line, color: C.ink}];
  }
  return [
    {text: line.slice(0, at), color: C.ink},
    {text: line.slice(at, at + highlight.length), color},
    {text: line.slice(at + highlight.length), color: C.ink},
  ].filter((part) => part.text.length > 0);
};

export const Caption: React.FC<{
  text: string;
  highlight: string;
  highlightColor: string;
  localFrame: number;
}> = ({text, highlight, highlightColor, localFrame}) => {
  const lines = text.split("\n");
  const enter = interpolate(localFrame, [0, 6], [8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        position: "absolute",
        top: CAPTION_TOP,
        left: (1080 - CAPTION_WIDTH) / 2,
        width: CAPTION_WIDTH,
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: CAPTION_SIZE,
        lineHeight: 1.22,
        textAlign: "center",
        transform: `translateY(${enter}px)`,
      }}
    >
      {lines.map((line) => (
        <div key={line}>
          {paint(line, highlight, highlightColor).map((part) => (
            <span key={`${line}-${part.text}`} style={{color: part.color}}>
              {part.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
