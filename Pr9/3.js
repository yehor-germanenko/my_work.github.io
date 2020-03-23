$(document).ready(function(){
    stList = [
        { 
            sname: "Германенко", age: 17, num: 6 
        },   
        { 
            sname: "Белавін", age: 15, num: 1 
        },
        { 
            sname: "Доброштан", age: 30, num: 3 
        },
        { 
            sname: "Занько", age: 22, num: 10 
        },
        { 
            sname: "Тараненко",age: 21,num: 2 
        },
        { 
            sname: "Чубенко",age: 22, num: 47 
        }
    ]

    let updateSt3 = (list) => {
        $('.students').empty();
        
        list.forEach(el => {
            let number = $('<p></p>').text('Номер: ' + el.num);
            let name = $('<p></p>').text('Прізвище: ' + el.sname);
            let age = $('<p></p>').text('Вік: ' + el.age);
            
            let el_li  = $('<li></li>').append(name, age, number);
            $('.students').append(el_li);
        });
    }

    updateSt3(stList);

    let actionFilter = (list, type) => {
        let List;
        switch (type) {
            case 'even': List = $.grep(list, (n) =>  n.num % 2 == 0);
                break;
            case 'odd': List = $.grep(list, (n) => n.num % 2 == 1);
                break;
            case 'over21': List = $.grep(list, (n) => n.age < 21);
                break;
            case 'less21': List = $.grep(list, (n) => n.age > 21);
                break;
            case '21': List = $.grep(list, (n) => n.age == 21);
                break;
            case 'surname7': List = $.grep(list, (n) => n.sname.length > 7);
                break;  
            default:
                console.log('error');
                
        }
        return List;
    }
    
    $('#actionType').change( function() {
        let value = $(this).val();
        let list = actionFilter(stList, value);
        updateSt3(list);
    });
});