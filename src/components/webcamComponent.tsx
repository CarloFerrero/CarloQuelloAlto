import React, { useEffect, useRef } from 'react';

const WebcamComponent = React.forwardRef<HTMLVideoElement | null>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        console.log("stream: ", stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("videoRef.current: ", videoRef.current);
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    startWebcam();
  }, []);

  return (
    <video 
      style={{ width: '50%' }}
      // @ts-ignore
      ref={(el) => { videoRef.current = el; if (ref) ref.current = el; }} autoPlay playsInline muted 
    />
  )
});

export default WebcamComponent;
