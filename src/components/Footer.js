class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<div class="container footerContainer">
    <div class="row">
        <div class="col-sm">
            <h6>ABOUT YOU!</h6>
            <p>Write some information about yourself!</p>
        </div>
        <div class="col-sm">
            <h6>DYNAMIC PART</h6>
            <p>Place here current date yyyy-mm-dd</p>
            <p>And current time HH:MM</p>
            <p>Native with PHP - use it:)</p>
        </div>
        <div class="col-sm">
            <h6>CONTACT</h6>
            <p>Place here your contact details</p>
            <p>For example: phone and email</p>
        </div>

        <div class="col-sm spacer"></div>
        <div class="col-sm d-flex justify-content-around">
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-facebook"></i>
        </div>
    </div>
</div>

`;
  }
}
export default Footer;
