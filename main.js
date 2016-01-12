(function(){
  var turnOne = true

//console.log("hey");
$(document).ready(function(){

	$('.box').click(boxClicked)
	function boxClicked(){
		//console.log("clicked");
		if(turnOne === true){
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
  winner();
}

function winner(){
  if ($('#b1').text() === $('#b2').text() && $('#b2').text() !== "" && $('#b2').text() === $('#b3').text()) {alert("ya")}
    if ($('#b4').text() === $('#b5').text() && $('#b5').text() !== "" && $('#b5').text() === $('#b6').text()) {alert("ya")}
      if ($('#b7').text() === $('#b8').text() && $('#b8').text() !== "" && $('#b8').text() === $('#b9').text()) {alert("ya")}
        if ($('#b1').text() === $('#b4').text() && $('#b4').text() !== "" && $('#b4').text() === $('#b7').text()) {alert("ya")}
          if ($('#b2').text() === $('#b5').text() && $('#b5').text() !== "" && $('#b5').text() === $('#b8').text()) {alert("ya")}
            if ($('#b3').text() === $('#b6').text() && $('#b6').text() !== "" && $('#b6').text() === $('#b9').text()) {alert("ya")}
              if ($('#b1').text() === $('#b5').text() && $('#b5').text() !== "" && $('#b5').text() === $('#b9').text()) {alert("ya")}
                if ($('#b3').text() === $('#b5').text() && $('#b5').text() !== "" && $('#b5').text() === $('#b7').text()) {alert("ya")}

              }


          })

})()