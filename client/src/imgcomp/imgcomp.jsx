import React from 'react';
import './imgcomp.css';

const ImgComp = (props) => {
  const imageDataArray = new Uint8Array(props.base64Img.data);

  // Convert the Uint8Array to a base64-encoded string
  const base64Img = `data:image/png;base64,${arrayBufferToBase64(imageDataArray.buffer)}`;

  return (
    <div>
      <img src={base64Img} alt='image' />
    </div>
  );
};

// Function to convert ArrayBuffer to base64
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export default ImgComp;


//    <img src={`data:image/png;base64,${props.base64Img}`} alt='image' />