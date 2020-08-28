import "bootstrap";
import "../style/imports.scss";
import "regenerator-runtime/runtime";
import "core-js/stable";

import Footer from "./components/Footer.js";
import Modal from "./components/Modal.js";
import Main from "./components/Main.js";
const setup = () => {
  customElements.define("app-footer", Footer);
  customElements.define("app-modal", Modal);
  customElements.define("app-main", Main);
};

window.addEventListener("load", setup);
