import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';

const Crop = ({ src }) => {
  return <CropDemo src={src} />;
};

const CropDemo = ({ src }) => {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
};

export default Crop;
