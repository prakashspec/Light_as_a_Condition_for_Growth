var MainNavigations=1;	
var baseConfig = {activityTitle:'Light as a Condition for Plant Growth'};
var Tabs=["welcome","explore","activity"];
var TopMenuText=["Dig site","Lab"];
var rightMenuText=["Food Web","Tropic Game"];
//label background on top
var labelSettings = {
						0:'#313131', //monteryBay background
						1:'#313131'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imghide","okhide","sliderhide"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenuhide","rightmenuhide","baseimghide"], //explore
					["topmenuhide","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow

var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab,totalObjLength;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';

var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep=0;
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-282;
var angleRot=180;

//incorrect Audio multiple
var incorrectText = [
					'Incorrect. Producers occupy this level. Producers are organisms that make their own food through photosynthesis. Try again.',
					'Incorrect. Primary consumers occupy this level. Primary consumers are organisms that feed only on producers. Try again.',
					'Incorrect. Secondary consumers occupy this level. Secondary consumers are organisms that feed on primary consumers. Try again.',
					'Incorrect. Tertiary consumers occupy this level. Tertiary consumers are organisms that feed on secondary and primary consumers. Try again.'
					];


//shell Audio
var FindState=["LightPlant"];
var FindLevel=["Activity"];
//shell Audio

var SlideContents_explore = {
	"LightPlant":
	{
		"Activity":
		{
			0:{
				'Image':'',
				'AudioText':[[],[],[]],
				'AudioNamecon':[[],[],[]]
			  }
		}
	}		
};
 
var SlideContents_activity = {
	"LightPlant":
	{
		"Activity":
		{
			0:{
				'Image':'',
				'AudioText':[["In this activity, you will test which color of light is best for growing lettuce. Select Lettuce to plant your lettuce seeds!"],[],['Please select Lettuce.']],//0
				'AudioNamecon':[['vllcga_01'],[],['vllcga_10']]
			  },
		'lettuce1':{
				'Image':'',
				'AudioText':[[],['Lettuce is a delicious vegetable that takes about 50 days to grow. <br><br>Now let’s compare how lettuce grows under different types of light. Set the lamp on the left to red light. Set the lamp on the right to yellow light.'],['Try again.  Set the lamp on the left to red light. Set the lamp on the right to yellow light. ']],//1
				'AudioNamecon':[[],['vllcga_02'],['vllcga_03']]
			  },
		'leftCrct1':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to yellow light. '],['Set the lamp on the right to yellow light. ']],//2
				'AudioNamecon':[[],['vllcga_04'],['vllcga_38']]
				},
		'rightCrct1':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light.'],['Set the lamp on the left to red light.']],//2
				'AudioNamecon':[[],['vllcga_05'],['vllcga_39']]
			  },
		'leftWrng1':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light.'],['Set the lamp on the left to red light.']],//2
				'AudioNamecon':[[],['vllcga_05'],['vllcga_39']]
				},
		'rightWrng1':
			  {
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to yellow light.'],[' Set the lamp on the right to yellow light.']],//2
				'AudioNamecon':[[],['vllcga_04'],['vllcga_38']]
			  },
		'lightAns1':{
				'Image':'',
				'AudioText':[[],['Excellent. Now let’s compare how well the lettuce plants fare under red and yellow light over a 50-day period. Select Grow now. '],['Select the Grow button to start the growing period.']],//2
				'AudioNamecon':[[],['vllcga_06'],['vllcga_07']]
			  },
		'grow1':{
				'Image':'',
				'AudioText':[[],['Fifty days have passed, and you need to get your lettuce to market. The lettuce grown under red light reached a medium height and fullness. The lettuce grown under yellow light did not do as well. It is shorter and not as full.<br><br> Record these results. Then select Reset to test some other colors of light.'],[]],//3
				'AudioNamecon':[[],['vllcga_08'],[]]
			  },
		'reset1':{
				'Image':'',
				'AudioText':[[],['Let’s test how some other wavelengths of light affect plant growth. We will use the same plant so we can compare our results to the first trial. Select Lettuce again.'],['Please select Lettuce. ']],
				'AudioNamecon':[[],['vllcga_09'],['vllcga_10']]
			  },
		'lettuce2':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light again. Set the lamp on the right to blue light.'],['Try again. Set the left lamp to red. Set the right lamp to blue. ']],
				'AudioNamecon':[[],['vllcga_11'],['vllcga_12']]
			  },
		'leftCrct2':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to blue light. '],['Set the lamp on the right to blue light.']],//2
				'AudioNamecon':[[],['vllcga_13'],['vllcga_40']]
				},
		'rightCrct2':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light.'],['Set the lamp on the left to red light.']],//2
				'AudioNamecon':[[],['vllcga_14'],['vllcga_41']]
			  },
		'leftWrng2':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light.'],['Set the lamp on the left to red light.']],//2
				'AudioNamecon':[[],['vllcga_14'],['vllcga_41']]
				},
		'rightWrng2':
			  {
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to blue light.'],[' Set the lamp on the right to blue light.']],//2
				'AudioNamecon':[[],['vllcga_13'],['vllcga_40']]
			  },
		'lightAns2':{
				'Image':'',
				'AudioText':[[],['Excellent. Which pot do you think will grow the best lettuce? Write down your prediction. Then select Grow to compare how red and blue light affect lettuce growth.'],['Select Grow to start the growing period.']],
				'AudioNamecon':[[],['vllcga_15'],['vllcga_16']]
			  },
		'grow2':{
				'Image':'',
				'AudioText':[[],['Just like the first trial, the lettuce grew to a medium height and fullness under the red lamp. How does this compare to the lettuce under the blue lamp? Which one do you think your customers will prefer? <br><br>Record your results. Then, select Reset to test other wavelengths of light.'],[]],
				'AudioNamecon':[[],['vllcga_17'],[]]
			  },
		'reset2':{
				'Image':'',
				'AudioText':[[],['Let’s test how some other colors of light affect plant growth. We will use the same plant so we can compare our results to the first two trials. Select Lettuce once again.'],['Choose Lettuce to plant your seeds.']],
				'AudioNamecon':[[],['vllcga_18'],['vllcga_19']]
			  },
		'lettuce3':{
				'Image':'',
				'AudioText':[[],['This time, let’s compare lettuce growth under red light and orange light. Make your selections. '],['Try again. Set the left lamp to red and the right lamp to orange.']],
				'AudioNamecon':[[],['vllcga_20'],['vllcga_21']]
			  },
		'leftCrct3':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to orange light. '],['Set the lamp on the right to orange light. ']],//2
				'AudioNamecon':[[],['vllcga_22'],['vllcga_42']]
				},
		'rightCrct3':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light.'],['Set the lamp on the left to red light.']],//2
				'AudioNamecon':[[],['vllcga_23'],['vllcga_43']]
			  },
		'leftWrng3':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to red light.'],['Set the lamp on the left to red light.']],//2
				'AudioNamecon':[[],['vllcga_23'],['vllcga_43']]
				},
		'rightWrng3':
			  {
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to orange light.'],['Set the lamp on the right to orange light.']],//2
				'AudioNamecon':[[],['vllcga_22'],['vllcga_42']]
			  },
		'lightAns3':{
				'Image':'',
				'AudioText':[[],['Excellent. Now select Grow to compare how these wavelengths of light affect the growth of lettuce.'],['Select Grow.']],
				'AudioNamecon':[[],['vllcga_24'],['vllcga_25']]
			  },
		'grow3':{
				'Image':'',
				'AudioText':[[],['It’s time to get your lettuce to market. Compare how well your lettuce grew under red and orange light. Did one do better than the other?<br><br>Record your results and compare them to previous trials. Then, select Reset to test other wavelengths of light.'],[]],
				'AudioNamecon':[[],['vllcga_26'],[]]
			  },
		'reset3':{
				'Image':'',
				'AudioText':[[],['Let’s run one more test on lettuce growth. This time, we will use two new wavelengths of light. Select Lettuce again to plant your lettuce seeds.'],['Choose Lettuce again.']],
				'AudioNamecon':[[],['vllcga_27'],['vllcga_28']]
			  },
		'lettuce4':{
				'Image':'',
				'AudioText':[[],['Great. Now let’s test violet light and yellow light. How do you think they will affect lettuce growth? Write down your prediction; then set up the lamps. '],['Try again. Set the lamp on the left to violet. Set the lamp on the right to yellow. ']],
				'AudioNamecon':[[],['vllcga_29'],['vllcga_30']]
			  },
		'leftCrct4':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to yellow light. '],['Set the lamp on the right to yellow light. ']],//2
				'AudioNamecon':[[],['vllcga_31'],['vllcga_44']]
				},
		'rightCrct4':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to violet light.'],['Set the lamp on the left to violet light.']],//2
				'AudioNamecon':[[],['vllcga_32'],['vllcga_45']]
			  },
		'leftWrng4':{
				'Image':'',
				'AudioText':[[],['Set the lamp on the left to violet light.'],['Set the lamp on the left to violet light.']],//2
				'AudioNamecon':[[],['vllcga_32'],['vllcga_45']]
				},
		'rightWrng4':
			  {
				'Image':'',
				'AudioText':[[],['Set the lamp on the right to yellow light.'],[' Set the lamp on the right to yellow light.']],//2
				'AudioNamecon':[[],['vllcga_31'],['vllcga_44']]
			  },
		'lightAns4':{
				'Image':'',
				'AudioText':[[],['Excellent. Now let’s grow some lettuce!'],['Select Grow to begin the growing period. ']],
				'AudioNamecon':[[],['vllcga_33'],['vllcga_34']]
			  },
		'grow4':{
				'Image':'',
				'AudioText':[[],['It’s harvest time again. But only one of these plants looks like it’s ready for market! What does this tell you about how violet and yellow light affect plant growth?','Record your results and compare them to previous trials. Can you identify the best wavelengths for growing lettuce? What about the worst? Write down your conclusions.','You have reached the end of the guided activity. However, there is much more to learn in this virtual lab. Select Explore to continue experimenting with different wavelengths of light on your own. You can continue testing lettuce or try your hand at growing tomatoes or cucumbers.  Try to figure out whether tomatoes and cucumbers prefer the same wavelengths of light as lettuce. Good luck!'],[]],
				'AudioNamecon':[[],['vllcga_35','vllcga_36','vllcga_37'],[]]
			  }
		}
	}		
};
//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"Several factors affect the ability of a plant to grow. These include the availability of light, carbon dioxide, water, and nutrients.",
			'AudioNamecon':['vllcgi_01']	
			
		},
	'block1':{
			'img':'audio_icon',
			'text':"The amount of light and type of light can affect how a plant grows.",
			'AudioNamecon':['vllcgi_02']	
		},
	'block2':{
			'img':'audio_icon',
			'text':"The type of light we see is called <b>visible light</b>. Visible light includes a certain range of wavelengths. Different wavelengths of light within this range appear as different colors. The sunlight that we see is visible light. It emits all the wavelengths of visible light at once.",
			'AudioNamecon':['vllcgi_03']	
		},
	'block3':{
			'img':'audio_icon',
			'text':"Plants absorb light using organelles called chloroplasts. Chloroplasts are full of pigments that absorb light energy to carry out photosynthesis. Certain pigments absorb certain types of light more efficiently than others. For example, the pigment chlorophyll does not absorb green light well; it reflects green light, which is why many plants appear green.",
			'AudioNamecon':['vllcgi_04']	
			},
	'block4':{
			'img':'audio_icon',
			'text':"Certain types of lamps can emit one wavelength at a time. For example, a light bulb may only emit red light or blue light.",
			'AudioNamecon':['vllcgi_05']	
			},
	'block5':{
			'img':'audio_icon',
			'text':"Lamps can be used to grow plants indoors.",
			'AudioNamecon':['vllcgi_06']	
			}
	};
			
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'AudioNamecon':['vllcgh_01']	
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'AudioNamecon':['vllcgh_02']	
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'AudioNamecon':['vllcgh_03']	
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'AudioNamecon':['vllcgh_04']	
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'AudioNamecon':['vllcgh_05']	
		}
	};
	
var welcomeMode = {
	'step_0':{				
			'text':'Welcome to Light as a Condition for Plant Growth! Growing delicious vegetables usually requires a big garden and lots of sunshine. But under the right conditions, you can grow plants indoors all throughout the year.',
			'speechStyle':'bubbleDivNone',
			'position':[265,206]				
			},
	'step_1':{				
			'text':'In this lab, you will grow several types of vegetables indoors using special lamps instead of sunlight. Your goal is to produce large, healthy crops that you can sell at a fresh market.',
			'speechStyle':'bubbleDivTop',
			'position':[265,130]
			},
	'step_2':{				
			'text':'Visible light (also called white light) is made up of many different colors. Each color has a different wavelength. In this lab, you can choose which color of light each plant gets. Then you’ll grow the plants to test which colors of light yield the largest, healthiest plants.',
			'speechStyle':'bubbleDivMulti',
			'position':[265,210]
			},
	'step_3':{				
			'text':'Use the Seed Selection tool to choose the type of plant you will test:  tomato, lettuce, or cucumber.',
			'speechStyle':'bubbleDivNone',
			'position':[485,36]
			},				
	'step_4':{				
			'text':'Then use the slider bars to choose violet, indigo, blue, green, yellow, orange, or red light in each growth chamber.',
			'speechStyle':'bubbleDivNone',
			'position':[265,206]
			},				
	'step_5':{				
			'text':'Once you’ve made your selections, select the <b>Grow</b> button to watch your plants grow. When they finish growing, note which kinds of light produce the largest, healthiest plants, and the best crop.',
			'speechStyle':'bubbleDivNone',
			'position':[265,1]
			},				
	'step_6':{				
			'text':'Remember, plants have other needs besides light. They also need carbon dioxide, water, and nutrients to survive and grow. In this lab, we’ll keep the amount of carbon dioxide, nutrients, and water the same; only the type of light will vary.',
			'speechStyle':'bubbleDivNone',
			'position':[265,1]
			},				
	'step_7':{				
			'text':'Select Explore or Activity to begin testing how different colors of light affect plant growth. Or go to Information to learn more about light and other conditions for plant growth.',
			'speechStyle':'bubbleDivNone',
			'position':[265,1]
			}			
	};	
