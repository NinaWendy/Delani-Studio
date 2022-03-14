// What we do section 

$(document).ready(function () {
    $('.showed').click(function () {
        $('.showed').css('display', 'none');
        $('.hidden').css('display', 'inline');
    })
    $('.hidden').click(function () {
        $('.showed').css('display', 'inline');
        $('.hidden').css('display', 'none');
    });
    //two
    $('.showed2').click(function () {
        $('.showed2').css('display', 'none');
        $('.hidden2').css('display', 'inline');
    });
    $('.hidden2').click(function () {
        $('.showed2').css('display', 'inline');
        $('.hidden2').css('display', 'none');
    });
    //three
    $('.showed3').click(function () {
        $('.showed3').css('display', 'none');
        $('.hidden3').css('display', 'inline');
    });
    $('.hidden3').click(function () {
        $('.showed3').css('display', 'inline');
        $('.hidden3').css('display', 'none');
    });



    let image = document.querySelectorAll(".image")
    let itemsArray = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

    for (i = 0; i < image.length; i++) {
        image[i].addEventListener("mouseover", (e) => {
            let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
            let backImage = e.target.firstElementChild
            for (j = 0; j < itemsArray.length; j++) {
                if (hoverTextClass === itemsArray[j]) {
                    $(`.${hoverTextClass}`).css({
                        'display': 'flex'
                    })
                    backImage.style.filter = 'brightness(50%)'
                }
            }
        })
    }

    for (i = 0; i < image.length; i++) {
        image[i].addEventListener("mouseout", (e) => {
            let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
            let backImage = e.target.firstElementChild
            for (j = 0; j < itemsArray.length; j++) {
                if (hoverTextClass === itemsArray[j]) {
                    $(`.${hoverTextClass}`).css({
                        'display': 'none'
                    })
                    backImage.style.filter = 'brightness(100%)'
                }
            }
        })
    }
});