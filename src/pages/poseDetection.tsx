import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';

import React, { useEffect, useRef } from 'react';

interface PoseDetectionProps {
  width: number;
  height: number;
}

const PoseDetection: React.FC<PoseDetectionProps> = ({ width, height }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Declare a function to perform the setup and loading of the model
    const setupPoseDetection = async () => {
      try {
        // Wait for TensorFlow.js to be ready and set the backend
        await tf.ready();
        await tf.setBackend('webgl'); // You can use 'webgpu' if your system supports it

        // Load the PoseDetection model
        const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, {
          modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
        });

        if (videoRef.current && canvasRef.current) {
          videoRef.current.width = width;
          videoRef.current.height = height;

          canvasRef.current.width = width;
          canvasRef.current.height = height;

                  // Start the webcam stream
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // @ts-ignore
        videoRef.current.srcObject = stream;

        // Wait for the video metadata to be loaded
        await new Promise((resolve : any) => {
          // @ts-ignore
          videoRef.current.onloadedmetadata = () => resolve();
        });

        detectPose(detector);
        }
      } catch (error) {
        console.error('Error setting up pose detection:', error);
      }
    };

    // Declare the detectPose function
    const detectPose = async (detector: poseDetection.PoseDetector) => {
      try {
        if (!videoRef.current || !canvasRef.current) {
          return;
        }

        const poses = await detector.estimatePoses(videoRef.current);
        const ctx = canvasRef.current.getContext('2d');

        if (ctx) {
          ctx.clearRect(0, 0, width, height);

          poses.forEach((pose) => {
            pose.keypoints.forEach((keypoint: any) => {
              if (keypoint.position) {
                const { y, x } = keypoint.position;
                drawKeypoint(ctx, x, y);
              }
            });
          });
        }
      } catch (error) {
        console.error('Error detecting pose:', error);
      }

      // Request the next frame
      requestAnimationFrame(() => detectPose(detector));
    };

    setupPoseDetection();
  }, [width, height]);

  const drawKeypoint = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
  };

  return (
    <div>
      <video ref={videoRef}></video>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PoseDetection;
