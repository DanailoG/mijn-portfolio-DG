(function(_0x27adb7,_0x334bf7){var _0x4e0075=_0x29f0,_0x31d768=_0x27adb7();while(!![]){try{var _0x37c217=-parseInt(_0x4e0075(0x176))/0x1+parseInt(_0x4e0075(0x182))/0x2*(parseInt(_0x4e0075(0x178))/0x3)+parseInt(_0x4e0075(0x184))/0x4+-parseInt(_0x4e0075(0x177))/0x5*(-parseInt(_0x4e0075(0x17e))/0x6)+-parseInt(_0x4e0075(0x175))/0x7*(parseInt(_0x4e0075(0x179))/0x8)+parseInt(_0x4e0075(0x17f))/0x9*(parseInt(_0x4e0075(0x17c))/0xa)+-parseInt(_0x4e0075(0x181))/0xb;if(_0x37c217===_0x334bf7)break;else _0x31d768['push'](_0x31d768['shift']());}catch(_0x5c02fe){_0x31d768['push'](_0x31d768['shift']());}}}(_0x26b7,0x52eef));var schaal;function setup(){canvas=createCanvas(0x3e8,0x12c),noStroke();}function draw(){var _0x1f5465=_0x29f0;background(_0x1f5465(0x17d)),schaal=0x1+mouseY/height,tekenZon(mouseX,schaal),fill(_0x1f5465(0x180)),rect(0x0,0xfa,width,height-0xfa),tekenBoom(0x32),tekenBoom(0x96),tekenBoom(0xfa),tekenBoom(0x2bc),tekenBoom(0x384),tekenHuis();}function tekenHuis(){var _0x4483d0=_0x29f0;push(),strokeWeight(0x4),stroke('darkgrey'),fill(_0x4483d0(0x183)),rect(0x64,0xb4,0x64,0x64),fill('gray'),triangle(0x64,0xb4,0xc8,0xb4,0x96,0x64),noStroke(),rect(0x78,0xe6,0x1e,0x32),pop();}function _0x29f0(_0x12c61c,_0x4610c7){var _0x26b76e=_0x26b7();return _0x29f0=function(_0x29f031,_0x3da9dd){_0x29f031=_0x29f031-0x175;var _0x44b852=_0x26b76e[_0x29f031];return _0x44b852;},_0x29f0(_0x12c61c,_0x4610c7);}function _0x26b7(){var _0x1f2988=['5987799JOyikm','wheat','10138667boqhuD','24438AOoZsl','lightgray','1434724vntJWS','575197usPtAb','672734yYsQWp','5zsgeNI','162ZnXlhl','24DwDwRD','olive','sienna','10FfOUZi','cornflowerblue','2980926whsUHH'];_0x26b7=function(){return _0x1f2988;};return _0x26b7();}function tekenBoom(_0x2c9012){var _0x5ab8fa=_0x29f0;push(),noStroke(),fill(_0x5ab8fa(0x17b)),rect(_0x2c9012,0x82,0x28,0x82),fill(_0x5ab8fa(0x17a)),ellipse(_0x2c9012+0x14,0x82,0x64,0x96),pop();}function tekenZon(_0x20cb4c,_0x6d6b52){push(),fill('red'),scale(_0x6d6b52),ellipse(_0x20cb4c,0xc8,0x12c,0x12c),pop();}