function somar(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x+y;

    document.getElementById("resultado").innerHTML=resultado;

    alert (resultado)


}

function subtrair(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x-y;

    document.getElementById("resultado").innerHTML=resultado;

    alert(resultado)
}

function multiplicar(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x*y;

    document.getElementById("resultado").innerHTML=resultado;

    alert(resultado)
}

function dividir(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x/y;

    document.getElementById("resultado").innerHTML=resultado;

    alert(resultado)
}
