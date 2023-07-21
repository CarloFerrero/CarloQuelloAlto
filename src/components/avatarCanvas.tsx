import React, { useEffect, useRef } from 'react';

interface AvatarCanvasProps {
  poseData: any;
}

const AvatarCanvas: React.FC<AvatarCanvasProps> = ({ poseData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const drawAvatar = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const keyPoints = poseData.keypoints;
      if (keyPoints) {
        keyPoints.forEach((keypoint: any) => {
          const { x, y } = keypoint.position;
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = 'red';
          ctx.fill();
        });
      }
      
      requestAnimationFrame(drawAvatar);
    };

    drawAvatar();
  }, [poseData]);

  return <canvas ref={canvasRef} width={640} height={480} />;
};

export default AvatarCanvas;
