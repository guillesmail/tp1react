const button = document.getElementById("btn-hamburguesa"); 

function mostrarMenu() {
	let menu = document.getElementById("estado-menu"); 
	if(menu.classList.contains("desabilitado-hamb")){

		menu.classList.remove("desabilitado-hamb");
		menu.classList.add("habilitado-hamb");
	} else {
		menu.classList.remove("habilitado-hamb");
		menu.classList.add("desabilitado-hamb");
	}
}

button.addEventListener("click", mostrarMenu); 