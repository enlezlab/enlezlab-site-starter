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
    `;
  };

  upload() {
    console.log('upload');
  };

  btnUpload() {
    const btn = document.createElement('input');
    btn.type = 'file';
    btn.placeholder = 'New';
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
           // _this.setAttribute('value', imgDataBase64);
         };
         reader.readAsDataURL(file);
       }

    }, false);

    return btn;
  };

  btnGroup() {
    const btnGroup = this.querySelectorAll('.btn-group')[0];
    btnGroup.appendChild(this.btnUpload());
  };

  template() {
    return html`
      <label>Image</label>
      <div class="image-input__control">
        <div class="image-input__preview"></div>
        <div class="btn-group"></div>
      </div>
    `;
  };

  connected() {
    this.btnGroup();
  };
};

customElements.define('image-input', ImageInput);
