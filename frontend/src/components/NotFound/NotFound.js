import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzN6Y3g0MmdsbGRtaHBib2hrbmZ2dDBiOGMyeDF1amNzNnd0bnNtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/giXLnhxp60zEEIkq8K/giphy-downsized-large.gif"
        alt="Not Found"
        className="not-found-image"
      />
      <h2>Nenhum resultado encontrado</h2>
      <p>Tente buscar por outro nome ou verifique a ortografia.</p>
      {/* Aqui eu volto pra tela inicial */}
      <button onClick={() => window.location.reload()} className="retry-button">
        Tente Novamente
      </button>
    </div>
  );
};

export default NotFound;
