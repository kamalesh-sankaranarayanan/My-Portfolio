export function StatCard({ label, value }: { label: string; value: string }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}
