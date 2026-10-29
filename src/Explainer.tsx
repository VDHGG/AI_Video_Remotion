import {useEffect, useState} from "react";
import {
  AbsoluteFill,
  Audio,
  cancelRender,
  continueRender,
  delayRender,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {loadFont} from "@remotion/fonts";
import {Caption} from "./harness/Caption";
import {Ground, Sweep} from "./harness/pieces";
import {StageView} from "./harness/stages";
import {beatAt, stageStarts, stages, totalFrames, voiceCues} from "./harness/timeline";
import {FONT} from "./theme";

const fontReady = loadFont({
  family: FONT,
  url: staticFile("fonts/BeVietnamPro-Bold.ttf"),
  weight: "700",
  display: "block",
});

export const EXPLAINER_DURATION = totalFrames;

export const Explainer: React.FC = () => {
  const [handle] = useState(() => delayRender("Be Vietnam Pro"));

  useEffect(() => {
    fontReady
      .then(() => continueRender(handle))
      .catch((error: unknown) => {
        cancelRender(error instanceof Error ? error : new Error(String(error)));
      });
  }, [handle]);

  return (
    <AbsoluteFill style={{fontFamily: FONT}}>
      {stages.map((stage, index) => {
        const start = stageStarts[index];
        const duration = stage.beats.reduce((sum, beat) => sum + beat.frames, 0);
        return (
          <Sequence key={stage.id} from={start} durationInFrames={duration}>
            <StageSequence
              center={stage.center}
              edge={stage.edge}
              sweep={stage.sweep}
              id={stage.id}
              beats={stage.beats}
            />
          </Sequence>
        );
      })}
      {voiceCues.map((cue) => (
        <Sequence key={cue.file} from={cue.from} durationInFrames={cue.speechFrames} name={cue.file}>
          <Audio src={staticFile(`voice/002-harness/${cue.file}.wav`)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const StageSequence: React.FC<{
  id: (typeof stages)[number]["id"];
  center: string;
  edge: string;
  sweep: string;
  beats: (typeof stages)[number]["beats"];
}> = ({id, center, edge, sweep, beats}) => {
  const frame = useCurrentFrame();
  const active = beatAt(frame, beats);
  const showCaption = id !== "follow";

  return (
    <Ground center={center} edge={edge}>
      <Sweep color={sweep} />
      <StageView
        id={id}
        frame={frame}
        local={active.local}
        step={active.index}
        speechFrames={active.beat.speechFrames}
      />
      {showCaption ? (
        <Caption
          text={active.beat.text}
          highlight={active.beat.highlight}
          highlightColor={active.beat.highlightColor}
          localFrame={active.local}
        />
      ) : null}
    </Ground>
  );
};
