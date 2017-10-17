const $   = require("jquery");

console.log("Contact")

$('.c-form-tabs__item').click(function(){
    // control first the css classes and toggling of the main tags
    $('.c-form-tabs__item').removeClass('c-form-tabs__item--active');
    $(this).addClass('c-form-tabs__item--active');
    // Handle the actual form toggling
    $('form').hide();
    $('#' + $(this).attr("data-form-id")).toggle();
})