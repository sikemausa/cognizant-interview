import React from 'react';

const LoadingScreen = () => (
  <div className="loader">
    <style jsx>{`
      .loader {
        width: 200px;
        height: 200px;
        margin: auto;
        border-radius: 100%;
        border-left: 18px #5555ff solid;
        border-right: 18px #5555ff solid;
        border-top: 18px #55ffff solid;
        border-bottom: 18px #55ffff solid;
        animation: rotation 2s linear infinite;
      }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    `}</style>
  </div>);

export default LoadingScreen;
