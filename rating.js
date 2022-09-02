
function starRating(spanDivNode, rating, id) {
  for (var i = 1; i <= 5; i++) {
    var spanNode = document.createElement("span");
    if (i <= rating) {
      spanNode.setAttribute("class", "fa fa-star checked");
      spanNode.setAttribute("onclick", `changeRating(${i},${id})`);
    } else {
      spanNode.setAttribute("class", "fa fa-star");
      spanNode.setAttribute("onclick", `changeRating(${i},${id})`);
    }
    spanDivNode.appendChild(spanNode);
  }
}

function changeRating(colorRating, id) {
  books.forEach((book) =>
    book.Id === id ? (book.Rating = colorRating) : null
  );
  RenderFn(books);
}
