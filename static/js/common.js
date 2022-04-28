function active_search_input_box() {
    $('#search_icon').css("display", "none")
    $('#search_active_button').css("display", "none")
    $('#search_input_box').css("width", "90%")
    $('#search_input_box').focus()
}

$(function(){
  $(document).mouseup(function( e ){
    if( !($('#search_input_box').is(":focus")) ) {
        $('#search_icon').css("display", "block")
        $('#search_active_button').css("display", "block")
        $('#search_input_box').css("width", "70%")
    }
  });

});