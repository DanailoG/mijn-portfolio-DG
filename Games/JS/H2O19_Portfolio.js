function _0x2cc3(){var _0xc3ac72=['17588jHUmEZ','328mmNrSG','6cAnsUz','teken','22526196HQFOcQ','5967580ciCZWV','222813EpGNHQ','300wvEGWJ','celGrootte','2191985qRqPRt','115751Gqzatm','images/backgrounds/dame_op_brug_1800.jpg','aantalKolommen','14aWptPM','29057yeEmHw','images/sprites/Jos100px/Jos_','.png','grey'];_0x2cc3=function(){return _0xc3ac72;};return _0x2cc3();}(function(_0x9e2120,_0x37e84c){var _0x4be02c=_0x2275,_0xa44d7e=_0x9e2120();while(!![]){try{var _0x34b56d=-parseInt(_0x4be02c(0x12e))/0x1*(parseInt(_0x4be02c(0x131))/0x2)+parseInt(_0x4be02c(0x13d))/0x3*(parseInt(_0x4be02c(0x136))/0x4)+-parseInt(_0x4be02c(0x12d))/0x5*(parseInt(_0x4be02c(0x138))/0x6)+parseInt(_0x4be02c(0x132))/0x7*(-parseInt(_0x4be02c(0x137))/0x8)+-parseInt(_0x4be02c(0x13c))/0x9+-parseInt(_0x4be02c(0x13b))/0xa+parseInt(_0x4be02c(0x13a))/0xb;if(_0x34b56d===_0x37e84c)break;else _0xa44d7e['push'](_0xa44d7e['shift']());}catch(_0x52ec75){_0xa44d7e['push'](_0xa44d7e['shift']());}}}(_0x2cc3,0x6d2c8));var raster={'aantalRijen':0x6,'aantalKolommen':0x6,'celGrootte':null,'berekenCelGrootte'(){var _0x59cd00=_0x2275;this['celGrootte']=width/this[_0x59cd00(0x130)];},'teken'(){var _0x2a40a0=_0x2275;push(),noFill(),stroke(_0x2a40a0(0x135));for(var _0x2fd11f=0x0;_0x2fd11f<this['aantalRijen'];_0x2fd11f++){for(var _0x17bc1d=0x0;_0x17bc1d<this[_0x2a40a0(0x130)];_0x17bc1d++){rect(_0x17bc1d*raster[_0x2a40a0(0x13e)],_0x2fd11f*raster[_0x2a40a0(0x13e)],raster['celGrootte'],raster['celGrootte']);}}pop();}},animatie=[],aantalBeeldjes=0x6,nummer=0x3,frame,xJos=0x190,yJos=0x12c;function preload(){var _0x16327d=_0x2275;brug=loadImage(_0x16327d(0x12f));for(var _0x502b07=0x0;_0x502b07<aantalBeeldjes;_0x502b07++){frame=loadImage(_0x16327d(0x133)+_0x502b07+_0x16327d(0x134)),animatie['push'](frame);}}function _0x2275(_0x4f888d,_0x456d56){var _0x2cc3c6=_0x2cc3();return _0x2275=function(_0x22752b,_0xf08e44){_0x22752b=_0x22752b-0x12d;var _0x5494c0=_0x2cc3c6[_0x22752b];return _0x5494c0;},_0x2275(_0x4f888d,_0x456d56);}function setup(){canvas=createCanvas(0x384,0x258),frameRate(0xa),raster['berekenCelGrootte']();}function draw(){var _0x55a7a9=_0x2275;background(brug),raster[_0x55a7a9(0x139)](),keyIsDown(LEFT_ARROW)&&(xJos-=raster[_0x55a7a9(0x13e)],nummer=0x2),keyIsDown(RIGHT_ARROW)&&(xJos+=raster[_0x55a7a9(0x13e)],nummer=0x1),keyIsDown(UP_ARROW)&&(yJos-=raster[_0x55a7a9(0x13e)],nummer=0x4),keyIsDown(DOWN_ARROW)&&(yJos+=raster[_0x55a7a9(0x13e)],nummer=0x5),xJos=constrain(xJos,0x0,width-raster[_0x55a7a9(0x13e)]),yJos=constrain(yJos,0x0,height-raster[_0x55a7a9(0x13e)]),image(animatie[nummer],xJos,yJos,raster[_0x55a7a9(0x13e)],raster[_0x55a7a9(0x13e)]);}