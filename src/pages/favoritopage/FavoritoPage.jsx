import React from 'react'
import { useSelector } from 'react-redux'
import CardMovie from '../../components/cardmovie/CardMovie';
function Favorito() {
    const favorites = useSelector((state) => state.favorites);
  return (
    <div>
        <h2>Meus Favoritos</h2>
        {favorites.length === 0 ? (
            <p>Nenhum filme favorito ainda</p>
        ) : (
            <CardMovie movioes={favorites}/>
        )}
    </div>
  );
};

export default Favorito