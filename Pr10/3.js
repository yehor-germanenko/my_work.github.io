$(document).ready(function(){
    alert(JSON.stringify($.extend({}, 
        {
            field1: "where",
            field2: "are",
            field3: "you",
            field4: "going",
            field5: "today?",
            field6: "I'm going",
            field7: "home"
        }, {
            field1: "hi",
            field2: "my name",
            field3: "is Budy",
            field4: "but",
            field5: "can",
            field6: "call me",
            field7: "anytime"
        }
    )));
});