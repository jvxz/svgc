export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-background bg-grid-black/[0.15] dark:bg-grid-white/[0.1]">
      {children}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0.01%,black)]"></div>
    </div>
  );
}
