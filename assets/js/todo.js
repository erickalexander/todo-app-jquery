// check of specific todos by click

// on() listens for all potential future elements
$("ul").on("click", "li", function(){ //when an li is clicked inside of the ul run the code
  $(this).toggleClass("completed")
})

// click on X to delete
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500,function() {
    $(this).remove() //removes the li instead of just setting display: none. (fadeOut just hides it)
  }) //parent gives us the parent element of span $(this) which is the list item (li)
  e.stopPropagation(); //stops event bubbling to parent elements stops at span doesn't get affected by LIs styling
})

//create a new //

$("input[type='text']").keypress(function(e){
  if (e.which === 13){
    //grabbing new todo text from imput
    var todoText = $(this).val();
    $(this).val("") //clears off input text after entered
    //create a new li and add to ul

    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
  }

})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle()
})
