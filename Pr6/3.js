$(document).ready(function(){
    $.confirm({
        title: 'Confirm!',
        content: 'Simple confirm!',
        buttons: {
            name: function () {
                $.alert('Yehor');
            },

            surname: function () {
                $.alert('Germanenko');
            },

            PoBatkovi: function (){
                $.alert('Olehovich');
            }
        }
    });
});