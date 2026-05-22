const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoes.forEach((item) => {
      item.classList.remove("ativo");
      item.setAttribute("aria-pressed", "false");
    });

    botao.classList.add("ativo");
    botao.setAttribute("aria-pressed", "true");
  });
});