/*Wahyu Prihantoro
Ilmu Komputer - Universitas Indonesia
085642710751*/
window.onload=function(){
	document.getElementById('latihan').className = "active";
};

function koreksiTunggal(){
	document.getElementById("hasil-tunggal").innerHTML = "";
	if(document.getElementById("mean-tunggal").value=="6.95") {
		document.getElementById("hasil-tunggal").innerHTML += "mean benar,";
	} else {
		document.getElementById("hasil-tunggal").innerHTML += "mean salah,";
	}
	if(document.getElementById("median-tunggal").value=="7.5") {
		document.getElementById("hasil-tunggal").innerHTML += "median benar,";
	} else {
		document.getElementById("hasil-tunggal").innerHTML += "median salah,";
	}
	if(document.getElementById("modus-tunggal").value=="8") {
		document.getElementById("hasil-tunggal").innerHTML += "modus benar ";
	} else {
		document.getElementById("hasil-tunggal").innerHTML += "modus salah ";
	}
}

function koreksiKelompok(){
	document.getElementById("hasil-kelompok").innerHTML = "";
	if(document.getElementById("mean-kelompok").value=="44.1") {
		document.getElementById("hasil-kelompok").innerHTML += "mean benar,";
	} else {
		document.getElementById("hasil-kelompok").innerHTML += "mean salah,";
	}
	if(document.getElementById("median-kelompok").value=="42") {
		document.getElementById("hasil-kelompok").innerHTML += "median benar,";
	} else {
		document.getElementById("hasil-kelompok").innerHTML += "median salah,";
	}
	if(document.getElementById("modus-kelompok").value=="40.5") {
		document.getElementById("hasil-kelompok").innerHTML += "modus benar ";
	} else {
		document.getElementById("hasil-kelompok").innerHTML += "modus salah ";
	}
}