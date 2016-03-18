/*Wahyu Prihantoro
Ilmu Komputer - Universitas Indonesia
085642710751*/
function median(){
	var data = [];
	if(sessionStorage.data1!=0){data.push(sessionStorage.data1);}
	if(sessionStorage.data2!=0){data.push(sessionStorage.data2);}
	if(sessionStorage.data3!=0){data.push(sessionStorage.data3);}
	if(sessionStorage.data4!=0){data.push(sessionStorage.data4);}
	if(sessionStorage.data5!=0){data.push(sessionStorage.data5);}
	if(sessionStorage.data6!=0){data.push(sessionStorage.data6);}
	if(sessionStorage.data7!=0){data.push(sessionStorage.data7);}
	if(sessionStorage.data8!=0){data.push(sessionStorage.data8);}
	if(sessionStorage.data9!=0){data.push(sessionStorage.data9);}
	if(sessionStorage.data10!=0){data.push(sessionStorage.data10);}
	

	data.sort(function(a,b) {return a - b;});
	
	clearData();
	(function next(counter, maxLoops) {
    // break if maxLoops has been reached
	        
    	if (counter++ > maxLoops) return;
	    setTimeout(function() {
	       // addData(counter);
	       	for(var i = 1; i<=data[counter-1]; i++){
					addData(counter); 
			}

	        // call next() recursively
	        next(counter, maxLoops);
    	}, 600);
	})(0, 10);

	var x = 0;
	var med;
	var half = Math.floor(data.length/2);
	if(data.length%2==1){
		x = data[half];
		med = "Median : data ke " + half;
	} else {
		x = (Number(data[half-1])+Number(data[half]))/2;
		med = "Median : (data ke-" + (half) + "+ data ke-" + (Number(half)+1) +")/2";
	}

	document.getElementById("hasil").innerHTML = med + "<br>Median : " + x;
}

function mode(){
	var x = 0;
	var arr = [0,0,0,0,0,0,0,0,0,0,0];
	for(var i = 1;i<arr.length;i++){
		if(sessionStorage.data1==i){arr[i]++;}
		if(sessionStorage.data2==i){arr[i]++;}
		if(sessionStorage.data3==i){arr[i]++;}
		if(sessionStorage.data4==i){arr[i]++;}
		if(sessionStorage.data5==i){arr[i]++;}
		if(sessionStorage.data6==i){arr[i]++;}
		if(sessionStorage.data7==i){arr[i]++;}
		if(sessionStorage.data8==i){arr[i]++;}
		if(sessionStorage.data9==i){arr[i]++;}
		if(sessionStorage.data10==i){arr[i]++;}
	}
	var max=0;
	for(var i = 1;i<arr.length;i++){
		if(arr[i]>max) {
			max = i;
		}
	}
	document.getElementById("hasil").innerHTML = "Mode : " + max;
}

function mean(){
	var x = sum()/countData();
	var mean = x;
	var arrData = [];
	arrData.push(sessionStorage.data1);
	arrData.push(sessionStorage.data2);
	arrData.push(sessionStorage.data3);
	arrData.push(sessionStorage.data4);
	arrData.push(sessionStorage.data5);
	arrData.push(sessionStorage.data6);
	arrData.push(sessionStorage.data7);
	arrData.push(sessionStorage.data8);
	arrData.push(sessionStorage.data9);
	arrData.push(sessionStorage.data10);
	
	var a = sum();
	var count = countData();
	clearData();
	
	
		(function next(counter, maxLoops) {
	    // break if maxLoops has been reached
		        
	    	if (counter++ > maxLoops) return;
		    setTimeout(function() {
		       // addData(counter);
		       	for(var i = 1; i<=count; i++){
					if(0<a){
						addData(i); 
						a--;
					}
				}

		        // call next() recursively
		        next(counter, maxLoops);
	    	}, 600);
		})(1, a);
	

	var str = "Jumlah data : " + a + "<br>Banyak data : " + count + "<br>Mean : " + a + "/" + count;
	document.getElementById("hasil").innerHTML = str + "<br>Mean : " + mean;
}

function sum(){
	var x = 0;
	x = Number(x)+Number(sessionStorage.data1);
	x = Number(x)+Number(sessionStorage.data2);
	x = Number(x)+Number(sessionStorage.data3);
	x = Number(x)+Number(sessionStorage.data4);
	x = Number(x)+Number(sessionStorage.data5);
	x = Number(x)+Number(sessionStorage.data6);
	x = Number(x)+Number(sessionStorage.data7);
	x = Number(x)+Number(sessionStorage.data8);
	x = Number(x)+Number(sessionStorage.data9);
	x = Number(x)+Number(sessionStorage.data10);
	return x;
}

function countData(){
	var x = 0;
	if(sessionStorage.data1!=0){x = Number(x)+1;}
	if(sessionStorage.data2!=0){x = Number(x)+1;}
	if(sessionStorage.data3!=0){x = Number(x)+1;}
	if(sessionStorage.data4!=0){x = Number(x)+1;}
	if(sessionStorage.data5!=0){x = Number(x)+1;}
	if(sessionStorage.data6!=0){x = Number(x)+1;}
	if(sessionStorage.data7!=0){x = Number(x)+1;}
	if(sessionStorage.data8!=0){x = Number(x)+1;}
	if(sessionStorage.data9!=0){x = Number(x)+1;}
	if(sessionStorage.data10!=0){x = Number(x)+1;}
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

	document.getElementById("hasil").innerHTML = "";

}

window.onload=function() {
	
	document.getElementById('index').className = "active";
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
	
};



