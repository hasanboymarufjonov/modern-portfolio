var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'img/img-techs/html5.png';
	images[1] = 'img/img-techs/css3.png';
	images[2] = 'img/img-techs/bootstrap.png';
	images[3] = 'img/img-techs/javascript.png';
    images[4] = 'img/img-techs/jquery.png';
	images[5] = 'img/img-techs/reactjs.png';
	images[6] = 'img/img-techs/gimp.png';
	images[7] = 'img/img-techs/davinci-resolve.png';
    

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
                