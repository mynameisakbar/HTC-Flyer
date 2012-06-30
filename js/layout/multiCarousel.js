var currentCard = "hollywood";
Ext.setup({
    onReady: function() {
    	
    	var topScreenHeight;
    	if (isIpad())
    	{
    		topScreenHeight = 650;
    	}
    	else
    	{
    		topScreenHeight = 480;
    	}
    	
    	//Top Screen
        var card = new Ext.Panel({
        	height: topScreenHeight,
        	styleHtmlContent: true,
        	contentEl: 'content',
        	cls: 'baseCss',
                });
        
        //Bottom Screen
        var entries = Ext.select('.entry');
        var cards = [];
        
        entries.each(function(entry) {
            cards.push({
            	cls: 'baseCss',
                contentEl: entry.dom
            });
        });
        
        var carousel1 = new Ext.Carousel({
        	cls: 'baseCss',
        	flex: 2,
            items: cards,
            listeners: 
	 		{
	 			cardswitch: 
	 			{
	 				fn: function()
	 				{
	 					stopVideo();
	 					pauseHtml5Video(currentCard);
	 					currentCard = getCurrentCard(carousel1.getActiveIndex());
	 					trackEventDuration(currentCard);
	 				}
	 			}
	 		}
        });
        
        //Combine screen
        new Ext.Container({
        	fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [card, carousel1]
        });
    }
});

function getCurrentCard(index)
{
	var nameOfCard;
	switch (index)
	{
		case 0:
		nameOfCard = 'hollywood';
		break;
		case 1:
		nameOfCard = 'immersive';
		break;
		case 2:
		nameOfCard = 'richerInternet';
		break;
		case 3:
		nameOfCard = 'lifeMoments';
		break;
		default: 
		nameOfCard = 'Unknow';
		break;
		}
		return nameOfCard;
}