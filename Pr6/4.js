$(document).ready(function(){
    $.confirm({
        title: 'Prompt!',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        '<label>Enter something here</label>' +
        '<input type="text" placeholder="Your Name" class="name form-control" required />' +
        '<input type="text" placeholder="Your Surname" class="surname form-control" required />' +
        '<input type="text" placeholder="Your Po-batkovi" class="batkovi form-control" required />' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Submit',
                btnClass: 'btn-blue',
                action: function () {
                    var name = this.$content.find('.name').val();
                    var surname = this.$content.find('.surname').val();
                    var batkovi = this.$content.find('.batkovi').val();
                    if(!name || !surname || !batkovi){
                        $.alert('provide a valid data');
                        return false;
                    }
                    $.alert('Your name is ' + name + ' ' + surname + ' ' + batkovi);
                }
            }, 
            cancel: function () {
                //close
            },
        },
    });
});