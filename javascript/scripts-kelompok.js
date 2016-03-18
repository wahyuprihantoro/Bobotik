/*Wahyu Prihantoro
Ilmu Komputer - Universitas Indonesia
085642710751*/
function median(){
	var data = [];
	var cf1 = sessionStorage.data1;
	var cf2 = Number(cf1) + Number(sessionStorage.data2);
	var cf3 = Number(cf2) + Number(sessionStorage.data3);
	var cf4 = Number(cf3) + Number(sessionStorage.data4);
	var cf5 = Number(cf4) + Number(sessionStorage.data5);
	var cf6 = Number(cf5) + Number(sessionStorage.data6);
	var cf7 = Number(cf6) + Number(sessionStorage.data7);
	var cf8 = Number(cf7) + Number(sessionStorage.data8);
	var cf9 = Number(cf8) + Number(sessionStorage.data9);
	var cf10 = Number(cf9) + Number(sessionStorage.data10);
	var cf = [cf1,cf2,cf3,cf4,cf5,cf6,cf7,cf8,cf9,cf10];
	
	var median;
	var x = 0;
	var bb = 0;
	var half = cf10/2;
	for(var i = 0; i<cf.length;i++){
		if(half<=cf[i]){
			x=i;

			i=cf.length;
		}
	}
	var fk;
	var f;
	if(x>0){
		fk = cf[x-1];
		f = cf[x]-cf[x-1];
	} else {
		fk=0;
		f = cf1;
	}

	var tengah = [];
	tengah.push(sessionStorage.x1);
	tengah.push(sessionStorage.x2);
	tengah.push(sessionStorage.x3);
	tengah.push(sessionStorage.x4);
	tengah.push(sessionStorage.x5);
	tengah.push(sessionStorage.x6);
	tengah.push(sessionStorage.x7);
	tengah.push(sessionStorage.x8);
	tengah.push(sessionStorage.x9);
	tengah.push(sessionStorage.x10);

	bb = Number(tengah[x])-Number((sessionStorage.w/2));
	
	median = Number(bb) + ((cf10/2-fk)/f)*sessionStorage.w;
	document.getElementById("image").src = "./images/median.png";
	var temp = "L = " + Number(bb) + "<br>n = " + cf10 + "<br>fk = " + fk + "<br>fm = " + f;
	document.getElementById("hasil").innerHTML = temp + "<br>Me : " + median;
}

function mode(){
	var idx = 0;
	var max = 0;
	var dataX=[];
	dataX.push(sessionStorage.data1);
	dataX.push(sessionStorage.data2);
	dataX.push(sessionStorage.data3);
	dataX.push(sessionStorage.data4);
	dataX.push(sessionStorage.data5);
	dataX.push(sessionStorage.data6);
	dataX.push(sessionStorage.data7);
	dataX.push(sessionStorage.data8);
	dataX.push(sessionStorage.data9);
	dataX.push(sessionStorage.data10);
	
	var arr = dataX;
	for(var i = 0;i<arr.length;i++){
		if(Number(arr[i])>Number(max)){
			idx=i;
			max=arr[i];
		}
	}
	
	var tengah = [];
	tengah.push(sessionStorage.x1);
	tengah.push(sessionStorage.x2);
	tengah.push(sessionStorage.x3);
	tengah.push(sessionStorage.x4);
	tengah.push(sessionStorage.x5);
	tengah.push(sessionStorage.x6);
	tengah.push(sessionStorage.x7);
	tengah.push(sessionStorage.x8);
	tengah.push(sessionStorage.x9);
	tengah.push(sessionStorage.x10);
	
	var arrTengah =tengah;
	var bb = arrTengah[idx]-(sessionStorage.w * 0.5)
	var fb = arr[idx];
	var fa;
	var fb;
	if(idx==0){
		fa=0;
	} else {
		fa = arr[idx-1];
	}
	if(idx==9){
		fc = 0;
	} else {
		fc = arr[idx+1];
	}
	var mode = bb + ((fb-fa)/(Number(fb-fa)+Number(fb-fc)))*sessionStorage.w;
	var temp = "Bmod = " +bb+"<br>f1 = "+ Number(fb-fa) + "<br>f2 = " + Number(fb-fc) + "<br>I = " + sessionStorage.w;
	document.getElementById("image").src = "./images/modus.png";
	document.getElementById("hasil").innerHTML = temp +  "<br>Mode : " + mode;
}

function mean(){
	var x = sum()/countData();
	document.getElementById("image").src = "./images/mean.png";
	var temp = "Jumlah data : " + sum() + "<br>Banyak data : " + countData();
	document.getElementById("hasil").innerHTML = temp + "<br>Mean : " + x;
}

function sum(){
	var x = 0;
	x = Number(x)+Number(sessionStorage.data1)*Number(sessionStorage.x1);
	x = Number(x)+Number(sessionStorage.data2)*Number(sessionStorage.x2);
	x = Number(x)+Number(sessionStorage.data3)*Number(sessionStorage.x3);
	x = Number(x)+Number(sessionStorage.data4)*Number(sessionStorage.x4);
	x = Number(x)+Number(sessionStorage.data5)*Number(sessionStorage.x5);
	x = Number(x)+Number(sessionStorage.data6)*Number(sessionStorage.x6);
	x = Number(x)+Number(sessionStorage.data7)*Number(sessionStorage.x7);
	x = Number(x)+Number(sessionStorage.data8)*Number(sessionStorage.x8);
	x = Number(x)+Number(sessionStorage.data9)*Number(sessionStorage.x9);
	x = Number(x)+Number(sessionStorage.data10)*Number(sessionStorage.x10);

	return x;
}

function countData(){
	var x = 0;
	if(sessionStorage.data1!=0){x = Number(x)+Number(sessionStorage.data1);}
	if(sessionStorage.data2!=0){x = Number(x)+Number(sessionStorage.data2);}
	if(sessionStorage.data3!=0){x = Number(x)+Number(sessionStorage.data3);}
	if(sessionStorage.data4!=0){x = Number(x)+Number(sessionStorage.data4);}
	if(sessionStorage.data5!=0){x = Number(x)+Number(sessionStorage.data5);}
	if(sessionStorage.data6!=0){x = Number(x)+Number(sessionStorage.data6);}
	if(sessionStorage.data7!=0){x = Number(x)+Number(sessionStorage.data7);}
	if(sessionStorage.data8!=0){x = Number(x)+Number(sessionStorage.data8);}
	if(sessionStorage.data9!=0){x = Number(x)+Number(sessionStorage.data9);}
	if(sessionStorage.data10!=0){x = Number(x)+Number(sessionStorage.data10);}
	
	return x;
}

function addData(n){
	var data;
	if(n==1){data = sessionStorage.data1;sessionStorage.data1 = Number(sessionStorage.data1)+1;}
	else if(n==2){data = sessionStorage.data2;sessionStorage.data2 = Number(sessionStorage.data2)+1;}
	else if(n==3){data = sessionStorage.data3;sessionStorage.data3 = Number(sessionStorage.data3)+1;}
	else if(n==4){data = sessionStorage.data4;sessionStorage.data4 = Number(sessionStorage.data4)+1;}
	else if(n==5){data = sessionStorage.data5;sessionStorage.data5 = Number(sessionStorage.data5)+1;}
	else if(n==6){data = sessionStorage.data6;sessionStorage.data6 = Number(sessionStorage.data6)+1;}
	else if(n==7){data = sessionStorage.data7;sessionStorage.data7 = Number(sessionStorage.data7)+1;}
	else if(n==8){data = sessionStorage.data8;sessionStorage.data8 = Number(sessionStorage.data8)+1;}
	else if(n==9){data = sessionStorage.data9;sessionStorage.data9 = Number(sessionStorage.data9)+1;}
	else if(n==10){data = sessionStorage.data10;sessionStorage.data10 = Number(sessionStorage.data10)+1;}
	if(sessionStorage.data1==11){sessionStorage.data1--;}
	if(sessionStorage.data2==11){sessionStorage.data2--;}
	if(sessionStorage.data3==11){sessionStorage.data3--;}
	if(sessionStorage.data4==11){sessionStorage.data4--;}
	if(sessionStorage.data5==11){sessionStorage.data5--;}
	if(sessionStorage.data6==11){sessionStorage.data6--;}
	if(sessionStorage.data7==11){sessionStorage.data7--;}
	if(sessionStorage.data8==11){sessionStorage.data8--;}
	if(sessionStorage.data9==11){sessionStorage.data9--;}
	if(sessionStorage.data10==11){sessionStorage.data10--;}
	data = Number(data)+1;
	var x = "img" + n + "-" + data;
	if(document.getElementById(x)){
		$('#'+x).fadeIn("slow");	
	}
	
}

function removeData(n){
	var data;

	

	if(n==1){data = sessionStorage.data1;sessionStorage.data1 = Number(sessionStorage.data1)-1;}
	else if(n==2){data = sessionStorage.data2;sessionStorage.data2 = Number(sessionStorage.data2)-1;}
	else if(n==3){data = sessionStorage.data3;sessionStorage.data3 = Number(sessionStorage.data3)-1;}
	else if(n==4){data = sessionStorage.data4;sessionStorage.data4 = Number(sessionStorage.data4)-1;}
	else if(n==5){data = sessionStorage.data5;sessionStorage.data5 = Number(sessionStorage.data5)-1;}
	else if(n==6){data = sessionStorage.data6;sessionStorage.data6 = Number(sessionStorage.data6)-1;}
	else if(n==7){data = sessionStorage.data7;sessionStorage.data7 = Number(sessionStorage.data7)-1;}
	else if(n==8){data = sessionStorage.data8;sessionStorage.data8 = Number(sessionStorage.data8)-1;}
	else if(n==9){data = sessionStorage.data9;sessionStorage.data9 = Number(sessionStorage.data9)-1;}
	else if(n==10){data = sessionStorage.data10;sessionStorage.data10 = Number(sessionStorage.data10)-1;}

	if(sessionStorage.data1==-1){sessionStorage.data1=0;}
	if(sessionStorage.data2==-1){sessionStorage.data2=0;}
	if(sessionStorage.data3==-1){sessionStorage.data3=0;}
	if(sessionStorage.data4==-1){sessionStorage.data4=0;}
	if(sessionStorage.data5==-1){sessionStorage.data5=0;}
	if(sessionStorage.data6==-1){sessionStorage.data6=0;}
	if(sessionStorage.data7==-1){sessionStorage.data7=0;}
	if(sessionStorage.data8==-1){sessionStorage.data8=0;}
	if(sessionStorage.data9==-1){sessionStorage.data9=0;}
	if(sessionStorage.data10==-1){sessionStorage.data10=0;}

	var x = "img" + n + "-" + data;
	if(document.getElementById(x)){
		$('#'+x).fadeOut("slow");
		//document.getElementById(x).style.display = "none";
	}
	
}

function clearData(){
	sessionStorage.data1 = 0;
	sessionStorage.data2 = 0;
	sessionStorage.data3 = 0;
	sessionStorage.data4 = 0;
	sessionStorage.data5 = 0;
	sessionStorage.data6 = 0;
	sessionStorage.data7 = 0;
	sessionStorage.data8 = 0;
	sessionStorage.data9 = 0;
	sessionStorage.data10 = 0;

	var y = document.getElementsByTagName("img");
	var i;
	for (i = 0; i < y.length; i++) {
	    y[i].style.display = "none";
	}
	document.getElementById("image").src = "";
	document.getElementById("image").style.display = "block";
	document.getElementById("hasil").innerHTML = "";

}

function newData(){
	sessionStorage.interval = document.getElementById("interval").value;
	sessionStorage.dataTerkecil = document.getElementById("data-terkecil").value;
}

function defaultData(){
	sessionStorage.removeItem("interval");
	sessionStorage.removeItem("dataTerkecil");
	
}

window.onload=function() {
		document.getElementById('kelompok').className = "active";
		sessionStorage.data1 = 0;
		sessionStorage.data2 = 0;
		sessionStorage.data3 = 0;
		sessionStorage.data4 = 0;
		sessionStorage.data5 = 0;
		sessionStorage.data6 = 0;
		sessionStorage.data7 = 0;
		sessionStorage.data8 = 0;
		sessionStorage.data9 = 0;
		sessionStorage.data10 = 0;
		//inisiasi nilai tengah
	if(!sessionStorage.interval){
		sessionStorage.w=5;

		sessionStorage.x1 = 53;
		sessionStorage.x2 = 58;
		sessionStorage.x3 = 63;
		sessionStorage.x4 = 68;
		sessionStorage.x5 = 73;
		sessionStorage.x6 = 78;
		sessionStorage.x7 = 83;
		sessionStorage.x8 = 88;
		sessionStorage.x9 = 93;
		sessionStorage.x10 = 98;

		document.getElementById("data-terkecil-ui").innerHTML = "Data terkecil = 51";
		document.getElementById("interval-ui").innerHTML  = "interval = 5";
	} else {
		sessionStorage.w = sessionStorage.interval;
		var x = sessionStorage.dataTerkecil;
		var w = sessionStorage.w;
		sessionStorage.x1 = Number(x) + Number(sessionStorage.w/2) - 1/2;
		sessionStorage.x2 = Number(sessionStorage.x1) + Number(w);
		sessionStorage.x3 = Number(sessionStorage.x2) + Number(w);
		sessionStorage.x4 = Number(sessionStorage.x3) + Number(w);
		sessionStorage.x5 = Number(sessionStorage.x4) + Number(w);
		sessionStorage.x6 = Number(sessionStorage.x5) + Number(w);
		sessionStorage.x7 = Number(sessionStorage.x6) + Number(w);
		sessionStorage.x8 = Number(sessionStorage.x7) + Number(w);
		sessionStorage.x9 = Number(sessionStorage.x8) + Number(w);
		sessionStorage.x10 = Number(sessionStorage.x9) + Number(w);
		document.getElementById("data-terkecil-ui").innerHTML = "Data terkecil = "+x;
		document.getElementById("interval-ui").innerHTML  = "interval = " + w;
		for(var i = 1; i <= 10; i++){
			var temp =  Number(x) + Number(w*(i-1));
			var temp1 = Number(temp) + Number(w-1)
			document.getElementById("data" + i).innerHTML = temp + "-" + temp1;
		}
		
	}

	var y = document.getElementsByTagName("img");
	var i;
	for (i = 0; i < y.length; i++) {
	    y[i].style.display = "none";
	}
	document.getElementById("image").style.display = "block";
	
};



