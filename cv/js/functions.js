$(document).ready( function() {

  // ****   TRANSLATION   ****

  if(navigator.language){
    if(navigator.language.indexOf("fr")>-1)
         { langue = "fr"; }
    else { langue = "en"; }
  }
  else {
    if(navigator.browserLanguage.indexOf("fr")>-1)
         { langue = "fr"; }
    else { langue = "en"; }
  }

  function translate() {
    if( langue == "fr") {
      $(".en").css("display","none");
      $(".fr").fadeIn("slow");
    }
    else {
      $(".fr").css("display","none");
      $(".en").fadeIn("slow");
    }
  }

  $("#fr").click( function(clic) {
    langue = "fr";
    translate();
    clic.preventDefault();
  });

  $("#en").click( function(clic) {
    langue = "en";
    translate();
    clic.preventDefault();
  });
  
  translate();


  // ****   HIDING BLOCS   ****

  $('#skls').hide();
  $('#actv').hide();



  // ****   NAVIGATION   ****

  $('#link-educ').click( function(clic) {
    $('#educ').fadeIn("slow");
    $('#skls').hide();
    $('#actv').hide();
    clic.preventDefault();
  });
    
  $('#link-skills').click( function(clic) {
    $('#educ').hide();
    $('#skls').fadeIn("slow");
    $('#actv').hide();
    clic.preventDefault();
  });
    
  $('#link-activities').click( function(clic) {
    $('#educ').hide();
    $('#skls').hide();
    $('#actv').fadeIn("slow");
    clic.preventDefault();
  });




  // ****   HIDING TOP PANEL ****

  var header_hidden = false;
  var speed = "fast";

  $('#hide').click( function(clic) {
    if (header_hidden) {  // Restore the panel
      
      $('#shadow').animate({"top": "133px"},speed);
      $('#content').animate({"padding-top": "160px"},speed,"linear", function() {
        $('h1').animate({"padding-left": "0"},speed);
        $('#nav').animate({"top": "8em"},speed);
      });
      $('#header').animate({"height": "140px"},speed, function() {
        $('#contact').fadeIn("slow");//animate({"margin-left": "0"},speed);
        $('#photo').animate({"right": "0"},speed);
        $('#lang').animate({"left": "1em"},speed);
        $('#nav').animate({"right": "0"},speed);
        $('h1').animate({"margin": "0.4em auto","font-size":"2.3em"},speed);
        if ($('#photo').css("display")!="none")
        {
          $('#hide').animate({"right": "14em"},speed);
        }
        
        $('#hide .en').html('shrink');
        $('#hide .fr').html('réduire');
      });

      
      header_hidden = false;
    }
    else {  // Hiding the top panel
      
      $('#hide').animate({"right": "1em"},speed);
      $('#contact').fadeOut(speed);//animate({"margin-left": "-3000px"},speed);
      $('#nav').animate({"right": "10em"},speed);
      $('h1').animate({"padding-left": "59%"},speed);
      $('#lang').animate({"left": "-6em"},"slow");
      $('#photo').animate({"right": "-150px"},speed, function() {
        $('#nav').animate({"top": "0.4em"},speed);
        $('h1').animate({"margin-top": "0.2em","font-size":"1.5em"},speed);
        $('#header').animate({height: "37px"},speed);
        $('#shadow').animate({"top": "30px"},speed);
        $('#content').animate({"padding-top": "55px"},speed,"linear", function() {
          $('#hide .en').html('show');
          $('#hide .fr').html('rétablir');
        });
      });
      
      header_hidden = true;
    }
    
    translate();
    clic.preventDefault();
  });



  // Rolling the picture
  
  $('#photo').hover(
    function () {
      $(this).animate({ "padding-bottom": "0px", "top": "0px"}, "fast");
    },
    function () {
      $(this).animate({ "padding-bottom": "140px", "top": "-140px"}, "slow");
  });

  // Hiding the picture
  
  $('#photo').click(
    function () {
      $(this).fadeOut("fast");
      $('#hide').animate({"right": "1em"},"fast");
  });


});
