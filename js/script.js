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
});