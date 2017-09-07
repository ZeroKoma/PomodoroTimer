function iniciar() {
    var estado = true; // true si crono tiempo trabajo - false descanso
    var ciclo = 1; // nº de pomodoros
    var wrkTime = 1; // 25 min
    var wrkPause = 1; // 5 min
    var x = document.getElementById("texto").style.display = "none";

    /*function reloj() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('reloj').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(reloj, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }; // añade un cero delante de un múmero si < 10
        return i;
    }*/


    /* R E L O J */

    var myVar = setInterval(function() { myClock() }, 1000);

    function myClock() {
        document.getElementById("reloj").innerHTML =
            new Date().toLocaleTimeString();
    }

    /* B O T O N E S  P L A Y   E T C   */


    /*document.getElementById("btnInicio").addEventListener("click", function play() {
        var centesimas = 0;
        var segundos = 0;
        var minutos = 0;
        var horas = 0;
        control = setInterval(cronometro, 10);
        document.getElementById("btnInicio").style.backgroundColor = "#152118";
        document.getElementById("btnPausa").style.backgroundColor = "black";
        document.getElementById("btnStop").style.backgroundColor = "black";
        pintaCiclo(ciclo);


        function cronometro() {

            if (centesimas < 99) {
                centesimas++;
                if (centesimas < 10) { centesimas = "0" + centesimas }
                Centesimas.innerHTML = ":" + centesimas;
            }
            if (centesimas == 99) {
                centesimas = -1;
            }
            if (centesimas == 0) {
                segundos++;
                if (segundos < 10) { segundos = "0" + segundos }
                Segundos.innerHTML = ":" + segundos;
            }
            if (segundos == 59) {
                segundos = -1;
            }
            if ((centesimas == 0) && (segundos == 0)) {
                minutos++;
                if (estado == true) {
                    wrkTime -= 1;
                    document.getElementById('reloj2').innerHTML = "WrkTime " + wrkTime + " min.";
                } else {
                    wrkPause -= 1;
                    document.getElementById("reloj2").innerHTML = "WrkPause " + wrkPause + " min.";
                }
                if (minutos < 10) { minutos = "0" + minutos }
                Minutos.innerHTML = minutos;
            }
            if (minutos == 59) {
                minutos = -1;
            }
            if (wrkTime == 0) {
                clearInterval(control);
                Centesimas.innerHTML = ":00";
                Segundos.innerHTML = ":00";
                Minutos.innerHTML = "00";
                estado = false;
                ciclo += 1;
                if (ciclo <= 3) {
                    pintaCiclo(ciclo);
                    tiempoDescanso();
                } else {
                    pintaCiclo();
                    cicloAcabado();
                }
            }

            if (wrkPause == 0) {
                clearInterval(control);
                document.getElementById('reloj2').innerHTML = wrkPause + " min.";
                Centesimas.innerHTML = ":00";
                Segundos.innerHTML = ":00";
                Minutos.innerHTML = "00";
                estado = true;
                wrkTime = 1;
                wrkPause = 1;
                alert("Acabado tiempo descanso");
                document.getElementById("btnInicio").style.backgroundColor = "black";
                document.getElementById("tiempoDe").innerHTML = "Tiempo de trabajo:";
                document.getElementById("tiempoPara").innerHTML = "Tiempo para el descanso:";
            }
        }

    });
*/



    document.getElementById("btnPausa").addEventListener("click", function pausar() {
        clearInterval(control);
        document.getElementById("btnInicio").style.backgroundColor = "black";
        document.getElementById("btnPausa").style.backgroundColor = "#19261c";
        document.getElementById("btnStop").style.backgroundColor = "black";
    });

    document.getElementById("btnStop").addEventListener("click", function() {
        iniciaPantalla();
    });

    /* M O S T R A R   T E X T O  */

    document.getElementById("btnTexto").addEventListener("click", function mostrarTexto() {
        var x = document.getElementById('texto');
        if (x.style.display == 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    });



    /* ------------------------------------- */

    function iniciaPantalla() {
        clearInterval(control);
        estado = true;
        wrkTime = 1;
        wrkPause = 1;
        ciclo = 0;
        centesimas = 0;
        segundos = 0;
        minutos = 0;
        Centesimas.innerHTML = ":00";
        Segundos.innerHTML = ":00";
        Minutos.innerHTML = "00";
        document.getElementById("btnInicio").style.backgroundColor = "black";
        document.getElementById("btnPausa").style.backgroundColor = "black";
        document.getElementById("btnStop").style.backgroundColor = "black";
        document.getElementById('reloj2').innerHTML = wrkTime + " min.";
        document.getElementById("barraEstado1").style.background = "#011A01";
        document.getElementById("barraEstado2").style.background = "#011A01";
        document.getElementById("barraEstado3").style.background = "#011A01";
        document.getElementById("barraEstado4").style.background = "#011A01";
        pintaCiclo(0);

    }

    function pintaCiclo(dato) {
        if ((dato != 0) && (dato <= 4)) {
            switch (dato) {
                case 1:
                    document.getElementById("barraEstado1").style.background = "green";
                    break;

                case 2:
                    document.getElementById("barraEstado2").style.background = "green";
                    break;
                case 3:
                    document.getElementById("barraEstado3").style.background = "green";
                    break;
                case 4:
                    document.getElementById("barraEstado4").style.background = "green";
                    break;
            };
        } else {
            document.getElementById("barraEstado1").style.background = "#011A01";
            document.getElementById("barraEstado2").style.background = "#011A01";
            document.getElementById("barraEstado3").style.background = "#011A01";
            document.getElementById("barraEstado4").style.background = "#011A01";
        }
    }

    function tiempoDescanso() {
        document.getElementById("btnInicio").style.backgroundColor = "black";
        estado = false;
        wrkTime = 1;
        document.getElementById("tiempoDe").innerHTML = "Tiempo de Descanso:";
        document.getElementById("tiempoPara").innerHTML = "Tiempo para volver a trabajar:";
        document.getElementById("reloj2").innerHTML = wrkTime + " min.";
        document.getElementById("btnInicio").style.boxShadow = "0px 0px 3px green";
        alert("Tiempo de descanso!!!!");

    }

    function cicloAcabado() {
        clearInterval(control);
        alert("ciclo acabado.");
        iniciaPantalla();

    }
};