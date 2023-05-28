import React from 'react';
import './Mur.css';
var cant=0;
function Murcia() {
  return (
    <div class="main">
      <h1>Murciélagos</h1>
      <p>Los murciélagos son mamíferos voladores que...</p>
      <button onClick={mostrarImagen}>Mostrar imagen</button>
      <div id="imagen-container"></div>
    </div>
  );
}
function mostrarImagen() {
  if(cant!=2){
    const imagen = document.createElement('img');
    imagen.src = "https://th.bing.com/th/id/R.0e596352e7acb4d743c33803c1a5421b?rik=IvzpEtS8Cc0hQA&pid=ImgRaw&r=0";
    document.getElementById('imagen-container').appendChild(imagen);
    cant=2;
  }
}
export default Murcia;
