"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter, { Engine, Render, World, Bodies, Runner, Body } from "matter-js";

export default function PhysicsScene() {
  const sceneRef = useRef(null);
  const engine = useRef<Engine | null>(null);
  const runner = useRef<Runner | null>(null);

  // Stato per posizione e angolo
  const [position, setPosition] = useState({ x: 0, y: 0, angle: 0 });

  useEffect(() => {
    engine.current = Engine.create();
    runner.current = Runner.create();

    const render = Render.create({
      element: sceneRef.current!,
      engine: engine.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // Creo il corpo fisico
    const box = Bodies.rectangle(500, 100, 200, 80, {
      restitution: 0.5,
      angle: Math.PI / 12, // 15°
      render: { visible: false }, // non disegnare il rettangolo nel canvas
    });

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 1,
      window.innerWidth,
      100,
      {
        isStatic: true,
        restitution: 0.8,
        render: { fillStyle: "transparent" },
      }
    );

    World.add(engine.current.world, [box, ground]);
    Runner.run(runner.current, engine.current);
    Render.run(render);

    // Aggiorna posizione
    const update = () => {
      setPosition({
        x: box.position.x,
        y: box.position.y,
        angle: box.angle,
      });
    };

    Matter.Events.on(engine.current, "afterUpdate", update);

    return () => {
      Render.stop(render);
      Engine.clear(engine.current!);
      if (render.canvas) {
        render.canvas.remove();
        render.textures = {};
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-40 pointer-events-none">
      <div ref={sceneRef} className="absolute top-0 left-0 w-full h-full" />
      {/* Overlay immagine */}
      <img
        src="/BIM(k)now!.png"
        alt="bimknow"
        style={{
          position: "absolute",
          width: "200px",
          height: "60px",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${position.angle}rad)`,
          transition: "transform 0.016s linear",
        }}
      />
    </div>
  );
}
