import './LoadingSpinner.css';
import React from 'react';

  export default function loadingSpinner() {
    return (
      <div className='text-center'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
}
