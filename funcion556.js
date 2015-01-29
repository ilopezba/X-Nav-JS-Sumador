(function(){	
	var aleatorio1 = Math.floor(Math.random() * (9999-0+1)) + 0;
	var aleatorio2 = Math.floor(Math.random() * (9999-0+1)) + 0;	
	var sumatorio = aleatorio1.toString()+"+"+aleatorio2.toString();
	document.getElementById("op").innerHTML = sumatorio.toString();
	var Res = document.getElementById("op").innerHTML;
	var Num = Res.split("+")
	var a = parseInt(Num[0]);
	var b = parseInt(Num[1]);
	var total = a+b;
	document.getElementById("res").innerHTML=total.toString();
}());

