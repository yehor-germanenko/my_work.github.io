jQuery("document").ready(function($){
    $(function(){
        var expression = "";
        $('.button').on('click', function(){
            expression += $(this).text();
            $('input').val(expression);
        });

        $("input").blur(function(){
            expression = $(this).val();
        });

        $('.clear').on('click', function(){
            expression = "";
            $('input').val(expression);
        });

        $(".equal").on("click", function(){
            $('input').val(eval(expression));
        });

        
    });
});