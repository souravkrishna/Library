
function ImportBookData(title,subtitle,author,category,publisher)
{
  this.Title = title;
  this.Subtitle = subtitle;
  this.Author = author;
  this.Category = category;
  this.Publisher = publisher;
}
function ImportData()
{

var arr = [];
var SearchTitle = document.getElementById("SearchTitle").value;
var SearchSubtitle = document.getElementById("SearchSubtitle").value;
var SearchAuthor = document.getElementById("SearchAuthor").value;
var SearchCategory = document.getElementById("SearchCategory").value;
var SearchPublisher = document.getElementById("SearchPublisher").value;

  if(SearchTitle || SearchSubtitle || SearchAuthor || SearchCategory || SearchPublisher)
  arr = new ImportBookData(SearchTitle,SearchSubtitle,SearchAuthor,SearchCategory,SearchPublisher);
  console.log(SearchTitle);
  books.push(arr);
  RenderFn(books);
}

function CleartData()
{
  document.getElementById("SearchTitle").value = "";
  document.getElementById("SearchSubtitle").value ="";
  document.getElementById("SearchAuthor").value = "";
  document.getElementById("SearchCategory").value = "";
  document.getElementById("SearchPublisher").value = "";

}