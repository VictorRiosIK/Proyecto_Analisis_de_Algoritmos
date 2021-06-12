var x = 0;
var arreglo = [];
var Matriz = [];
var tamano = 0;
var aux = [];
var nCHtml3 = '<h style="color:#000; background:#fff; font-family: Quicksand;">';
var nCHtml4 = '</h>';
var nCHtml5 = "";
var k = 0;


function setNum(){
	if(x === 0){}
	else{
		for(k = 0; k <= x; k++){
			if(k === 0){
				nCHtml5 = nCHtml3 + arreglo[x] + nCHtml4;
			}
			else{
				nCHtml5 = nCHtml3 + arreglo[x - 1] + nCHtml4;
			}
			document.getElementById("a" + (k)).innerHTML = nCHtml5;
		}
	}
	if(document.getElementById("num1").value == ""){
		alert("Inserta un valor numerico");
	}
	else{
		var sup = [0,0,0,0,0];
		var aux = [];
		var i = 0;
		var j = 0;
		var sumaT = 0;
		var combA = 0;
		var num1 = parseInt(document.getElementById("num1").value);
		document.getElementById("num1").value = "";
		arreglo[x] = num1;
		x = x + 1;
		for(i = 0; i < x; i++){
			sumaT = sumaT + arreglo[i];
		}
		tamano = sumaT;
		sumaT = 0;
		for(i = 0; i < x; i++){
			combA = 1+(2 * combA);
		}
		for(i = 0; i <= tamano; i++){
			Matriz[i] = [0,0];
		}
		for(i = 0; i <= tamano; i++){
			for(j = 0; j <= x; j++){
		   	Matriz[i][j] = 0;
			}
		}
		for(i = 0; i <= tamano; i++){
			aux[i] = 0;
		}
		aux[0] = 1;
		for(i = 0; i < combA; i++){
			for(j = 0; j < x; j++){
				if(sup[j] == 1){
					sup[j] = 0;
				}
				else{
					sup[j] = 1;
					j = x + 1;
				}
			}
			for(j = 0; j < x; j++){
				if(sup[j] == 1){
					sumaT = sumaT + arreglo[j];
				}
			}
			if(aux[sumaT] == 1){}
			else{
				for(j = 0; j < x; j++){
					if(sup[j] == 1){
						Matriz[sumaT][j + 1] = 1;
					}
				}
				aux[sumaT] = 1;
			}
			sumaT = 0;
		}
		Matriz[0][0] = 1;
		arreglo[x] = 0;
		var nCHtml = "";
		nCHtml = nCHtml  + '<tr>';
		for(j = 0; j <= (tamano + 1); j++){
			if(j === 0){
				nCHtml = nCHtml + '<td style="border: navy 2px solid; height:35px; width:35px; font-family: Quicksand;">';
			}
			else{
				nCHtml = nCHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + (j - 1);
			}
			nCHtml = nCHtml + '</td>';
		}
		nCHtml = nCHtml + '</tr>';
		for(j = 0; j <= x; j++){
			nCHtml = nCHtml  + '<tr>';
			for(var i = 0; i <= (tamano + 1); i++){
				if(i === 0){
					if(j === 0){
						nCHtml = nCHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + arreglo[j + x];
					}
					else{
						nCHtml = nCHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + arreglo[j - 1];
					}
				}
				else{
					nCHtml = nCHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + Matriz[i - 1][j];
				}
				nCHtml = nCHtml + '</td>';
			}
			nCHtml = nCHtml + '</tr>';
		}
		document.getElementById("Table").innerHTML = nCHtml;
	}
}

function DelNum(){
	if(x === 0){
		alert("No has ingresado numeros aun");
	}
	else{
		for(k = 0; k <= x; k++){
			if(k === 0){
				nCHtml5 = nCHtml3 + arreglo[x] + nCHtml4;
			}
			else{
				nCHtml5 = nCHtml3 + arreglo[x - 1] + nCHtml4;
			}
			document.getElementById("a" + (k)).innerHTML = nCHtml5;
		}
		if(document.getElementById("num2").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			var sup = [0,0,0,0,0];
			var aux = [];
			var i = 0;
			var j = 0;
			var ban = 0;
			var sumaT = 0;
			var combA = 0;
			var num2 = parseInt(document.getElementById("num2").value);
			document.getElementById("num2").value = "";
			if(num2 === 0){
				alert("El conjunto vacio no puede ser eliminado");
			}
			else{
				for(i = 0; i < x; i++){
					if(arreglo[i] == num2){
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
						arreglo[i] = arreglo[i + 1];
					}
					x = x - 1;
					for(i = 0; i < x; i++){
						sumaT = sumaT + arreglo[i];
					}
					tam = sumaT;
					suma = 0;
					for(i = 0; i < x; i++){
						combA = 1+(2 * combA);
					}
					for(i = 0; i <= tamano; i++){
						Matriz[i] = [0,0];
					}
					for(i = 0; i <= tamano; i++){
						for(j = 0; j <= x; j++){
					   	Matriz[i][j] = 0;
						}
					}
					for(i = 0; i <= tamano; i++){
						aux[i] = 0;
					}
					aux[0] = 1;
					for(i = 0; i < combA; i++){
						for(j = 0; j < x; j++){
							if(sup[j] == 1){
								sup[j] = 0;
							}
							else{
								sup[j] = 1;
								j = n + 1;
							}
						}
						for(j = 0; j < x; j++){
							if(sup[j] == 1){
								sumaT = sumaT + arreglo[j];
							}
						}
						if(aux[sumaT] == 1){}
						else{
							for(j = 0; j < x; j++){
								if(sup[j] == 1){
									Matriz[sumaT][j + 1] = 1;
								}
							}
							aux[sumaT] = 1;
						}
						sumaT = 0;
					}
					Matriz[0][0] = 1;
					arreglo[x] = 0;
					var nCHtml = "";
					nCHtml = nCHtml  + '<tr>';
					for(j = 0; j <= (tamano + 1); j++){
						if(j === 0){
							nCHtml = nCHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">';
						}
						else{
							nCHtml = nCHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + (j - 1);
						}
						nCHtml = nCHtml + '</td>';
					}
					nCHtml = nCHtml + '</tr>';
					for(j = 0; j <= x; j++){
						nCHtml = nCHtml  + '<tr>';
						for(var i = 0; i <= (tamano + 1); i++){
							if(i === 0){
								if(j === 0){
									nCHtml = nCHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + arreglo[j + x];
								}
								else{
									nCHtml = nCHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + arreglo[x - 1];
								}
							}
							else{
								nCHtml = nCHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + Matriz[i - 1][j];
							}
							nCHtml = nCHtml + '</td>';
						}
						nCHtml = nCHtml + '</tr>';
					}
					document.getElementById("Table").innerHTML = nCHtml;
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
		for(k = 0; k <= x; k++){
			if(k === 0){
				nCHtml5 = nCHtml3 + arreglo[x] + nCHtml4;
			}
			else{
				nCHtml5 = nCHtml3 + arreglo[k - 1] + nCHtml4;
			}
			document.getElementById("a" + (k)).innerHTML = nCHtml5;
		}
		var nCHtml = "";
		var nCHtml1 = '<div style="color:#fff; background:red; font-weight:bold; height:100%; font-family: Quicksand; width:100%"><h>';
		var nCHtml2 = '</h></div>';
		if(document.getElementById("num3").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			var j = 0;
			var i = 0;
			var sumaT = 0;
			var num3 = parseInt(document.getElementById("num3").value);
			document.getElementById("num3").value = "";
			if(aux[num3] === 0 || num3 > tamano){
				alert("Ningun subconjunto suma tu numero");
			}
			else{
				for(j = 0; j <= x; j++){
					if(Matriz[num3][j] == 1){
						if(j === 0){
							nCHtml = nCHtml1 + arreglo[x] + nCHtml2;
						}
						else{
							nCHtml = nCHtml1 + arreglo[j - 1] + nCHtml2;
						}
						document.getElementById("a" + (j)).innerHTML = nCHtml;
					}
					else{
						i = i + 1;
					}
				}
				if(i > x){
					alert("Ningun subconjunto suma tu numero");
				}
				else{}
			}
		}
	}
}
