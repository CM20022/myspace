document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".page-loader");

    setTimeout(() => {
      loader.style.opacity = "0"; 
      setTimeout(() => {
        loader.style.display = "none";
        document.querySelector(".body").classList.add("show");
      }, 500); // Tempo adicional para a animação
    }, 3000); // Tempo de exibição do loader
});
