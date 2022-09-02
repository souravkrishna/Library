
function SearchWord()
{
  var Searchbox = document.getElementById("Searchbox").value;
  var result = books.filter((element) =>
  {
    for(var key in element)
    if((key != "Rating") && (key != "Id"))
    {
    {
      if(element[key].includes(Searchbox))
      return element;
    }
    }
  })
  console.log(Searchbox);
  if(!result)
  {
    RenderFn(books);
  }
  else
  {
    RenderFn(result);
  }
}

function CleartWord()
{
  document.getElementById("Searchbox").value = "";
}

function ResetWord()
{
  RenderFn(books);
}