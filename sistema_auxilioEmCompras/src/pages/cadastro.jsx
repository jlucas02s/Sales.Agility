import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import InputMask from 'react-input-mask';


function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleTelefoneChange = () => {
    setTelefone(e.target.value);
  };

  const handleNascimentoChange = () => {
    setNascimento(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui você pode enviar as informações do formulário para uma API ou fazer qualquer outra coisa com elas
  };

  return (
    <div>
    <Link
    style={{
      color: "black",
      textDecoration: "none",
    }}
    to="/login"
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
        margin: "5px",
      }}
    >
      Voltar{" "}
    </button>
  </Link>
  
    <div className="cadastro">
      <h1> Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="itemsCadastro">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={handleNomeChange}
            style={{ backgroundColor: "DarkGray", height: "1rem" }}
          />
        </div>

        <div className="itemsCadastro">
          <label>
            Email:
          </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{ backgroundColor: "DarkGray", height: "1rem" }}
            />
        </div>

        {/*
        <div>
          <label>
            Senha:
            <input
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={handleSenhaChange}
              style={{ backgroundColor: "DarkGray" }}
            />




            <div>
              <input
                type="checkbox"
                checked={mostrarSenha}
                onChange={handleMostrarSenha}
                style={{
                  marginLeft: "80px",
                }}
              />{" "}
              Mostrar senha
            </div>
          </label>
        </div>
            */}

        <div  className="itemsCadastro">
          <label>
            Senha:
          </label>
            <input
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={handleSenhaChange}
              style={{ backgroundColor: "DarkGray", height: "1rem", width:"6rem"}}
            />
            <i
              className={`far ${mostrarSenha ? "fa-eye-slash" : "fa-eye"}`}
              onClick={handleMostrarSenha}
              style={{ color: "limegreen" }}
            ></i>
        </div>

        <div className="itemsCadastro">
          <label htmlFor="telefone">
            Telefone:
          </label>
          <InputMask mask="(99) 99999-9999"
              value={telefone}
              onChange={handleTelefoneChange}
              style={{ backgroundColor: "DarkGray", height: "1rem" }}
            />
        </div>

        <div className="itemsCadastro">
          <label>
            Data de nascimento:
          </label>
            <input
              type="date"
              value={nascimento}
              onChange={handleNascimentoChange}
              style={{ backgroundColor: "DarkGray", height: "1rem" }}
            />
        </div>

        <button className="buttonCad" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
    </div>
  );
}

export default Cadastro;
