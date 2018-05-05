'use strict'


$(function(){
    var suma = 0
    $("#count-sum").click(function() {
        $(".salary").each(function(index, element) {
            suma += parseInt($(this).html());
            console.log('Index pracownika: ' + index + 'Kwota: ' + $(this).html());
        });
        console.log("Suma wypłat " + suma);
        $("#sum").html(suma)
    });
    
});