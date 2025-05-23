
export const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border bg-white shadow p-4 ${className}`}>{children}</div>
);
export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
