$(function() 
{
	// OnRedColorClick
	$(".whiteColor a").click( function() 
	{
		setCurrentColor("#FFFFFF");
	});
	
	// OnBlueColorClick
	$(".blueColor a").click( function() 
	{
		setCurrentColor("#0000FF");
	});
	// OnWhiteColorClick
	$(".redColor a").click( function() 
	{
		setCurrentColor("#FF0000");
	});
	
	// OnBlackColorClick
	$(".blackColor a").click( function() 
	{
		setCurrentColor("#000000");
	});
	
	// OnCloseClickEvent
	$(".close a").click( function() 
	{
		stopTrackEventDuration();
		$("#sketchpad").animate({'opacity' : '0'}, 2000);
		$("#brushes").animate({'opacity' : '0'}, 2000);
		$("#close a").animate({'opacity' : '0'}, 2000);
		$("#topFrame").animate({'opacity' : '0'}, 2000);
		$("#leftFrame").animate({'opacity' : '0'}, 2000);
		$("#rightFrame").animate({'opacity' : '0'}, 2000);
		$("#bottomFrame").animate({'opacity' : '0'}, 2000);
		$("#whiteColor a").animate({'opacity' : '0'}, 2000);
		$("#blueColor a").animate({'opacity' : '0'}, 2000);
		$("#redColor a").animate({'opacity' : '0'}, 2000);
		$("#blackColor a").animate({'opacity' : '0'}, 2000);	
		$("#clear").animate({'opacity' : '0'}, 2000, function() 
		{
			//Remove objects
			$("#sketchpad").css({'display': 'none'});
			$("#close a").css({'display': 'none'});
			$("#topFrame").css({'display': 'none'});
			$("#leftFrame").css({'display': 'none'});
			$("#rightFrame").css({'display': 'none'});
			$("#bottomFrame").css({'display': 'none'});
			$("#brushes").css({'display': 'none'});
			$("#whiteColor a").css({'display': 'none'});
			$("#blueColor a").css({'display': 'none'});
			$("#redColor a").css({'display': 'none'});
			$("#blackColor a").css({'display': 'none'});
			$("#clear").css({'display': 'none'});
			$("#player").css({'display': 'block'});
		});
	});
	
	// OnClearCanvasClick
	$(".clear a").click( function() 
	{
		clearCanvas();
	});
	
	// OnDrawEvent
	$(".draw a").click( function() 
	{
		trackEventDuration("drawer");
		//Add objects
		$("#sketchpad").css({'display': 'block'});
		$("#close a").css({'display': 'block'});
		$("#topFrame").css({'display': 'block'});
		$("#leftFrame").css({'display': 'block'});
		$("#rightFrame").css({'display': 'block'});
		$("#bottomFrame").css({'display': 'block'});
		$("#brushes").css({'display': 'block'});
		$("#whiteColor a").css({'display': 'block'});
		$("#blueColor a").css({'display': 'block'});
		$("#redColor a").css({'display': 'block'});
		$("#blackColor a").css({'display': 'block'});
		$("#clear").css({'display': 'block'});
		$("#player").css({'display': 'none'});
		
		//Animate
		$("#sketchpad").animate({'opacity' : '1'}, 2000);
		$("#brushes").animate({'opacity' : '1'}, 2000);
		$("#close a").animate({'opacity' : '1'}, 2000);
		$("#topFrame").animate({'opacity' : '1'}, 2000);
		$("#leftFrame").animate({'opacity' : '1'}, 2000);
		$("#rightFrame").animate({'opacity' : '1'}, 2000);
		$("#bottomFrame").animate({'opacity' : '1'}, 2000);
		$("#whiteColor a").animate({'opacity' : '1'}, 2000);
		$("#blueColor a").animate({'opacity' : '1'}, 2000);
		$("#redColor a").animate({'opacity' : '1'}, 2000);
		$("#blackColor a").animate({'opacity' : '1'}, 2000);	
		$("#clear").animate({'opacity' : '1'}, 2000);
	});
});