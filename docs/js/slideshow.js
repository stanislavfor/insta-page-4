// 1. Слайд-шоу фотографий из фильмов
$(document).ready(function(){
	var slideIndex = 0;
	showPhotos();
	function showPhotos(){
		var j;
		var slides = $('.photo-cinema img');
		console.log(slides);
		console.log(slides.length);


// Запускаем цикл для скрытия фотографий
		for (j=0; j < slides.length; j++){
			console.log(j);
			$(slides[j]).hide();
		}

// Считаем индекс фотографии, которая показывается на станице
		slideIndex++;
		console.log(slideIndex);
		if (slideIndex > slides.length){
			slideIndex = 1
		}
// Обнуляем индекс фотографии, возвращаемся на начало списка
		$(slides[slideIndex-1]).show();
		
// Скорость показа фотослайдов
		setTimeout(showPhotos, 2000);
	}
});



// 2. Слайд-шоу из инстаграмм
$(document).ready(function(){
	var slideInstaIndex = 0;
	showInstaPhotos();
	function showInstaPhotos(){
		var i;
		var slidesInsta = $('#instafeed a');

// Запускаем цикл для скрытия фотографий
		for (i=0; i < slidesInsta.length; i++){
			$(slidesInsta[i]).hide();
		}

// Считаем индекс фотографии, которая показывается на станице
		slideInstaIndex++;
		if (slideInstaIndex > slidesInsta.length){
			slideInstaIndex = 1
		}
// Обнуляем индекс фотографии, возвращаемся на начало списка
		$(slidesInsta[slideInstaIndex-1]).show();
		
// Скорость показа фотослайдов
		setTimeout(showInstaPhotos, 700);
	}
});