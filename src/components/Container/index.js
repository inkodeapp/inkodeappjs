import React from "react";
import "./index.css";
import logo from "../../inkode.png";

const Container = () => {
  return (
    <div className="container">
      <section className="section">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Proximamente Nexo para Programadores.</p>
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </section>
      <aside className="aside">
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="text" placeholder="Contraseña" />
          <input className='btn' type="submit" value="Entrar"/>
        </form>
      </aside>
    </div>
  );
};

export default Container;
