var n = 0;
var conjunto = [];
var Matriz = [];
var tam = 0;
var CodigoFuerte = "";
var CodigoAux = "";
var k = 0;
var r = 0;
var l = 0;
var bandera = 0;
var r1 = 0;
var l1 = 0;
var bandera1 = 0;

function setNum(){
	if(document.getElementById("num1").value == ""){
		alert("Inserta un valor numerico");
	}
	else{
		var aux = 1;
		var i = 0;
		var j = 0;
		var suma = 0;
		var num1 = parseInt(document.getElementById("num1").value);
		document.getElementById("num1").value = "";
		conjunto[0] = 0;
		n = n + 1;
		conjunto[n] = num1;
		Matriz[0] = 0;
		k = 0;
		for(i = 1; i <= n; i++){
			aux = aux + Math.pow(2,i);
			for(j = (Math.pow(2,i) - 1); j < aux; j++){
				if(j % 2 === 0){
					Matriz[j] = Matriz[k];
					k = k + 1;
				}
				else{
					Matriz[j] = Matriz[k] + conjunto[i];
				}
			}
		}
		var Codi = "";
		Codi = '<label style="font-family: Quicksand; color: #D6E8EE;"> {' + conjunto + '} </label>';
		actualizarConjunto(conjunto)
		tam = aux;
		aux = 0;
		CodigoFuerte = "";
		k = 0;
		r = 0;
		l = 0;
		bandera = 0;
		r1 = 0;
		l1 = 0;
		bandera1 = 0;
	}
}
function actualizarConjunto(_respuesta){

	document.getElementById("Conjunto").innerHTML ="Conjunto de entrada {"+ _respuesta +"}";
}
function delNum(){
	if(n === 0){
		alert("No has ingresado numeros aun");
	}
	else{
		if(document.getElementById("num2").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			var aux = 1;
			var i = 0;
			var j = 0;
			var suma = 0;
			var ban = 0;
			var num2 = parseInt(document.getElementById("num2").value);
			document.getElementById("num2").value = "";
			if(num2 === 0){
				alert("El conjunto vacio no puede ser eliminado");
			}
			else{
				for(i = 1; i <= n; i++){
					if(conjunto[i] == num2){
						j = i;
						ban = 1;
					}
					else{}
				}
				if(ban === 0){
					alert("Tu numero no existe en el conjunto");
				}
				else{
					for(i = j; i < n; i++){
						conjunto[i] = conjunto[i + 1];
					}
					n = n - 1;
					if(n === 0){
						CodigoFuerte = "";
						document.getElementById("estructura").innerHTML = CodigoFuerte;
					}
					else{
						Matriz[0] = 0;
						k = 0;
						for(i = 1; i <= n; i++){
							aux = aux + Math.pow(2,i);
							for(j = (Math.pow(2,i) - 1); j < aux; j++){
								if(j % 2 === 0){
									Matriz[j] = Matriz[k];
									k = k + 1;
								}
								else{
									Matriz[j] = Matriz[k] + conjunto[i];
								}
							}
						}
						tam = aux;
						aux = 0;
						CodigoFuerte = "";
						k = 0;
						r = 0;
						l = 0;
						bandera = 0;
						r1 = 0;
						l1 = 0;
						bandera1 = 0;
						document.getElementById("estructura").innerHTML = "";
						actualizarConjunto(conjunto);
					}
				}
				
			}
		}
	}
}

function busqueda(){
	if(n === 0){
		alert("No has ingresado numeros aun");
	}
	else{
		
		var nuevoCodigoHtml = CodigoFuerte;
		var numeroEncontrado = '<div style="width: 100%; text-align:center; align-items:center; justify-content: center; display: flex; float:center;"> <div style="height: 50px; width: 50px; background: #ff4757; color: #D6E8EE; border-radius: 100%; display: flex; align-items:center; justify-content: center;"> <h>';//codigo para imprimir el numero encontrado
		var bloqueDiv = '</h> </div> </div>';
		var nuevoCodigoHtml1 = "";
		if(document.getElementById("num3").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			document.getElementById("tituloResultado").innerHTML="RESULTADO ALGORITMO";
			document.getElementById("estructura").innerHTML = CodigoAux;
			var j = 0;
			var i = 0;
			var aux = 1;
			var suma = 0;
			var ban = 0;
			var num3 = parseInt(document.getElementById("num3").value);
			document.getElementById("num3").value = ""; 
			for(i = 0; i < l1; i++){
				if(Matriz[i] == num3){
					document.getElementById("estructura").innerHTML = CodigoAux;
					document.getElementById("a" + i).innerHTML = numeroEncontrado + Matriz[i] + bloqueDiv;
					ban = 1;
				}
				else{}
			}
			if(ban == 1){}
			else{
				r = r1;
				l = l1;
				bandera = bandera1;
				j = 0;
				document.getElementById("estructura").innerHTML = "";
				for(; r <= n; r++){//se encarga de construir el modelo del arbol
					if(l == bandera){
						nuevoCodigoHtml = nuevoCodigoHtml  + '<tr><td><label style="font-family: Quicksand; color: #D6E8EE;"> +' + conjunto[r] + ' </label></td>';//imprime el numero del conjunto
						bandera = bandera + Math.pow(2,r);
					}
					else{}
					for(; l < bandera; l++){
						nuevoCodigoHtml = nuevoCodigoHtml  + '<td colspan="' + Math.pow(2,(n - r)) + '" id="a' + l + '" > <div style="width: 100%; text-align:center; align-items:center; justify-content: center; display: flex; float:center;"> <div style="height: 50px; width: 50px; background:#2f3542; color:#fff; border-radius: 100%; display: flex; align-items:center; justify-content: center;"> <h>' + Matriz[l] + '</h> </div> </div> </td>';
						nuevoCodigoHtml1 = nuevoCodigoHtml;
						if((l + 1) < bandera){
							for(i = l + 1; i < bandera; i++){
								nuevoCodigoHtml1 = nuevoCodigoHtml1  + '<td colspan="' + Math.pow(2,(n - r)) + '" > <div style="width: 100%; text-align:center; align-items:center; justify-content: center; display: flex; float:center;"> <div style="height: 50px; width: 50px; background:#fff; color:#fff; border-radius: 100%; display: flex; align-items:center; justify-content: center;"> <h>' + "" + '</h> </div> </div> </td>';
							}
						}
						else{}
						nuevoCodigoHtml1 = nuevoCodigoHtml1  + '<td><label style="font-family: Quicksand; color: #D6E8EE;"> +' + conjunto[0] + ' </label></td></tr>';
						if(Matriz[l] == num3 && j === 0){
							r1 = r;
							l1 = l + 1;
							bandera1 = bandera;
							CodigoFuerte = nuevoCodigoHtml;
							CodigoAux = nuevoCodigoHtml1;
							j = 10;
							document.getElementById("estructura").innerHTML = nuevoCodigoHtml1;
							document.getElementById("a" + l).innerHTML = numeroEncontrado + Matriz[l] + bloqueDiv;
						}
						else{}
						if(j === 0){
							document.getElementById("estructura").innerHTML = nuevoCodigoHtml1;
							document.getElementById("a" + l).innerHTML = numeroEncontrado + Matriz[l] + bloqueDiv;
						}
						else{}
					}
				}
				if(j == 10){}
				else{
					CodigoFuerte = nuevoCodigoHtml;
					alert("No se encontro tu numero");
				}
			}
		}
	}
}
