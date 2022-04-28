
// 검색창 활성화시키는 함수
function active_search_input_box() {
    $('#search_icon').css("display", "none")
    $('#search_active_button').css("display", "none")
    $('#search_input_box').css("width", "90%")
    $('#search_input_box').focus()
}

// profile 마진값 계산하는 함수
function update_profile_margin() {
    let screen_width = $(window).width()
    let self_width = $('#main_body').width()
    let margin = screen_width - self_width
    let margin_right = (margin/2).toString()

    let str = margin_right + "px"
    $('#profile_box').css("right", str)
}

// 로딩시 profile 마진값 다시 계산
$(document).ready(function () {
    update_profile_margin()
})

$(function(){
    // 마우스 클릭한 후
    // 검색창에 클릭한 것이 아니면
    // 활성화된 검색창을 이전 상태로
    $(document).mouseup(function( e ){
    if( !($('#search_input_box').is(":focus")) ) {
        $('#search_icon').css("display", "block")
        $('#search_active_button').css("display", "block")
        $('#search_input_box').css("width", "70%")
    }
    });

    // 화면 사이즈 변경 시
    // profile 마진값 다시 계산
    $(window).resize(function() {
        update_profile_margin()
    });

});