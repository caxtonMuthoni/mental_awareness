$(document).ready(function () {

    // Active link

    $('.nav__link').click(function () {
        $('.nav__link').removeClass('nav__link-active')
        $(this).addClass('nav__link-active')
    })

    // toggle menu

    $('.nav__icon').click(function () {
        $('.nav__list').toggleClass('nav__list-disabled')
        setNavbar()

    })

    $('#menu-container').click(function () {
        $('.nav__list').addClass('nav__list-disabled')
        setNavbar()
    })


    function setNavbar() {
        var height = $('.nav-small').height()

        if (height < 150) {
            $('.nav-small').css('height', '40rem')
        } else {
            $('.nav-small').css('height', '7rem')
        }
    }
})