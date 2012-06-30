var player;
var videoId = 'r0pL2t2_CIw';
var divTag = 'player';
var youTubePlayed;
function onYouTubePlayerAPIReady() 
{
	var height;
	var width;
	if (isIpad())
	{
		height = '286';
		width = '450';
	}
	else
	{
		height = '213';
		width = '245';
	}
	
	player = new YT.Player(divTag, 
	{
		height: height,
		width: width,
		videoId: videoId,
		events: 
        {
        	'onStateChange': onPlayerStateChange
        }
     });
     
     if (isIpad())
     {
     	$("#player").css({'top': '120px'});
     	$("#player").css({'left':'300px'});
     }
     else
     {
     	$("#player").css({'top': '80px'});
     	$("#player").css({'left':'150px'});
     }
}
      
	 
function onPlayerStateChange(event) 
{
	if (event.data == YT.PlayerState.PLAYING) 
	{
		youTubePlayed = true;
		stopTrackEventDuration();
	}
	
	if ((event.data == -1 || event.data == YT.PlayerState.PAUSED) && youTubePlayed)
	{
		trackVideoDuration("HTC-Flyer-Video", getCurrentTime());
		youTubePlayed = false;
	}
}

function getCurrentTime() 
{
	if (player) 
	{
		return player.getCurrentTime();
    }
}
	 
function stopVideo() 
{
	if (player)
	{
		player.stopVideo();
	}
}
      
function initYouTubePlayer()
{
	var node = document.getElementById(divTag);
	if (node)
	{
		var ifr = parent.document.getElementById("script");
		var tag = document.createElement('script');
		tag.src = "lib/youTube/youTube.js";
	 	var firstScriptTag = document.getElementsByTagName('script')[0];
	 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	 	if(!isIpad())
	 	{
	 		$("#player").css({'display': 'none'});
	 	}
	 }
}

