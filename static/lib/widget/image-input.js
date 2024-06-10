import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ImageInput extends piq {
  name() {
    return 'image-input';
  };

  style() {
    return css`
      image-input {
      }

      label {
        width: 100%;
        display: block;
      }

      .btn-group {
        padding: 10px;
      }

      .image-input__preview {
        padding: 10px;
      }

      .image-input__preview figure {
        max-width: 200px;
        border: 1px solid #333;
      }

      .image-input__preview img {
        width: 100%;
      }

      .image-input__btn-upload {
        display: inline-block;
        cursor: pointer;
        background: #333;
        color: #fff;
        border: none;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 5px;
        width: initial;
        transition: .3s ease;
        border: 1px solid #333;
        text-align: center;
      }

      .image-input__btn-upload:hover {
        background: #222;
        border: 1px solid #999;
      }
    `;
  };

  btnUpload() {
    return html`
      <label class="image-input__btn-upload">
        <span>
          New
        </span>
        <input type="file" style="display: none;"/>
      </label>
    `;
  };

  btnUploadAction() {
    const btn = this.querySelectorAll('.image-input__btn-upload input')[0];
    const _this = this;

    btn.addEventListener('change', function() {
      const preview = _this.querySelectorAll('.image-input__preview')[0];
      const file = event.target.files[0];
       if (file) {
         const reader = new FileReader();
         reader.onload = function(e) {
           const imgDataBase64 = e.target.result;
           const img = html`
             <figure>
               <img src="${imgDataBase64}" alt="" />
             </figure>
           `;

           preview.innerHTML = img;
           _this.setAttribute('data-output', imgDataBase64);
         };
         reader.readAsDataURL(file);
       }

    }, false);
  };

  btnGroup() {
    const btnGroup = this.querySelectorAll('.btn-group')[0];
    btnGroup.appendChild(this.btnUpload());
  };

  setDefaultImage(imageUrl) {

    if (!imageUrl) {
      return;
    }

    const preview = this.querySelectorAll('.image-input__preview')[0];

    const img = html`
      <figure>
        <img src="${this.props('data-image-url')}" alt="" />
      </figure>
    `;

    preview.innerHTML = img;
    this.setAttribute('data-output', this.props('data-image-url'));
  }

  template() {
    return html`
      <div class="image-input__control">
        <div class="image-input__preview"></div>
        <div class="btn-group">
          ${this.btnUpload()}
        </div>
      </div>
    `;
  };

  connected() {
    this.btnUploadAction();
    this.setDefaultImage(this.props('data-image-url'));
  };
};

customElements.define('image-input', ImageInput);
