var defaultPath;
initVar();
changeStyle();

document.onkeydown = function(){
 	var test_var=event.srcElement.tagName.toUpperCase();
 	if (event.srcElement.type) var test_type=event.srcElement.type.toUpperCase();
 	if ( (event.keyCode == 8) || (event.keyCode == 116 )){
	  event.returnValue=false;
	  event.keyCode = 0;
 	}
}

window.onerror = function() {
   return true; // hide error from browser
}


function SetUserTheme()
{


var tck2=parent.leftFrame.GetComString(2043);

var cardno="";


 if ( tck2.length >= 16 ) {
	cardno=tck2.substring(1,17);	

   }

if ( (cardno=="4512950000048065" ) || 
     (cardno=="5895609785153466" ) ||
     (cardno=="1234567890123456" )
) {
	parent.leftFrame.SetUCDIStr("InterActTheme","001");	
 
}
else{
	parent.leftFrame.SetUCDIStr("InterActTheme","000");	
	
} 


}

function changeStyle(){ 

var _head = document.getElementsByTagName('head')[0];  
var _link = document.createElement('link');
_link.type = 'text/css';
_link.href = defaultPath + 'style.css';
_link.rel = 'stylesheet';
_head.appendChild(_link);}


function initVar(){
parent.leftFrame.SetUCDIStr("InterActTheme","000");	
defaultPath = 'theme/000/';
   
}

/*function changeClass(i,c){
 if(document.all) document.all(i).className=c;
 else if(document.getElementById)
  document.getElementById(i).className=c; 
}

function changeId(i){

  if (i=='altuno'){
  	document.all('uno').id=i; }
  else if (i=='uno'){
  	document.all('uno').id=i; }
  else{
  	document.all('dos').id=i; }
 
  }*/
function cambiar(a,y){
	/*var x;
	
	x=a.substring(0);
	
	if (y=="uno"){
		
		if (x=="2463642324630015") // Card Number
        {
			document.all('uno').id='altdos'}
		else
		{
			document.all('uno').id='altuno'
		}
	}else{
		
			if (x=="2463642324630015"){
			changeId('altdos')
			}
		else
		{
			changeId('dos')
			
		}
	}*/
}

x_axis=new Array('@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?');
y_axis=new Array('@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O');

//FOR 800(x) * 600(y)  { 800/32  = 25,  600/16 = 37.5}

function fnPrintScreen(x, y, words, styleClass){
	x_position = 0;
	y_position = 0;
	for (i=0;i<x_axis.length;i++){
	   if (x_axis[i]==x){
            x_position = i;
	   }	
	}
	
	for (j=0;j<y_axis.length;j++){
	   if (y_axis[j]==y){
            y_position = j;
	   }	
	}
	
	x_position = x_position * 25;
	y_position = y_position * 37.5
	htmlMessage = '<div class="' + styleClass + '" style="position:absolute;left:' + x_position + ';top:' + y_position +'">' + words + '</div>';
	
	return htmlMessage;
	//alert('X [' + x + '] X_AXIS '+ x_position + '  Y [' + y + '] Y_AXIS ' + y_position);
	//document.getElementById('TransactionReply').innerHTML='<div class="' + styleClass + '" style="position:absolute;left:' + x_position + ';top:' + y_position +'">' + words + '</div>';

	//document.write('<div class="ReplyMessage"> YES  </div>');
	//document.write('<div class="FDK8Text" >' + words + ' </div>');
	//document.write('<div class="' + styleClass + '" style="position:absolute;left:' + x_position + ';top:' + y_position +'">' + words + '</div>');

}

function fnPrintMessageToScreen(message, symbol, styleClass){
   htmlMessage = '';
   searchIndex = message.indexOf(symbol);
   message = message.substring( searchIndex + 1 );
   var hostReply = message.split (symbol);
   for (r=0;r<hostReply.length;r++){
       hostMessage = hostReply[r];
	   position    = hostMessage.substring(0, 2);
	   displayMessage = hostMessage.substring(2);
	   htmlMessage = htmlMessage + fnPrintScreen(position.substring(1), position.substring(0,1), displayMessage, styleClass);
	   
   }
   //alert(htmlMessage);
   //document.getElementById('TransactionReply').innerHTML=htmlMessage;
   document.writeln(htmlMessage);
}

//Images Effect --- ZOOM
var zoomfactor=0.05 //Enter factor (0.05=5%)

function zoomhelper(){
//alert(1)
//beginzoom=setInterval("zoomhelper()",100)
if ( (parseInt(whatcache.style.width)>10&&parseInt(whatcache.style.height)>10 && (parseInt(whatcache.style.width)<800 )) )
{
whatcache.style.width=parseInt(whatcache.style.width)+parseInt(whatcache.style.width)*zoomfactor*prefix
whatcache.style.height=parseInt(whatcache.style.height)+parseInt(whatcache.style.height)*zoomfactor*prefix
//alert(whatcache.style.width, whatcache.style.height);
}
}

function zoom(originalW, originalH, what, state){
//document.getElementById(what);
if (!document.all&&!document.getElementById)
return
whatcache=eval(document.getElementById(what))
//whatcache=eval("document.images."+what)
prefix=(state=="in")? 1 : -1
if (whatcache.style.width==""||state=="restore"){
whatcache.style.width=originalW+"px"
whatcache.style.height=originalH+"px"
if (state=="restore")
return

}
for (z=0;z<5;z++){
zoomhelper()
}
clearzoom()
//zoomhelper()


}

function clearzoom(){
if (window.beginzoom)
clearInterval(beginzoom)
}

function applyeffect(){
if (document.all && bodyid.filters){
var transition=Math.floor(Math.random()*23);
//alert(transition);
bodyid.filters.revealTrans.Transition=12;//transition;
bodyid.filters.revealTrans.stop()
bodyid.filters.revealTrans.apply()
}
}



function playeffect(){
if (document.all && bodyid.filters)
bodyid.filters.revealTrans.play()
}

function doeffect() {
applyeffect()
document.body.background= defaultPath + "images/bg2.png";
document.body.style.backgroundRepeat="no-repeat"; 
playeffect()
SetUserTheme();
}

function applyeffect2(){
if (document.all && tres.filters){
var transition=Math.floor(Math.random()*23);
//alert(transition);
tres.filters.revealTrans.Transition=12;//transition;
tres.filters.revealTrans.stop()
tres.filters.revealTrans.apply()
}
}



function playeffect2(){
if (document.all && tres.filters)
tres.filters.revealTrans.play()
}

function doeffect2() {
applyeffect2()
document.body.background= defaultPath +"images/bgbalancebox.png";
document.body.style.backgroundRepeat="no-repeat"; 
playeffect2()
}


