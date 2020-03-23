$(document).ready(function(){
    let arr = $("li");
    $('#sort-age').click( () => {
        arr.sort((a, b) => a.querySelector('.age').textContent > b.querySelector('.age').textContent ? 1 : -1);
        $(arr).appendTo(".students");
    });
    $('#sort-sname').click( () => {
        arr.sort((a, b) => (a.querySelector('.sname').textContent).localeCompare(b.querySelector('.sname').textContent));
        $(arr).appendTo(".students");
    });
});