var currentIndex=0;

function audioPlay()
	{	
		if(MainNavigations==1) $('.expFoodBar').css({visibility:'visible'});
		globalAudioPause();
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
		AudioNameget =window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioNamecon"][audioIndex][stepIndex];

		currentIndex=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].indexOf(AudioText);
		if (typeof currentStep =='string' && ((currentStep.indexOf(textval) > -1 && wrongstepCount >= 1)|| (currentStep.indexOf(textval1) > -1 && wrongstepCountwrongstepCount >=1)) ) 
		{
			 AudioText = 'Try again. ' + AudioText; 
		}
		
		LengthFind=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].length-1;
		slideImg=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["Image"];
		$(".expDiv .expPara").html(AudioText);
		totalObjLength = Object.keys(window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]]).length-1;
		if(slideImg!="")$(".expimgcont img").attr("src",imgBaseAct+slideImg);
		SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
		
	}


function MoveToNextStep()
	{
	
		
		var getHtmlId=$(this).attr("id");
		/* 
		if(currentStep=='grow4' && audioIndex==1 && stepIndex==0){
			$(".arrowbtn").hide();
			$(".txtOk").show();
		}
		if(currentStep=='grow4' && stepIndex==1){
			$('.expFoodBar').css({visibility:'hidden'});
		} */
		if(FeedBack=="wrong")
			{
				
				if(getHtmlId!="arrow")SliderOkClick("close");
				else activitySlideDiv();
				return;
			}
		if(audioIndex==0 && stepIndex == LengthFind)
			{
				
				audioIndex=0;
				stepIndex=0;
				if(getHtmlId!="arrow")SliderOkClick("close");
				else activitySlideDiv();
				return;
			}
		if(stepIndex!=LengthFind)
			{
				
				stepIndex++;
				if(currentStep==15 && audioIndex==1 && stepIndex==2)FeedBack="wrong";
				audioPlay();
				if(getHtmlId!="arrow")SliderOkClick("open");
				else activitySlideDiv();
				return;
			}
		if(audioIndex==1 && stepIndex==LengthFind)
			{	
				
				audioIndex=0;
				stepIndex=0;
				if(getHtmlId!="arrow")SliderOkClick("close");
				else activitySlideDiv();
				return;
			}
			FeedBack="step";
			
	}
var tempcurrentStep = 0;
function rightAttemptFun()
	{
		//totalStepArr[currentStep]=1;
		FeedBack="right";
		wrongstepCount = 0;
		$(".highlight,.glowEffect").hide();
		audioIndex=1;			
		stepIndex=0;
		audioPlay();
		if(parseInt($('.expDiv').css('left'))< 0 ) SliderOkClick("open");
		tempcurrentStep = currentStep;
		sliderNavigationFun();
	}

var wrongstepCount = 0;
var textval = 'Crct'
var textval1 = 'Wrng'
function wrongAttemptFun(ElemLevel)
	{
		
		noStepArr[currentStep]++;
		FeedBack="wrong";
		if (typeof currentStep =='string' && (currentStep.indexOf(textval) > -1 || currentStep.indexOf(textval1) > -1)) 
		{
			wrongstepCount++;
		}
		
		if(ElemLevel=="drop")
		{
			AudioText=incorrectText[wrongResPos]; 
			$(".expDiv .expPara").html(AudioText);
		}
		else if(ElemLevel=="stop")
		{
			audioIndex=2;
			stepIndex=0;
			audioPlay();
		}
		if(parseInt($('.expDiv').css('left'))< 0 ) SliderOkClick("open");
		sliderNavigationFun();
		//console.log(audioIndex);
	}

function toggleExpTabs()
	{
		StateCheck=$(this).attr("id").split("_")[1]-1;
		$(".labelRight").removeClass('labelArrow').css({'cursor':"pointer","background":backgroundNcolor[2][0],"color":backgroundNcolor[2][1]});
		$(this).addClass("labelArrow").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		audioPlay();
	}

function SliderFunc(ImgStatus,okStatus,sliderStatus)
{
	if(sliderStatus=="slidershow")
	{
		$(".expDiv").css("display","block");
		if((ImgStatus=="imgshow" && slideImg!="") || slideImg!=""){$(".expimgcont").css("display","block");}
		else if((ImgStatus=="imgshow" && slideImg!="")  || slideImg==""){$(".expimgcont").css("display","none");}
		if(LengthFind != 0){$(".moveNextFood").css("display","block");}
		else if(LengthFind == 0){$(".moveNextFood").css("display","none");}
		var getH = 0;
		defH = (typeof defH != 'undefined')?defH:2;
		var changeH = (ImgStatus=="imgshow")?142:0;
		var okheight = (LengthFind != 0)?96:80;
		
		changeH = (slideImg!="")?142:0;
		var calcH = window.setTimeout(function(){
			$('.expDiv').children().each(function(){				
				if($(this).css('display') != 'none') {
					getH += $(this).height()
				}
			});			
			$('.expDiv').css({'height':(defH+getH)-okheight});
			$('.expPara').css({'top':changeH-2});
			$('.expAudio').css({'top':changeH+12});
			
			//------------Slider Bottom set when text changes-------//
			if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 550){
				$('.expDiv').animate({top:parseInt(551-$('.expDiv').height())+'px'});
			}
		},10)
	}
	else
	{
		$(".expDiv,.EventNotAllowed").css("display","none");
	}
}

var buttonClick = function(e)
{ 
	buttonId = $(this).attr('id');
	getIdSplit=buttonId.split("ch")[1]-1;
	audioPlay();
	headerTabs($(this));
}

function SliderOkClick(OkClickState)
{
	 
	if(OkClickState=="open")
	{
		rotateValue=-1;
		angleRot=0;
		if(MainNavigations==2){$(".EventNotAllowed").show();}
		else{$(".EventNotAllowed").hide();}
	}
	else if(OkClickState=="close")
	{
		rotateValue=-283;
		angleRot=180;
		$(".EventNotAllowed").hide();
	}
	slideAnimate();
}
	
function activitySlideDiv()
	{	
		
		rotateValue = (rotateValue == -1)?-283:-1;			
		angleRot = (angleRot == 0)?180:0;
		if(rotateValue==-1 && MainNavigations==2){$(".EventNotAllowed").show();}
		else if(MainNavigations==0 || MainNavigations==1 || rotateValue==-283){$(".EventNotAllowed").hide();}
		slideAnimate();																
	}

function slideAnimate()
{
	globalAudioPause();
	$('.expDiv').stop().animate({left:rotateValue},800,function(){			
						$('.activeSlider').css({'transform':'rotate('+angleRot+'deg)'});		
		});
}

function TabsStateRightAndTop(topMenu,rightMenu,baseImg)
{
	if(topMenu=="topmenushow"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"34px","height":"554px"});
	}
	else if(topMenu=="topmenuhide"){
		$(".highlightTab").hide();
		$(".workArea, .EventNotAllowed").css({"top":"0px","height":"588px"});
	}
	if(rightMenu=="rightmenushow"){$(".Modes").show();}
	else if(rightMenu=="rightmenuhide"){$(".Modes").hide();}
	if(baseImg=="baseimgshow"){$(".baseImg").show();}
	else if(baseImg=="baseimghide"){$(".baseImg").hide();}
}

function nxtNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(LengthFind > currentIndex){stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{ $('.nxtBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
}

function preNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
}

function sliderNavigationFun()
{
	if(LengthFind == 0 || LengthFind == -1)
	{
		$('.navSliderBtn').hide();
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'})
		return;
	}
	if(LengthFind == currentIndex)
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'})
		$('.navSliderBtn').show();
		return;
	}
	if(currentIndex == 0 && LengthFind !=0)
	{	
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'})
		$('.navSliderBtn').show();
		return;
	}
	if( currentIndex > 0 && LengthFind !=0 )
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'})
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'})
		$('.navSliderBtn').show();
		return;
	}
	
	
}