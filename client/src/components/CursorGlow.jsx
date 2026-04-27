import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x:0, y:0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e)=>{
      setPos({ x:e.clientX, y:e.clientY });
    });
  }, []);

  return (
    <div
      className="fixed w-40 h-40 rounded-full pointer-events-none z-0 blur-3xl bg-gold/20"
      style={{
        left: pos.x - 80,
        top: pos.y - 80
      }}
    />
  );
}

export default CursorGlow;