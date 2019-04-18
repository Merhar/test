// Horizontall scroll settings
$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        anchors: ['home', 'services', 'gallary', 'airports', 'news', 'request', 'patrners', 'contacts'],
        sectionsColor: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        navigation: {
            'position': 'right',
            'tooltips': ['Главная', 'Наши услуги', 'Галерея', 'Аэропорты', 'Новости', 'Заявка', 'Партнёры', 'Контакты']
        },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
});


// Галерея фильтр
$(document).ready(function () {
    // Изначально показывать блок первой категории а не все новости
    var gallary = $(".gallary-filter_button").attr('data-filter');
    if (gallary == "hondajet") {
        $(".filter").not('.' + gallary).hide('3000');
        $(".filter").filter('.' + gallary).show('3000');
    }

    $(".gallary-filter_button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "hondajet") {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".gallary-filter_button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});



// Новости фильтр
$(document).ready(function () {

    // Изначально показывать блок первой категории а не все новости
    var news = $(".news-filter_button").attr('data-filter');
    if (news == "category1") {
        $(".filter-new").not('.' + news).hide('3000');
        $('.filter-new').filter('.' + news).show('3000');
    }

    // Фильтрация при клике
    $(".news-filter_button").click(function () {
        var value = $(this).attr('data-filter');

            if (value == "category1") {
                $(".filter-new").not('.' + value).hide('3000');
                $('.filter-new').filter('.' + value).show('3000');
            }
            else {
                $(".filter-new").not('.' + value).hide('3000');
                $('.filter-new').filter('.' + value).show('3000');
            }
        });

    // if ($(".news-filter_button").removeClass("active")) {
    //     $(this).removeClass("active");
    // }
    // $(this).addClass("active");

});


// Смена содержимого в блоках услуг
function openservicebox(id) {
    var all = document.querySelectorAll(".services-blocks_change");
    for (var i = 0; i < all.length; i++) {
        if (all[i].id == id) {
            all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
        } else {
            all[i].style.display = 'none';
        }
    }
}



// Смена содержимого в блоках УКРАИНЫ
function openukbox(id) {
    var all = document.querySelectorAll(".airport-blocks_change");
    for (var i = 0; i < all.length; i++) {
        if (all[i].id == id) {
            all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
        } else {
            all[i].style.display = 'none';
        }
    }
}


// Табы на странице аэропортов
$(".tab_content").hide();
$(".tab_content:first").show();

// При нажатии
$("ul.airport-tabs_btn li").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();

    $("ul.airport-tabs_btn li").removeClass("active");
    $(this).addClass("active");

});

// Переход с евро на украину по точке в украине
$("#euro-3").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();

    $("ul.airport-tabs_btn li").removeClass("active");
    $("#ukraine").addClass("active");
});

// Анимация при скролле
$(window).bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta > 0)
    {
        $(".animate").addClass("animate-active");

        setTimeout(function() {
            $(".animate").removeClass("animate-active");
        }, 1000);
    }
    else
    {
        $(".animate").addClass("animate-activeDown");

        setTimeout(function() {
            $(".animate").removeClass("animate-activeDown");
        }, 1000);
    }
});



// Модальное окно
$(window).ready(function(){
    p = $('.popup_overlay')
    $('#popup_toggle').click(function() {
        p.css('display', 'block')
    })
    p.click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $(p).css('display', 'none')
        }
    })
    $('.popup_close').click(function() {
        p.css('display', 'none')
    })
});

