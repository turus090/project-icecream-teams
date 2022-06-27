(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-maps-open]"),
      closeModalBtn: document.querySelector("[data-maps-close]"),
      maps: document.querySelector("[maps-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  
    function toggleModal() {
      document.body.classList.toggle("maps-open");
      refs.maps.classList.toggle("is-hidden");
  
    }
  
  }
  )();