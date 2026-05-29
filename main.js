const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const indice = Number(botao.dataset.index);

    botoes.forEach((item) => {
      item.classList.remove("ativo");
      item.setAttribute("aria-pressed", "false");
    });

    abas.forEach((aba) => {
      aba.classList.remove("ativo");
    });

    botao.classList.add("ativo");
    botao.setAttribute("aria-pressed", "true");
    abas[indice]?.classList.add("ativo");
  });
});