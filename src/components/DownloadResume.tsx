import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const DownloadResume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '/CV_Ferrero_Carlo.pdf';
    downloadLink.download = 'CV_Ferrero_Carlo.pdf';
    downloadLink.click();
  };

  return (
    <Button variant="outline" color="primary" onClick={handleDownload}>
      Download CV
    </Button>
  );
};

export default DownloadResume;