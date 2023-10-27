import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: ${(props) => (props.eu ? "end" : "start")};
  flex-direction: column;
`;
const CustomMesage = styled.div`
  width: 100px;
  margin: 10px;

  p {
    padding-inline: 10px;
  }

  p:first-child {
    font-weight: bold;
  }
`;

export default class Chat extends Component {
  // state = { usuarioEu: false };
  render() {
    const mensagensTela = this.props.mensagens.map((m) => {
      // const isUsuario = m.usuario === "eu";
      // this.setState({ usuarioEu: isUsuario });
      return (
        <CustomMesage>
          <p>{m.usuario}</p>
          <p>{m.mensagem}</p>
        </CustomMesage>
      );
    });
    return <Main>{mensagensTela}</Main>;
    // return <Main eu={this.state.usuarioEu}>{mensagensTela}</Main>;
  }
}
