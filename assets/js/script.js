
$(document).ready(function()
	{
		initialfun();
		loadStart();
		$('.rightlabel1,.rightlabel2').off('click').on('click', toggleExpTabs);
		$('.help2').addClass('rclass');
		$('.activity_title').html(baseConfig.activityTitle);
		$('.expAudio').off('click').on('click', playGlobalAudio);
		$('<audio id="globalAudio"><source src="" type="audio/mp3"/></audio>').appendTo('.container');
		$('.expAudio').attr('audio-state','pause');	
		$('.txtOk').off('click').on('click', MoveToNextStep);
		$('.arrowbtn').off('click').on('click', MoveToNextStep);
		$('.activeSlider').off('click').on("click",activitySlideDiv);
		$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
		$('.PreBtnSlider').off('click').on("click",preNavigationFun);
		$(".exploreLabel_2").hide();
		$("#activity").click(function(event){
		
			if((event.target.id == 'activity' ||  $(event.target).attr('class') == 'leftside' ||  $(event.target).attr('class')  == 'rightsside'|| event.target.id == 'aActImages' || $(event.target).attr('class') == 'actlight'|| $(event.target).attr('class') == 'actbucket'|| $(event.target).attr('class') == 'actgrow'|| $(event.target).attr('class') == 'centerdiv' ) && parseInt($('.expDiv').css("left")) >= 0)
			{
				SliderOkClick("close");
				globalAudioPause();
			}	
			
		})
		
		$(document).on('keyup', function(e){
		if($('iframe').contents().find('#Stage_welcomeGroup').css('opacity') == 1)		
		{
			if(parentTab == 'welcome' && $('.helpwindow').css('display') == 'none')
			{
				var ctKeyode = e.which || e.keyCode;
				if(ctKeyode == 39)
					{
						$('iframe').contents().find('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('iframe').contents().find('#Stage_left_slider_act').trigger('click');
					}
			}
		}
		});
		
		
		/* $(function(){
		$.ajax({
			url: "version.txt",
			async: false,   // asynchronous request? (synchronous requests are discouraged...)
			cache: false,   // with this, you can force the browser to not make cache of the retrieved data
			dataType: "text",  // jQuery will infer this, but you can set explicitly
			success: function( data ) {
				$('.activity_title').html(baseConfig.activityTitle+" "+'<span style="color:#999">'+data+'</span>');
				}
			});
		});	 */	
	});

	
	
function loadStart()
	{
		var helpLen1 = Object.keys(info_background).length;
		for(var i=0;i<helpLen1;i++)
			{
				$('<div class="pdivHelp"><img src="'+(templateStateImg.audiopause)+'" /><p class="m20">'+info_background['block'+i].text+'</p></div>').appendTo('.helpBlock1');
				
			}
		var helpLen2 = Object.keys(info_help).length;
		for(var j=0;j<helpLen2;j++)
			{
				var imgFound = info_help['block'+j].imgText.lastIndexOf('.png');
				if(imgFound != -1)
					{
						$('<div class="pdiv"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><div class="imgContain" style= "width:70px;margin-top:-18px;margin-left: 10px;"><img style="display:block;margin:auto;" src="'+helpimgPath+info_help['block'+j].imgText+'" /></div><p class="m20" style="width:400px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
				else
					{
						$('<div class="pdiv"><img style="align-self:flex-start;margin-top:18px; margin-bottom: 0px;" src="'+(templateStateImg.audiopause)+'" /><span class="helpDiv1">'+info_help['block'+j].imgText+'</span><p class="m20" style="width:370px">'+info_help['block'+j].text+'</p></div>').appendTo('.helpBlock2');
					}
			}	
			
		$(".helpBlock1,.helpBlock2").mCustomScrollbar({theme:"3d-thick"});		$('.helpBlock1,.helpBlock2').find('.mCSB_draggerContainer').css('box-shadow','none').css('background','#fff').css('border','1px solid #898a8c').css('border-radius','0px');		$('.helpBlock1,.helpBlock2').find('.mCSB_dragger_bar').css('margin','0px').css('background','rgba(0, 0, 0, 0.5)').css('box-shadow','none').css('border-radius','0px');		
		$('.mCSB_draggerContainer').css({border:'1px solid rgba(0,0,0,0.7)'});
		$('.mCSB_dragger_bar').css({'left':'0px',"width":"100%"});
		$('#mCSB_1_dragger_vertical').css({minHeight:'94px'});/* */ 
	}


function speechToText(txt)
	{
		var audioMode = $('.screenArea').attr('audio-mode');
		var ctState = (audioMode == "on")?'pause':'play';	
		$('.expAudio').attr('audio-state','play');		
		$('#globalAudio').off('ended').on('ended', callEndFun);							
		playGlobalAudio(txt);
	}	
var welcomeMove = 0;
var AudioNameget;

function playGlobalAudio(passText)
	{		
		
		var textPara = typeof passText;		
		var ctElem = (textPara != 'string')?$(this):$('.expAudio');			
		var childWindow = $('iframe').contents();
		var toggleState = ((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))?childWindow.find('.expAudio').attr('audio-state'):ctElem.attr('audio-state');		

			//alert(cpage)

			if(toggleState == "pause")
			{
				$('.screenArea').attr('audio-mode','on');
				if($('.helpwindow').css('display') != 'none')
					{	
						var ctElemText = (textPara != 'string')?ctElem.parent().find('p').text():passText;	
						//info_background['block'+i]
						var ctString = ($('.helpBlock1').css('display') == 'block')?'info_background':'info_help';
						var getIndex = $(this).parent().index();
						AudioNameget = String(window[ctString]['block'+getIndex]['AudioNamecon']);
					
					}
				else if(cpage == 'activity')
					{
					
							AudioNameget =window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioNamecon"][audioIndex][stepIndex]; 
					}
				
			/* 		var txt = encodeURIComponent(ctElemText);
					if($('#popups').css('display') == 'block' )
						{
							var addTxt = $('.headerPop').find('h3').text();
							var popUpparaTxt = $('.popUppara').text();
							var estimTxt = $('.estimation').text();				
							var txt = encodeURIComponent(addTxt+popUpparaTxt+estimTxt);
								if($('.helpwindow').css('display') != 'none' )
								{
									var txt = encodeURIComponent(ctElemText);
								}
						}	
					else
					{
						var txt = encodeURIComponent(ctElemText);
					} */
				selectedIndex = $(this).parent().index();
				if(prevMove != welcomeMove) $("#globalAudio").prop('currentTime',0);
				prevMove = welcomeMove;				
				if(selectedIndex != defIndex)
					{
						$("#globalAudio").prop('currentTime',0);						
					}
				if($("#globalAudio").prop('currentTime')<=0)
					{	
						var url = "assets/audio/"+ AudioNameget +".mp3";
					}
				
				
				$("#globalAudio").attr("src",url).get(0).play();
				$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
				ctElem.attr('src',templateStateImg.audioplay);
				ctElem.attr('audio-state','play');	
				if(cpage == 'welcome' && ($('.helpwindow').css('display') == 'none'))
					{
						
						childWindow.find('.expAudio').attr('audio-state','play').attr('src',"../../"+templateStateImg.audioplay);		
					
					}
				else
					{
						$('.expAudio').attr('audio-state','pause').attr('src',templateStateImg.audiopause);
						ctElem.attr('src',templateStateImg.audioplay);
						ctElem.attr('audio-state','play');	
					}
				
				defIndex = selectedIndex;
			}
		else
			{
				$('.screenArea').attr('audio-mode','off');
				$("#globalAudio").attr("src",url).get(0).pause();
				if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
					{						
						childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);	
						
					}
				else
					{	
						$('.screenArea').attr('audio-mode','off');								
						$("#globalAudio").attr("src",url).get(0).pause();
						$('.expAudio').attr('audio-state','pause');
						ctElem.attr('src',templateStateImg.audiopause);
						ctElem.attr('audio-state','pause');	
						
					}
			}

		$('#globalAudio').off('ended').on('ended', callEndFun);		

	}
	

function headerTabs(label)
	{	
		prevMove = -1;
		var thisTab = label;
		headerlabel = getIdSplit;
		var ctIndex = Number(thisTab.attr('data-show'));
		var ano = (ctIndex == 1)?2:1;
		imageName = (ctIndex == 1)?"monterey":"amazon";
		$('#ch'+ano).removeClass('chheader'+ano).addClass('chheader'+ano+'Act').css('background','#6d6e71').css('color','#fff');
		$('#ch'+ctIndex).removeClass('chheader'+ctIndex+'Act').addClass('chheader'+ctIndex).css('background',labelSettings[headerlabel]).css('color','#FFCC00');
		$('.baseImg').remove();		
		/* $('.workArea').prepend('<img class="baseImg" src="'+(imgBase+'welcomebg/'+imageName)+'.png"/>'); */
		var actClass = $('.rightlabel1').hasClass('labelArrow');
		var applyCol = (actClass == true)?1:2;
		$('.rightlabel'+applyCol).css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		globalAudioPause();	
		StateCheck=applyCol-1;
	}
	
function globalAudioPause()
	{		
		if((cpage == 'welcome') && ($('.helpwindow').css('display') == 'none'))
			{
				var childWindow = $('iframe').contents();
				childWindow.find('.expAudio').attr('audio-state','pause').attr('src',"../../"+templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
				
			}
		else
			{				
				$('.expAudio').attr('audio-state','pause');
				$('.expAudio').attr('src',templateStateImg.audiopause);
				$('.screenArea').attr('audio-mode','off');	
				$("#globalAudio").trigger('pause');	
				$("#globalAudio").prop('currentTime','0');
				prevMove = -1;
			}	
	}

	