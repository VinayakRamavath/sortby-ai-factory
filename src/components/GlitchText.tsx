import { motion } from "framer-motion";

type GlitchTextProps = {
  text: string;
  playOnce?: boolean;
};

const GlitchText = ({ text, playOnce = true }: GlitchTextProps) => {
  const letters = text.split("");

  return (
    <div className="relative inline-block">
      {/* scanline */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: ["0%", "100%"], opacity: [0, 0.9, 0] }}
        transition={{ duration: 1.4, ease: "easeInOut", repeat: playOnce ? 0 : Infinity, repeatDelay: 1.6 }}
      />

      {/* base letters */}
      <motion.div
        className="relative flex gap-3 md:gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: playOnce, amount: 0.7 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {letters.map((char, idx) => (
          <motion.span
            key={idx}
            className="relative select-none font-display text-9xl md:text-[14rem] font-extrabold tracking-tight"
            variants={{
              hidden: { opacity: 0, filter: "blur(6px)", y: 24 },
              show: { opacity: 1, filter: "blur(0px)", y: 0 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            {/* main with stronger glow and gradient */}
            <span
              className="relative z-10 gradient-text"
              style={{
                textShadow:
                  "0 0 10px rgba(93,217,208,0.6), 0 0 24px rgba(93,217,208,0.35), 0 6px 24px rgba(0,0,0,0.6)",
                WebkitTextStroke: "1px rgba(255,255,255,0.05)",
              }}
            >
              {char}
            </span>
            {/* pixel blocks overlay */}
            <motion.span
              className="absolute inset-0 z-20"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] }}
              viewport={{ once: playOnce }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
              style={{
                background:
                  "linear-gradient(0deg, transparent 0 46%, rgba(93,217,208,0.35) 46% 54%, transparent 54% 100%), repeating-linear-gradient(90deg, rgba(93,217,208,0.25) 0 2px, transparent 2px 4px)",
                mixBlendMode: "screen",
              }}
            />
            {/* RGB glitch clones */}
            <motion.span
              className="absolute inset-0 z-0"
              style={{ color: "#00ffff", textShadow: "0 0 18px rgba(0,255,255,0.45)" }}
              animate={{ x: [-1.5, 0, 1.5, 0], opacity: [0.22, 0.08, 0.22, 0.08] }}
              transition={{ duration: 0.6, repeat: playOnce ? 0 : Infinity, repeatDelay: 1.2 }}
            >
              {char}
            </motion.span>
            <motion.span
              className="absolute inset-0 z-0"
              style={{ color: "#ff00ff", textShadow: "0 0 18px rgba(255,0,255,0.45)" }}
              animate={{ x: [1.5, 0, -1.5, 0], opacity: [0.2, 0.08, 0.2, 0.08] }}
              transition={{ duration: 0.6, repeat: playOnce ? 0 : Infinity, repeatDelay: 1.2 }}
            >
              {char}
            </motion.span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default GlitchText;


