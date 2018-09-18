
var welcomeMode = {
	'step_0':{				
			'text':'Welcome to Light as a Condition for Plant Growth! Growing delicious vegetables usually requires a big garden and lots of sunshine. But under the right conditions, you can grow plants indoors all throughout the year.',
			'speechStyle':'bubbleDivNone',
			'position':[270,200],
			'AudioNamecon':['vllcgw_01']	
			},
	'step_1':{				
			'text':'In this lab, you will grow several types of vegetables indoors using special lamps instead of sunlight. Your goal is to produce large, healthy crops that you can sell at a fresh market.',
			'speechStyle':'bubbleDivNone',
			'position':[265,160],
			'AudioNamecon':['vllcgw_02']
			},				
	 'step_2':{				
			'text':'Visible light (also called white light) is made up of many different colors. Each color has a different wavelength. In this lab, you can choose which color of light each plant gets. Then you’ll grow the plants to test which colors of light yield the largest, healthiest plants.',
			'speechStyle':'bubbleDivNone',
			'position':[265,210],
			'AudioNamecon':['vllcgw_03']
			},
	'step_3':{				
			'text':'Use the Seed Selection tool to choose the type of plant you will test: tomato, lettuce, or cucumber.',
			'speechStyle':'bubbleDivNone',
			'position':[485,36],
			'AudioNamecon':['vllcgw_04']
			}, 
	'step_4':{				
			'text':'Then use the slider bars to choose violet, indigo, blue, green, yellow, orange, or red light in each growth chamber.',
			'speechStyle':'bubbleDivNone',
			'position':[265,206],
			'AudioNamecon':['vllcgw_05']
			},				
	'step_5':{				
			'text':'Once you’ve made your selections, select the Grow button to watch your plants grow. When they finish growing, note which kinds of light produce the largest, healthiest plants, and the best crop.',
			'speechStyle':'bubbleDivNone',
			'position':[265,1],
			'AudioNamecon':['vllcgw_06']
			},				
	'step_6':{				
			'text':'Remember, plants have other needs besides light. They also need carbon dioxide, water, and nutrients to survive and grow. In this lab, we’ll keep the amount of carbon dioxide, nutrients, and water the same; only the type of light will vary.',
			'speechStyle':'bubbleDivNone',
			'position':[265,1],
			'AudioNamecon':['vllcgw_07']
			},				
	'step_7':{				
			'text':'Select Explore or Activity to begin testing how different colors of light affect plant growth. Or go to Information to learn more about light and other conditions for plant growth.',
			'speechStyle':'bubbleDivMulti',
			'position':[500,28],
			'AudioNamecon':['vllcgw_08']
			}			
	};
		
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,3000,5400,15000,26000,36000,50000,53000];
var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';