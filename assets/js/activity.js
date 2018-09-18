var dataVal = "yellow";
var findMode = "small";
var anispeed = 70;
var plantClickId, timervar1, timervar,spritenameLeft,spritenameRight,spritename,plantSprite,valueFind,actplantClickId,index2;
var colorLight =spriteAnim1=spriteAnim=tempcount=acttimervar=spriteAnimAct= 0;
var incVal = right = left = Lright=Lleft=false;
var actRight,actLeft,index,actLefthighlight, actRighthighlight,dropdataVal;
var current=actPlantId=tempcount1=spriteAnim3=spriteAnim4=acttimervar1=tim=maxVal=timMaxVal=0;
var getPlantId = plantVar =1;
var clickArr = [0, 0, 0, 0];
var highlightArr = ["#highlight1", ".highlightcmn", "#highlightgrow"]
var actdropRight= colorright= colorleft=3;
var leftIdVal= actdropLeft= rightIdVal =dropLeft=dropRight= 1;
var totalTime =  20;  // Sec

var colorArr = [
					//["color","background",,"dataval"]
					['#9400D3', 'bgclr0', 'violet'],
					['#4B0082', 'bgclr1', 'indigo'],
					['#0000FF', 'bgclr2', 'blue'],
					['#00FF00', 'bgclr3', 'green'],
					['#FFFF00', 'bgclr4', 'yellow'],
					['#F47E1F', 'bgclr5', 'orange'],
					['#FF0000', 'bgclr6', 'red']
				];	
				
var plantsName = ["Tomato", "Lettuce", "Cucumber"];
var plants = ["tomato", "lettuce", "cucumber"];
var colorNames = ["violet", "indigo", "blue","green", "yellow","orange", "red"];
var colors = [
				["violet", "indigo", "blue"],//tall
				["green", "yellow"],//small
				["red", "orange"]//medium
			 ];
var modes = ["tall", "small", "medium"];
var spriteArr = [	//0:width ,1:height, 2:left, 3:framCount, 4:framPerRow
					[[150, 180, 90, 200, 4],[90, 66, 105, 200, 4],[135, 135, 93, 200, 4]], //tomato	
					[[180, 180, 70, 500, 10],[180, 180, 74, 500, 10],[180, 180, 70, 500, 10]],//lettuce 				
					[[150, 180, 81, 600, 10],[150, 180, 81, 300, 6],[150, 180, 81, 400, 8]] //cucumber
				];
var seedAnimation = [
					//["Image","Text","SeedsAnim","numofdayslength","tall","medium","short","frames"]						
						["tomattoseeds", "0 10 20 30 40 50 60 70 80", 210, 270, 330, "tomatoseed"],
						["lettuceseeds", "0 10 20 30 40 50", 230, 280, 330, "lettuceseed"],
						["cucumberseeds", "0 10 20 30 40 50 60", 210, 270, 330, "cucumberseed"]
					];				
var activityArr = [
					["plantImageAct_0","plantImageAct_1"], //select plant  
					["red", "red", "red", "violet"], //left side color
					["yellow", "blue", "orange", "yellow"], //right side color
					["#highlight0_6", "#highlight0_6", "#highlight0_6", "#highlight0_0"],
					["#highlight1_3", "#highlight1_2", "#highlight1_5", "#highlight1_4"]
				 ];

var expInit = function()
{
    $("#colorDivL div,#colorDivR div,.images div,.numOfDays p").remove();
    for (var i = 0; i < colorArr.length; i++) {
        $("#colorDivL").append('<div class="colorsVal" id="colorL_0_' + i + '" data=' + colorArr[i][2] + '   style="width:38px;left:' + ((i * 38) + 5) + 'px;background:' + colorArr[i][0] + '"></div>');
        $("#colorDivR").append('<div class="colorsVal" id="colorR_1_' + i + '" data=' + colorArr[i][2] + ' style="width:38px;left:' + ((i * 38) + 5) + 'px;background:' + colorArr[i][0] + '"></div>');
    }
    for (var j = 0; j < plants.length; j++) {

        $(".images").append('<div class="plantImage" id="plant_' + j + '"><div  class="imagediv" id="image1_' + j + '"  ></div> <span >' + plantsName[j] + '</span></div>');
		$('#image1_'+j).css({ backgroundImage: 'url(assets/images/activity/' + plants[j]+ '.png)','background-size': '100% 100%'});
		
	
        $(".images").append('<div class="clickClass" id="clickClass_' + j + '"></div>');
    }
    $(".numOfDays").append('<div class="flexClass"></div>');
    $("#colorDivL").append('<div class="slider" id="slider0" ></div>');
    $("#colorDivR").append('<div class="slider" id="slider1"></div>');
    $(".plantImage").off("mousedown").on("mousedown", plantClickFun);
    $('.slider').draggable({
        disabled: true
    });


}

var plantClickFun = function() {
    spriteAnim = 0;
    $('.seedAnim').css("display", "block");
    $(".plantImage").css("opacity", "0.2");
    plantClickId = $(this).attr('id');
    plantId = plantClickId.split("_")[1];
    plantSprite = plants[plantId];
    spritename = spritenameLeft = spritenameRight = plantSprite + findMode;
	framename = frameleft = frameright= spritename+"frame";
    $(".clickClass").hide()
    $("#clickClass_" + plantId).show();
    $("#" + plantClickId).css("opacity", "1");
    $(".plantImage").off("mousedown");
    startSeedAnim();	
	if(plantId == 2)
	{	
	$('.grid').show();
	}
	if(plantId == 1)
	{	
	$('.plantAnimframe,.plantAnim').css("bottom","113px");
	}
    $(".colorsVal").droppable({drop: dropFun});
    $('.flexClass').show().css({'background':'url(assets/images/activity/img_' + plantId+ '.png)','background-repeat': 'no-repeat'});
    
    $('.tall').css({top: seedAnimation[plantId][2] + "px"});
    $('.medium').css({top: seedAnimation[plantId][3] + "px" });
    $('.short').css({top: seedAnimation[plantId][4] + "px"});
    $('.plantHeight').fadeIn(500);
	$(".clickClass,.plantImage,.colorsVal,.slider").css({"cursor":"default"});
    $(".resetFun").css({"background": "#FFCA04","color": "black","cursor": "pointer"}).off("click").on("click", resetClickFun);
}
var startSeedAnim = function() {
    clearTimeout(timervar);
    spriteAnim++;
    $('.seedAnim').css({ backgroundImage: 'url(assets/images/activity/' + seedAnimation[plantId][0] + '.png)','background-position': (-140 * (spriteAnim % 4)) + 'px ' + (-170 * (Math.floor(spriteAnim / 4))) + 'px'});
    timervar = setTimeout(startSeedAnim, anispeed);
	$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon_disabled.png)').off('click').css({"cursor": "default"});
    if (spriteAnim == 39)
	{
        clearTimeout(timervar);      
        spriteAnim = 0;
		$(".seedAnim").fadeOut(1000);
        $('#slider0').draggable({ axis: "x",containment: '#colorDivL', disabled: false});
        $('#slider1').draggable({axis: "x",containment: '#colorDivR', disabled: false});
        $('.colorsVal').off('mousedown').on('mousedown', clickFunction).css("cursor", "pointer");
        $(".growClick").off("mousedown").on("mousedown", growClickFun);
		$(".growClick").css("background","#1E6E37");
		$(".arrow-right").css("border-left","20px solid #1E6E37");
		$(".colorsVal,.growClick,.slider").css({"cursor":"pointer"});

		$('.screenIcon').off('click').on("click",captureScreen).css({"cursor": "pointer"});
		$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon.png)');
    }
}
var clickFunction = function() 
{
    var index = $(this).attr('id');
    var indexVal = index.split("_")[1];
    var indexId = index.split("_")[2];	
	dataVal = $(this).attr('data');
	commonFun(dataVal);
    var leftVal = parseInt($("#" + index).css('left'));
    if (indexVal == 1) { dropRight = valueFind;colorright=indexId;$('.lightValuesRight').text(colorNames[colorright]);right = true; spritenameRight = spritename;frameright=framename; } 
	else {dropLeft = valueFind;left = true; colorleft=indexId;$('.lightValuesleft').text(colorNames[colorleft]);spritenameLeft = spritename;frameleft=framename; }
    $("#slider" + indexVal).animate({left: (leftVal + 14) + "px"}, 200);
    $("#colorDisplay_" + indexVal).removeClass().addClass(colorArr[indexId][1] + " actcolorDisplay").css({"opacity": 0.6, "display": "none"});
    if (right == true && left == true) {
		$(".growClick").css("background","#1E6E37");
		$(".arrow-right").css("border-left","20px solid #1E6E37");
    
        $(".growClick").off("mousedown").on("mousedown", growClickFun)
	};
}
var framename,frameleft,frameright;
var commonFun = function(dataget)
{ 
    $.each(colors, function(index, value) {
        if (colors[index].indexOf(dataget) != -1) valueFind = index;
    });
    findMode = modes[valueFind];
    spritename = plantSprite + findMode;
    framename = spritename +"frame";
}
var dropFun = function() 
{
    var getDropId = $(this).attr('id');
    var dropVa = getDropId.split("_")[1];
    var dropId = getDropId.split("_")[2];
    dataVal = $(this).attr('data');
	
	commonFun(dataVal);
    var leftValdrop = parseInt($("#" + getDropId).css('left'));
    if (dropVa == 1) {dropRight = valueFind; colorright=dropId;$('.lightValuesRight').text(colorNames[colorright]);right = true; spritenameRight = spritename;frameright=framename; } 
	else {dropLeft = valueFind;colorleft=dropId;$('.lightValuesleft').text(colorNames[colorleft]);left = true;spritenameLeft = spritename;frameleft=framename;}
	$("#slider" + dropVa).animate({ left: (leftValdrop + 14) + "px"}, 200);
	
    $("#colorDisplay_" + dropVa).removeClass().addClass(colorArr[dropId][1] + " actcolorDisplay").css({ "opacity": 0.6, "display": "none" });
    if (right == true && left == true) { $(".growClick").css("background","#1E6E37");
		$(".arrow-right").css("border-left","20px solid #1E6E37");$(".growClick").off("mousedown").on("mousedown", growClickFun);}
}

var timefun = function()
{
	$('.timeclass').html(++timecount);
}

var timersecvar;
var growClickFun = function() 
{
		timecount =0;
		$('#plantAnimframe1').hide().css({"left": spriteArr[plantId][dropLeft][2] + "px", "width": spriteArr[plantId][dropLeft][0] + "px","height": spriteArr[plantId][dropLeft][1] + "px", backgroundImage: 'url(assets/images/activity/' + frameleft + '.png)'});
		$('#plantAnimframe2').hide().css({"left": spriteArr[plantId][dropRight][2] + "px", "width": spriteArr[plantId][dropRight][0] + "px","height": spriteArr[plantId][dropRight][1] + "px", backgroundImage: 'url(assets/images/activity/' + frameright + '.png)'});


	plantanimationfun();
	timersecvar = setInterval(timefun,1000)
	
}
totalTime = 10;
var tim1=0;
var plantanimationfun = function()
{
	$('.grid').fadeOut(1000);
	$('.bucket1').fadeOut(3000);
    $("#growInner").css("display", "block");
    $(".growClick,.colorsVal").off("mousedown");
	$(".clickClass,.plantImage,.colorsVal,.growClick,.slider").css({"cursor":"default"});
	
    $("#colorDisplay_0").removeClass().addClass(colorArr[colorleft][1] + " actcolorDisplay").css({ "opacity": 0.6,"display": "block"});
	
    $("#colorDisplay_1").removeClass().addClass(colorArr[colorright][1] + " actcolorDisplay").css({ "opacity": 0.6, "display": "block"});
	$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon_disabled.png)').off('click').css({"cursor": "default"});
    $('.slider').draggable({disabled: true});
    clearTimeout(timervar1);
	
    var totalnumofFrams = spriteArr[plantId][dropLeft][3];
    var totalnumofFrams1 = spriteArr[plantId][dropRight][3];
	
    maxVal = Math.max(totalnumofFrams, totalnumofFrams1);
	timMaxVal = (totalTime*1000) / maxVal;
	tim = truncateDecimals(timMaxVal * 100) / 100;
	
	tim1 = truncateDecimals(tim1 + timMaxVal);

    spriteAnim1 = Math.floor(tempcount * (spriteArr[plantId][dropLeft][3] / maxVal));
    spriteAnim2 = Math.floor(tempcount * (spriteArr[plantId][dropRight][3] / maxVal));
	
    $('#plantAnim1').css({"left": spriteArr[plantId][dropLeft][2] + "px", "width": spriteArr[plantId][dropLeft][0] + "px","height": spriteArr[plantId][dropLeft][1] + "px","display": "block", backgroundImage: 'url(assets/images/activity/' + spritenameLeft + '.png)','background-position': (-spriteArr[plantId][dropLeft][0] * (spriteAnim1 % spriteArr[plantId][dropLeft][4])) + 'px ' + (-spriteArr[plantId][dropLeft][1] * (Math.floor(spriteAnim1 / spriteArr[plantId][dropLeft][4]))) + 'px'});
	
    $('#plantAnim2').css({"left": spriteArr[plantId][dropRight][2] + "px", "width": spriteArr[plantId][dropRight][0] + "px","height": spriteArr[plantId][dropRight][1] + "px","display": "block", backgroundImage: 'url(assets/images/activity/' + spritenameRight + '.png)','background-position': (-spriteArr[plantId][dropRight][0] * (spriteAnim2 % spriteArr[plantId][dropRight][4])) + 'px ' + (-spriteArr[plantId][dropRight][1] * (Math.floor(spriteAnim2 / spriteArr[plantId][dropRight][4]))) + 'px'});
    $("#growInner").css({ width: (tempcount / (maxVal - 1) * 99.5) + "%"});
    timervar1 = setTimeout(plantanimationfun, tim); 
	
	
	
    if (tempcount >= maxVal-1) 
	{		
		clearTimeout(timersecvar);
        clearTimeout(timervar1);
        spriteAnim1 = 0;	 		 		
		$('#plantAnimframe1').show()
		$('#plantAnimframe2').show()
	 	$(".plantAnim").fadeOut(500);
		$('.screenIcon').off('click').on("click",captureScreen).css({"cursor": "pointer"});
		$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon.png)');
		
		$(".growClick").css("background","#5c8469");
		$(".arrow-right").css("border-left","20px solid #5c8469");
    }
	tempcount++
}

var truncateDecimals = function (number) {
    return Math[number < 0 ? 'ceil' : 'floor'](number);
};
var resetClickFun = function() {
	$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon.png)').off('click').on("click",captureScreen).css({"cursor": "pointer"});;
	tim1=0;
	
    $("#growInner,.seedAnim,.plantHeight,.bucket1").css("display", "none");
    $("#growInner").animate({ width: "0"}, 0);
    clearTimeout(timervar);
    spriteAnim =spriteAnim1=tempcount =maxVal=timMaxVal=count= 0;
    clearTimeout(timersecvar);
    clearTimeout(timervar1);
    dataVal = "yellow";
    findMode = "small";
    dropRight=dropLeft = 1;
	colorright = colorleft =3;
	$('.lightValuesRight,.lightValuesleft,.actlightValuesleft,.actlightValuesRight').text('Green');
	$('.grid').hide();
    $(".slider").css("left", "133px");
	$('.plantAnimframe,.plantAnim').css("bottom","119px");
    $(".resetFun").css({"background": "#A7A9AB","color":"white","cursor": "default"}).off("click");
    $(".growClick,colorsVal,.slider").css({"cursor": "default"});
	$(".clickClass,.plantImage").css({"cursor":"pointer"});
    $(".plantImage").removeClass("clickClass").css("opacity", "1");
	$(".growClick").css("background","#5c8469");
	$(".arrow-right").css("border-left","20px solid #5c8469");
    
    $(".plantAnim").css("display", "none");
    $(".plantImage").off("mousedown").on("mousedown", plantClickFun);  
    $(".clickClass").hide();
    right=left = false;
    $('.colorsVal').off('mousedown');
    $('.slider').draggable({disabled: true });
    $('.tall').css({top: "118px"});
    $('.medium').css({top: "168px" });
    $('.short').css({top: "215px"});
    $(".actcolorDisplay").removeClass();
    $('.flexClass').hide();
	$('.plantAnimframe,.bucket1').css("display","none");
    $("#colorDisplay_0,#colorDisplay_1").removeClass().addClass(colorArr[3][1] + " actcolorDisplay").css({ "opacity": 0.6, "display": "none"});   
}


var actInit = function() {

    $("#actcolorDivL div,#actcolorDivR div,.actnumOfDays p,.actImages div").remove();
    for (var i = 0; i < colorArr.length; i++) 
	{

        $("#actcolorDivL").append('<div class="actcolorsVal actcolorsValL" id="actcolorL_0_' + i + '" data=' + colorArr[i][2] + ' style="width:38px;left:' + ((i * 38) + 5) + 'px;background:' + colorArr[i][0] + '"><div class="highlight" id="highlight0_' + i + '"></div></div>');
        $("#actcolorDivR").append('<div class="actcolorsVal actcolorsValR" id="actcolorR_1_' + i + '" data=' + colorArr[i][2] + '  style="width:38px;left:' + ((i * 38) + 5) + 'px;background:' + colorArr[i][0] + '"><div class="highlight" id="highlight1_' + i + '"></div></div>');
    }
    $(".dummydiv").hide();
    for (var j = 0; j < plants.length; j++) 
	{
        $(".actImages").append('<div class="plantImageAct" id="plantImageAct_' + j + '"><div id="image0_' + j + '"  ></div> <span style="" >' + plantsName[j]+ '</span></div>');
        $(".actImages").append('<div class="clickClassAct" id="clickClassAct_' + j + '"></div>');

		$('#image0_'+j).css({ backgroundImage: 'url(assets/images/activity/' + plants[j]+ '.png)','background-size': '100% 100%'});
		
		
        $(".actImages").append('<div class="highlight" id="highlight' + j + '"></div>');
        $(".actImages").append('<div class="commondummy" id="dummy' + j + '"></div>');
    }
	
    $(".actnumOfDays").append('<div class="flexClass"></div>');
    $("#actcolorDivL").append('<div class="actslider" id="actslider0" ></div>');
    $("#actcolorDivR").append('<div class="actslider" id="actslider1" ></div>');
    $('.actslider').draggable({disabled: true});
    $("#" + activityArr[0][plantVar]).off("mousedown").on("mousedown", actPlantClick);
    getPlantId = activityArr[0][plantVar].split("_")[1];
    $("#dummy" + getPlantId).hide();
    $(".commondummy").off("mousedown").on("mousedown", highlightFun);
}
var highlightFun = function() {
	currentStep = tempcurrentStep ;
    wrongAttemptFun("stop");
    clickArr[current] = clickArr[current] + 1;
    if (noStepArr[currentStep] >= 3) {
        $(".highlight").hide();

        $(highlightArr[current]).show();
    }
}
var actPlantClick = function() {
    $(".highlight,.glowEffect").hide();
    $(".commondummy").show();
	$(".commondummy").off("mousedown");
	if(currentStep ==0){Lright=false;}else{Lright=false;}
	
	$("#dummy0,#dummy1,#dummy2,.clickClassAct").css("cursor","default");
    $(".plantHeight").hide();
	$("#dummycolorR,#dummycolorL").css("cursor","default");
    $("#" + activityArr[0][plantVar]).off("mousedown");
    $('.actseedAnim').css("display", "block");
    $(".plantImageAct").css("opacity", "0.2");
    actplantClickId = activityArr[0][plantVar];
    actPlantId = actplantClickId.split("_")[1];
    $(".clickClassAct").hide()
    $("#clickClassAct_" + actPlantId).show();
	SliderOkClick("close");
    $("#" + actplantClickId).css("opacity", "1");
    actStartSeedAnim();
	if(actPlantId == 1)
	{	
	
	$('.actplantAnim').css("bottom","113px");
	}
	
    $('.tall').css({top: seedAnimation[actPlantId][2] + "px"});
    $('.medium').css({top: seedAnimation[actPlantId][3] + "px" });
    $('.short').css({ top: seedAnimation[actPlantId][4] + "px"});
    $('.plantHeight').fadeIn(3000);
    $(".actcolorsVal").droppable({  drop: actdropFun });
    actLeft = activityArr[1][colorLight];
    actRight = activityArr[2][colorLight];
    incVal = true;
    plantSprite = plants[actPlantId];
	$('.flexClass').show().css({'background':'url(assets/images/activity/img_' + actPlantId+ '.png)','background-repeat': 'no-repeat'});
    spritename = spritenameLeft = spritenameRight = plantSprite + findMode;
	framename = frameleft = frameright= spritename+"frame";
	letCount++;
}
var letCount= 0;
var actStartSeedAnim = function() {
	
    clearTimeout(acttimervar);
    spriteAnimAct++;
	$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon_disabled.png)').off('click').css({"cursor": "default"});		
    $('.actseedAnim').css({ backgroundImage: 'url(assets/images/activity/' + seedAnimation[actPlantId][0] + '.png)', 'background-position': (-140 * (spriteAnimAct % 4)) + 'px ' + (-170 * (Math.floor(spriteAnimAct / 4))) + 'px'});
    acttimervar = setTimeout(actStartSeedAnim, anispeed);
    if (spriteAnimAct == 39) 
	{
		currentStep = 'lettuce'+letCount;
        clearTimeout(acttimervar);
        $('.actseedAnim').fadeOut(1000);
        spriteAnimAct = 0;
        current = 1;
        rightAttemptFun();
		$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon.png)').off('click').css({"cursor": "default"});
		$("#dummycolorR,#dummycolorL").hide();
        $('#actslider0').draggable({ axis: "x",  containment: '#actcolorDivL', drag: dragFun, disabled: false});
        $('#actslider1').draggable({axis: "x",containment: '#actcolorDivR', disabled: false});
        $('.actcolorsVal').off('mousedown').on('mousedown', actclickFunction).css("cursor", "pointer");
		$(".commondummy").off("mousedown").on("mousedown", highlightFun);
    }
}
var dragFun = function(event) {
    index2 = $(event.target).attr("id");
    var indexVal2 = index2.split("_")[1];
    var indexId2 = index2.split("_")[2];
}
var indexVal,indexId,leftVal,dataValue = "yellow";
var actclickFunction = function() {
    $(".highlight").hide();
    index = $(this).attr('id');
     indexVal = index.split("_")[1];
     indexId = index.split("_")[2];
     dataValue = $(this).attr('data');
     leftVal = parseInt($("#" + index).css('left'));
    $("#actslider" + indexVal).animate({ left: (leftVal + 14) + "px" }, 200);
    dataVal = $(this).attr('data');
	commonFun(dataVal);
    commFun(indexVal, dataValue, indexId)
}

var commFun = function(indexVal1, dataVal1, indexId1) {
	
    actLefthighlight = activityArr[3][colorLight];
    actRighthighlight = activityArr[4][colorLight];
	if(indexVal1 == 0) $('.actlightValuesleft').text(colorNames[indexId1]);
	else $('.actlightValuesRight').text(colorNames[indexId1]);

    if (actLeft == dataVal1 && indexVal1 == 0) {
		
        actdropLeft = indexId1;
        leftIdVal = valueFind;
        $('#actslider0').draggable({
            disabled: true
        });
		currentStep = "leftCrct"+letCount;
		rightAttemptFun();
		
        $('.actcolorsValL').off('mousedown');
       
        Lleft = true;
		frameleft=framename;
        spritenameLeft = spritename;
        if ((currentStep == 1 && dataVal == "yellow") ||  (currentStep == 5 && dataVal == "blue") || (currentStep == 9 && dataVal == "orange") ||(currentStep == 13 && dataVal == "yellow")){
             Lright = true; 
            $('#actslider1').draggable({
                axis: "x",
                containment: '#actcolorDivR',
                disabled: false
            });
            $('.actcolorsValR').off('mousedown').on('mousedown', actclickFunction).css("cursor", "pointer");
        }
		
    } else if (actLeft != dataVal1 && indexVal1 == 0) {
        Lleft = false;
        clickArr[current] = clickArr[current] + 1;
		
		//currentStep = "leftWrng"+letCount;
		wrongAttemptFun("stop");
        if (clickArr[current] >= 3) {
            $(actLefthighlight).show();

        }
    } else if (actRight == dataVal1 && indexVal1 == 1) {
		$('#dummycolorR').css({"cursor":"default"});
        $(".highlight").hide();
        actdropRight = indexId1;
        $('#actslider1').draggable({
            disabled: true
        });
        $('.actcolorsValR').off('mousedown');
        Lright = true;
      	currentStep = "rightCrct"+letCount;
		rightAttemptFun();
        rightIdVal = valueFind;
        spritenameRight = spritename;
		frameright=framename;
    } else if (actRight != dataVal1 && indexVal1 == 1) {
        Lright = false;
        clickArr[current] = clickArr[current] + 1;
		//currentStep = "rightWrng"+letCount;
		wrongAttemptFun("stop");
	
        if (clickArr[current] >= 3) {
            $(actRighthighlight).show();

        }
    }
	if (Lleft == true)
	{
		$("#dummycolorL").show().css("cursor","default");
	}
    if (Lright == true && Lleft == true) {
		
        $(".commondummy").show();
        $("#dummygrowL").hide();
		currentStep = "lightAns"+letCount;
        rightAttemptFun();
		current = 2;
		SliderOkClick("open");
		$("#dummycolorR,#dummycolorL").show().css("cursor","default");
        $(".actgrowClick").css("background","#1E6E37");
		$(".arrow-right").css("border-left","20px solid #1E6E37");
        $(".actgrowClick").off("mousedown").on("mousedown", cmnFunctionVal).css("cursor","pointer");

    } 
}

var cmnFunctionVal = function(){

growCount++;
actgrowClickFun();
SliderOkClick("close");
}
var actdropFun = function() {
    $(".highlight").hide();
    var getDropId = $(this).attr('id');
    var dropVa = getDropId.split("_")[1];
    var dropId = getDropId.split("_")[2];
    var leftValdrop = parseInt($("#" + getDropId).css('left'));
    $("#actslider" + dropVa).animate({left: (leftValdrop + 14) + "px" }, 200);
    dropdataVal = $(this).attr('data');
    dataVal = $(this).attr('data');
    commonFun(dataVal);
    commFun(dropVa, dropdataVal, dropId)
}
var growCount =0;
var actgrowClickFun = function() {
	
    $(".commondummy").off("mousedown");
    $("#actcolorDisplay_0").removeClass().addClass(colorArr[actdropLeft][1] + " actcolorDisplay").css({"opacity": 0.6,"display": "block" });
    $("#actcolorDisplay_1").removeClass().addClass(colorArr[actdropRight][1] + " actcolorDisplay").css({ "opacity": 0.6, "display": "block" });
    $(".highlight").hide();
	$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon_disabled.png)').off('click').css({"cursor": "default"});	
    $("#actgrowInner").css("display", "block");
	$(".actgrowClick").css("cursor","default");
    $(".actgrowClick,.actcolorsVal").off("mousedown");		
    $('.actslider').draggable({ disabled: true });
    clearTimeout(acttimervar1);
    current = 0;
    var totalnumofFrams = spriteArr[actPlantId][leftIdVal][3];
    var totalnumofFrams1 = spriteArr[actPlantId][rightIdVal][3];	
	maxVal = Math.max(totalnumofFrams, totalnumofFrams1);
	timMaxVal = (totalTime*1000) / maxVal;
	tim = truncateDecimals(timMaxVal * 100) / 100;
	
	tim1 = truncateDecimals(tim1 + timMaxVal);
    spriteAnim3 = Math.floor(tempcount1 * (spriteArr[actPlantId][leftIdVal][3] / maxVal));
    spriteAnim4 = Math.floor(tempcount1 * (spriteArr[actPlantId][rightIdVal][3] / maxVal));
	
    $('#actplantAnim1').css({"left": spriteArr[actPlantId][leftIdVal][2] + "px","width": spriteArr[actPlantId][leftIdVal][0] + "px", "height": spriteArr[actPlantId][leftIdVal][1] + "px", "display": "block", backgroundImage: 'url(assets/images/activity/' + spritenameLeft + '.png)', 'background-position': (-spriteArr[actPlantId][leftIdVal][0] * (spriteAnim3 % spriteArr[actPlantId][leftIdVal][4])) + 'px ' + (-spriteArr[actPlantId][leftIdVal][1] * (Math.floor(spriteAnim3 / spriteArr[actPlantId][leftIdVal][4]))) + 'px'});

    $('#actplantAnim2').css({ "left": spriteArr[actPlantId][rightIdVal][2] + "px",  "width": spriteArr[actPlantId][rightIdVal][0] + "px","height": spriteArr[actPlantId][rightIdVal][1] + "px","display": "block", backgroundImage: 'url(assets/images/activity/' + spritenameRight + '.png)','background-position': (-spriteArr[actPlantId][rightIdVal][0] * (spriteAnim4 % spriteArr[actPlantId][rightIdVal][4])) + 'px  ' + (-spriteArr[actPlantId][rightIdVal][1] * (Math.floor(spriteAnim4 / spriteArr[actPlantId][rightIdVal][4]))) + 'px'});
		
    $("#actgrowInner").css({ width: (tempcount1 / (maxVal - 1) * 99.5) + "%"});
    acttimervar1 = setTimeout(actgrowClickFun, tim);
    if (tempcount1 >= maxVal ) 
	{
		currentStep = 'grow'+letCount;
		clearTimeout(acttimervar1);
        spriteAnim3 = 0;
       
		$('#actplantAnim1').css({ backgroundImage: 'url(assets/images/activity/' + frameleft + '.png)'});
		$('#actplantAnim2').css({ backgroundImage: 'url(assets/images/activity/' + frameright + '.png)'});
		$(".actgrow").css("opacity", "1");
		$(".actgrowClick").css("background","#5c8469");
		$(".arrow-right").css("border-left","20px solid #5c8469");
       
		   if (currentStep == 'grow1' || currentStep == 'grow2' ||currentStep == 'grow3')
		   {		
				$(".actresetFun").css({  "opacity": "1", "background": "#FFCA04","color": "black", "cursor": "pointer"}).off("mousedown").on("mousedown", actresetClickFun);
					
		   }

		if (currentStep == 'grow1' || currentStep == 'grow2' ||currentStep == 'grow3'||currentStep == 'grow4') 
		{ 	
				$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon.png)').off('click').css({"cursor": "default"});		
			var audioRight = setTimeout(function(){   clearTimeout(audioRight);
					
				rightAttemptFun();						
				if (currentStep == 'grow4') 			
				{
					$(".dummydiv").css("display", "block");
					$(".actresetFun").css({"background": "#A7A9AB","color":"white", "cursor": "default"}).off("mousedown");
				}     
			},1000);
					
		}		
		else
		{	
			rightAttemptFun();
		}

	
		
    }
    tempcount1++;
}
var actresetClickFun = function() {
	
	currentStep = 'reset'+letCount;
	$('.screenIcon').css('background-image','url(./assets/images/template/camera_icon.png)').off('click').css({"cursor": "default"});	
	
    clickArr = [0, 0, 0, 0];
    $("#actgrowInner,.actseedAnim,.plantHeight,.actplantAnim").css("display", "none");
    $("#actgrowInner").animate({ width: "0"}, 0);
    clearTimeout(acttimervar1);
    clearTimeout(acttimervar);
    $(".actbucket").css({ "background": 'url(./assets/images/activity/pot.png)'});
    $(".actslider").css("left", "133px");
    $(".actresetFun").css({"background": "#A7A9AB","color":"white", "cursor": "default"}).off("mousedown");
    $(".plantImageAct").removeClass("clickClass").css("opacity", "1");
    //$(".actgrow").css("opacity", "0.5");
	$(".actgrowClick").css("background","#5c8469")
	$(".arrow-right").css("border-left","20px solid #5c8469")
    dataVal = "yellow";
    findMode = "small";
    $(".clickClassAct,.highlight").hide();
    Lright=Lleft = false;
	$('.lightValuesRight,.lightValuesleft,.actlightValuesleft,.actlightValuesRight').text('Green');
    spriteAnim3 = current = spriteAnimAct = tempcount1 =  count = tim = maxVal =timMaxVal = 0;
    $('.flexClass').hide()
    $('.tall').css({top: "118px"});
    $('.medium').css({top: "168px" });
    $('.short').css({ top: "215px"});
    $("#dummy" + plantVar).hide();
    $("#" + activityArr[0][plantVar]).off("mousedown").on("mousedown", actPlantClick);
    $(".commondummy").off("mousedown").on("mousedown", highlightFun).css("cursor","default");
    $(".clickClassAct").css("cursor","pointer");
	$("#dummygrowL,.actgrowClick").show().css("cursor","default");
	$('.actplantAnim').css("bottom","119px");
    if (plantVar >= activityArr[0].length)
	{
        $("#" + activityArr[0][plantVar]).off("mousedown");
        $(".commondummy").off("mousedown");
	}
    if (currentStep >= noStepArr.length - 1) { $(".dummydiv").css("display", "block"); }
    $("#actcolorDisplay_0,#actcolorDisplay_1").removeClass().addClass(colorArr[3][1] + " actcolorDisplay").css({ "opacity": 0.6,"display": "none"});
	
    if (incVal) {
        colorLight++;
		
        rightAttemptFun();
        incVal = false;
        if (colorLight == activityArr[1].length)
		{
            colorLight = 0;
            currentStep = 0;
        }

    } else {
        colorLight = 0;
        plantVar = 1;
        $(".dummydiv").css("display", "none");
        currentStep = 0;
    }
    leftIdVal = rightIdVal = 1;
	if(currentStep == 0)
	{
		$('.glow4').css("display","block");
	}
	if(colorLight==0)		
	{		
		currentStep = 0;		
	}
}
var activityFunction = function(currentPage) {
	globalAudioPause();
    if (currentPage == "explore") {
		
        incVal = false;
        expInit();
        resetClickFun();
    } else if (currentPage == "activity") {
	
		letCount =0;
		incVal = false;
		$('.arrowbtn').css('display','none')
		$('.glow4,.txtOk').css("display","block");		
        actInit();
        actresetClickFun();
		$('.commondummy').css({'cursor':'default'});
    }
}