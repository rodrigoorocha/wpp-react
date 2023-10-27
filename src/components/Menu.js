import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <input
          onChange={this.props.handleUsuario}
          value={this.props.usuario}
          placeholder="usuario"
        />
        <input
          onChange={this.props.handleMensagem}
          value={this.props.mensagem}
          placeholder="mensagem"
        />
        <button type="submit">enviar</button>
      </form>
    );
  }
}
