$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '454832772',
        accessToken: '454832772.1677ed0.51d8b759274f428686037768f6f34329',
        resolution: 'low_resolution',
        limit: 24
     });
	    userFeed.run();

	    setTimeout(function(){
	    	$('.instafeed').addClass('shadowed');
	    }, 700);

});