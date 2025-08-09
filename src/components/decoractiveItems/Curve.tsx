interface CurveProps {
  innerColor: string;
  outerColor: string;
  className?: string;
}

export default function Curve({ innerColor, outerColor, className }: CurveProps) {
  return (
    <div className={`w-full h-15 bg-[${innerColor}] relative overflow-hidden ${className}`} style={{ marginTop: '-1px' }}>
          <div
            className={`absolute left-1/2 -translate-x-1/2 -top-8 w-[107%] h-23 bg-[${outerColor}] rounded-b-[100%] z-10`}
            style={{ borderBottomLeftRadius: "100% 190px", borderBottomRightRadius: "100% 190px" }}
          ></div>
        </div>
  );
}