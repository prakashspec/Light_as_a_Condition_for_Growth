var adobeReady = false;
var mainNavTabs = function(){
	$('.rtxt').off('click').on('click',rbuttoneve);
}	 	
function initialfun()
	{
		$('.workArea').hide();
		$('#welcome').css('display','block');	
		mainNavTabs();
		$('.help1,.help2').off('click').on('click',toggleHcont);	
		$('.rtxt').attr('data-hover','none');
		//$('.rtxt').eq(0).trigger('click');
		//$('.rtxt').off("click");
		$(".button").off("click").on("click",buttonClick); 
		$(".txtOk").off("click").on("click",MoveToNextStep); 
		$('.screenIcon').off('click').on("click",captureScreen);	
		setBothLabelColor();
		$('.rtxt').hover(
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{				
					$(this).css({'color':templateHdr.textActive});					
				}
		  },
		  function(event){
			var ctTarget = $(event.target);
			var actStatus = ctTarget.attr('data-hover');	
			if(actStatus != 'active')
				{
					$(this).css({'color':templateHdr.textNormal,'box-shadow':'none','font-family':'Roboto-Bold'});
				}
		  }
		);
		$('.infoIcon').off('click').click(function(){	
			globalAudioPause();
			//$(".screenIcon").attr("src","assets/images/template/camera_icon_disabled.png").off("click");
			$('.helpwindow').fadeIn(300).css('display','flex');
			$('.helpBlock1').find('img').addClass('expAudio');
			$('.helpBlock2').find('.pdiv').each(function(){
				$(this).find('img:first').addClass('expAudio');
				$(this).find('img:first').attr('audio-state','pause');	
			})
			
			$('.expAudio').off('click').on('click', playGlobalAudio);
			$('.helpBlock1').find('.expAudio').attr('audio-state','pause'); 
			$('.help1').trigger('click');				
		});
		$(document).off('mousedown touchstart').on('mousedown touchstart',function(e){
			var targetClass = $(e.target).attr('class');
			if(targetClass == "helpwindow" ||targetClass == "closeIcon")
			{
				closeHelpWin()
			}
		});
		$('.chheader2').removeClass('chheader2').addClass('chheader2Act');		
		for(var i=0;i<noOfSteps;i++)
		{
			noStepArr[i]=0;
			totalStepArr[i]=0;
		}
		$('.expDiv').draggable({
			containment:'.sliderContain',
			handle:'.headerDrag'
		})	
	}
var closeHelpWin = function(e){
	$('.helpwindow').fadeOut(300);
	globalAudioPause();
	//$('.helpBlock1,.helpBlock2').find('img').removeClass('expAudio');	
}
function setBothLabelColor()
{
	$("#ch1").css({"background":labelSettings[getIdSplit]});
	$("#rightlabel_1").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
	$.each( TopMenuText, function( index, value ) {
		$("#ch"+(index+1)).text(TopMenuText[index]);
	});
	$.each( rightMenuText, function( index, value ) {
		$("#rightlabel_"+(index+1)).text(rightMenuText[index]);
	});
}
function toggleHcont(e)
	{
		selectedIndex = 0;
		defIndex = -1;
		var ctClass = Number($(e.target).attr('class').match(/\d/));
		var togNum = (ctClass == 1)?2:1;		
		$('.helpBlock1,.helpBlock2').css('display','none');	
		$('.help1').removeClass('lclass');
		$('.help2').removeClass('rclass');	
		//$('.help1,.help2').css('background-color','#dce3e5').css('color','rgba(0,0,0,0.7)');		
		$('.help'+togNum).addClass($('.help'+togNum).attr('data-class'));
		$('.helpBlock'+ctClass).css('display','block');
		//$('.help'+ctClass).css('border','0px soild #000').css('color','#000').css('background-color','#fff');
		globalAudioPause();	
	}	
var cpage;	
function rbuttoneve(event)
	{	
		
		prevMove = -1;
		
		ResetShell();
		
		wrongstepCount = 0;
		$('.rightlabel2').css('animation','none');
		mainNavTabs();
		$(this).off('click');
		var ctTarget = $(event.target);
		MainNavigations=$(this).attr("id").split("_")[1]-1;
		cpage = event.target.getAttribute("name");
		$('.rtxt').attr('data-hover','none').css({"cursor":"pointer"});
		$('.rtxt').css({'color':templateHdr.textNormal,'box-shadow':'none','font-family':'Roboto-Bold'})		
		ctTarget.attr('data-hover','active').css({"cursor":"default"});	
		ctTarget.css({'color':'#FFCC00','box-shadow':'0 -6px #FFCB05'/*,'font-family':'Roboto-Black'*/});
		$('.workArea').hide();
		$('#'+cpage).show();		
		$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		parentTab = $(this).html().toLowerCase(); 
		lightString = '';
		activeCount = 0;
		if(adobeReady){
			restartWelcome();
		};
		activityFunction(cpage);
		if($(this).html().toLowerCase() == 'explore')
			{
				$("#rightlabel_1").trigger("click");
				$("#ch1").trigger("click");
				activeIcon="explore";
				audioPlay();
			}
		
		if($(this).html().toLowerCase() == 'activity')
			{
				$("#rightlabel_1").trigger("click");
				$("#ch1").trigger("click");
				activeIcon="activity";
				audioPlay();
				
			}
		if($(this).html().toLowerCase() == 'welcome')			
			{
				document.getElementById("myFrame").contentWindow.welcomeMove = 0;
				var childWindow = $('iframe').contents();
				
				childWindow.find('#Stage_welText').html(welcomeMode['step_0']['text']);	
				childWindow.find('#Stage_welcomeGroup').css('height', $('#Stage_welText').outerHeight()+54);
				childWindow.find('#Stage_welcomeGroup').css('background','#fff').css({boxShadow:'2px 2px 2px 0px rgba(0,0,0,0.25)'});
				childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
				childWindow.find('#Stage_left_slider_act').attr('src','../../assets/images/left_slider_deact.png');
				var lpos = 270;	
				var tpos = 200; 
				childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
				childWindow.find('#Stage_left_slider_act').css('cursor','default');
				childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');			
				childWindow.find('#Stage_right_slider_act').attr('src','../../assets/images/right_slider_act.png').css('cursor','pointer');
				document.getElementById("myFrame").contentWindow.AdobeEdge.getComposition("EDGE-1393422").getStage().play(0);
				childWindow.find('#Stage_welcomeGroup').removeClass(document.getElementById("myFrame").contentWindow.speechBubblePos);
				childWindow.find('#Stage_welcomeGroup').css('height','174px');
				globalAudioPause();
				//$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon_disabled.png)').off('click').css({"cursor": "default"});
			}
			
			var slidetimeout=setTimeout(function(){
				SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
				clearTimeout(slidetimeout);
			},100);
			$(".activeSlider").css("transform","rotate(180deg)");
			$(".expDiv").css("left","-283px");
			
			TabsStateRightAndTop(topNSideMenu[MainNavigations][0],topNSideMenu[MainNavigations][1],topNSideMenu[MainNavigations][2]);
			SliderOkClick("open");
			sliderNavigationFun();
	}

function ResetShell()
	{
		MainNavigations=0;
		currentStep=0;
		currentIndex = 0;
		wrongResPos=0;
		LengthFind=0;
		audioIndex=0;
		stepIndex=0;
		getIdSplit=0;
		StateCheck=0;
		FeedBack="Step";
		headerlabel = 'monterey';
		exoploreCtBubble = 'anchovy0';
		imageName="monterey";
		for(var i=0;i<noOfSteps;i++)
		{
			noStepArr[i]=0;
			totalStepArr[i]=0;
		}
		audioPlay();
	}
	
	
function extractBorder(element) 
	{
		// Extracts element border.
		var border = {
			rect: element.getBoundingClientRect(),
			width: parseFloat(element.style.borderWidth),
			style: element.style.borderStyle,
			color: element.style.borderColor,
			original: element.style.border,
			element: element
		};	
		// Clears original border.
		element.style.borderColor = "transparent";
		return border;
	}



function extractBorders(element)
	{
		var borders = [];
		// Extracts the rect from the element itself.
		if (element.style.border) {
			borders.push(extractBorder(element));
		}
		// Extracts rect from children.
		$(element).find("*").each(function(index, child) {
			if (child.style.border) {
				borders.push(extractBorder(child));
			}
		});
		return borders;
	}
		
function drawBorder(canvas, border, parentRect)
	{
		// Retrieves context.
		var ctx = canvas.getContext("2d");
		// Checks border style.
		if (border.style === "dashed") {
			ctx.setLineDash([3]);
		} else if (border.style === "dotted") {
			ctx.setLineDash([border.width]);
		}
		
		// Calculates border edges.
		var left = border.rect.left + 0.5 - parentRect.left;
		var right = border.rect.right - 0.5 - parentRect.left;
		var top = border.rect.top + 0.5 - parentRect.top;
		var bottom = border.rect.bottom - 0.5 - parentRect.top;
		
		// Draws border.
		ctx.beginPath();
		ctx.moveTo(left, top);
		ctx.lineTo(right, top);
		ctx.lineTo(right, bottom);
		ctx.lineTo(left, bottom);
		ctx.lineTo(left, top);
		ctx.strokeStyle = border.color;
		ctx.lineWidth = border.width;
		ctx.stroke();
		
		// Restores element original border.
		border.element.style.border = border.original;
	}
	
function tocanvas(element, options) 
	{
		// Extracts parent relative position.
		var parentRect = element[0].getBoundingClientRect();

		// Extracts elements borders.
		var borders = extractBorders(element[0]);

		// Keeps original onrendered option.
		var onrendered = options.onrendered;

		// Intercepts onrendered callback.
		options.onrendered = function(canvas) {
		// Draws borders.
		for (var i = 0; i < borders.length; i++) drawBorder(canvas, borders[i], parentRect);

		// Calls original callback.
		if (onrendered) onrendered(canvas);
		}

		// Calls html2canvas.
		html2canvas($(".screenArea"), options);
	}
function captureScreen()
	{ 
		tocanvas($(".screenArea"), {
			onrendered: function (canvas) {
				saveAs(canvas.toDataURL(), 'Light as a Condition for Plant Growth.png');
			}
		});
	}
	
function saveAs(uri, filename)
	{
		var link = document.createElement('a');
		if (typeof link.download === 'string')
			{
			  link.href = uri;
			  link.download = filename;

			  //Firefox requires the link to be in the body
			  document.body.appendChild(link);

			  //simulate click
			  link.click();

			  //remove the link when done
			  document.body.removeChild(link);
			}
		else
			{
			  window.open(uri);
			}
	}

function callEndFun()
	{			
		globalAudioPause();			
	}

function restartWelcome()
	{
		document.getElementById("myFrame").contentWindow.welcomeMove = 0;	
		var childWindow = $('iframe').contents();
		childWindow.find('#Stage_welText').html(welcomeMode['step_0']['text']);	
		childWindow.find('#Stage_welcomeGroup').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
		childWindow.find('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
		childWindow.find('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
		var lpos = 274;	
		var tpos = 226;	
		childWindow.find('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
		childWindow.find('#Stage_left_slider_act').css('cursor','default');
		childWindow.find('#Stage_audio_icon_normal').attr('audio-state','pause');
		childWindow.find('#Stage_audio_icon_normal').addClass('expAudio');				
		childWindow.find('#Stage_welcomeGroup').removeClass(document.getElementById("myFrame").contentWindow.speechBubblePos);
		document.getElementById("myFrame").contentWindow.AdobeEdge.getComposition("EDGE-1393422").getStage().play(0);
	}
	
function welcomeIcon(state)
	{
		if(state == 'enable')
			{
				$(".screenIcon").off('click').css({"background-image":"url(assets/images/template/camera_icon.png)",'cursor':'default'});
			}
		else
			{
				$(".screenIcon").css("background-image","url(assets/images/template/camera_icon_disabled.png)");
			}		
	}