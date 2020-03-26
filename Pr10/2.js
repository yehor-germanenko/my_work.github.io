$(document).ready(function(){
    let arr = $.map([5, 6, 8, 74, 47, 258, 854, 1, 99, 100], (n, i) => n*i);
    alert("Парні: " + $.map(arr, (i) => {if (i%2==0) return i}).filter((j)=> j!= undefined));
    alert("Не парні: " + $.map(arr, (i) => {if (i%2!=0) return i}).filter((j)=> j!= undefined));
});