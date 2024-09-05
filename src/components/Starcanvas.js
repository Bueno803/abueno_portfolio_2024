import React, { useRef, useEffect } from "react";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2.8;

    // Function to create a star object with velocity
    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      opacity: Math.random(),
      velocityX: (Math.random() - 0.5) * 0.9, // Horizontal velocity (-0.25 to 0.25)
      velocityY: Math.random() * 0.5 + 0.6, // Vertical velocity (0.1 to 0.6)
    });

    // Function to draw a star
    const drawStar = (star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    };

    // Create an array of stars
    const stars = Array.from({ length: 200 }, createStar);

    // Function to update the star's position
    const updateStarPosition = (star) => {
      star.x += star.velocityX;
      star.y += star.velocityY;

      // If the star goes off the bottom or sides of the canvas, wrap it around
      if (star.x > canvas.width) {
        star.x = 0;
      } else if (star.x < 0) {
        star.x = canvas.width;
      }
      if (star.y > canvas.height) {
        star.y = 0;
      }
    };

    // Function to animate the stars
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        updateStarPosition(star);
        drawStar(star);
      });
      requestAnimationFrame(animateStars); // Keep animating the stars
    };

    animateStars();

    // Clean up when the component is unmounted
    return () => {
      cancelAnimationFrame(animateStars);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 1600, left: 0 }}
    />
  );
};

export default StarCanvas;
