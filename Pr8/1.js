$(document).ready(function(){
    $("span").css({'background-color': 'yellow', 'color': 'red'});
    $("#first").css({'font-size': '18px', 'text-decoration': 'underline'});
    $("#second").css({'font-size': '16px', 'font-weight': 'bolder'});
    $("#city").css({'font-size': '20px', 'font-style': 'italic'});
    $("#list li:odd").css({'color': 'blue'});
    $("#list li:first, #list li:last").css({'font-weight': 'bold'});
    $("#two li:even").css({'color': 'red'});
    $("#two li:first, #two li:last").css({'font-weight': 'bold'});
});