import React from 'react';

export interface IMainContainerProps {} // Optional interface for props (if needed)

export default function Wrapper({children}: any) {
  return (
    <div className="wrapper h-dvh bg-lightPink">
      {children}
    </div>
  );
}
