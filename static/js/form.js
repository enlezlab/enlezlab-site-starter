
/* Netlify AJAX Form Submission */

(() => {

  const i18n = () => {
    return {
      en: `
      <div style="text-align: center;">
        <h1>Inquiry Submitted!</h1>
        <p>
        We've got your inquiry and will be responding shortly.
        </p>
      </div>
      `,
      fr: `
        <div style="text-align: center;">
          <h1>Demande envoyée!</h1>
          <p>
          Nous avons reçu votre demande et vous répondrons sous peu.
          </p>
        </div>
      `
    };
  };

  const form = document.getElementById('form_inquiry');

  const success = () => {
    console.log('Form submit success!');
    form.innerHTML = i18n()[lang()];
  };

  const failed = () => {
    console.log('Form submit failed...');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        console.log(res);
        success();
      })
      .catch((error) => {
        console.log(error);
        failed();
      });
  };

  form.addEventListener("submit", handleSubmit);


})();

/* Consent Checkbox */

(() => {
  const consent = document.getElementById('consent');
  const btnSubmit = document.getElementById('btn_submit');

  consent.addEventListener('input', function () {
    const state = this.checked;

    if (state === true) {
      btnSubmit.classList.remove('btn--disabled');
    }

    if (state === false) {
      btnSubmit.classList.add('btn--disabled');
    }

  }, false);

})();
