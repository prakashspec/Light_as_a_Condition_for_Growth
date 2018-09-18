
/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
	//$('head:first').append("<script type='text/javascript' src='dataEdge.js'><\/script>");
	
   //Edge symbol: 'stage'
   (function(symbolName) {      
      
      Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym, e) {
		if(welcomeMove<(weltextlen-1))
			{
				selectedIndex=0;
				welcomeMove++;
				$('#Stage_left_slider_act').attr('src','../../assets/images/left_slider_act.png').css('cursor','pointer');		
				var actScr=welcomeMode['step_'+welcomeMove]['text'];
				var lpos=welcomeMode['step_'+welcomeMove].position[0];
				var tpos=welcomeMode['step_'+welcomeMove].position[1];
				var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
				$('#Stage_welText').html(actScr);
				$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
				$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
				AdobeEdge.getComposition("EDGE-1393422").getStage().play(animPlayArr[welcomeMove]);
				speechBubblePos=bubbleStyle;
				parent.globalAudioPause();
			}
		if(welcomeMove==(weltextlen-1))
			{
				$('#Stage_right_slider_act').attr('src','../../assets/images/right_slider_deact.png').css('cursor','default');
			}				
		 // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym, e) {
         // insert code for mouse click here
		if(welcomeMove>0)
			{
				selectedIndex=0;
				welcomeMove--;
				$('#Stage_right_slider_act').attr('src','../../assets/images/right_slider_act.png').css('cursor','pointer');				
				var actScr=welcomeMode['step_'+welcomeMove]['text'];
				var lpos=welcomeMode['step_'+welcomeMove].position[0];
				var tpos=welcomeMode['step_'+welcomeMove].position[1];
				var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
				$('#Stage_welText').html(actScr);
				$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
				$('#Stage_welcomeGroup').removeClass(speechBubblePos);
				$('#Stage_welcomeGroup').addClass(bubbleStyle);
				AdobeEdge.getComposition("EDGE-1393422").getStage().play(animPlayArr[welcomeMove]);
				speechBubblePos=bubbleStyle;
				parent.globalAudioPause();
			}
		if(welcomeMove==0)
			{
				$('#Stage_left_slider_act').attr('src','../../assets/images/left_slider_deact.png').css('cursor','default');
			}			
      });
	  
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
			
			$('#Stage_welText').html(welcomeMode['step_0']['text']);
			$('#Stage_welcomeGroup').css({border:'1px solid #CCC'}).css('height','174px').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
			$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
			$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
			$('#Stage_left_slider_act').attr('src','../../assets/images/left_slider_deact.png');
			var lpos=welcomeMode['step_'+welcomeMove].position[0];
			var tpos=welcomeMode['step_'+welcomeMove].position[1];
			$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
			$('#Stage_left_slider_act').css('cursor','default');
			$('#Stage_audio_icon_normal').attr('audio-state','pause');
			$('#Stage_audio_icon_normal').addClass('expAudio');			
			window.parent.$('.screenArea').css('display','block');
			window.parent.$('.preloaderImg').css('display','none');
			window.parent.$('.rtxt').eq(0).trigger('click');
			$('#Stage_welcomeGroup').css('height','174px');
			//console.log('dsa')
			var browser=navigator.userAgent.toLowerCase();
			if(browser.indexOf('firefox') > -1) {
				$('#Stage_bg').css({zIndex:'0'});
			}
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         parent.welcomeIcon('enable');
		 
      });      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         parent.welcomeIcon('enable');
		 
		 this.stop();
      });
      //Edge binding end


      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
		 this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
		
		 parent.welcomeIcon('enable');
         $('.flexClass').css('display','none');
         $('.welresetFun').css('background','#a7a9ab');
         $('.welresetFun').find('span').css('color','#fff');
         $('#welclickClass_0').css('display','none');
         $('.growtop').css('opacity','0.5');
         $('.tall,.medium,.short,.bgclr4,.bgclr6').css('display','none');
		

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         this.stop()

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
		  
         this.stop()

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34250, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47750, function(sym, e) {
         parent.welcomeIcon('enable');
		

      });
      //Edge binding end
	  Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58000, function(sym, e) {
		
         parent.welcomeIcon('enable');
      });
      //Edge binding end
	  
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49500, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym, e) {         
		  passText=$('#Stage_welText').text();
		  parent.AudioNameget = welcomeMode['step_'+welcomeMove]['AudioNamecon'].toString();
		  //console.log(parent.AudioNameget);
		  parent.playGlobalAudio(passText);
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39250, function(sym, e) {
        
		 $('#welcolorDisplay_0,#welcolorDisplay_1,.welarrow-right').css('display','block');
	     parent.welcomeIcon('disable');
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
		
         $('#welcolorDisplay_0,#welcolorDisplay_1,.welarrow-right').css('display','none');
		 parent.welcomeIcon('enable');
         $('#Stage_text_1').text('Red');
         $('#Stage_text_2').text('Yellow');
      });
      //Edge binding end
	  Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         parent.welcomeIcon('enable');
      });
      //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
        
		 parent.welcomeIcon('disable');
		 $('.flexClass').css('display','flex');
         $('#welclickClass_0').css('display','block');
         $('.welresetFun').css('background','#ffcc00');
         $('.welresetFun').find('span').css('color','#000');
         $('.tall,.medium,.short').fadeIn(300);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         $('.flexClass').css('display','none');
         $('#welclickClass_0').css('display','none');
         $('.welresetFun').css('background','#a7a9ab');
         $('.welresetFun').find('span').css('color','#fff');
         $('#welclickClass_0').css('display','none');
         $('.growtop').css('opacity','0.5');
         $('#Stage_text_1').text('Green');
         $('#Stage_text_2').text('Green');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         $('.flexClass').css('display','none');
         $('#Stage_text_1').text('Green');
         $('#Stage_text_2').text('Green');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23250, function(sym, e) {
          $('.growtop').css('opacity','0');
		  parent.welcomeIcon('enable');
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51500, function(sym, e) {
         
		 this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
		 $('.bgclr4,.bgclr6').css('display','none');
         $('.growtop').css('opacity','0');
         $('.flexClass').css('display','flex');
         $('#welclickClass_0').css('display','block');
         $('.welresetFun').css('background','#ffcc00');
         $('.welresetFun').find('span').css('color','#000');
         $('.tall,.medium,.short').css('display','block');
		 parent.welcomeIcon('enable');
         $('#Stage_text_1').text('Green');
         $('#Stage_text_2').text('Green');
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {       
		  $('#welcolorDisplay_0,#welcolorDisplay_1,.welarrow-right').css('display','block');
          $('#Stage_text_1').text('Red');
          $('#Stage_text_2').text('Yellow');
		  
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         $('.welarrow-right').css('display','none');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29250, function(sym, e) {
          $('#Stage_text_1').text('Red');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32750, function(sym, e) {
          $('#Stage_text_2').text('Yellow');

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'highAnim'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         this.play(0)

      });
      //Edge binding end

   })("highAnim");
   //Edge symbol end:'highAnim'

})(jQuery, AdobeEdge, "EDGE-1393422");

$(document).ready(function(){	
	$(document).on('keyup', function(e){
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		if(parent.parentTab == 'welcome')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}
	})	
})