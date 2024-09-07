function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se o campoPesquisa for uma string vazia
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Escreva uma palavra na barra</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se  titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a> 
        </h2>
        <p class="descricao-meta">${dado.descricao}</p> 
        <a href=${dado.link} target="_self">Saiba mais</a> 
    </div>
`;
    }
    
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrdado</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
