
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[maps-modal-open]"),
      closeModalBtn: document.querySelector("[maps-modal-close]"),
      modal: document.querySelector("[maps-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");

    }

  }
  )();