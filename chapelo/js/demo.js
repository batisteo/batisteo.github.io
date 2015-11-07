$(function () {
    $('.chap').chapelo({
        // selectors: "div"
    });

    $('.alt-suffixes').chapelo({
        suffixes: "'"
    });

    $('#chap-general-toggle').bootstrapSwitch();

    $('#replaceall').click(function () {
        var field = $('#' + $(this).data('chap-field-id'))
        field[0].chapelo.replaceAll();
    })
});
