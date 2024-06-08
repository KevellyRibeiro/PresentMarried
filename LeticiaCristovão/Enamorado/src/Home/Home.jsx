import React, { useState } from 'react';
import '../Home/home.css'
import Heart from '../Home/Heart'
import MovieLeticia from '../assets/VID-20240601-WA0010.mp4'
const Home = () => {
  

  return (
    <>
        <div className='Encapsuladora'>
        <Heart delay={2000} />
        <Heart delay={4000} />
        <Heart delay={6000} />
            <div className='video-let'>
                <div className='textTitle'>
                    <h1>Meu Amor e Sua Beleza De Outro Mundo!</h1>
                </div>
                
                <video width="600" controls>
                <source src={MovieLeticia} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
                </video>
                <h3>SOU APAIXONADO NESSA MULHER DESDE 16 DE SETEMBRO DE 2022

                </h3>
                <h2></h2>
            </div>
            
        
        </div>
       
    </>
  );
};

export { Home };
