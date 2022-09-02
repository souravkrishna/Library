
function RenderFn(books) {
  var ListDiv = document.getElementById("ListDiv");
  ListDiv.innerHTML = "";
  books.forEach((element) => renderBooks(element));
}

function renderBooks(element) {
  var OlNode = document.createElement("ul");
  OlNode.setAttribute("class", "Olclass");
  ListDiv.appendChild(OlNode);
  var liNode = document.createElement("li");
  var content = "";
  for (var key in element) {
    if (key != "Rating" && key != "Id") {
      content += `<strong>${key}</strong> : ${element[key]} <br />`;
    }
    liNode.innerHTML = content;
  }

  OlNode.appendChild(liNode);

  var spanDivNode = document.createElement("div");
  liNode.appendChild(spanDivNode);
  starRating(spanDivNode, element.Rating, element.Id);

  var brNode = document.createElement("br");
  liNode.appendChild(brNode);
}
