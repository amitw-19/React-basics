//error!!! {children} part not working.

export default function Section({ title, children, ...props }) {
  return (
    <div {...props}>
      <h2>{title}</h2>

      {children}
    </div>
  );
}
