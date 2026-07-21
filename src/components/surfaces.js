// Shared "frosted pill" surface used by the nav bar, menu button, avatar ring
// and dark-mode toggle: translucent bg + blur + soft shadow + hairline ring.
export const frostedSx = (t) => ({
  bgcolor:
    t.palette.mode === "dark" ? "rgba(39,39,42,0.9)" : "rgba(255,255,255,0.9)",
  backdropFilter: "blur(8px)",
  boxShadow:
    t.palette.mode === "dark"
      ? "0 10px 15px -3px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)"
      : "0 10px 15px -3px rgba(39,39,42,0.05), inset 0 0 0 1px rgba(24,24,27,0.05)",
});
