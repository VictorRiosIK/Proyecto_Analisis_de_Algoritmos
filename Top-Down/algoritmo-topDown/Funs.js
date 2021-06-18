var x = 0;
var conjunto = [];
var Matriz = [];
var tamano = 0;
var CF = "";
var CodigoAux = "";
var k = 0;
var r = 0;
var l = 0;
var BDR = 0;
var r1 = 0;
var l1 = 0;
var BDR1 = 0;

function setNum(){
	if(document.getElementById("num1").value == ""){
		alert("Inserta un valor numerico");
	}
	else{
		var auxiliar = 1;
		var i = 0;
		var j = 0;
		var sumaT = 0;
		var num1 = parseInt(document.getElementById("num1").value);
		document.getElementById("num1").value = "";
		conjunto[0] = 0;
		x = x + 1;
		conjunto[x] = num1;
		Matriz[0] = 0;
		k = 0;
		for(i = 1; i <= x; i++){
			auxiliar = auxiliar + Math.pow(2,i);
			for(j = (Math.pow(2,i) - 1); j < auxiliar; j++){
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
		tamano = auxiliar;
		auxiliar = 0;
		CF = "";
		k = 0;
		r = 0;
		l = 0;
		BDR = 0;
		r1 = 0;
		l1 = 0;
		BDR1 = 0;
	}
}
function actualizarConjunto(_respuesta){

	document.getElementById("Conjunto").innerHTML ="Conjunto de entrada {"+ _respuesta +"}";
}
function delNum(){
	if(x === 0){
		alert("No has ingresado numeros aun");
	}
	else{
		if(document.getElementById("num2").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			var auxiliar = 1;
			var i = 0;
			var j = 0;
			var sumaT = 0;
			var ban = 0;
			var num2 = parseInt(document.getElementById("num2").value);
			document.getElementById("num2").value = "";
			if(num2 === 0){
				alert("El conjunto vacio no puede ser eliminado");
			}
			else{
				for(i = 1; i <= x; i++){
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
					for(i = j; i < x; i++){
						conjunto[i] = conjunto[i + 1];
					}
					x = x - 1;
					if(x === 0){
						CF = "";
						document.getElementById("estructura").innerHTML = CF;
					}
					else{
						Matriz[0] = 0;
						k = 0;
						for(i = 1; i <= x; i++){
							auxiliar = auxiliar + Math.pow(2,i);
							for(j = (Math.pow(2,i) - 1); j < auxiliar; j++){
								if(j % 2 === 0){
									Matriz[j] = Matriz[k];
									k = k + 1;
								}
								else{
									Matriz[j] = Matriz[k] + conjunto[i];
								}
							}
						}
						tamano = auxiliar;
						aux = 0;
						CF = "";
						k = 0;
						r = 0;
						l = 0;
						BDR = 0;
						r1 = 0;
						l1 = 0;
						BDR1 = 0;
						document.getElementById("estructura").innerHTML = "";
						actualizarConjunto(conjunto);
					}
				}
				
			}
		}
	}
}

function busqueda(){
	if(x === 0){
		alert("No has ingresado numeros aun");
	}
	else{
		
		var nCHtml = CF;
		var nE = '<div style="width: 100%; text-align:center; align-items:center; justify-content: center; display: flex; float:center;"> <div style="height: 50px; width: 50px; background: #ff4757; color: #D6E8EE; border-radius: 100%; display: flex; align-items:center; justify-content: center;"> <h>';//codigo para imprimir el numero encontrado
		var bD = '</h> </div> </div>';
		var nCHtml1 = "";
		if(document.getElementById("num3").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			document.getElementById("tituloResultado").innerHTML="RESULTADO ALGORITMO";
			document.getElementById("estructura").innerHTML = CodigoAux;
			var j = 0;
			var i = 0;
			var auxiliar = 1;
			var sumaT = 0;
			var ban = 0;
			var num3 = parseInt(document.getElementById("num3").value);
			document.getElementById("num3").value = ""; 
			for(i = 0; i < l1; i++){
				if(Matriz[i] == num3){
					document.getElementById("estructura").innerHTML = CodigoAux;
					document.getElementById("a" + i).innerHTML = nE + Matriz[i] + bD;
					ban = 1;
				}
				else{}
			}
			if(ban == 1){}
			else{
				r = r1;
				l = l1;
				BDR = BDR1;
				j = 0;
				document.getElementById("estructura").innerHTML = "";
				for(; r <= x; r++){//se encarga de construir el modelo del arbol
					if(l == BDR){
						nCHtml = nCHtml  + '<tr><td><label style="font-family: Quicksand; color: #D6E8EE;"> +' + conjunto[r] + ' </label></td>';//imprime el numero del conjunto
						BDR = BDR + Math.pow(2,r);
					}
					else{}
					for(; l < BDR; l++){
						nCHtml = nCHtml  + '<td colspan="' + Math.pow(2,(x - r)) + '" id="a' + l + '" > <div style="width: 100%; text-align:center; align-items:center; justify-content: center; display: flex; float:center;"> <div style="height: 50px; width: 50px; background:#2f3542; color:#fff; border-radius: 100%; display: flex; align-items:center; justify-content: center;"> <h>' + Matriz[l] + '</h> </div> </div> </td>';
						nCHtml1 = nCHtml;
						if((l + 1) < BDR){
							for(i = l + 1; i < BDR; i++){
								nCHtml1 = nCHtml1  + '<td colspan="' + Math.pow(2,(x - r)) + '" > <div style="width: 100%; text-align:center; align-items:center; justify-content: center; display: flex; float:center;"> <div style="height: 50px; width: 50px; background:#fff; color:#fff; border-radius: 100%; display: flex; align-items:center; justify-content: center;"> <h>' + "" + '</h> </div> </div> </td>';
							}
						}
						else{}
						nCHtml1 = nCHtml1  + '<td><label style="font-family: Quicksand; color: #D6E8EE;"> +' + conjunto[0] + ' </label></td></tr>';
						if(Matriz[l] == num3 && j === 0){
							r1 = r;
							l1 = l + 1;
							BDR1 = BDR;
							CF = nCHtml;
							CodigoAux = nCHtml1;
							j = 10;
							document.getElementById("estructura").innerHTML = nCHtml1;
							document.getElementById("a" + l).innerHTML = nE + Matriz[l] + bD;
						}
						else{}
						if(j === 0){
							document.getElementById("estructura").innerHTML = nCHtml1;
							document.getElementById("a" + l).innerHTML = nE + Matriz[l] + bD;
						}
						else{}
					}
				}
				if(j == 10){}
				else{
					CF = nCHtml;
					alert("No se encontro tu numero");
				}
			}
		}
	}
}
