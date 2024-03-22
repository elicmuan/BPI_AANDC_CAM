var defaultPath, x_axis, y_axis, x_axis1, y_axis1;
//Images Effect --- ZOOM
var zoomfactor=0.05; //Enter factor (0.05=5%)
initVar();
changeStyle();
x_axis=new Array('@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?');
y_axis=new Array('@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O');

document.onkeydown = function()
{
 	var test_var=event.srcElement.tagName.toUpperCase();
 	if (event.srcElement.type) var test_type=event.srcElement.type.toUpperCase();
 	if ((event.keyCode == 8 && test_type != 'TEXT') || (event.keyCode == 116 ))
	{
	  event.returnValue=false;
	  event.keyCode = 0;
 	}
}

window.onerror = function()
	{return true;} // hide error from browser

function getUserTheme()
	{return "000";}

function changeStyle()
{ 
	var _head = document.getElementsByTagName('head')[0];
	var _link = document.createElement('link');
	_link.type = 'text/css';
	_link.href = defaultPath + 'style.css';
	_link.rel = 'stylesheet';
	_head.appendChild(_link);
}





function initVar()
	{defaultPath = 'theme/000/';}

function fnPrintScreen(x, y, words, styleClass, addWidth, addHeight)//FOR 800(x) * 600(y)  { 800/32  = 25,  600/16 = 37.5}
{
	x_position = 0;
	y_position = 0;
	for (i=0;i<x_axis.length;i++)
	{
	   if (x_axis[i]==x)
	   {x_position = i;}
	}
	for (j=0;j<y_axis.length;j++)
	{
	   if (y_axis[j]==y)
	   {y_position = j;}
	}
	x_position = x_position + addWidth;
	y_position = y_position + addHeight;
	x_position = x_position * 25;
	y_position = y_position * 37.5;
	htmlMessage = '<div class="' + styleClass + '" style="position:absolute;left:' + x_position + ';top:' + y_position +'">' + words + '</div>';
	return htmlMessage;
}

function fnPrintMessageToScreen(message, symbol, styleClass, addWidth, addHeight)
{
   var htmlMessage = '';
   var searchIndex = message.indexOf(symbol);
   var message = message.replace(/\s/g,"&nbsp;");
   if(searchIndex == -1)
		{htmlMessage = fnPrintScreen('@', '@', message, styleClass);}
   else
   {
		   message = message.substring(searchIndex + 1);
		   var hostReply = message.split(symbol);
		   for (var r = 0;r < hostReply.length; r++)
		   {
			   hostMessage = hostReply[r];
			   position = hostMessage.substring(0, 2);
			   displayMessage = hostMessage.substring(2);
			   htmlMessage = htmlMessage + fnPrintScreen(position.substring(1), position.substring(0,1), displayMessage, styleClass, addWidth, addHeight);
		   }
   }
   document.writeln(htmlMessage);
}

function zoomhelper()
{
	if ((parseInt(whatcache.style.width)>10 && parseInt(whatcache.style.height)>10 && (parseInt(whatcache.style.width)<800)))
	{
		whatcache.style.width=parseInt(whatcache.style.width)+parseInt(whatcache.style.width)*zoomfactor*prefix;
		whatcache.style.height=parseInt(whatcache.style.height)+parseInt(whatcache.style.height)*zoomfactor*prefix;
	}
}

function zoom(originalW, originalH, what, state)
{
	if (!document.all&&!document.getElementById)
	{return;}
	whatcache=eval(document.getElementById(what));
	prefix=(state=="in")? 1 : -1;
	if (whatcache.style.width=="" || state=="restore")
	{
		whatcache.style.width=originalW+"px";
		whatcache.style.height=originalH+"px";
		if (state=="restore")
			{return;}
	}
	for (z=0;z<5;z++)
		{zoomhelper();}
	clearzoom();
}

function clearzoom()
{
	if (window.beginzoom)
		{clearInterval(beginzoom);}
}

function applyeffect()
{
	if (document.all && bodyid.filters)
	{
		var transition=Math.floor(Math.random()*23);
		bodyid.filters.revealTrans.Transition=12;
		bodyid.filters.revealTrans.stop();
		bodyid.filters.revealTrans.apply();
	}
}

function playeffect()
{
	if (document.all && bodyid.filters)
	{bodyid.filters.revealTrans.play();}
}

function doeffect()
{
	applyeffect()
	document.body.background= defaultPath + "images/bg2.png";
	document.body.style.backgroundRepeat="no-repeat"; 
	playeffect();
}


/*function changeBgFunc(){



	var checktime = new Date().getHours();

		if(checktime < 12){
			document.getElementByID('bodyid').style.backgroundImage = url('C:/Users/cl185155/Desktop/Teene/html/theme/000/S1_afternoon.jpg');
			//document.body.background= defaultPath + "S1_morning.jpg";
			//document.body.style.backgroundImage = url('C:/Users/cl185155/Desktop/Teene/html/theme/000/S1_morning.jpg');
		}
		else if(checktime < 18){
			document.getElementByID('bodyid').style.backgroundImage = url('C:/Users/cl185155/Desktop/Teene/html/theme/000/S1_afternoon.jpg');
			//document.body.background= defaultPath + "S1_afternoon.jpg";
			//document.body.style.backgroundImage = url('C:/Users/cl185155/Desktop/Teene/html/theme/000/S1_afternoon.jpg');
		} 	
		else {
			document.getElementByID('bodyid').style.backgroundImage = url('C:/Users/cl185155/Desktop/Teene/html/theme/000/S1_afternoon.jpg');

			//document.body.background= defaultPath + "S1_evening.jpg";
			//document.body.style.backgroundImage = url('C:/Users/cl185155/Desktop/Teene/html/theme/000/S1_evening.jpg');

		}			

}*/
function changeBgFunc(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
}


function applyeffect2()
{
	if (document.all && tres.filters)
	{
		var transition=Math.floor(Math.random()*23);
		tres.filters.revealTrans.Transition=12;
		tres.filters.revealTrans.stop();
		tres.filters.revealTrans.apply();
	}
}

function playeffect2()
{
	if (document.all && tres.filters)
		{tres.filters.revealTrans.play();}
}

function doeffect2() 
{
	applyeffect2();
	document.body.background= defaultPath +"images/bgbalancebox.png";
	document.body.style.backgroundRepeat="no-repeat";
	playeffect2();
}

function hideFDKKey(message, searchWord, fdkDiv, fdkTextDiv)
{
   searchIndex = message.indexOf(searchWord);
   if(searchIndex == -1)
   {
       fdkDiv.style.display = "none";
	   fdkTextDiv.style.display = "none";
   }
}

function fnProcessAtSign(message)
{
	switch(message.substring(0,1))
	{
		case 'C'	: document.getElementById('MainText').innerHTML = message.substring(2); //Text 2
					  break;
		case 'B'	: document.getElementById('MainText1').innerHTML = message.substring(2); //Text 1
					  break;
		case 'D'	: document.getElementById('MainText2').innerHTML = message.substring(2); //Text 3
					  break;
	}
}
function fnProcessZero(message)
{
	switch(message.substring(0,1))
	{
		case 'E'	: document.getElementById('FDKA1String').innerHTML = message.substring(2); //FDK A sub-text 1
					  document.getElementById('FDK1').style.visibility = 'visible'; //FDK A button
					  break;
		case 'F'	: document.getElementById('FDKAString').innerHTML = message.substring(2); //FDK A text
					  document.getElementById('FDK1').style.visibility = 'visible'; //FDK A button
					  break;
		case 'G'	: document.getElementById('FDKA2String').innerHTML = message.substring(2); //FDK A sub-text 2
					  document.getElementById('FDK1').style.visibility = 'visible'; //FDK A button
					  break;
		case 'H'	: document.getElementById('FDKB1String').innerHTML = message.substring(2); //FDK B sub-text 1
					  document.getElementById('FDK2').style.visibility = 'visible'; //FDK B button
					  break;
		case 'I'	: document.getElementById('FDKBString').innerHTML = message.substring(2); //FDK B text
					  document.getElementById('FDK2').style.visibility = 'visible'; //FDK B button
					  break;
		case 'J'	: document.getElementById('FDKB2String').innerHTML = message.substring(2); //FDK B sub-text 2
					  document.getElementById('FDK2').style.visibility = 'visible'; //FDK B button
					  break;
		case 'K'	: document.getElementById('FDKC1String').innerHTML = message.substring(2); //FDK C sub-text 1
					  document.getElementById('FDK3').style.visibility = 'visible'; //FDK C button
					  break;
		case 'L'	: document.getElementById('FDKCString').innerHTML = message.substring(2); //FDK C text
					  document.getElementById('FDK3').style.visibility = 'visible'; //FDK C button
					  break;
		case 'M'	: document.getElementById('FDKC2String').innerHTML = message.substring(2); //FDK C sub-text 2
					  document.getElementById('FDK3').style.visibility = 'visible'; //FDK C button
					  break;
		case 'N'	: document.getElementById('FDKD1String').innerHTML = message.substring(2); //FDK D sub-text 1
					  document.getElementById('FDK4').style.visibility = 'visible'; // FDK D button
					  break;
		case 'O'	: document.getElementById('FDKDString').innerHTML = message.substring(2); //FDK D sub-text 2
					  document.getElementById('FDK4').style.visibility = 'visible'; // FDK D button
					  break;
	}
}

function fnProcessB(message)
{
	switch(message.substring(0,1))
	{
		case 'N'	: document.getElementById('FDKF1String').innerHTML = message.substring(2); //FDK F sub-text 1
					  document.getElementById('FDK8').style.visibility = 'visible'; //FDK F button
					  break;
		case 'O'	: document.getElementById('FDKFString').innerHTML = message.substring(2); //FDK F sub-text 2
					  document.getElementById('FDK8').style.visibility = 'visible'; //FDK F button
					  break;
		case 'K'	: document.getElementById('FDKG1String').innerHTML = message.substring(2); //FDK G sub-text 1
					  document.getElementById('FDK7').style.visibility = 'visible'; //FDK G button
					  break;
		case 'L'	: document.getElementById('FDKGString').innerHTML = message.substring(2); //FDK G text
					  document.getElementById('FDK7').style.visibility = 'visible'; //FDK G button
					  break;
		case 'M'	: document.getElementById('FDKG2String').innerHTML = message.substring(2); //FDK G sub-text 2
					  document.getElementById('FDK7').style.visibility = 'visible'; //FDK G button
					  break;
		case 'H'	: document.getElementById('FDKH1String').innerHTML = message.substring(2); //FDK H sub-text 1
					  document.getElementById('FDK6').style.visibility = 'visible'; //FDK H button
					  break;
		case 'I'	: document.getElementById('FDKHString').innerHTML = message.substring(2); //FDK H text
					  document.getElementById('FDK6').style.visibility = 'visible'; //FDK H button
					  break;
		case 'J'	: document.getElementById('FDKH2String').innerHTML = message.substring(2); //FDK H sub-text 2
					  document.getElementById('FDK6').style.visibility = 'visible'; //FDK H button
					  break;
		case 'E'	: document.getElementById('FDKI1String').innerHTML = message.substring(2); //FDK I sub-text 1
					  document.getElementById('FDK5').style.visibility = 'visible'; // FDK I button
					  break;
		case 'F'	: document.getElementById('FDKIString').innerHTML = message.substring(2); //FDK I text
					  document.getElementById('FDK5').style.visibility = 'visible'; // FDK I button
					  break;
		case 'G'	: document.getElementById('FDKI2String').innerHTML = message.substring(2); //FDK I sub-text 2
					  document.getElementById('FDK5').style.visibility = 'visible'; // FDK I button
					  break;
	}
}

x_axis1="@ABCDEFGHIJKLMNO0123456789:;<=>?";
y_axis1="@ABCDEFGHIJKLMNO";

function fnPrintReplyDataToScreen(message)
{
	var intResult1 = "", intResult2 = "";
	intResult1 = x_axis1.indexOf(message.substring(1,2));
	intResult2 = y_axis1.indexOf(message.substring(0,1));
	if (intResult1 >= 0 && intResult1 <= 15)
	{
		if (intResult2 >= 2 && intResult2 <= 4)
			{fnProcessAtSign(message);}
		else if (intResult2 >= 5 && intResult2 <= 15)
			{fnProcessB(message);}
	}
	else if (intResult1 >= 16 && intResult1 <= 32)
	{
		if (intResult2 >= 5 && intResult2 <= 15)
			{fnProcessZero(message);}
	}
}


function sentenceCase (str) {  
  if ((str===null) || (str===''))  
       return false;  
  else  
   str = str.toString();  
  
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});  
}  


function rem_mainText($message){
	$mainText = "";
	$fin_title = " ";
	
			for(i = 0; i < $message.length; i++){
					if($message.charAt(i)=="" && $message.charAt(i+2)=="@"){
						for(y = i+1; y<= $message.length; y++){
							if($message.charAt(y)=="" || $message.charAt(y+3)==")" || $message.charAt(y+3)!=""){
								$mainText = $mainText + " ";
								break;
							}
							else{
								$mainText = $mainText + $message.charAt(y);
							}
						}
					}
					else{
						
					}	
			}
			
			for(j = 0; j< $mainText.length; j++){
				if( $mainText.charAt(j+1)!="@" && $mainText.charAt(j)!="@"){
					$fin_title = $fin_title + $mainText.charAt(j);
				}
			}
	
		//$fin_title = $fin_title.replace("@"," ");
		//fin_title = fin_title.replace("","");
		return $fin_title;
}


function rem_Controls($message){
	$newmsg = "";
	$mainText = "";
	
	for(i = 0; i < $message.length; i++){
	
		if($message.charAt(i) == "" && $message.charAt(i+3) != "" && $message.charAt(i+3) != "" && $message.charAt(i+2) != "@" && $message.charAt(i+3) != "@" && $message.charAt(i+3) != "*" && $message.charAt(i+2) != "" && $message.charAt(i+3) != ""){
			//$newmsg = $newmsg + $message.charAt(i) + $message.charAt(i+1)+ $message.charAt(i+2)+ $message.charAt(i+3);
			
			$newmsg = $newmsg + "";
			for(x = i+1; x<= $message.length; x++){
				if($message.charAt(x)=="" || $message.charAt(x)==""){
					//$newmsg + "";
					break;
				}
				else{
					$newmsg = $newmsg + $message.charAt(x);
				}
			}
			
			//alert($message.charAt(i));
		}
		/*if($message.charAt(i)=="" ){
			$newmsg = $newmsg + $message.charAt(i);
		}*/
	}

	return $newmsg;
}

function fnRemoveCntrlChars(message1)
{
	var result1 = 0, result2 = 0, strFinal = "", message = message1;
	do 
	{
		result = message.indexOf("");
		result1 = message.indexOf("");

		if (result1 == -1 && result == -1)
			{break;}
		if (result >= 0)
		{
			if (result == 0)
				{strFinal = message.substring(result + 1);}
			else
				{strFinal = message.substring(0, result) + message.substring(result + 1);}
		}
		else
		{
			switch(message.charAt(result1 + 1))
			{
				case 'P':	result2 = message.indexOf("",result1 + 1);
							if (result1 == 0)
								{strFinal = message.substring(result2 + 1);}
							else
								{strFinal = message.substring(0, result1) + message.substring(result2 + 1);}
							break;
				case '[':	if (message.charAt(result1 + 4) == 'm' || message.charAt(result1 + 5) == 'z' || message.charAt(result1 + 4) == 'p')
							{
								if (result1 == 0)
								{
									if (message.charAt(result1 + 5) == 'z')
										{strFinal = message.substring(result1 + 6);}
									else
										{strFinal = message.substring(result1 + 5);}
								}
								else
								{
									if (message.charAt(result1 + 5) == 'z')
										{strFinal = message.substring(0, result1) + message.substring(result1 + 6);}
									else
										{strFinal = message.substring(0, result1) + message.substring(result1 + 5);}
								}
							}
							break;
				case '(':	if (result1 == 0)
							{
								if (message.charAt(result1 + 2) == '4' || message.charAt(result1 + 2) == '3')
									{strFinal = message.substring(result1 + 4);}
								else if (message.charAt(result1 + 2) == '5')
									{strFinal = message.substring(result1 + 5);}
								else
									{strFinal = message.substring(result1 + 3);}
							}
							else
							{
								if (message.charAt(result1 + 2) == '4' || message.charAt(result1 + 2) == '3')
									{strFinal = message.substring(0, result1) + message.substring(result1 + 4);}
								else if (message.charAt(result1 + 2) == '5')
									{strFinal = message.substring(0, result1) + message.substring(result1 + 5);}
								else
									{strFinal = message.substring(0, result1) + message.substring(result1 + 3);}
							}
							break;
				case ')':	if (result1 == 0)
							{
								if (message.charAt(result1 + 2) == '4' || message.charAt(result1 + 2) == '3')
									{strFinal = message.substring(result1 + 4);}
								else
									{strFinal = message.substring(result1 + 3);}
							}
							else
							{
								if (message.charAt(result1 + 2) == '4' || message.charAt(result1 + 2) == '3')
									{strFinal = message.substring(0, result1) + message.substring(result1 + 4);}
								else
									{strFinal = message.substring(0, result1) + message.substring(result1 + 3);}
							}
							break;
			}
		}
		message = strFinal;
	}
	while (result1 != -1);
	return message;
}


