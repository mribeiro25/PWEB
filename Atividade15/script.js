function validar() {
  var nome = document.formularioPrincipal.elements["nome"].value.trim();
  var comentario = document.formularioPrincipal.elements["comentario"].value.trim();
  var pesquisa = document.formularioPrincipal.elements["pesquisa"];

  if (nome.length < 10) {
    alert("O nome deve ter no mínimo 10 caracteres.");
    document.formularioPrincipal.elements["nome"].focus();
    return false;
  }

  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    document.formularioPrincipal.elements["comentario"].focus();
    return false;
  }

  if (!pesquisa[0].checked && !pesquisa[1].checked) {
    alert("Selecione uma opção da pesquisa.");
    return false;
  }

  if (pesquisa[0].checked) {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre à esta página!");
  }

  return true;
}
