(function(){
  var turnOne = true

//console.log("hey");
$(document).ready(function(){

	$('.box').click(boxClicked)
	function boxClicked(){
		//console.log("clicked");
		if(turnOne){
			console.log("x");
      if ($(this).text() === ""){
       turnOne = false;
       $(this).text("X");
       $('p').text("Player O");
     }

   } else{
     console.log("o");
     if ($(this).text() === ""){
      turnOne = true;
      $(this).text("O");
      $('p').text("Player X");
    }
  }

}




})

})()