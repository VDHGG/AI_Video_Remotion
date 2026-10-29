import {Composition} from "remotion";
import {EXPLAINER_DURATION, Explainer} from "./Explainer";
import {FPS, HEIGHT, WIDTH} from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Explainer"
      component={Explainer}
      durationInFrames={EXPLAINER_DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
