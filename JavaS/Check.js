function MercedesVan()
{
	var MVanInformation=["B Mercedes Van",30,5,20];
	
	var MvehicleData=["Price per day £: ","# seats: ","Minimum Age: "];
	
	var Mname= document.getElementById("BMercedesVanName");
	Mname.innerHTML=MVanInformation[0] ;
	
	var Mprice= document.getElementById("BMercedesVanPrice");
	Mprice.innerHTML=MvehicleData[0]+MVanInformation[1] ;
	
	var Mseats= document.getElementById("BMercedesVanseats");
	Mseats.innerHTML= MvehicleData[1]+MVanInformation[2];
	
	var Mage= document.getElementById("BMercedesVanAge");
	Mage.innerHTML= MvehicleData[2]+MVanInformation[3];
	
	
	var mercedesVan = [];

			mercedesVan[0] = {src: '../images/mercedes.png', alt: 'image 1 alt text', style:'width: 350px; height: 150px;'};
			mercedesVan[1] = {src: '../images/mercedes1.png', alt: 'image 2 alt text', style:'width: 350px; height: 150px;'};
			mercedesVan[2] = {src: '../images/mercedes2.png', alt: 'image 3 alt text', style:'width: 350px; height: 150px;'};
			mercedesVan[3] = {src: '../images/mercedes3.png', alt: 'image 4 alt text', style:'width: 350px; height: 150px;'};

			var getImg = document.getElementById("BMercedesVan");

			var Mimg = [];
			var i = 0;
			for(i = 0;i < 4;i++) {
				Mimg[i] = '<img src="' + mercedesVan[i].src + '" alt="' + mercedesVan[i].alt + '" style="' + mercedesVan[i].style + '" />';
			}

			var currentIndex = 0;
			var goForward = function () {
				console.log('here' + currentIndex);
				if(currentIndex >= 0 && currentIndex < 3) {
					currentIndex++;
					getImg.innerHTML = Mimg[currentIndex];
				}
			};

			var goBackward = function () {
				console.log('here' + currentIndex);
				if(currentIndex > 0){
					currentIndex--;
					getImg.innerHTML = Mimg[currentIndex];
				}
			};

			document.getElementById('BMprevious').onclick = goBackward;
			document.getElementById('BMnext').onclick = goForward;
			
			
}

function FordVan()
{
	var FVanInformation=["B Ford Van",30,5,20];
	var FvehicleData=["Price per day £: ","# seats: ","Minimum Age: "];
	
	var Fordname= document.getElementById("BFordVanName");
	Fordname.innerHTML=FVanInformation[0] ;
	
	var Fordprice= document.getElementById("BFordVanPrice");
	Fordprice.innerHTML=FvehicleData[0]+FVanInformation[1] ;
	
	var Fordseats= document.getElementById("BFordVanseats");
	Fordseats.innerHTML= FvehicleData[1]+FVanInformation[2];
	
	var Fordage= document.getElementById("BFordVanAge");
	Fordage.innerHTML= FvehicleData[2]+FVanInformation[3];
	
	
	var BFord = [];

			BFord[0] = {src: '../images/ford.jpg', alt: 'image 1 alt text', style:'width: 350px; height: 150px;'};
			BFord[1] = {src: '../images/ford1.jpg', alt: 'image 2 alt text', style:'width: 350px; height: 150px;'};
			BFord[2] = {src: '../images/ford2.jpg', alt: 'image 3 alt text', style:'width: 350px; height: 150px;'};
			BFord[3] = {src: '../images/ford3.jpg', alt: 'image 4 alt text', style:'width: 350px; height: 150px;'};

			var getImg = document.getElementById("BFord");

			var Fimg = [];
			var i = 0;
			for(i = 0;i < 4;i++) {
				Fimg[i] = '<img src="' + BFord[i].src + '" alt="' + BFord[i].alt + '" style="' + BFord[i].style + '" />';
			}

			var currentIndex = 0;
			var goForward = function () {
				console.log('here' + currentIndex);
				if(currentIndex >= 0 && currentIndex < 3) {
					currentIndex++;
					getImg.innerHTML = Fimg[currentIndex];
				}
			};

			var goBackward = function () {
				console.log('here' + currentIndex);
				if(currentIndex > 0){
					currentIndex--;
					getImg.innerHTML = Fimg[currentIndex];
				}
			};

			document.getElementById('Fordprevious').onclick = goBackward;
			document.getElementById('Fordnext').onclick = goForward;
	
}

function VauxVan()
{
	var VVanInformation=["Vaux Van",30,5,20];
	var VvehicleData=["Price per day £: ","# seats: ","Minimum Age: "];
	
	var Vname= document.getElementById("VauxVanName");
	Vname.innerHTML=VVanInformation[0] ;
	
	var Vprice= document.getElementById("VauxVanPrice");
	Vprice.innerHTML=VvehicleData[0]+VVanInformation[1] ;
	
	var Vseats= document.getElementById("VauxVanseats");
	Vseats.innerHTML= VvehicleData[1]+VVanInformation[2];
	
	var Vage= document.getElementById("VauxVanAge");
	Vage.innerHTML= VvehicleData[2]+VVanInformation[3];
	
	
	var Vaux = [];

			Vaux[0] = {src: '../images/Vaux.jpg', alt: 'image 1 alt text', style:'width: 350px; height: 150px;'};
			Vaux[1] = {src: '../images/Vaux1.jpg', alt: 'image 2 alt text', style:'width: 350px; height: 150px;'};
			Vaux[2] = {src: '../images/Vaux2.jpg', alt: 'image 3 alt text', style:'width: 350px; height: 150px;'};
			Vaux[3] = {src: '../images/Vaux3.jpg', alt: 'image 4 alt text', style:'width: 350px; height: 150px;'};

			var getImg = document.getElementById("RVaux");

			var Vimg = [];
			var i = 0;
			for(i = 0;i < 4;i++) {
				Vimg[i] = '<img src="' + Vaux[i].src + '" alt="' + Vaux[i].alt + '" style="' + Vaux[i].style + '" />';
			}

			var currentIndex = 0;
			var goForward = function () {
				console.log('here' + currentIndex);
				if(currentIndex >= 0 && currentIndex < 3) {
					currentIndex++;
					getImg.innerHTML = Vimg[currentIndex];
				}
			};

			var goBackward = function () {
				console.log('here' + currentIndex);
				if(currentIndex > 0){
					currentIndex--;
					getImg.innerHTML = Vimg[currentIndex];
				}
			};

			document.getElementById('Vauxprevious').onclick = goBackward;
			document.getElementById('Vauxnext').onclick = goForward;
	
}

function Nissan()
{
	var NissanVanInformation=["Nissan Van",30,5,20];
	var NissanvehicleData=["Price per day £: ","# seats: ","Minimum Age: "];
	
	var Nissanname= document.getElementById("NissanVanName");
	Nissanname.innerHTML=NissanVanInformation[0] ;
	
	var Nissanprice= document.getElementById("NissanVanPrice");
	Nissanprice.innerHTML=NissanvehicleData[0]+NissanVanInformation[1] ;
	
	var Nissanseats= document.getElementById("NissanVanseats");
	Nissanseats.innerHTML= NissanvehicleData[1]+NissanVanInformation[2];
	
	var Nissanage= document.getElementById("NissanVanAge");
	Nissanage.innerHTML= NissanvehicleData[2]+NissanVanInformation[3];
	
	
	var Nissan = [];

			Nissan[0] = {src: '../images/Nissan.png', alt: 'image 1 alt text', style:'width: 350px; height: 150px;'};
			Nissan[1] = {src: '../images/Nissan1.png', alt: 'image 2 alt text', style:'width: 350px; height: 150px;'};
			Nissan[2] = {src: '../images/Nissan2.png', alt: 'image 3 alt text', style:'width: 350px; height: 150px;'};
			Nissan[3] = {src: '../images/Nissan3.png', alt: 'image 4 alt text', style:'width: 350px; height: 150px;'};

			var getImg = document.getElementById("Nissan");

			var Nissanimg = [];
			var i = 0;
			for(i = 0;i < 4;i++) {
				Nissanimg[i] = '<img src="' + Nissan[i].src + '" alt="' + Nissan[i].alt + '" style="' + Nissan[i].style + '" />';
			}

			var currentIndex = 0;
			var goForward = function () {
				console.log('here' + currentIndex);
				if(currentIndex >= 0 && currentIndex < 3) {
					currentIndex++;
					getImg.innerHTML = Nissanimg[currentIndex];
				}
			};

			var goBackward = function () {
				console.log('here' + currentIndex);
				if(currentIndex > 0){
					currentIndex--;
					getImg.innerHTML = Nissanimg[currentIndex];
				}
			};

			document.getElementById('NissanPrevious').onclick = goBackward;
			document.getElementById('NissanNext').onclick = goForward;
	
}


function Peugeot()
{
	var PVanInformation=["Peugeot Van",30,5,20];
	var PvehicleData=["Price per day £: ","# seats: ","Minimum Age: "];
	
	var Pname= document.getElementById("PeugeotVanName");
	Pname.innerHTML=PVanInformation[0] ;
	
	var Pprice= document.getElementById("PeugeotVanPrice");
	Pprice.innerHTML=PvehicleData[0]+PVanInformation[1] ;
	
	var Pseats= document.getElementById("PeugeotVanseats");
	Pseats.innerHTML= PvehicleData[1]+PVanInformation[2];
	
	var Page= document.getElementById("PeugeotVanAge");
	Page.innerHTML= PvehicleData[2]+PVanInformation[3];
	
	
	var Peugeot = [];

			Peugeot[0] = {src: '../images/Peugeot.jpg', alt: 'image 1 alt text', style:'width: 350px; height: 150px;'};
			Peugeot[1] = {src: '../images/Peugeot1.jpg', alt: 'image 2 alt text', style:'width: 350px; height: 150px;'};
			Peugeot[2] = {src: '../images/Peugeot2.jpg', alt: 'image 3 alt text', style:'width: 350px; height: 150px;'};
			Peugeot[3] = {src: '../images/Peugeot3.jpg', alt: 'image 4 alt text', style:'width: 350px; height: 150px;'};

			var getImg = document.getElementById("WPeugeot");

			var Pimg = [];
			var i = 0;
			for(i = 0;i < 4;i++) {
				Pimg[i] = '<img src="' + Peugeot[i].src + '" alt="' + Peugeot[i].alt + '" style="' + Peugeot[i].style + '" />';
			}

			var currentIndex = 0;
			var goForward = function () {
				console.log('here' + currentIndex);
				if(currentIndex >= 0 && currentIndex < 3) {
					currentIndex++;
					getImg.innerHTML = Pimg[currentIndex];
				}
			};

			var goBackward = function () {
				console.log('here' + currentIndex);
				if(currentIndex > 0){
					currentIndex--;
					getImg.innerHTML = Pimg[currentIndex];
				}
			};

			document.getElementById('PeugeotPrevious').onclick = goBackward;
			document.getElementById('PeugeotNext').onclick = goForward;
	
}

function Citroen()
{
	var CitroenVanInformation=["Citroen Van",30,5,20];
	var CitroenvehicleData=["Price per day £: ","# seats: ","Minimum Age: "];
	
	var Citroenname= document.getElementById("CitroenVanName");
	Citroenname.innerHTML=CitroenVanInformation[0] ;
	
	var Citroenprice= document.getElementById("CitroenVanPrice");
	Citroenprice.innerHTML=CitroenvehicleData[0]+CitroenVanInformation[1] ;
	
	var Citroenseats= document.getElementById("CitroenVanseats");
	Citroenseats.innerHTML= CitroenvehicleData[1]+CitroenVanInformation[2];
	
	var Citroenage= document.getElementById("CitroenVanAge");
	Citroenage.innerHTML= CitroenvehicleData[2]+CitroenVanInformation[3];
	
	
	var Citroen = [];

			Citroen[0] = {src: '../images/Citroen.png', alt: 'image 1 alt text', style:'width: 350px; height: 150px;'};
			Citroen[1] = {src: '../images/Citroen1.png', alt: 'image 2 alt text', style:'width: 350px; height: 150px;'};
			Citroen[2] = {src: '../images/Citroen2.png', alt: 'image 3 alt text', style:'width: 350px; height: 150px;'};
			Citroen[3] = {src: '../images/Citroen3.png', alt: 'image 4 alt text', style:'width: 350px; height: 150px;'};

			var getImg = document.getElementById("Citroen");

			var Citroenimg = [];
			var i = 0;
			for(i = 0;i < 4;i++) {
				Citroenimg[i] = '<img src="' + Citroen[i].src + '" alt="' + Citroen[i].alt + '" style="' + Citroen[i].style + '" />';
			}

			var currentIndex = 0;
			var goForward = function () {
				console.log('here' + currentIndex);
				if(currentIndex >= 0 && currentIndex < 3) {
					currentIndex++;
					getImg.innerHTML = Citroenimg[currentIndex];
				}
			};

			var goBackward = function () {
				console.log('here' + currentIndex);
				if(currentIndex > 0){
					currentIndex--;
					getImg.innerHTML = Citroenimg[currentIndex];
				}
			};

			document.getElementById('CitroenPrevious').onclick = goBackward;
			document.getElementById('CitroenNext').onclick = goForward;
	
}




window.onload = function(){
	
	MercedesVan();
	FordVan();
	VauxVan();
	Peugeot();
	Nissan();
	Citroen();
	
}
