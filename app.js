$(document).ready(function(){
    time();
  });
function min_sec(digito)
{
    if (digito < 10)
    {
        digito = "0" + digito;
    }
    else
    {
        digito
    }
    return digito;
}
function time()
{

    var date = new Date();
    var m;
    var hour = min_sec(date.getHours());
    var minutes = min_sec(date.getMinutes());
    var seconds = min_sec(date.getSeconds());
    var value;

    if (hour >= 12)
    {
        m = " pm"
    }
    else
    {
        m = " am"
    }

  
    value =  hour + ":" + minutes + ":" + seconds  + m;
    $(".clock").text(value);

    setTimeout(function() {
        time();
        $('.clock').fadeOut();
        $('.clock').fadeIn();

    }, 1000); 
       
}
    


    
    


