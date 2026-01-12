import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type ShapeType = "circle" | "square" | "triangle" | "star";

interface PhysicsShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  borderColor: string;
  mass: number;
  type: ShapeType;
  rotation: number; // Added rotation for visual variety
}

export default function PhysicsSection({
  className = "",
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Physics constants
    const gravity = 0.5;
    const friction = 0.99;
    const bounce = 0.75;

    // State
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Resize canvas to match container
    const updateSize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    updateSize();

    // Initialize Forms/Shapes
    const colors = [
      { fill: "#dcfce7", border: "#86efac" }, // Green 100/300
      { fill: "#bbf7d0", border: "#4ade80" }, // Green 200/400
      { fill: "#86efac", border: "#22c55e" }, // Green 300/500
      { fill: "#4ade80", border: "#16a34a" }, // Green 400/600
      { fill: "#22c55e", border: "#15803d" }, // Green 500/700
      { fill: "#16a34a", border: "#14532d" }, // Green 600/900
      { fill: "#10b981", border: "#047857" }, // Emerald 500/700
      { fill: "#6ee7b7", border: "#10b981" }, // Emerald 300/500
    ];

    const shapeTypes: ShapeType[] = ["circle", "square", "triangle", "star"];
    const shapes: PhysicsShape[] = [];
    const shapeCount = 15;

    for (let i = 0; i < shapeCount; i++) {
      const radius = 20 + Math.random() * 30; // Random size
      const colorSet = colors[Math.floor(Math.random() * colors.length)];
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      shapes.push({
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height / 2) + radius, // Start in top half
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        radius: radius,
        color: colorSet.fill,
        borderColor: colorSet.border,
        mass: radius,
        type: type,
        rotation: Math.random() * Math.PI * 2,
      });
    }

    // Interaction State
    let draggingShapeIndex: number | null = null;
    let lastMouseX = 0;
    let lastMouseY = 0;
    const mouse = { x: 0, y: 0 };

    // Auto-toss effect to keep things lively
    const tossInterval = setInterval(() => {
      shapes.forEach((shape, index) => {
        // Don't toss the one the user is holding
        if (index !== draggingShapeIndex) {
          // Apply a random upward and sideways force
          shape.vy = -10 - Math.random() * 10;
          shape.vx = (Math.random() - 0.5) * 10;
        }
      });
    }, 4000);

    function drawStar(
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
    }

    function drawShape(shape: PhysicsShape) {
      ctx.save(); // Save context to handle rotation safely
      ctx.beginPath();

      // Move to shape position for rotation
      if (shape.type !== "circle") {
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.translate(-shape.x, -shape.y);
      }

      ctx.fillStyle = shape.color;
      ctx.strokeStyle = shape.borderColor;
      ctx.lineWidth = 2;

      switch (shape.type) {
        case "square":
          // Draw centered square
          ctx.rect(
            shape.x - shape.radius,
            shape.y - shape.radius,
            shape.radius * 2,
            shape.radius * 2
          );
          break;
        case "triangle":
          // Draw centered triangle
          const h = shape.radius * 2 * (Math.sqrt(3) / 2); // Height of equilateral triangle
          ctx.moveTo(shape.x, shape.y - shape.radius);
          ctx.lineTo(shape.x + shape.radius, shape.y + shape.radius / 2);
          ctx.lineTo(shape.x - shape.radius, shape.y + shape.radius / 2);
          ctx.closePath();
          break;
        case "star":
          drawStar(shape.x, shape.y, 5, shape.radius, shape.radius * 0.5);
          break;
        case "circle":
        default:
          ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
          break;
      }

      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      // Simple shine effect (simplified for general shapes to be a small glint)
      ctx.beginPath();
      let shineX = shape.x - shape.radius * 0.3;
      let shineY = shape.y - shape.radius * 0.3;

      // Rotate shine position if shape is rotated
      if (shape.type !== "circle") {
        // We are still in the transformed context state
        // The shine coordinates need to be relative to the shape center if we use translate
        // But since we are doing absolute coordinates with translate/rotate wrapper:
        // The previous draw calls used absolute coordinates (shape.x etc).
        // To keep shine consistent, we just draw it.
        // However, the context is rotated around shape.x, shape.y.
        // So drawing at shineX, shineY will put the shine at the correct rotated spot relative to the shape.
      }

      ctx.arc(shineX, shineY, shape.radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fill();
      ctx.closePath();

      ctx.restore(); // Restore context
    }

    function updatePhysics() {
      shapes.forEach((shape, index) => {
        // Skip physics for the shape being dragged
        if (index === draggingShapeIndex) return;

        // Apply forces
        shape.vy += gravity;
        shape.x += shape.vx;
        shape.y += shape.vy;

        // Add a little rotation based on velocity for non-circles
        if (shape.type !== "circle") {
          shape.rotation += shape.vx * 0.02;
        }

        // Friction
        shape.vx *= friction;
        shape.vy *= friction;

        // Floor collision
        if (shape.y + shape.radius > height) {
          shape.y = height - shape.radius;
          shape.vy *= -bounce;
          // dampen rotation on floor hit
          shape.vx *= 0.9;
        }

        // Ceiling collision
        if (shape.y - shape.radius < 0) {
          shape.y = shape.radius;
          shape.vy *= -bounce;
        }

        // Right Wall
        if (shape.x + shape.radius > width) {
          shape.x = width - shape.radius;
          shape.vx *= -bounce;
        }

        // Left Wall
        if (shape.x - shape.radius < 0) {
          shape.x = shape.radius;
          shape.vx *= -bounce;
        }
      });
    }

    let animationFrameId: number;

    function animate() {
      ctx.clearRect(0, 0, width, height);
      updatePhysics();
      shapes.forEach(drawShape);
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // --- Interaction Logic ---

    const getMousePos = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleStart = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      mouse.x = x;
      mouse.y = y;

      // Check collision with shapes (iterate backwards to grab top-most)
      for (let i = shapes.length - 1; i >= 0; i--) {
        const shape = shapes[i];
        const dx = x - shape.x;
        const dy = y - shape.y;

        // Using bounding circle for all shapes for easier grabbing
        if (Math.sqrt(dx * dx + dy * dy) < shape.radius) {
          draggingShapeIndex = i;
          shape.vx = 0;
          shape.vy = 0;
          lastMouseX = x;
          lastMouseY = y;
          return; // Stop checking after finding one
        }
      }
    };

    const handleMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      mouse.x = x;
      mouse.y = y;

      if (draggingShapeIndex !== null) {
        const shape = shapes[draggingShapeIndex];

        // Velocity based on throw speed
        shape.vx = x - lastMouseX;
        shape.vy = y - lastMouseY;

        shape.x = x;
        shape.y = y;

        lastMouseX = x;
        lastMouseY = y;
      }
    };

    const handleEnd = () => {
      draggingShapeIndex = null;
    };

    // --- Event Listeners ---

    const onMouseDown = (e: MouseEvent) => handleStart(e.clientX, e.clientY);
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onMouseUp = () => handleEnd();

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        // Prevent scrolling only if touching a shape
        const touch = e.touches[0];
        const { x, y } = getMousePos(touch);

        // Simple check to see if we hit a shape before preventing default
        const hit = shapes.some((s) => {
          const dx = x - s.x;
          const dy = y - s.y;
          return Math.sqrt(dx * dx + dy * dy) < s.radius;
        });

        if (hit) e.preventDefault();

        handleStart(touch.clientX, touch.clientY);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (draggingShapeIndex !== null) e.preventDefault();
      if (e.touches.length === 1) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove); // Window listener for smoother dragging
    window.addEventListener("mouseup", onMouseUp);

    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", handleEnd);

    // Observer for container resize
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    return () => {
      clearInterval(tossInterval); // Clean up the toss timer
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={`group relative w-full h-full overflow-hidden  ${className}`}
      // Added min-height to ensure it's visible even if parent has no height
      style={{ minHeight: "240px" }}
    >
      <canvas
        ref={canvasRef}
        className="block touch-none cursor-grab active:cursor-grabbing"
      />
      <div className="absolute top-4 pointer-events-none select-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl text-white font-bold opacity-90">
          Physics Playground
        </h2>
        <p className="text-sm text-slate-300 opacity-75">
          Toss the shapes around!
        </p>
      </div>
    </div>
  );
}
