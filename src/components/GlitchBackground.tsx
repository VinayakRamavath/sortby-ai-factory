const GlitchBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f12]" />
      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(93,217,208,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(93,217,208,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px, 32px 32px",
          backgroundPosition: "0 0, 0 0",
          animation: "grid-drift 18s linear infinite",
        }}
      />
      {/* subtle moving dots */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="noise-dots w-full h-full opacity-25" />
      </div>
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_70%)]" />
    </div>
  );
};

export default GlitchBackground;


