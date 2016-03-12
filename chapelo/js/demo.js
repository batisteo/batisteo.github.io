$(function () {
    $('.chap').chapelo();
    
    $('#kampodiv').hover(function () {
        $(this).prop('contenteditable', 'true').addClass('form-control text-left');
    }, function () {
        $(this).prop('contenteditable', 'false').removeClass('form-control text-left');
    });
});
