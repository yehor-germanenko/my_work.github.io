$(document).ready(function(){

    // 1.1
    $("input").click(function(event){
        alert("Congratulation!")
    });

    //1.2
    $.alert({
        title: 'Hi',
        content: 'I\'m Yehor Germanenko'
    });

    //1.3
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

    //1.4
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

    // 1.5
    $.dialog({
        title: 'Hi',
        content: 'My story, my story, my story, my story, my story, my story, my story, my story.',
    });

    //1.6
    $('a.facebook').confirm({
        content: "Are you sure you want to go to my facebook page?",
    });
});