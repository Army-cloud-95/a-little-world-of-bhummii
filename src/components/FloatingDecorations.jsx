import React, { useEffect, useState } from 'react';

export default function FloatingDecorations() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const items = ['💗', '🌸', '✨', '🤍', '🌷', '⭐', '🎀'];
    const generated = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      char: items[i % items.length],
      left: Math.random() * 96 + '%',
      top: Math.random() * 95 + '%',
      size: Math.random() * 14 + 14 + 'px',
      duration: Math.random() * 8 + 6 + 's',
      delay: Math.random() * 5 + 's',
      opacity: Math.random() * 0.4 + 0.25,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <span
          key={el.id}
          className="absolute select-none animate-float-slow"
          style={{
            left: el.left,
            top: el.top,
            fontSize: el.size,
            animationDuration: el.duration,
            animationDelay: el.delay,
            opacity: el.opacity,
            filter: 'drop-shadow(0 2px 4px rgba(157, 82, 111, 0.15))',
          }}
        >
          {el.char}
        </span>
      ))}
    </div>
  );
}
