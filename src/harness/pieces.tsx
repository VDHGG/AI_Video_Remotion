import {Easing, interpolate, useCurrentFrame} from "remotion";
import {C, FONT} from "../theme";

export const rise = (frame: number, delay = 0) =>
  interpolate(frame, [delay, delay + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

/** Gentle idle. Kept small so it cannot walk into the caption. */
export const useBob = (amp = 6, speed = 22) => {
  const frame = useCurrentFrame();
  return Math.sin(frame / speed) * amp;
};

export const useBreath = () => {
  const frame = useCurrentFrame();
  return 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(frame / 9));
};

export const Ground: React.FC<{
  center: string;
  edge: string;
  children: React.ReactNode;
}> = ({center, edge, children}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(circle at 50% 38%, ${center} 0%, ${edge} 62%, ${C.bg} 100%)`,
        fontFamily: FONT,
        fontWeight: 700,
        color: C.ink,
      }}
    >
      {children}
    </div>
  );
};

/** Art well ends at y=1076. Caption starts at y=1120. */
export const Frame: React.FC<{
  children: React.ReactNode;
  gap?: number;
  align?: "start" | "center";
}> = ({children, gap = 22, align = "start"}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 176,
        left: 36,
        right: 36,
        height: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        gap,
      }}
    >
      {children}
    </div>
  );
};

export const Tag: React.FC<{text: string}> = ({text}) => {
  return (
    <div
      style={{
        fontSize: 30,
        letterSpacing: 2,
        color: C.mute,
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
};

export const Sweep: React.FC<{color: string}> = ({color}) => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 12], [168, 1020], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const opacity = interpolate(frame, [0, 3, 12], [0, 0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: y,
        height: 14,
        background: color,
        opacity,
      }}
    />
  );
};

type SlotState = "in" | "empty" | "wrong" | "filled";

export const Basket: React.FC<{
  width?: number;
  meat?: boolean;
  noodle?: boolean;
  herb?: "empty" | "filled" | "wrong";
  bob?: number;
  handle?: boolean;
}> = ({width = 820, meat = true, noodle = true, herb = "empty", bob = 0, handle = true}) => {
  const frame = useCurrentFrame();
  const breath = 0.55 + 0.45 * Math.sin(frame / 8);
  const slotH = Math.round(width * 0.42);
  const font = width < 500 ? Math.round(width * 0.064) : Math.max(34, Math.round(width * 0.056));

  const slot = (label: string, state: SlotState, live: boolean) => {
    const alert = state === "empty" || state === "wrong";
    const border = alert ? C.coral : C.teal;
    const background = alert ? "#4a2a24" : "#1e4a46";
    const ring = live ? `0 0 0 ${Math.round(3 + breath * 7)}px rgba(224,122,95,0.45)` : "none";
    const nudge = live ? Math.sin(frame / 6) * 4 : 0;
    return (
      <div
        style={{
          flex: 1,
          height: slotH,
          borderRadius: 22,
          border: `7px solid ${border}`,
          background,
          color: alert ? C.coral : C.teal,
          fontSize: font,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: ring,
          translate: `${nudge}px 0`,
        }}
      >
        {label}
      </div>
    );
  };

  const herbLabel = herb === "filled" ? "rau" : herb === "wrong" ? "sai" : "trống";
  const herbState: SlotState = herb === "filled" ? "filled" : herb === "wrong" ? "wrong" : "empty";

  return (
    <div style={{width, translate: `0 ${bob}px`}}>
      {handle ? (
        <div
          style={{
            height: Math.round(width * 0.045),
            margin: `0 ${Math.round(width * 0.18)}px 8px`,
            border: `10px solid ${C.ink}`,
            borderBottom: "none",
            borderRadius: "80px 80px 0 0",
          }}
        />
      ) : null}
      <div
        style={{
          display: "flex",
          gap: 14,
          padding: 18,
          borderRadius: 32,
          background: "#141a22",
        }}
      >
        {slot("thịt", meat ? "in" : "empty", false)}
        {slot("mì", noodle ? "in" : "empty", false)}
        {slot(herbLabel, herbState, herbState !== "filled")}
      </div>
    </div>
  );
};

export const Phone: React.FC<{text: string; width?: number; hot?: boolean; label?: string}> = ({
  text,
  width = 920,
  hot = false,
  label,
}) => {
  const breath = useBreath();
  return (
    <div
      style={{
        width,
        borderRadius: 40,
        background: C.cell,
        border: `4px solid ${hot ? C.gold : "rgba(244,241,234,0.2)"}`,
        padding: "32px 36px",
        boxShadow: hot ? `0 0 0 ${Math.round(breath * 8)}px rgba(231,197,106,0.28)` : "none",
      }}
    >
      {label ? (
        <div style={{fontSize: 22, letterSpacing: 1.4, color: C.mute, marginBottom: 10}}>{label}</div>
      ) : null}
      <div style={{fontSize: 48, lineHeight: 1.25, color: C.gold}}>{text}</div>
    </div>
  );
};

export const Paper: React.FC<{
  width?: number;
  lines: {text: string; color: string; mark?: string}[];
  footer?: string;
}> = ({width = 460, lines, footer}) => {
  return (
    <div
      style={{
        width,
        background: "#f4f1ea",
        color: "#1a1814",
        borderRadius: 22,
        padding: "26px 28px 22px",
      }}
    >
      <div style={{fontSize: 22, letterSpacing: 1.2, color: "#7a7368", marginBottom: 12}}>
        CONTEXT
      </div>
      {lines.map((line) => (
        <div
          key={line.text}
          style={{
            fontSize: 42,
            lineHeight: 1.35,
            color: line.color,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            minHeight: 56,
            alignItems: "center",
          }}
        >
          <span>{line.text}</span>
          {line.mark ? <span style={{color: line.color}}>{line.mark}</span> : null}
        </div>
      ))}
      {footer ? (
        <div
          style={{
            marginTop: 16,
            alignSelf: "flex-end",
            marginLeft: "auto",
            width: "fit-content",
            border: `6px solid ${C.coral}`,
            color: C.coral,
            fontSize: 40,
            padding: "2px 14px",
            borderRadius: 10,
            rotate: "-8deg",
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
};

/** Dots that chase along a short gap. The gap is the only place they live. */
export const FlowDots: React.FC<{
  count?: number;
  travel: number;
  horizontal?: boolean;
  color?: string;
}> = ({count = 5, travel, horizontal = false, color = C.teal}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: horizontal ? 88 : 28,
        height: horizontal ? 28 : 88,
      }}
    >
      {Array.from({length: count}, (_, index) => {
        const spot = index / (count - 1);
        const near = 1 - Math.min(1, Math.abs(travel - spot) * (count - 1));
        return (
          <div
            key={index}
            style={{
              width: 8 + near * 10,
              height: 8 + near * 10,
              borderRadius: 12,
              background: color,
              opacity: 0.25 + near * 0.75,
            }}
          />
        );
      })}
    </div>
  );
};

export const NodeRow: React.FC<{
  on: boolean;
  hot: boolean;
  color?: string;
  children: React.ReactNode;
  last?: boolean;
}> = ({on, hot, color = C.teal, children, last = false}) => {
  const frame = useCurrentFrame();
  const pop = hot ? 1 + Math.sin(frame / 8) * 0.08 : 1;
  return (
    <div style={{display: "flex", gap: 18, width: "100%", alignItems: "stretch"}}>
      <div style={{width: 36, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            marginTop: 18,
            background: on ? color : "#2a3340",
            scale: on ? pop : 0.7,
            border: `3px solid ${on ? color : C.mute}`,
          }}
        />
        {last ? null : (
          <div
            style={{
              width: 6,
              flex: 1,
              minHeight: 16,
              marginTop: 6,
              borderRadius: 4,
              background: on ? color : "#2a3340",
              opacity: on ? 0.85 : 0.45,
            }}
          />
        )}
      </div>
      <div style={{flex: 1, opacity: on ? 1 : 0.38}}>{children}</div>
    </div>
  );
};
