import React, { useEffect, useRef } from 'react';
import './Heart.css';

const Heart = ({ delay }) => {
  const heartRef = useRef(null);

  useEffect(() => {
    const heart = heartRef.current;
    let posX = 0;
    let posY = 0;
    let moveX = 2; // Velocidade horizontal
    let moveY = 2; // Velocidade vertical

    const moveHeart = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const heartWidth = heart.offsetWidth;
      const heartHeight = heart.offsetHeight;

      posX += moveX;
      posY += moveY;

      if (posX + heartWidth >= screenWidth || posX <= 0) {
        moveX *= -1;
      }
      if (posY + heartHeight >= screenHeight || posY <= 0) {
        moveY *= -1;
      }

      heart.style.left = posX + 'px';
      heart.style.top = posY + 'px';

      requestAnimationFrame(moveHeart);
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(moveHeart);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return <div className="heart" ref={heartRef}></div>;
};



export default Heart;
