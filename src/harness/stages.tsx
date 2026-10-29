import {interpolate} from "remotion";
import {C} from "../theme";
import type {StageId} from "./timeline";
import {Basket, FlowDots, Frame, NodeRow, Paper, Phone, Tag, useBob} from "./pieces";

const travel = (local: number) =>
  interpolate(local, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const StageView: React.FC<{
  id: StageId;
  frame: number;
  local: number;
  step: number;
  speechFrames: number;
}> = ({id, frame, local, step, speechFrames}) => {
  if (id === "basket") {
    return <BasketStage />;
  }
  if (id === "prompt") {
    return <PromptStage local={local} step={step} />;
  }
  if (id === "table") {
    return <TableStage local={local} step={step} />;
  }
  if (id === "loop") {
    return <LoopStage step={step} local={local} speechFrames={speechFrames} />;
  }
  if (id === "system") {
    return <SystemStage frame={frame} local={local} step={step} />;
  }
  if (id === "fake") {
    return <FakeStage step={step} />;
  }
  if (id === "compare") {
    return <CompareStage step={step} local={local} />;
  }
  if (id === "rule") {
    return <RuleStage step={step} />;
  }
  return <FollowStage />;
};

const BasketStage: React.FC = () => {
  const bob = useBob(7, 20);
  return (
    <Frame gap={32}>
      <Tag text="SƠ ĐỒ MINH HỌA" />
      <Phone text="Mua đồ nấu cơm tối." width={900} hot />
      <Basket herb="empty" width={960} bob={bob} />
      <div style={{fontSize: 48, color: C.coral, textAlign: "center"}}>Giỏ về thiếu rau.</div>
    </Frame>
  );
};

const PromptStage: React.FC<{local: number; step: number}> = ({local, step}) => {
  const bob = useBob(5, 24);
  const clear = step >= 1;
  const text = clear ? "Rau thơm, thịt, mì, chợ đầu ngõ." : "Mua đồ nấu cơm tối.";
  return (
    <Frame gap={8}>
      <Tag text="PROMPT" />
      <Phone text={text} width={960} hot={step === 1} />
      <FlowDots travel={step === 0 ? 0 : travel(local)} color={C.gold} />
      <Basket herb="empty" width={760} bob={bob} />
    </Frame>
  );
};

const TableStage: React.FC<{local: number; step: number}> = ({local, step}) => {
  const bob = useBob(5, 22);
  const wrong = step === 2;
  const lines = wrong
    ? [
        {text: "rau sai", color: C.coral},
        {text: "thịt", color: "#1a1814"},
        {text: "mì", color: "#1a1814"},
      ]
    : [
        {text: "rau thơm", color: "#1a1814"},
        {text: "thịt", color: "#1a1814"},
        {text: "mì", color: "#1a1814"},
      ];
  const showMoney = step >= 1;
  return (
    <Frame gap={22}>
      <Tag text="CONTEXT" />
      <div style={{display: "flex", alignItems: "center", gap: 18}}>
        <div>
          <Paper width={430} lines={lines} />
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 16,
              opacity: showMoney ? 1 : 0.28,
            }}
          >
            <Chip label="tiền" on={showMoney} />
            <Chip label="chợ đầu ngõ" on={showMoney} />
          </div>
        </div>
        <FlowDots
          travel={wrong ? 1 : showMoney ? travel(local) : 0}
          horizontal
          color={wrong ? C.coral : C.teal}
        />
        <Basket herb={wrong ? "wrong" : "empty"} width={430} bob={bob} />
      </div>
    </Frame>
  );
};

const LoopStage: React.FC<{step: number; local: number; speechFrames: number}> = ({
  step,
  local,
  speechFrames,
}) => {
  const checked = step >= 3;
  const arrived = step > 4 || (step === 4 && local >= Math.round(speechFrames * 0.45));
  const seen = step >= 5;
  const gate = step >= 2;
  const mark = (ok: boolean) => (checked ? (ok ? "✓" : "✗") : "");
  return (
    <Frame gap={10}>
      <Tag text="HARNESS · SƠ ĐỒ MINH HỌA" />
      <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 28}}>
        <NodeRow on hot={step <= 1} color={C.gold}>
          <div style={{display: "flex", gap: 14, paddingTop: 8}}>
            <Chip label="Prompt" on />
            <Chip label="Context" on />
          </div>
        </NodeRow>
        <NodeRow on hot={step === 3} color={checked && !arrived ? C.coral : C.teal}>
          <Paper
            width={700}
            lines={[
              {text: "rau thơm", color: arrived ? "#1a1814" : C.coral, mark: mark(arrived)},
              {text: "thịt", color: "#1a1814", mark: mark(true)},
              {text: "mì", color: "#1a1814", mark: mark(true)},
            ]}
          />
        </NodeRow>
        <NodeRow on hot={step === 2 || step === 4} color={C.teal}>
          <div style={{display: "flex", gap: 16}}>
            <Stall name={step === 4 ? "quay lại quầy rau" : "quầy rau"} open={gate} hot={step === 2 || step === 4} />
            <Stall name="quầy khác" open={false} warn={step >= 6} />
          </div>
        </NodeRow>
        <NodeRow on hot={arrived && step === 4} last={!seen}>
          <Basket herb={arrived ? "filled" : "empty"} width={560} bob={0} />
        </NodeRow>
        {seen ? (
          <NodeRow on hot={step >= 5} last>
            <div style={{fontSize: 42, color: C.teal, paddingTop: 12}}>đã xem</div>
          </NodeRow>
        ) : null}
      </div>
    </Frame>
  );
};

const SystemStage: React.FC<{frame: number; local: number; step: number}> = ({
  frame,
  local,
  step,
}) => {
  const rows = [
    {label: "Permission", detail: "cổng quầy rau", on: step >= 1},
    {label: "Check", detail: "thịt có, rau chưa", on: step >= 2},
    {label: "Retry", detail: "quay lại quầy", on: step >= 3},
    {label: "Stop", detail: "đủ thì thôi", on: step >= 4},
    {label: "Review", detail: "xem trước khi nhận", on: step >= 5},
  ];
  return (
    <Frame gap={16}>
      <Tag text="HARNESS" />
      <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 14}}>
        {rows.map((row, index) => {
          const hot = index === step - 1;
          const fill = row.on ? travel(index === step - 1 ? local : 20) : 0;
          const idle = hot ? Math.sin(frame / 18) * 3 : 0;
          return (
            <div
              key={row.label}
              style={{
                position: "relative",
                overflow: "hidden",
                background: hot ? "#1e4a46" : C.cell,
                borderRadius: 20,
                padding: "26px 28px",
                translate: `0 ${idle}px`,
                opacity: row.on ? 1 : 0.38,
                borderLeft: `12px solid ${row.on ? C.teal : "#3a4452"}`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${fill * 100}%`,
                  background: "rgba(125,206,196,0.16)",
                }}
              />
              <div style={{position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16}}>
                <div style={{fontSize: 48, color: row.on ? C.teal : C.mute}}>{row.label}</div>
                <div style={{fontSize: 32, color: C.ink, textAlign: "right"}}>{row.detail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
};

const FakeStage: React.FC<{step: number}> = ({step}) => {
  const bob = useBob(5, 24);
  return (
    <Frame gap={28}>
      <Tag text="SƠ ĐỒ MINH HỌA" />
      <Paper
        width={640}
        lines={[
          {text: "rau thơm", color: C.coral, mark: "✗"},
          {text: "thịt", color: "#1a1814", mark: "✓"},
          {text: "mì", color: "#1a1814", mark: "✓"},
        ]}
        footer={step >= 1 ? "done" : undefined}
      />
      <Basket herb="empty" width={720} bob={bob} />
      <Stall name="quầy rau tối, không ai quay lại" open={false} hot={false} wide />
    </Frame>
  );
};

const CompareStage: React.FC<{step: number; local: number}> = ({step, local}) => {
  const rows = [
    {label: "Prompt", note: "giỏ thiếu rau", herb: "empty" as const, bar: 0.92, color: C.coral},
    {label: "Context", note: "vẫn có thể thiếu", herb: "empty" as const, bar: 0.62, color: C.gold},
    {label: "Harness", note: "quay lại rồi về", herb: "filled" as const, bar: 0.34, color: C.teal},
  ];
  return (
    <Frame gap={18}>
      <Tag text="CÙNG MỘT LẦN ĐI CHỢ" />
      <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 16}}>
        {rows.map((row, index) => {
          const on = step >= index;
          const grown = index < step ? row.bar : index === step ? row.bar * travel(local) : 0;
          return (
            <div
              key={row.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: C.cell,
                borderRadius: 22,
                padding: "14px 16px",
                opacity: on ? 1 : 0.28,
              }}
            >
              <div style={{width: 210}}>
                <div style={{fontSize: 36, color: on ? row.color : C.mute}}>{row.label}</div>
                <div style={{fontSize: 26, color: C.ink, marginTop: 4}}>{row.note}</div>
              </div>
              <Basket herb={row.herb} width={360} meat noodle handle={false} />
              <div style={{flex: 1, height: 48, borderRadius: 12, background: "#10151c"}}>
                <div
                  style={{
                    width: `${grown * 100}%`,
                    height: "100%",
                    borderRadius: 12,
                    background: row.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
};

const RuleStage: React.FC<{step: number}> = ({step}) => {
  const lines = [
    {title: "Sửa Prompt", note: "hệ thống hiểu sai việc", color: C.gold},
    {title: "Đưa Context", note: "thiếu thông tin, hoặc Context đang sai", color: C.teal},
    {title: "Dựng Harness", note: "làm xong vẫn cần biết đúng hay sai", color: C.teal},
  ];
  return (
    <Frame gap={26}>
      <Tag text="KHI VIỆC BỊ LỆCH" />
      <div style={{width: "100%", display: "flex", flexDirection: "column", gap: 22}}>
        {lines.map((line, index) => {
          const on = step >= index;
          return (
            <div
              key={line.title}
              style={{
                opacity: on ? 1 : 0.28,
                background: C.cell,
                borderRadius: 22,
                padding: "22px 28px",
                borderLeft: `12px solid ${on ? line.color : "#3a4452"}`,
              }}
            >
              <div style={{fontSize: 52, color: on ? line.color : C.mute}}>{line.title}</div>
              <div style={{fontSize: 32, color: C.ink, marginTop: 8}}>{line.note}</div>
            </div>
          );
        })}
      </div>
      {step >= 3 ? (
        <div style={{fontSize: 42, textAlign: "center"}}>
          Prompt <span style={{color: C.coral}}>không kiểm được giỏ</span>
        </div>
      ) : null}
    </Frame>
  );
};

const FollowStage: React.FC = () => {
  const bob = useBob(6, 28);
  return (
    <Frame align="center" gap={28}>
      <Basket herb="filled" width={640} bob={bob} />
      <div style={{textAlign: "center"}}>
        <div style={{fontSize: 72, lineHeight: 1.2}}>Hãy Follow</div>
        <div style={{fontSize: 84, lineHeight: 1.2, color: C.gold, marginTop: 22}}>
          Anh 40 học AI
        </div>
        <div style={{fontSize: 52, lineHeight: 1.3, marginTop: 26}}>
          để cập nhật nhiều thông tin về AI hơn.
        </div>
      </div>
    </Frame>
  );
};

const Chip: React.FC<{label: string; on?: boolean}> = ({label, on = true}) => {
  return (
    <div
      style={{
        background: on ? "#243044" : C.cell,
        color: on ? C.ink : C.mute,
        borderRadius: 16,
        padding: "14px 18px",
        fontSize: 32,
        border: `3px solid ${on ? C.teal : "#3a4452"}`,
      }}
    >
      {label}
    </div>
  );
};

const Stall: React.FC<{
  name: string;
  open: boolean;
  hot?: boolean;
  warn?: boolean;
  wide?: boolean;
}> = ({name, open, hot = false, warn = false, wide = false}) => {
  const frameBob = useBob(hot || warn ? 4 : 0, 16);
  const border = open ? C.teal : warn ? C.coral : "#3a4452";
  const color = open ? C.teal : warn ? C.coral : C.mute;
  return (
    <div
      style={{
        flex: wide ? undefined : 1,
        width: wide ? 920 : undefined,
        borderRadius: 20,
        padding: "22px 18px",
        fontSize: 34,
        textAlign: "center",
        background: hot && open ? "#1e4a46" : C.cell,
        color,
        border: `5px solid ${border}`,
        translate: `0 ${frameBob}px`,
      }}
    >
      {name}
    </div>
  );
};
