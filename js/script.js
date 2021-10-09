
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

    $(document).ready(function (){
        $('.slider').slick({
            arrows:true,
            dots:true,
            slidesToShow:3,
            autoplay:true,
            autoplaySpeed: 1000,

            responsive:[
                {
                    breakpoint:320,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,
                        infinite: true,
                        dots:false,
                        arrows:true
                    }
                }
            ]
        })
    })



    $('.burger').on('click', () => {
        $('.burger').toggleClass('show-menu')
        $('.nav__links').toggleClass('show')

    })
    $('.nav__links').on('click', () => {
        $('.burger').removeClass('show-menu')
        $('.nav__links').removeClass('show')

    })







