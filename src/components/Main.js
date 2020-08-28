import $ from "jquery";

class Main extends HTMLElement {
  connectedCallback() {
    this.render();

    const showButton = this.querySelector("#showButton");
    const moreButton = this.querySelector("#moreButton");

    this.isFull = false;
    this.mainText = this.querySelector(".main-text");
    this.mainContainer = this.querySelector(".main-container");

    showButton.addEventListener("click", () => {
      this.openModal();
      this.isFull && this.hideText();
    });
    moreButton.addEventListener("click", () =>
      this.isFull ? this.hideText() : this.showText()
    );
  }

  openModal() {
    $("#pictureModal").modal("show");
  }
  showText() {
    this.mainText.classList.add("textFullSize");
    this.mainContainer.classList.add("containerFullSize");
    this.changeTextSizeState();
  }
  hideText() {
    this.mainText.classList.remove("textFullSize");
    this.mainContainer.classList.remove("containerFullSize");
    this.changeTextSizeState();
  }
  changeTextSizeState() {
    this.isFull = !this.isFull;
  }
  render() {
    this.innerHTML = `
<div class="main-container">
    <div class="left">
        <div class="hexagonWrapper">
            <div class="hexagon" id="upper">
                <div class="triangleLight"></div>
                <div class="triangleLight" id="rotated"></div>
                <div class="triangleDark"></div>
            </div>
            <div class="hexagon">
                <div class="triangleDark" id="rotated"></div>
                <div class="triangleLight"></div>
                <div class="triangleLight" id="rotated"></div>
            </div>
        </div>
    </div>
    <div class="right">
        <h1>This is main page title.</h1>
        <p class="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Arcu non odio euismod lacinia at
            quis risus. Cursus in hac habitasse platea dictumst quisque sagittis. Accumsan lacus vel facilisis volutpat. In hac habitasse platea dictumst quisque sagittis purus sit amet. Ut tellus elementum sagittis vitae et leo duis. Nunc
            pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Scelerisque viverra mauris in aliquam sem. Lacus sed viverra tellus in hac habitasse platea. Commodo sed egestas egestas fringilla
        </p>
        <div class="button-container">
            <button type="button" id="moreButton" class="btn btn-outline-primary">
                MORE
            </button>
            <button type="button" id="showButton" class="btn btn-primary">
                SHOW GALLERY
            </button>
        </div>
    </div>
</div>

  `;
  }
}
export default Main;
