var _0x17311c=_0x2fdf;function _0x9828(){var _0x141d1a=['frameNummer','beweeg','berekenCelGrootte','441zPeQEz','4fCAQee','776705keZgQz','animatie','wordtGeraakt','green','Je\x20hebt\x20gewonnen!','images/backgrounds/dame_op_brug_1800.jpg','Verdana','celGrootte','699480HIfdgZ','images/sprites/Bob100px/Bob.png','13KaeGbx','aantalRijen','height','white','sprite','17715WdzsDT','teken','50240uHKzVP','26ViQwxB','width','614449prKxEG','grey','gehaald','images/sprites/Alice100px/Alice.png','toon','10uMyQuI','12JgqqBM','stapGrootte','push','323509sGHYkg','.png','aantalKolommen','1119881rHVzzy'];_0x9828=function(){return _0x141d1a;};return _0x9828();}(function(_0x5331fe,_0x4985ae){var _0x5f90b=_0x2fdf,_0x39ec45=_0x5331fe();while(!![]){try{var _0x578d99=parseInt(_0x5f90b(0x92))/0x1+parseInt(_0x5f90b(0xad))/0x2*(parseInt(_0x5f90b(0xaa))/0x3)+-parseInt(_0x5f90b(0x9a))/0x4*(parseInt(_0x5f90b(0x9b))/0x5)+parseInt(_0x5f90b(0x8f))/0x6*(parseInt(_0x5f90b(0x95))/0x7)+-parseInt(_0x5f90b(0xac))/0x8*(parseInt(_0x5f90b(0x99))/0x9)+parseInt(_0x5f90b(0x8e))/0xa*(-parseInt(_0x5f90b(0xaf))/0xb)+-parseInt(_0x5f90b(0xa3))/0xc*(-parseInt(_0x5f90b(0xa5))/0xd);if(_0x578d99===_0x4985ae)break;else _0x39ec45['push'](_0x39ec45['shift']());}catch(_0x2e41c2){_0x39ec45['push'](_0x39ec45['shift']());}}}(_0x9828,0x3f61a));class Raster{constructor(_0x341779,_0x1d5223){var _0x4f684d=_0x2fdf;this[_0x4f684d(0xa6)]=_0x341779,this[_0x4f684d(0x94)]=_0x1d5223,this[_0x4f684d(0xa2)]=null;}[_0x17311c(0x98)](){var _0x1826e8=_0x17311c;this[_0x1826e8(0xa2)]=canvas[_0x1826e8(0xae)]/this[_0x1826e8(0x94)];}[_0x17311c(0xab)](){var _0x4a4c73=_0x17311c;push(),noFill(),stroke(_0x4a4c73(0xb0));for(var _0x363ec9=0x0;_0x363ec9<this[_0x4a4c73(0xa6)];_0x363ec9++){for(var _0x51d205=0x0;_0x51d205<this[_0x4a4c73(0x94)];_0x51d205++){rect(_0x51d205*this[_0x4a4c73(0xa2)],_0x363ec9*this['celGrootte'],this[_0x4a4c73(0xa2)],this[_0x4a4c73(0xa2)]);}}pop();}}class Jos{constructor(){var _0x4872c4=_0x17311c;this['x']=0x190,this['y']=0x12c,this[_0x4872c4(0x9c)]=[],this['frameNummer']=0x3,this[_0x4872c4(0x90)]=null,this[_0x4872c4(0xb1)]=![];}['beweeg'](){var _0x481b0a=_0x17311c;keyIsDown(LEFT_ARROW)&&(this['x']-=this[_0x481b0a(0x90)],this[_0x481b0a(0x96)]=0x2),keyIsDown(RIGHT_ARROW)&&(this['x']+=this[_0x481b0a(0x90)],this[_0x481b0a(0x96)]=0x1),keyIsDown(UP_ARROW)&&(this['y']-=this['stapGrootte'],this[_0x481b0a(0x96)]=0x4),keyIsDown(DOWN_ARROW)&&(this['y']+=this[_0x481b0a(0x90)],this['frameNummer']=0x5),this['x']=constrain(this['x'],0x0,canvas['width']),this['y']=constrain(this['y'],0x0,canvas['height']-raster[_0x481b0a(0xa2)]),this['x']==canvas[_0x481b0a(0xae)]&&(this[_0x481b0a(0xb1)]=!![]);}[_0x17311c(0x9d)](_0x2e49ef){return this['x']==_0x2e49ef['x']&&this['y']==_0x2e49ef['y']?!![]:![];}[_0x17311c(0x8d)](){var _0x9944f7=_0x17311c;image(this[_0x9944f7(0x9c)][this[_0x9944f7(0x96)]],this['x'],this['y'],raster[_0x9944f7(0xa2)],raster['celGrootte']);}}function _0x2fdf(_0x544473,_0x3949f0){var _0x982821=_0x9828();return _0x2fdf=function(_0x2fdf76,_0xb331dd){_0x2fdf76=_0x2fdf76-0x8c;var _0x2b4f65=_0x982821[_0x2fdf76];return _0x2b4f65;},_0x2fdf(_0x544473,_0x3949f0);}class Vijand{constructor(_0x5e7f35,_0x146c18){var _0x584778=_0x17311c;this['x']=_0x5e7f35,this['y']=_0x146c18,this['sprite']=null,this[_0x584778(0x90)]=null;}[_0x17311c(0x97)](){var _0x3a4037=_0x17311c;this['x']+=floor(random(-0x1,0x2))*this['stapGrootte'],this['y']+=floor(random(-0x1,0x2))*this[_0x3a4037(0x90)],this['x']=constrain(this['x'],0x0,canvas[_0x3a4037(0xae)]-raster['celGrootte']),this['y']=constrain(this['y'],0x0,canvas[_0x3a4037(0xa7)]-raster['celGrootte']);}[_0x17311c(0x8d)](){var _0x1a9362=_0x17311c;image(this[_0x1a9362(0xa9)],this['x'],this['y'],raster[_0x1a9362(0xa2)],raster['celGrootte']);}}function preload(){var _0x195b0e=_0x17311c;brug=loadImage(_0x195b0e(0xa0));}function setup(){var _0x3e16d3=_0x17311c;canvas=createCanvas(0x384,0x258),frameRate(0xa),textFont(_0x3e16d3(0xa1)),textSize(0x5a),raster=new Raster(0x6,0x9),raster['berekenCelGrootte'](),eve=new Jos(),eve[_0x3e16d3(0x90)]=0x1*raster[_0x3e16d3(0xa2)];for(var _0x52ad0a=0x0;_0x52ad0a<0x6;_0x52ad0a++){frameEve=loadImage('images/sprites/Eve100px/Eve_'+_0x52ad0a+_0x3e16d3(0x93)),eve[_0x3e16d3(0x9c)][_0x3e16d3(0x91)](frameEve);}alice=new Vijand(0x2bc,0xc8),alice['stapGrootte']=0x1*eve['stapGrootte'],alice[_0x3e16d3(0xa9)]=loadImage(_0x3e16d3(0x8c)),bob=new Vijand(0x2bc,0xc8),bob['stapGrootte']=0x1*eve[_0x3e16d3(0x90)],bob[_0x3e16d3(0xa9)]=loadImage(_0x3e16d3(0xa4));}function draw(){var _0x2c19b0=_0x17311c;background(brug),raster[_0x2c19b0(0xab)](),eve['beweeg'](),alice[_0x2c19b0(0x97)](),bob[_0x2c19b0(0x97)](),alice['x']==bob['x']&&alice['y']==bob['y']&&bob[_0x2c19b0(0x97)](),eve['toon'](),alice[_0x2c19b0(0x8d)](),bob[_0x2c19b0(0x8d)](),(eve[_0x2c19b0(0x9d)](alice)||eve[_0x2c19b0(0x9d)](bob))&&noLoop(),eve[_0x2c19b0(0xb1)]&&(background(_0x2c19b0(0x9e)),fill(_0x2c19b0(0xa8)),text(_0x2c19b0(0x9f),0x1e,0x12c),noLoop());}