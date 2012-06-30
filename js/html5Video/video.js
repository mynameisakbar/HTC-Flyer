var ids = ["hollywood","immersive","richerInternet","lifeMoments"];
var currentVideo;

function initHtml5Video()
{
	for (var i=0;i<ids.length;i++)
	{
		var video = document.getElementById(ids[i]);
		video.addEventListener('ended', ended ,false);
		video.addEventListener('pause', paused ,false);
		video.addEventListener('play', played ,false);
		video.addEventListener('click', function() {
			$("#player").css({'display': 'none'});
		} ,false);
	}
}

function pauseHtml5Video(id)
{
	var video = document.getElementById(id);
	if (video.play)
	{
		video.pause();
	}
}

function played()
{
	stopVideo();
	for (var i=0;i<ids.length;i++)
	{
		var video = document.getElementById(ids[i]);
		if (!video.paused && !video.ended)
		{
			currentVideo = ids[i];
		}
	}
}

function ended()
{
	var video = document.getElementById(currentVideo);
	trackVideoDuration(currentVideo, video.currentTime);
	$("#player").css({'display': 'block'});
}

function paused()
{
	var video = document.getElementById(currentVideo);
	trackVideoDuration(currentVideo, video.currentTime);
}