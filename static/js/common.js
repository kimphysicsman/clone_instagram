
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

// 스토리 슬라이드 함수
// vector : 슬라이드 방향 - 0:왼쪽, 1:오른쪽
function move_story_slide(vector) {
    let margin_text = $('#stories').css('margin-left')
    let width_text = $('#stories').css('width')
    let box_text = $('#card').css('width')

    let margin_num = Number(margin_text.slice(0, -2))
    let width_num = Number(width_text.slice(0, -2))
    let box_num = Number(box_text.slice(0, -2))

    let max_margin = 0  // 최대 마진 값
    let move_margin = 150   // 한번 이동할 때 움직일 마진 값

    if (width_num > box_num) {
         max_margin = width_num - box_num
    }

    if (vector == 1) {
        margin_num = margin_num - move_margin
        if (margin_num < -1 * max_margin) {
            margin_num = -1 * max_margin
        }
    } else {
        margin_num = margin_num + move_margin
        if (margin_num > 0) {
            margin_num = 0
        }
    }
    let update_margin = (margin_num).toString() + "px"

    $('#stories').css('margin-left', update_margin)

    console.log(margin_text, width_text, box_text)
    console.log(margin_num, width_num, box_num)
    console.log(max_margin, update_margin)
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