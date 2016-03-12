$(function () {
    $('.chap').chapelo();
    
    $('button').click(function() {
        $('.chap')[0].chapelo.replaceAll();
    });
    
    var setSuffixes = function() {
        $('.chap')[0].chapelo.suffixes = $('input[name="suffixes"]').val().trim().split('');
    };
    
    $('input[name="suffixes"]').keyup(function() {
        setSuffixes();
    });
    
    setSuffixes();
});
