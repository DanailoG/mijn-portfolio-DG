function _0x27fb(){var _0x39d7f8=['176212bwVcVA','aantalKolommen','images/sprites/Bob100px/Bob.png','2202762KxQmCf','push','toon','Verdana','sprite','beweeg','berekenCelGrootte','images/backgrounds/dame_op_brug_1800.jpg','animatie','images/sprites/Alice100px/Alice.png','1422GPAdIC','18UFDGkn','gehaald','celGrootte','.png','wordtGeraakt','frameNummer','7351925EYWfWJ','81240RqRQld','height','stapGrootte','45661ATGSLa','teken','width','11060390vMskZu','16650634OoXlvu','green','1oMazAz','30wZaeeZ','white','grey'];_0x27fb=function(){return _0x39d7f8;};return _0x27fb();}function _0x27cd(_0x53bc81,_0x24a6ab){var _0x27fb6b=_0x27fb();return _0x27cd=function(_0x27cdad,_0x58e839){_0x27cdad=_0x27cdad-0x176;var _0x2c8fd7=_0x27fb6b[_0x27cdad];return _0x2c8fd7;},_0x27cd(_0x53bc81,_0x24a6ab);}var _0x5eebb1=_0x27cd;(function(_0x55e9ca,_0x140121){var _0x2ff29f=_0x27cd,_0xeb199b=_0x55e9ca();while(!![]){try{var _0x41f56c=-parseInt(_0x2ff29f(0x180))/0x1*(parseInt(_0x2ff29f(0x187))/0x2)+-parseInt(_0x2ff29f(0x181))/0x3*(parseInt(_0x2ff29f(0x184))/0x4)+parseInt(_0x2ff29f(0x176))/0x5+parseInt(_0x2ff29f(0x191))/0x6*(-parseInt(_0x2ff29f(0x17a))/0x7)+parseInt(_0x2ff29f(0x177))/0x8*(-parseInt(_0x2ff29f(0x192))/0x9)+parseInt(_0x2ff29f(0x17d))/0xa+parseInt(_0x2ff29f(0x17e))/0xb;if(_0x41f56c===_0x140121)break;else _0xeb199b['push'](_0xeb199b['shift']());}catch(_0x240459){_0xeb199b['push'](_0xeb199b['shift']());}}}(_0x27fb,0xefbba));class Raster{constructor(_0x42384a,_0x3022f9){var _0xd552d3=_0x27cd;this['aantalRijen']=_0x42384a,this[_0xd552d3(0x185)]=_0x3022f9,this['celGrootte']=null;}[_0x5eebb1(0x18d)](){var _0x4abf6e=_0x5eebb1;this[_0x4abf6e(0x194)]=canvas[_0x4abf6e(0x17c)]/this[_0x4abf6e(0x185)];}[_0x5eebb1(0x17b)](){var _0x285b3e=_0x5eebb1;push(),noFill(),stroke(_0x285b3e(0x183));for(var _0x24415a=0x0;_0x24415a<this['aantalRijen'];_0x24415a++){for(var _0x35366c=0x0;_0x35366c<this['aantalKolommen'];_0x35366c++){rect(_0x35366c*this['celGrootte'],_0x24415a*this[_0x285b3e(0x194)],this['celGrootte'],this[_0x285b3e(0x194)]);}}pop();}}class Jos{constructor(){var _0x422109=_0x5eebb1;this['x']=0x190,this['y']=0x12c,this[_0x422109(0x18f)]=[],this[_0x422109(0x197)]=0x3,this['stapGrootte']=null;}[_0x5eebb1(0x18c)](){var _0x4ffac0=_0x5eebb1;keyIsDown(LEFT_ARROW)&&(this['x']-=this[_0x4ffac0(0x179)],this[_0x4ffac0(0x197)]=0x2),keyIsDown(RIGHT_ARROW)&&(this['x']+=this['stapGrootte'],this[_0x4ffac0(0x197)]=0x1),keyIsDown(UP_ARROW)&&(this['y']-=this['stapGrootte'],this[_0x4ffac0(0x197)]=0x4),keyIsDown(DOWN_ARROW)&&(this['y']+=this['stapGrootte'],this[_0x4ffac0(0x197)]=0x5),this['x']=constrain(this['x'],0x0,canvas[_0x4ffac0(0x17c)]),this['y']=constrain(this['y'],0x0,canvas[_0x4ffac0(0x178)]-raster[_0x4ffac0(0x194)]),this['x']==canvas[_0x4ffac0(0x17c)]&&(this['gehaald']=!![]);}['wordtGeraakt'](_0x3d5c44){return this['x']==_0x3d5c44['x']&&this['y']==_0x3d5c44['y']?!![]:![];}[_0x5eebb1(0x189)](){var _0x5df59b=_0x5eebb1;image(this[_0x5df59b(0x18f)][this['frameNummer']],this['x'],this['y'],raster[_0x5df59b(0x194)],raster[_0x5df59b(0x194)]);}}class Vijand{constructor(_0x3be8cd,_0x54767b){var _0x129bf7=_0x5eebb1;this['x']=_0x3be8cd,this['y']=_0x54767b,this['sprite']=null,this[_0x129bf7(0x179)]=null;}[_0x5eebb1(0x18c)](){var _0x5e47c9=_0x5eebb1;this['x']+=floor(random(-0x1,0x2))*this[_0x5e47c9(0x179)],this['y']+=floor(random(-0x1,0x2))*this[_0x5e47c9(0x179)],this['x']=constrain(this['x'],0x0,canvas[_0x5e47c9(0x17c)]-raster[_0x5e47c9(0x194)]),this['y']=constrain(this['y'],0x0,canvas[_0x5e47c9(0x178)]-raster[_0x5e47c9(0x194)]);}['toon'](){var _0x23c72c=_0x5eebb1;image(this[_0x23c72c(0x18b)],this['x'],this['y'],raster[_0x23c72c(0x194)],raster[_0x23c72c(0x194)]);}}function preload(){var _0xf35fd9=_0x5eebb1;brug=loadImage(_0xf35fd9(0x18e));}function setup(){var _0x51329c=_0x5eebb1;canvas=createCanvas(0x384,0x258),frameRate(0xa),textFont(_0x51329c(0x18a)),textSize(0x5a),raster=new Raster(0x6,0x9),raster['berekenCelGrootte'](),eve=new Jos(),eve[_0x51329c(0x179)]=0x1*raster[_0x51329c(0x194)];for(var _0x2e8027=0x0;_0x2e8027<0x6;_0x2e8027++){frameEve=loadImage('images/sprites/Eve100px/Eve_'+_0x2e8027+_0x51329c(0x195)),eve[_0x51329c(0x18f)][_0x51329c(0x188)](frameEve);}alice=new Vijand(0x2bc,0xc8),alice[_0x51329c(0x179)]=0x1*eve[_0x51329c(0x179)],alice[_0x51329c(0x18b)]=loadImage(_0x51329c(0x190)),bob=new Vijand(0x2bc,0xc8),bob[_0x51329c(0x179)]=0x1*eve[_0x51329c(0x179)],bob['sprite']=loadImage(_0x51329c(0x186));}function draw(){var _0x9c3e8c=_0x5eebb1;background(brug),raster[_0x9c3e8c(0x17b)](),eve[_0x9c3e8c(0x18c)](),alice['beweeg'](),bob[_0x9c3e8c(0x18c)](),eve[_0x9c3e8c(0x189)](),alice[_0x9c3e8c(0x189)](),bob[_0x9c3e8c(0x189)](),(eve[_0x9c3e8c(0x196)](alice)||eve[_0x9c3e8c(0x196)](bob))&&noLoop(),eve[_0x9c3e8c(0x193)]&&(background(_0x9c3e8c(0x17f)),fill(_0x9c3e8c(0x182)),text('Je\x20hebt\x20gewonnen!',0x1e,0x12c),noLoop());}