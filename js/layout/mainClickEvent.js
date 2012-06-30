$(function() 
{
	var currentIcon = 'videoIcon';
	
	$(".videoIcon a").click( function() 
	{
		trackEventDuration("videoIcon");
		// Animate Hand
		var position = onVideoIconClick(currentIcon);
		$("#hand").animate({left: '-=0px',  top : position}, 1000);
		
		// Animate Description
		$("#closerLookDescription").animate({'opacity' : '1'}, 1000);
		$("#scribeDescription").animate({'opacity' : '0'}, 1000);
		$("#noteTakingDescription").animate({'opacity' : '0'}, 1000);
		$("#streamLinedDescription").animate({'opacity' : '0'}, 1000);
		
		// Animate Graphics
		$("#player").animate({'opacity' : '1'}, 1000);
		$("#scribeTech").animate({'opacity' : '0'}, 1000);
		$("#noteTaking").animate({'opacity' : '0'}, 1000);
		$("#streamLined").animate({'opacity' : '0'}, 1000);
		
		if (isIpad())
		{
			$("#player").css({'z-index': '5'});
		}
		else
		{
			$("#player").css({'display': 'block'});
		}
		currentIcon = 'videoIcon';
	});
	
	$(".scribeIcon a").click( function() 
	{
		stopVideo();
		trackEventDuration("scribeIcon");
		// Animate Hand
		var position = onScribeIconClick(currentIcon);
		$("#hand").animate({left: '-=0px',  top : position}, 1000);

		// Animate Description
		$("#closerLookDescription").animate({'opacity' : '0'}, 1000);
		$("#scribeDescription").animate({'opacity' : '1'}, 1000);
		$("#noteTakingDescription").animate({'opacity' : '0'}, 1000);
		$("#streamLinedDescription").animate({'opacity' : '0'}, 1000);
		
		// Animate Graphics
		$("#player").animate({'opacity' : '0'}, 1000);
		$("#scribeTech").animate({'opacity' : '1'}, 1000);
		$("#noteTaking").animate({'opacity' : '0'}, 1000);
		$("#streamLined").animate({'opacity' : '0'}, 1000);
		
		if (isIpad())
		{
			$("#player").css({'z-index': '3'});
		}
		else
		{
			$("#player").css({'display': 'none'});
		}

		currentIcon = 'scribeIcon';
	});
	
	$(".noteTakingIcon a").click( function() 
	{
		stopVideo();
		trackEventDuration("noteTakingIcon");
		// Animate Hand
		var position = onNoteTakingIconClick(currentIcon);
		$("#hand").animate({left: '-=0px',  top : position}, 1000);
		
		// Animate Description
		$("#closerLookDescription").animate({'opacity' : '0'}, 1000);
		$("#scribeDescription").animate({'opacity' : '0'}, 1000);
		$("#noteTakingDescription").animate({'opacity' : '1'}, 1000);
		$("#streamLinedDescription").animate({'opacity' : '0'}, 1000);
		
		// Animate Graphics
		$("#player").animate({'opacity' : '0'}, 1000);
		$("#scribeTech").animate({'opacity' : '0'}, 1000);
		$("#noteTaking").animate({'opacity' : '1'}, 1000);
		$("#streamLined").animate({'opacity' : '0'}, 1000);
		
		if (isIpad())
		{
			$("#player").css({'z-index': '3'});
		}
		else
		{
			$("#player").css({'display': 'none'});
		}
		currentIcon = 'noteTakingIcon';
	});

	$(".streamlinedIcon a").click( function() 
	{
		stopVideo();
		trackEventDuration("streamlinedIcon");
		// Animate Hand
		var position = onStreamlinedIconClick(currentIcon);
		$("#hand").animate({left: '-=0px',  top : position}, 1000);

		// Animate Description
		$("#closerLookDescription").animate({'opacity' : '0'}, 1000);
		$("#scribeDescription").animate({'opacity' : '0'}, 1000);
		$("#noteTakingDescription").animate({'opacity' : '0'}, 1000);
		$("#streamLinedDescription").animate({'opacity' : '1'}, 1000);
		
		// Animate Graphics
		$("#player").animate({'opacity' : '0'}, 1000);
		$("#scribeTech").animate({'opacity' : '0'}, 1000);
		$("#noteTaking").animate({'opacity' : '0'}, 1000);
		$("#streamLined").animate({'opacity' : '1'}, 1000);
		
		if (isIpad())
		{
			$("#player").css({'z-index': '3'});
		}
		else
		{
			$("#player").css({'display': 'none'});
		}
		currentIcon = 'streamlinedIcon';
	});
	
	function onVideoIconClick(currentIcon)
	{
		var y;
		
		if (isIpad())
		{
			switch (currentIcon)
			{
			case 'scribeIcon':
			y = '-=105px';
			break;
			case 'noteTakingIcon':
			y = '-=210px';
			break;
			case 'streamlinedIcon':
			y = '-=315px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;		
		}
		else
		{
			switch (currentIcon)
			{
			case 'scribeIcon':
			y = '-=82px';
			break;
			case 'noteTakingIcon':
			y = '-=165px';
			break;
			case 'streamlinedIcon':
			y = '-=247px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;				
		}
	}
	
	function onScribeIconClick(currentIcon)
	{
		var y;
		
		if (isIpad())
		{
			switch (currentIcon)
			{
			case 'videoIcon':
			y = '+=105px';
			break;
			case 'noteTakingIcon':
			y = '-=105px';
			break;
			case 'streamlinedIcon':
			y = '-=210px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;			
		}
		else
		{
			switch (currentIcon)
			{
			case 'videoIcon':
			y = '+=82px';
			break;
			case 'noteTakingIcon':
			y = '-=82px';
			break;
			case 'streamlinedIcon':
			y = '-=165px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;		
		}

	}
	
	function onNoteTakingIconClick(currentIcon)
	{
		var y;
		
		if (isIpad())
		{
			switch (currentIcon)
			{
			case 'scribeIcon':
			y = '+=105px';
			break;
			case 'videoIcon':
			y = '+=210px';
			break;
			case 'streamlinedIcon':
			y = '-=105px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;		
		}
		else
		{
			switch (currentIcon)
			{
			case 'scribeIcon':
			y = '+=82px';
			break;
			case 'videoIcon':
			y = '+=165px';
			break;
			case 'streamlinedIcon':
			y = '-=82px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;		
		}
	}
	
	function onStreamlinedIconClick(currentIcon)
	{
		var y;
		if(isIpad())
		{
			switch (currentIcon)
			{
			case 'scribeIcon':
			y = '+=210px';
			break;
			case 'videoIcon':
			y = '+=315px';
			break;
			case 'noteTakingIcon':
			y = '+=105px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;		
		}
		else
		{
			switch (currentIcon)
			{
			case 'scribeIcon':
			y = '+=165px';
			break;
			case 'videoIcon':
			y = '+=247px';
			break;
			case 'noteTakingIcon':
			y = '+=82px';
			break;
			default: 
			y = '+=0px';
			break;
			}
			return y;		
		}

	}
});