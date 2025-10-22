type HeroVideoProps = {
  videoSrc?: string;
  posterSrc?: string;
  soldierSrc?: string;
};

const HeroVideo = ({
  videoSrc = "/hero/enterprise-hero.mp4",
  posterSrc = "/hero/poster.jpg",
  soldierSrc = "/hero/soldier.png",
}: HeroVideoProps) => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-125"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        poster={posterSrc}
        style={{ filter: "grayscale(100%)" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark vignette overlay for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Soldier overlay (subtle, blended) */}
      <img
        src={soldierSrc}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 max-h-[70%] md:max-h-[85%] opacity-50 mix-blend-screen select-none"
        style={{ filter: "grayscale(100%) drop-shadow(0 0 20px rgba(93,217,208,0.25))" }}
      />
    </div>
  );
};

export default HeroVideo;


