import React from 'react';

export interface IMainContainerProps {} // Optional interface for props (if needed)

export default function Wrapper({children}: any) {
  return (
    <div className="wrapper vh[100] vw[100] bg-lightPink">
      {children}
    </div>
  );
}
