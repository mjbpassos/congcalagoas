const dataSelect = document.getElementById("dataSelect");
const designacoesPorData = document.getElementById("designacoesPorData");
const buscaPessoa = document.getElementById("buscaPessoa");
const designacoesPorPessoa = document.getElementById("designacoesPorPessoa");

// Preenche o seletor com datas disponíveis
dados.forEach(item => {
  const opt = document.createElement("option");
  opt.value = item.data;
  opt.textContent = `${item.dia} - ${item.data}`;
  dataSelect.appendChild(opt);
});

// Exibe as designações da data selecionada
dataSelect.addEventListener("change", () => {
  const selecionada = dados.find(d => d.data === dataSelect.value);
  designacoesPorData.innerHTML = "";
  for (const [funcao, nome] of Object.entries(selecionada.designacoes)) {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = `${funcao}: ${nome}`;
    designacoesPorData.appendChild(div);
  }
});

// Busca por nome e mostra suas designações
buscaPessoa.addEventListener("input", () => {
  const termo = buscaPessoa.value.toLowerCase();
  designacoesPorPessoa.innerHTML = "";
  dados.forEach(item => {
    for (const [funcao, nome] of Object.entries(item.designacoes)) {
      if (nome.toLowerCase().includes(termo)) {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = `${nome} - ${funcao} (${item.dia} - ${item.data})`;
        designacoesPorPessoa.appendChild(div);
      }
    }
  });
});
