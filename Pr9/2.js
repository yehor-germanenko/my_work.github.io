$(document).ready(function(){
    var elems = document.getElementsByTagName("li");
            var arr = $.makeArray(elems);
            $.each(arr, (index, i) =>$(".students_with_index").append($("<p></p>").text(i.querySelector(".sname").textContent + " " + $.inArray(i, arr))));
});