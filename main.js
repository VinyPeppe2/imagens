const imagens =  document.querySelectorAll('#groupImages img');

imagens.forEach((img) => {
  function animarImagem(){
    img.classList.add("animar");

    setTimeout(() =>{
      img.classList.add("animar");
    }, 2500); //animação
  }
  img.addEventListener("click", animarImagem);
  img.addEventListener("tochstart", animarImagem);
});

