//console.log(window.innerWidth);
let user_width = window.innerWidth;
console.log(user_width);
if (user_width <= 450) {
    document.getElementsByClassName('form-block')[0].style.width = user_width + 'px';
    document.getElementsByClassName('message-block')[0].style.width = user_width + 'px';    
}
if (user_width <= 600) {
    document.getElementsByClassName('navigation-flex-row')[0].style.width = user_width + 'px';
    document.getElementsByClassName('content__about-head')[0].style.width = user_width + 'px';

}
if (user_width <= 700) {
    document.getElementsByClassName('omtent__about-cards')[0].style.width = user_width + 'px';

}
$('.filter-item').click(function(event) {
    var i = $(this).data('filter');
    if (i==1) {
        $('.gallery-item').show();
    } else {
        $('.gallery-item').hide();
        $('.gallery-item.f-'+i).show();
    }
    $('.filter-item').removeClass('active');
    $(this).addClass('active');
    return false;
});
