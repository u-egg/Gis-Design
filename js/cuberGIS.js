//kakao map api
var container = document.getElementById('map');             //지도를 담을 영역의 DOM 레퍼런스
var options = {                                             //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(36.6424341, 127.4890319),   //지도의 중심좌표.
    level: 11                                                //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);           //지도 생성 및 객체 리턴

// 마커 생성
var markerPosition = new kakao.maps.LatLng(36.6424341, 127.4890319);


// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


// 사이드 네비 아코디언 메뉴 js

$(".que").click(function() {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on').css('display') == 'block') {
        $(".img_on").css("display", "none")
        $(".img_off").css("display", "block")
    } 
    else {
        $(".img_on").css("display", "block")
        $(".img_off").css("display", "none")
    }
});

$(".que2").click(function() {
    $(this).next(".anw2").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on2').css('display') == 'block') {
        $(".img_on2").css("display", "none")
        $(".img_off2").css("display", "block")
    } 
    else {
        $(".img_on2").css("display", "block")
        $(".img_off2").css("display", "none")
    }
});

$(".que3").click(function() {
    $(this).next(".anw3").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on3').css('display') == 'block') {
        $(".img_on3").css("display", "none")
        $(".img_off3").css("display", "block")
    } 
    else {
        $(".img_on3").css("display", "block")
        $(".img_off3").css("display", "none")
    }
});

$(".que4").click(function() {
    $(this).next(".anw4").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on4').css('display') == 'block') {
        $(".img_on4").css("display", "none")
        $(".img_off4").css("display", "block")
    } 
    else {
        $(".img_on4").css("display", "block")
        $(".img_off4").css("display", "none")
    }
});

// sub메뉴
$(".sub_que").click(function() {
    $(this).next(".sub_anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.sub_img_on').css('display') == 'block') {
        $(".sub_img_on").css("display", "none")
        $(".sub_img_off").css("display", "block")
    } 
    else {
        $(".sub_img_on").css("display", "block")
        $(".sub_img_off").css("display", "none")
    }
});

$(".sub_que2").click(function() {
    $(this).next(".sub_anw2").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.sub_img_on2').css('display') == 'block') {
        $(".sub_img_on2").css("display", "none")
        $(".sub_img_off2").css("display", "block")
    } 
    else {
        $(".sub_img_on2").css("display", "block")
        $(".sub_img_off2").css("display", "none")
    }
});


$(".anw2_sub_que").click(function() {
    $(this).next(".anw2_sub_anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.anw2_sub_img_on').css('display') == 'block') {
        $(".anw2_sub_img_on").css("display", "none")
        $(".anw2_sub_img_off").css("display", "block")
    } 
    else {
        $(".anw2_sub_img_on").css("display", "block")
        $(".anw2_sub_img_off").css("display", "none")
    }
});


// 사이드바 슬라이드 제거
function sied_section_slide(){
    if ($('#side_body').css('width') == '350px') {
        $("#side_body").css("width", "0")
        $("#map").css("width", "calc(100vw - 100px)")
        $(".side_body_top div").css("display", "none")
        $(".side_nav_close").css("left", "101px")
        $(".side_nav_open").css("left", "101px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "none")
            $(".side_nav_open").css("display", "block")
          }, 250);


    } 
    else {
        $("#side_body").css("width", "350px")
        $("#map").css("width", "calc(100vw - 450px)")
        setTimeout(function() {
            $(".side_body_top div").css("display", "block")
          }, 200);
        $(".side_nav_close").css("left", "449px")
        $(".side_nav_open").css("left", "449px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
            $(".side_nav_open").css("display", "none")
          }, 250);
    }

}

// 레이어 선택 보기 창
dragElement(document.getElementById("layer_select"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "_title")) {
    document.getElementById(elmnt.id + "_title").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}