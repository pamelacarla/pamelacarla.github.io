document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let translateValue = 0;
  
    function nextSlide() {
      if (translateValue === -200) {
        translateValue = 0;
      } else {
        translateValue -= 100;
      }
      carousel.style.transform = `translateX(${translateValue}%)`;
    }
  
    function prevSlide() {
      if (translateValue === 0) {
        translateValue = -200;
      } else {
        translateValue += 100;
      }
      carousel.style.transform = `translateX(${translateValue}%)`;
    }
  
    setInterval(nextSlide, 4000); // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
  });

const modalButton = document.querySelector('.modal-button');
const modal = document.querySelector('.modal');

modalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});


 /*--- Estilos para las cards de comunidad ---*/

const modalButtons = document.querySelectorAll('.modal-button');
const modals = document.querySelectorAll('.modal');

modalButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    modals[index].style.display = 'block';
    document.body.classList.add('modal-open');
  });
});

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', function() {
    modals[index].style.display = 'none';
    document.body.classList.remove('modal-open');
  });
});
