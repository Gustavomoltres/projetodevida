const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const datasObjetivo = [
  new Date("2027-10-05T00:00:00"),
  new Date("2027-12-31T23:59:59"),
  new Date("2027-06-30T23:59:59"),
  new Date("2027-08-15T23:59:59")
];

function formatarTempo(totalEmMilissegundos) {
  if (totalEmMilissegundos <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const segundosTotais = Math.floor(totalEmMilissegundos / 1000);
  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  return { dias, horas, minutos, segundos };
}

function atualizarContadores() {
  contadores.forEach((contador, indice) => {
    const diferenca = datasObjetivo[indice].getTime() - Date.now();
    const tempo = formatarTempo(diferenca);

    contador.querySelector(".dias").textContent = String(tempo.dias).padStart(2, "0");
    contador.querySelector(".horas").textContent = String(tempo.horas).padStart(2, "0");
    contador.querySelector(".minutos").textContent = String(tempo.minutos).padStart(2, "0");
    contador.querySelector(".segundos").textContent = String(tempo.segundos).padStart(2, "0");
  });
}

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

atualizarContadores();
setInterval(atualizarContadores, 1000);
