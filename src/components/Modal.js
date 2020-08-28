import axios from "axios";

class Modal extends HTMLElement {
  connectedCallback() {
    this.render();
    this.getData();
    this.picturesArray = [];
    this.pictureIndex = 0;
    this.authorLabel = this.querySelector("#authorLabel");

    const nextPictureButton = this.querySelector("#nextPictureButton");
    const previousPictureButton = this.querySelector("#previousPictureButton");

    nextPictureButton.addEventListener("click", () => {
      this.pictureIndex < 9 && this.changePicture(true);
    });
    previousPictureButton.addEventListener("click", () => {
      this.pictureIndex > 0 && this.changePicture(false);
    });
  }
  changePicture(next) {
    next ? this.pictureIndex++ : this.pictureIndex--;
    this.changeImageUrl();
    this.changeAuthorLabel();
  }
  getCurrentPicture() {
    return this.picturesArray[this.pictureIndex];
  }
  changeImageUrl() {
    const img = document.querySelector(".img-fluid");
    img.src = this.getCurrentPicture().download_url;
  }
  changeAuthorLabel() {
    this.authorLabel.innerHTML = this.getCurrentPicture().author;
  }

  async getData() {
    axios
      .get("https://picsum.photos/v2/list?limit=10")
      .then((response) => {
        this.picturesArray = response.data;
        this.updateData();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  updateData() {
    this.changeImageUrl(this.picturesArray[this.pictureIndex].download_url);
    this.authorLabel.innerHTML = this.picturesArray[this.pictureIndex].author;
  }
  render() {
    this.innerHTML = `
<div class="modal fade" id="pictureModal" tabindex="-1" role="dialog" aria-labelledby="pictureModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered d-flex align-items-center  justify-content-center">
        <div class="modal-content">
            <div class="modal-header">
                <div class="top">
                    <button type="button" class="close" id="closeButton" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="header-text">
                    <h6>GALLERY IN MODAL</h6>
                    <div class="second-row d-flex align-items-center">
                    <i class="fa fa-globe"></i>
                    <p >picsum.photos</p>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm col-btn">
                    <div class="buttonWrapper">
                        <svg width="1em" height="1em" id="previousPictureButton" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        </div>
                    </div>
                    <div class="col-sm picture">
                        <img class="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div class="col-sm col-btn">
                    <div class="buttonWrapper">
                        <svg width="1em" height="1em" id="nextPictureButton" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
               <span id="authorLabel"></span> 
            </div>
        </div>
    </div>
</div>
  `;
  }
}
export default Modal;
