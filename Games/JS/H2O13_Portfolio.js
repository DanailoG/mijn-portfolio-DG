(function(_0x512b74,_0x2fbb56){var _0x18a254=_0x1e4f,_0x43620e=_0x512b74();while(!![]){try{var _0xf6a3e6=parseInt(_0x18a254(0x106))/0x1+parseInt(_0x18a254(0x103))/0x2*(-parseInt(_0x18a254(0x109))/0x3)+parseInt(_0x18a254(0x108))/0x4*(parseInt(_0x18a254(0x10b))/0x5)+-parseInt(_0x18a254(0x104))/0x6*(-parseInt(_0x18a254(0x105))/0x7)+-parseInt(_0x18a254(0x107))/0x8+-parseInt(_0x18a254(0x10a))/0x9+parseInt(_0x18a254(0x100))/0xa;if(_0xf6a3e6===_0x2fbb56)break;else _0x43620e['push'](_0x43620e['shift']());}catch(_0x1b6a5f){_0x43620e['push'](_0x43620e['shift']());}}}(_0x4bd2,0x6d353));var aantalRijenRaster=0xc,aantalKolommenRaster=0x12,celGrootte,animatie=[],aantalBeeldjes=0x6,nummer=0x3,frame,xJos=0x190,yJos=0x12c;function preload(){var _0x3ed08a=_0x1e4f;for(var _0x26155c=0x0;_0x26155c<aantalBeeldjes;_0x26155c++){frame=loadImage('images/sprites/Jos100px/Jos_'+_0x26155c+'.png'),animatie[_0x3ed08a(0x101)](frame);}brug=loadImage('images/backgrounds/dame_op_brug_1800.jpg');}function setup(){canvas=createCanvas(0x384,0x258),frameRate(0xa),celGrootte=width/aantalKolommenRaster;}function _0x1e4f(_0x3a75b5,_0x71f0bb){var _0x4bd2fc=_0x4bd2();return _0x1e4f=function(_0x1e4fb1,_0x2c3b3c){_0x1e4fb1=_0x1e4fb1-0x100;var _0x20eb19=_0x4bd2fc[_0x1e4fb1];return _0x20eb19;},_0x1e4f(_0x3a75b5,_0x71f0bb);}function _0x4bd2(){var _0x24d8ae=['1817164ZSKfEH','1478319nFLNWy','1455354PquLRl','5NNWIxR','7962420ROBOqg','push','grey','2qtsYaN','9762xaqnTB','112BIiiDk','582318pnKyzY','6056712VdaMOb'];_0x4bd2=function(){return _0x24d8ae;};return _0x4bd2();}function draw(){background(brug),tekenRaster(),keyIsDown(LEFT_ARROW)&&(xJos-=celGrootte,nummer=0x2),keyIsDown(RIGHT_ARROW)&&(xJos+=celGrootte,nummer=0x1),keyIsDown(UP_ARROW)&&(yJos-=celGrootte,nummer=0x4),keyIsDown(DOWN_ARROW)&&(yJos+=celGrootte,nummer=0x5),xJos=constrain(xJos,0x0,width-celGrootte),yJos=constrain(yJos,0x0,height-celGrootte),image(animatie[nummer],xJos,yJos,0x32,0x32);}function tekenRaster(){var _0x384e81=_0x1e4f;push(),noFill(),stroke(_0x384e81(0x102));for(var _0x13740d=0x0;_0x13740d<aantalRijenRaster;_0x13740d++){for(var _0x3c58e7=0x0;_0x3c58e7<aantalKolommenRaster;_0x3c58e7++){rect(_0x3c58e7*celGrootte,_0x13740d*celGrootte,celGrootte,celGrootte);}}pop();}