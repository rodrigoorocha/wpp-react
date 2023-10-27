import React, { Component } from "react";
import Menu from "./components/Menu";
import Chat from "./components/Chat";
import styled from "styled-components";

const CenteredRectangle = styled.div`
  width: 500px; /* Largura do retângulo */
  height: 100vh; /* Altura do retângulo */
  background-color: #e6cbaf; /* Cor de fundo do retângulo */
  position: relative;
`;

export default class App extends Component {
  state = {
    mensagens: [],
    usuario: "",
    mensagem: "",
  };

  handleUsuario = (e) => {
    this.setState({ usuario: e.target.value });
  };

  handleMensagem = (e) => {
    this.setState({ mensagem: e.target.value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      mensagens: [
        ...this.state.mensagens,
        { usuario: this.state.usuario, mensagem: this.state.mensagem },
      ],
    });
  };

  render() {
    return (
      <CenteredRectangle>
        <Chat mensagens={this.state.mensagens} />
        <Menu
          handleMensagem={this.handleMensagem}
          handleUsuario={this.handleUsuario}
          usuario={this.state.usuario}
          mensagem={this.state.mensagem}
          onSubmitForm={this.onSubmitForm}
        />
      </CenteredRectangle>
    );
  }
}
