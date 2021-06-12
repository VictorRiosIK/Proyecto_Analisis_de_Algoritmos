var n = 0;
var conjunto = [];
var Matriz = [];
var tam = 0;
var aux = [];
var nuevoCodigoHtml3 = '<h style="color:#000; background:#fff; font-family: Quicksand;">';
var nuevoCodigoHtml4 = '</h>';
var nuevoCodigoHtml5 = "";
var k = 0;


function setNum(){
	if(n === 0){}
	else{
		for(k = 0; k <= n; k++){
			if(k === 0){
				nuevoCodigoHtml5 = nuevoCodigoHtml3 + conjunto[n] + nuevoCodigoHtml4;
			}
			else{
				nuevoCodigoHtml5 = nuevoCodigoHtml3 + conjunto[k - 1] + nuevoCodigoHtml4;
			}
			document.getElementById("a" + (k)).innerHTML = nuevoCodigoHtml5;
		}
	}
	if(document.getElementById("num1").value == ""){
		alert("Inserta un valor numerico");
	}
	else{
		var bin = [0,0,0,0,0];
		var aux = [];
		var i = 0;
		var j = 0;
		var suma = 0;
		var comb = 0;
		var num1 = parseInt(document.getElementById("num1").value);
		document.getElementById("num1").value = "";
		conjunto[n] = num1;
		n = n + 1;
		for(i = 0; i < n; i++){
			suma = suma + conjunto[i];
		}
		tam = suma;
		suma = 0;
		for(i = 0; i < n; i++){
			comb = 1+(2 * comb);
		}
		for(i = 0; i <= tam; i++){
			Matriz[i] = [0,0];
		}
		for(i = 0; i <= tam; i++){
			for(j = 0; j <= n; j++){
		   	Matriz[i][j] = 0;
			}
		}
		for(i = 0; i <= tam; i++){
			aux[i] = 0;
		}
		aux[0] = 1;
		for(i = 0; i < comb; i++){
			for(j = 0; j < n; j++){
				if(bin[j] == 1){
					bin[j] = 0;
				}
				else{
					bin[j] = 1;
					j = n + 1;
				}
			}
			for(j = 0; j < n; j++){
				if(bin[j] == 1){
					suma = suma + conjunto[j];
				}
			}
			if(aux[suma] == 1){}
			else{
				for(j = 0; j < n; j++){
					if(bin[j] == 1){
						Matriz[suma][j + 1] = 1;
					}
				}
				aux[suma] = 1;
			}
			suma = 0;
		}
		Matriz[0][0] = 1;
		conjunto[n] = 0;
		var nuevoCodigoHtml = "";
		nuevoCodigoHtml = nuevoCodigoHtml  + '<tr>';
		for(j = 0; j <= (tam + 1); j++){
			if(j === 0){
				nuevoCodigoHtml = nuevoCodigoHtml + '<td style="border: navy 2px solid; height:35px; width:35px; font-family: Quicksand;">';
			}
			else{
				nuevoCodigoHtml = nuevoCodigoHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + (j - 1);
			}
			nuevoCodigoHtml = nuevoCodigoHtml + '</td>';
		}
		nuevoCodigoHtml = nuevoCodigoHtml + '</tr>';
		for(j = 0; j <= n; j++){
			nuevoCodigoHtml = nuevoCodigoHtml  + '<tr>';
			for(var i = 0; i <= (tam + 1); i++){
				if(i === 0){
					if(j === 0){
						nuevoCodigoHtml = nuevoCodigoHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + conjunto[j + n];
					}
					else{
						nuevoCodigoHtml = nuevoCodigoHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + conjunto[j - 1];
					}
				}
				else{
					nuevoCodigoHtml = nuevoCodigoHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + Matriz[i - 1][j];
				}
				nuevoCodigoHtml = nuevoCodigoHtml + '</td>';
			}
			nuevoCodigoHtml = nuevoCodigoHtml + '</tr>';
		}
		document.getElementById("Table").innerHTML = nuevoCodigoHtml;
	}
}

function DelNum(){
	if(n === 0){
		alert("No has ingresado numeros aun");
	}
	else{
		for(k = 0; k <= n; k++){
			if(k === 0){
				nuevoCodigoHtml5 = nuevoCodigoHtml3 + conjunto[n] + nuevoCodigoHtml4;
			}
			else{
				nuevoCodigoHtml5 = nuevoCodigoHtml3 + conjunto[k - 1] + nuevoCodigoHtml4;
			}
			document.getElementById("a" + (k)).innerHTML = nuevoCodigoHtml5;
		}
		if(document.getElementById("num2").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			var bin = [0,0,0,0,0];
			var aux = [];
			var i = 0;
			var j = 0;
			var ban = 0;
			var suma = 0;
			var comb = 0;
			var num2 = parseInt(document.getElementById("num2").value);
			document.getElementById("num2").value = "";
			if(num2 === 0){
				alert("El conjunto vacio no puede ser eliminado");
			}
			else{
				for(i = 0; i < n; i++){
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
					for(i = 0; i < n; i++){
						suma = suma + conjunto[i];
					}
					tam = suma;
					suma = 0;
					for(i = 0; i < n; i++){
						comb = 1+(2 * comb);
					}
					for(i = 0; i <= tam; i++){
						Matriz[i] = [0,0];
					}
					for(i = 0; i <= tam; i++){
						for(j = 0; j <= n; j++){
					   	Matriz[i][j] = 0;
						}
					}
					for(i = 0; i <= tam; i++){
						aux[i] = 0;
					}
					aux[0] = 1;
					for(i = 0; i < comb; i++){
						for(j = 0; j < n; j++){
							if(bin[j] == 1){
								bin[j] = 0;
							}
							else{
								bin[j] = 1;
								j = n + 1;
							}
						}
						for(j = 0; j < n; j++){
							if(bin[j] == 1){
								suma = suma + conjunto[j];
							}
						}
						if(aux[suma] == 1){}
						else{
							for(j = 0; j < n; j++){
								if(bin[j] == 1){
									Matriz[suma][j + 1] = 1;
								}
							}
							aux[suma] = 1;
						}
						suma = 0;
					}
					Matriz[0][0] = 1;
					conjunto[n] = 0;
					var nuevoCodigoHtml = "";
					nuevoCodigoHtml = nuevoCodigoHtml  + '<tr>';
					for(j = 0; j <= (tam + 1); j++){
						if(j === 0){
							nuevoCodigoHtml = nuevoCodigoHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">';
						}
						else{
							nuevoCodigoHtml = nuevoCodigoHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + (j - 1);
						}
						nuevoCodigoHtml = nuevoCodigoHtml + '</td>';
					}
					nuevoCodigoHtml = nuevoCodigoHtml + '</tr>';
					for(j = 0; j <= n; j++){
						nuevoCodigoHtml = nuevoCodigoHtml  + '<tr>';
						for(var i = 0; i <= (tam + 1); i++){
							if(i === 0){
								if(j === 0){
									nuevoCodigoHtml = nuevoCodigoHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + conjunto[j + n];
								}
								else{
									nuevoCodigoHtml = nuevoCodigoHtml + '<td id="a' + j + '" style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + conjunto[j - 1];
								}
							}
							else{
								nuevoCodigoHtml = nuevoCodigoHtml + '<td style="border: navy 2px solid; height:35px; font-family: Quicksand; width:35px">' + Matriz[i - 1][j];
							}
							nuevoCodigoHtml = nuevoCodigoHtml + '</td>';
						}
						nuevoCodigoHtml = nuevoCodigoHtml + '</tr>';
					}
					document.getElementById("Table").innerHTML = nuevoCodigoHtml;
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
		for(k = 0; k <= n; k++){
			if(k === 0){
				nuevoCodigoHtml5 = nuevoCodigoHtml3 + conjunto[n] + nuevoCodigoHtml4;
			}
			else{
				nuevoCodigoHtml5 = nuevoCodigoHtml3 + conjunto[k - 1] + nuevoCodigoHtml4;
			}
			document.getElementById("a" + (k)).innerHTML = nuevoCodigoHtml5;
		}
		var nuevoCodigoHtml = "";
		var nuevoCodigoHtml1 = '<div style="color:#fff; background:red; font-weight:bold; height:100%; font-family: Quicksand; width:100%"><h>';
		var nuevoCodigoHtml2 = '</h></div>';
		if(document.getElementById("num3").value == ""){
			alert("Inserta un valor numerico");
		}
		else{
			var j = 0;
			var i = 0;
			var suma = 0;
			var num3 = parseInt(document.getElementById("num3").value);
			document.getElementById("num3").value = "";
			if(aux[num3] === 0 || num3 > tam){
				alert("Ningun subconjunto suma tu numero");
			}
			else{
				for(j = 0; j <= n; j++){
					if(Matriz[num3][j] == 1){
						if(j === 0){
							nuevoCodigoHtml = nuevoCodigoHtml1 + conjunto[n] + nuevoCodigoHtml2;
						}
						else{
							nuevoCodigoHtml = nuevoCodigoHtml1 + conjunto[j - 1] + nuevoCodigoHtml2;
						}
						document.getElementById("a" + (j)).innerHTML = nuevoCodigoHtml;
					}
					else{
						i = i + 1;
					}
				}
				if(i > n){
					alert("Ningun subconjunto suma tu numero");
				}
				else{}
			}
		}
	}
}
