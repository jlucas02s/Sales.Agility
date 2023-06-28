import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function perfil() {
  const [imagem, setImagem] = useState(null);

  function handleImagemSelecionada(evento) {
    setImagem(URL.createObjectURL(evento.target.files[0]));
  }

  return (
    <div>
    <Link
    style={{
      color: "black",
      textDecoration: "none",
    }}
    to="/menu"
  >
    <button
      style={{
        fontWeight: "bold",
        padding: "5px",
        border: "none",
        borderRadius: "8px",
        width: "100px",
        fontSize: "20px",
        backgroundColor: "limegreen",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      Voltar{" "}
    </button>
  </Link>

    <div className='perfil'>
    <h1>Perfil</h1>
    {imagem && <img src={imagem}  className='img'/>}
    <form>
      <input type="file" onChange={handleImagemSelecionada} style={{backgroundColor:"green"}}/>
    </form>
  </div>
  </div>
  )
}
