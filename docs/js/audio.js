$(document).ready(function(){

	var audio = $('#audioTrack')[0];
	console.log(audio);

	$playButton = $('#audio-play');
	$pauseButton = $('#audio-pause');
	$audioControl = $('[data-type="audio-control"]');

	initAudioPlayer();
	/*setTimeout(initAudioPlayer, 600);*/

	function initAudioPlayer(){
		$playButton.parent().show();
		audio.loop = true;
		//audio.play();
		

		$audioControl.click(function(){
			console.log('audio control click');
			if( audio.paused ) {
				audio.play();
				$playButton.parent().hide();
				$pauseButton.parent().show();
			} else {
				audio.pause();
				$pauseButton.parent().hide();
				$playButton.parent().show();				
			}

		});


	};

		//audio.play();
});
