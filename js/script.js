console.log('Aloitus');
var muuttuja = setInterval(function(){
    console.log('-');
},10);

$(document).ready(function(){
    setTimeout(function(){
        clearInterval(muuttuja);
    },100)
    console.log('Toimii');

    var pelilaatat = "";
    for (var i = 0; i <= 35; i++) {
        var pl = "";
        pl =    "<div data-pelilaatannumero='"+ i +"'>";
        pl +=   "<span>Laatta " + i + "</span>";
        pl +=   "</div>"
        pelilaatat += pl;
    }
    $(".pelilauta-inner").html(pelilaatat);

    /*
    var pommi = 14;
    var pommi2 = 15;
    var pommi3 = 20;
    */

    var pommi = Math.floor((Math.random() * 12 ));
    console.log('pommi 1 ' + pommi);

    var pommi2 = Math.floor((Math.random() * 12 ) +12);
    console.log('pommi 2 ' + pommi2);

    var pommi3 = Math.floor((Math.random() * 12 ) +24);
    console.log('pommi 3 ' + pommi3);

    var pommit = [pommi,pommi2,pommi3];

    $('.pelilauta-inner > div').click(function(){
        //var numero = $(this).attr('data-pelilaatannumero');             jompi kumpi toi alempi teksti tai tämä
        var numero = $(this).data('pelilaatannumero');
        console.log('Laatta' + numero);

        /*if(pommi == numero || pommi2 == numero || pommi3 == numero){
            alert("Pam");
        }
        */
        for (var i = 0; i < pommit.length; i++) {
            if(pommit[i] == numero){
                //alert("pam!");
                $(this).html("<img class='pommi' src='img/Ex3.gif' />");
            }
            
        }
    });
});