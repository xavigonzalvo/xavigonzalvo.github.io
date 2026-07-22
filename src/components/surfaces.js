// Shared "frosted pill" surface used by the nav bar, menu button, avatar ring
// and dark-mode toggle: translucent bg + blur + soft shadow + hairline ring.
export const frostedSx = (t) => ({
  bgcolor:
    t.palette.mode === "dark" ? "rgba(39,39,42,0.9)" : "rgba(255,255,255,0.9)",
  backdropFilter: "blur(8px)",
  border: "1px solid",
  borderColor:
    t.palette.mode === "dark" ? "rgba(255,255,255,0.25)" : "#d4d4d8",
  boxShadow:
    t.palette.mode === "dark"
      ? "0 10px 15px -3px rgba(0,0,0,0.2)"
      : "0 10px 15px -3px rgba(39,39,42,0.08)",
});
