$(document).ready(function() {
    $("ul>li>p:not(#navigation_header)").hide();
    
});

$(document).ready(function() {
    $("#left_panel").one("click", function ()  {
        $("#left_panel").animate ({
            width:"30%"
        },1500);
        $("ul>li>p:not(#navigation_header)").delay(1500).each(function(index){
            $(this).delay(500*index).fadeIn(300);
        });
    });
});

$(document).ready(function() {
    $("#navigation_header").click(function() {
        $('html,body').animate({scrollTop: 0}, 500);
    });
});

$(document).ready(function() {
    $('#navigation_container p').hover(function() {
        if(!$(this).hasClass('clicked')) {
            $(this).dequeue().stop().animate({color:'#000'});
        }
    }, function() {
        if(!$(this).hasClass('clicked')) { 
            $(this).addClass('clicked').animate({color:'#FFF'}, 'normal', 'linear', function() {
                $(this).removeClass('clicked').dequeue();
            });
        }
    });
});

$(document).ready(function() {
    $('#navigation_container p').one('click', function() {
        $('#middle_border').animate({bottom:"0%"},700);
    });
});

$(document).ready(function() {
    $('#navigation_container p').click(function() {
        var clicked = $(this);
        var clickClass = $(this).attr("class");
        $('html,body').animate ({
            scrollTop: $(".right_panel#"+clickClass).offset().top},
        700);
        $('#navigation_container p').stop().animate({color:"#FFF"}).removeClass('clicked');
        $(this).stop().animate({color:'#000'}).addClass('clicked');
    });
});



$(function () {
    $('.antiscroll-wrap').antiscroll();
});
