function _0x5800(){var _0x5ea429=['249204kQXPiu','GEVANGEN!','30roWALJ','56895qeOITn','white','3JbWsae','1848384eWWShp','1908698WhQdLX','1173669uAxVuI','black','12KDNhpl','124jxrECo','465066oVmknq','Verdana','3054024doZmPI'];_0x5800=function(){return _0x5ea429;};return _0x5800();}(function(_0x307866,_0xe5be06){var _0x53427d=_0x23be,_0xf7b280=_0x307866();while(!![]){try{var _0x1a8c83=-parseInt(_0x53427d(0x10c))/0x1*(-parseInt(_0x53427d(0x116))/0x2)+-parseInt(_0x53427d(0x10f))/0x3+-parseInt(_0x53427d(0x112))/0x4*(-parseInt(_0x53427d(0x10a))/0x5)+parseInt(_0x53427d(0x111))/0x6*(-parseInt(_0x53427d(0x113))/0x7)+parseInt(_0x53427d(0x10d))/0x8+parseInt(_0x53427d(0x115))/0x9+-parseInt(_0x53427d(0x118))/0xa*(parseInt(_0x53427d(0x10e))/0xb);if(_0x1a8c83===_0xe5be06)break;else _0xf7b280['push'](_0xf7b280['shift']());}catch(_0x5990d2){_0xf7b280['push'](_0xf7b280['shift']());}}}(_0x5800,0x3d97e));var straal=0x14,xPositie,yPositie,xSnelheid=0x8,ySnelheid=0x5,onderlingeAfstand;function _0x23be(_0x5d5b13,_0x585101){var _0x580003=_0x5800();return _0x23be=function(_0x23beb1,_0x12b488){_0x23beb1=_0x23beb1-0x10a;var _0x2b329b=_0x580003[_0x23beb1];return _0x2b329b;},_0x23be(_0x5d5b13,_0x585101);}function setup(){var _0x1e3637=_0x23be;canvas=createCanvas(0x3e8,0x12c),frameRate(0x32),colorMode(RGB,0xff,0xff,0xff,0x1),background(0x0,0x0,0x4b,0x1),noStroke(),textFont(_0x1e3637(0x114)),textSize(0x8c),xPositie=straal,yPositie=height/0x2;}function draw(){background(0x0,0x0,0x4b,0.05),fill(0x0,0x0,0xff,0x1),ellipse(0x226,height-straal,0x2*straal),xPositie+=xSnelheid,yPositie+=ySnelheid,fill(0xff,0xff,0xff,0x1),ellipse(xPositie,yPositie,0x2*straal),onderlingeAfstand=dist(0x226,height-straal,xPositie,yPositie),onderlingeAfstand<=0x2*straal&&(eindScherm(),noLoop()),gebruikBesturing(),(yPositie<straal||yPositie>height-straal)&&(ySnelheid*=-0x1),(xPositie<straal||xPositie>width-straal)&&(xSnelheid*=-0x1);}function gebruikBesturing(){keyIsDown(LEFT_ARROW)&&(xSnelheid+=0x1,ySnelheid+=0x1),keyIsDown(RIGHT_ARROW)&&(xSnelheid-=0x1,ySnelheid-=0x1);}function eindScherm(){var _0x517cd6=_0x23be;background(_0x517cd6(0x10b)),fill(_0x517cd6(0x110)),text(_0x517cd6(0x117),0x4b,0xc8),noLoop();}