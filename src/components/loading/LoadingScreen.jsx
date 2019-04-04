import React from 'react';
import LogoGif from './../../images/logo-loader-gif.gif';

export default function LoadingScreen() {
  return (
    <div className='LoadingScreen full-width full-height'>
      <div className='center-middle'>
        <img src={LogoGif} alt="budgety-logo" width="100"/>
      </div>
    </div>
  )
}
