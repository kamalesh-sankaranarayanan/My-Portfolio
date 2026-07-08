export function Particles() {
  return <div className="particles">{Array.from({ length: 38 }, (_, i) => <span key={i} style={{ '--i': i } as React.CSSProperties} />)}</div>;
}
