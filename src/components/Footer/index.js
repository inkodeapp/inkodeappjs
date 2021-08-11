import React from "react";
import logo from "../../inkode.png";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="item1">
        <img src={logo} className="img-footer" alt="logo" />
      </div>
      <div className="item2">
        <h2>Acerca de Inkodeapp</h2>
        <h5>
          In-Kode es un canal de tutoriales de programación con presencia en
          distintos medios digitales actualmente enfocado en aplicaciones
          Android de la mano del lenguaje de programación Kotlin y la
          monetizacion a travez de publicidad digital!
        </h5>
      </div>
      <p className="final-footer">Page 2020 &copy;</p>
    </footer>
  );
};

export default Footer;
