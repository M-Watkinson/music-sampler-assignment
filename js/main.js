$(document).ready(function() {

  function hideAll() {
    $('#trilogy').hide();
    $('#kissland').hide();
    $('#beauty').hide();
    $('#starboy').hide();
    $('#covers').hide();
  }

  hideAll();

  $('.albumCover').click(function() {
    hideAll();

    switch ($(this).attr("id")) {
      case "trilogyCover":
        $('#trilogy').show();
        break;
      case "kisslandCover":
        $('#kissland').show();
        break;
      case "beautyCover":
        $('#beauty').show();
        break;
      case "starboyCover":
        $('#starboy').show();
        break;
    }

    $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
  });


  }); //end of trilogy click function


}) //end of function
