$(document).ready(function(){
    let arr = $(".students2 li");
    $('#sort-age').click( () => {
        arr.sort((a, b) => a.querySelector('.age').textContent > b.querySelector('.age').textContent ? 1 : -1);
        $(arr).appendTo(".students2");
    });
    let arr2 = $(".students li");
    $('#sort-sname').click( () => {
        arr2.sort((a, b) => (a.querySelector('.sname').textContent).localeCompare(b.querySelector('.sname').textContent));
        $(arr2).appendTo(".students");
    });
});