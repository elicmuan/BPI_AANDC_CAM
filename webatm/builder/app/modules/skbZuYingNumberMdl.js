/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_6add=["app","../../config/zhuyinKeyboard","SoftKeyboardZuYingNumberMdl","module","!","@","#","$","%","^","&","*","(",")",".","default","Model","extend","Collection","View","html","#softKeyboardZuYingNumber","template","class","attr","$el","showZuYing","FDKPress","off","BroadCaster","PinPadPress","ResetKeyboard","setSKBMode","undelegateEvents","unbind","on","UserInput","clickOutSideContainer","changeCase","showSymbol","showAlpha","toggleZhuyin","toggleUp","toggleDown","clearAll","backSpace","toUpperCase","ALWAYSSHOW","Beep","DisableKeyboard","trigger","length","val","#zhuyinNumberInput","",".zhuyinResult","softkeyboardReturn","CLEAR","KeepTimerAlive","substring","BACKSPACE","keymap","undefined","split","generateMatchCharacter","id","currentTarget","HIDEKEYBOARD","SYMBOL_","indexOf","ZY_","CH_","_","key",".alphabetPad","uppercase","hasClass","lowercase","addClass","removeClass","toLowerCase","each",".alphabet","find","hide","#softKeyboardZuYingNumberBtnContainer .alphabetPad, #softKeyboardZuYingNumberBtnContainer .zuyingPad, #softKeyboardZuYingNumberBtnContainer .zhuyinOutput, #softKeyboardZuYingNumberBtnContainer .zhuyinControl","show","#softKeyboardZuYingNumberBtnContainer .symbolPad, #softKeyboardZuYingNumberBtnContainer .numericPad, #softKeyboardZuYingNumberBtnContainer .alphabetControl","zuying","#softKeyboardZuYingNumberBtnContainer","#softKeyboardZuYingNumberBtnContainer .symbolPad, #softKeyboardZuYingNumberBtnContainer .zuyingPad, #softKeyboardZuYingNumberBtnContainer .zhuyinOutput, #softKeyboardZuYingNumberBtnContainer .zhuyinControl","#softKeyboardZuYingNumberBtnContainer .alphabetPad, #softKeyboardZuYingNumberBtnContainer .numericPad, #softKeyboardZuYingNumberBtnContainer .alphabetControl","#softKeyboardZuYingNumberBtnContainer .alphabetPad, #softKeyboardZuYingNumberBtnContainer .numericPad, #softKeyboardZuYingNumberBtnContainer .alphabetControl, #softKeyboardZuYingNumberBtnContainer .symbolPad","#softKeyboardZuYingNumberBtnContainer .zuyingPad, #softKeyboardZuYingNumberBtnContainer .zhuyinOutput, #softKeyboardZuYingNumberBtnContainer .zhuyinControl","<div>","<div class='page","_row","'","style='display: none;'",">","<a class='skbZhuyinToggle ","skbZhuyin_Open ","skb_row1 skb_col9 twoSpace' data-toggle='","'></a></div><div class='page","_rowother' style='display: none;'>","<a id='CH_","' class='softKeyboardZuYing_CH skb_row"," skb_col"," skb_page","'>","</a>","<span class=\"skbZhuyin_up skb_row5 skb_col7 twoSpace\"></span>","<a class=\"skbZhuyin_up skb_row5 skb_col7 twoSpace\" data-toggle=\"","\"></a>","<a class=\"skbZhuyin_down skb_row5 skb_col9 twoSpace\" data-toggle=\"","</div>","<span class=\"skbZhuyin_down skb_row5 skb_col9 twoSpace\"></span>","generateMatchCharacter error: ","message","Trace","skbZhuyin_Open","toggleClass",".page","data-toggle","_rowother","_row1, .page","mode","ItemView"];define([_$_6add[0],_$_6add[1]],function(_0x182D9,_0x1852B){var _0x18AD7=_0x182D9[_$_6add[3]](_$_6add[2]);var _0x184E9=[_$_6add[4],_$_6add[5],_$_6add[6],_$_6add[7],_$_6add[8],_$_6add[9],_$_6add[10],_$_6add[11],_$_6add[12],_$_6add[13],_$_6add[14]];var _0x18465=[];var _0x18A95=_$_6add[15];var _0x1831B=_$_6add[15];_0x18AD7[_$_6add[16]]= Backbone[_$_6add[16]][_$_6add[17]]({});_0x18AD7[_$_6add[18]]= Backbone[_$_6add[18]][_$_6add[17]]({model:_0x18AD7[_$_6add[16]]});_0x18AD7[_$_6add[19]]= Marionette[_$_6add[127]][_$_6add[17]]({template:_[_$_6add[22]]($(_$_6add[21])[_$_6add[20]]()),className:$(_$_6add[21])[_$_6add[24]](_$_6add[23]),render:function(){this[_$_6add[25]][_$_6add[20]](this[_$_6add[22]]());var _0x1856D=this;setTimeout(function(){_0x1856D[_$_6add[26]]()},500);return this},close:function(){_0x182D9[_$_6add[29]][_$_6add[28]](_$_6add[27],this[_$_6add[27]],this);_0x182D9[_$_6add[29]][_$_6add[28]](_$_6add[30],this[_$_6add[30]],this);_0x182D9[_$_6add[29]][_$_6add[28]](_$_6add[31],this[_$_6add[31]],this);_0x182D9[_$_6add[29]][_$_6add[28]](_$_6add[32],this[_$_6add[32]],this);this[_$_6add[33]]();this[_$_6add[34]]()},initialize:function(){_0x182D9[_$_6add[29]][_$_6add[35]](_$_6add[27],this[_$_6add[27]],this);_0x182D9[_$_6add[29]][_$_6add[35]](_$_6add[30],this[_$_6add[30]],this);_0x182D9[_$_6add[29]][_$_6add[35]](_$_6add[31],this[_$_6add[31]],this);_0x182D9[_$_6add[29]][_$_6add[35]](_$_6add[32],this[_$_6add[32]],this)},FDKPress:function(_0x1839F){},PinPadPress:function(_0x1839F){},events:{"click a":_$_6add[36],"click #softKeyboardZuYingNumberFakeContainer":_$_6add[37],"click #softKeyboardZuYingNumberBtnContainer #CASE":_$_6add[38],"click #softKeyboardZuYingNumberBtnContainer #SYMBOL":_$_6add[39],"click #softKeyboardZuYingNumberBtnContainer #ALPHA":_$_6add[40],"click #softKeyboardZuYingNumberBtnContainer #CHINESE":_$_6add[26],"click #softKeyboardZuYingNumberBtnContainer .skbZhuyinToggle":_$_6add[41],"click #softKeyboardZuYingNumberBtnContainer a.skbZhuyin_up":_$_6add[42],"click #softKeyboardZuYingNumberBtnContainer a.skbZhuyin_down":_$_6add[43],"click #softKeyboardZuYingNumberBtnContainer #CLEAR_ZY":_$_6add[44],"click #softKeyboardZuYingNumberBtnContainer #BACKSPACE_ZY":_$_6add[45],"click #softKeyboardZuYingNumberBtnContainer .softKeyboardZuYing_SPACE":_$_6add[36]},clickOutSideContainer:function(){if(String(_0x1831B)[_$_6add[46]]()!= _$_6add[47]){ACCoreJS[_$_6add[48]]();this[_$_6add[31]]();_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[49]);_0x182D9[_$_6add[29]][_$_6add[28]](_$_6add[27],this[_$_6add[27]],this);_0x182D9[_$_6add[29]][_$_6add[28]](_$_6add[30],this[_$_6add[30]],this)}},clearAll:function(){if($(_$_6add[53])[_$_6add[52]]()[_$_6add[51]]> 0){$(_$_6add[53])[_$_6add[52]](_$_6add[54]);$(_$_6add[55])[_$_6add[20]](_$_6add[54])}else {_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[56],{key:_$_6add[57]});return};_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[58]);ACCoreJS[_$_6add[48]]()},backSpace:function(_0x183E1){if($(_$_6add[53])[_$_6add[52]]()[_$_6add[51]]> 0){$(_$_6add[53])[_$_6add[52]](String($(_$_6add[53])[_$_6add[52]]())[_$_6add[59]](0,String($(_$_6add[53])[_$_6add[52]]())[_$_6add[51]]- 1))}else {_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[56],{key:_$_6add[60]});return};$(_$_6add[55])[_$_6add[20]](_$_6add[54]);result= _0x1852B[_$_6add[61]][$(_$_6add[53])[_$_6add[52]]()];if( typeof result== _$_6add[62]|| result== _$_6add[62]){_0x18465= [];$(_$_6add[55])[_$_6add[20]](_$_6add[54])}else {_0x18465= result[_$_6add[63]](_$_6add[54]);$(_$_6add[55])[_$_6add[20]](this[_$_6add[64]](_0x18465))};keyValue= _$_6add[54];_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[58]);ACCoreJS[_$_6add[48]]()},UserInput:function(_0x183E1){if(_0x183E1[_$_6add[66]][_$_6add[65]]== _$_6add[67]){_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[49])}else {var _0x18675=_0x183E1[_$_6add[66]][_$_6add[65]];var _0x18633=String(_0x183E1[_$_6add[66]][_$_6add[65]])[_$_6add[69]](_$_6add[68]);var _0x186F9=String(_0x183E1[_$_6add[66]][_$_6add[65]])[_$_6add[69]](_$_6add[70]);var _0x185F1=String(_0x183E1[_$_6add[66]][_$_6add[65]])[_$_6add[69]](_$_6add[71]);if(_0x18633>= 0){var _0x185AF=_0x18675[_$_6add[63]](_$_6add[72]);_0x18675= _0x184E9[_0x185AF[1]]}else {if(_0x186F9>= 0){var _0x185AF=_0x18675[_$_6add[63]](_$_6add[72]);var _0x186B7=_$_6add[54];_0x18675= _0x1852B[_$_6add[73]][_0x185AF[1]];$(_$_6add[53])[_$_6add[52]]($(_$_6add[53])[_$_6add[52]]()+ _0x18675);_0x186B7= _0x1852B[_$_6add[61]][$(_$_6add[53])[_$_6add[52]]()];if( typeof _0x186B7== _$_6add[62]|| _0x186B7== _$_6add[62]){_0x18465= [];$(_$_6add[55])[_$_6add[20]](_$_6add[54])}else {_0x18465= _0x186B7[_$_6add[63]](_$_6add[54]);$(_$_6add[55])[_$_6add[20]](this[_$_6add[64]](_0x18465))};_0x18675= _$_6add[54]}else {if(_0x185F1>= 0){var _0x185AF=_0x18675[_$_6add[63]](_$_6add[72]);_0x18675= _0x18465[_0x185AF[1]];_0x18465= [];$(_$_6add[53])[_$_6add[52]](_$_6add[54]);$(_$_6add[55])[_$_6add[20]](_$_6add[54])}}};_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[56],{key:_0x18675})};_0x182D9[_$_6add[29]][_$_6add[50]](_$_6add[58]);ACCoreJS[_$_6add[48]]()},changeCase:function(_0x183E1){var _0x1873B=$(_$_6add[74]);if(_0x1873B[_$_6add[76]](_$_6add[75])){_0x1873B[_$_6add[79]](_$_6add[75])[_$_6add[78]](_$_6add[77])}else {_0x1873B[_$_6add[79]](_$_6add[77])[_$_6add[78]](_$_6add[75])};$(_0x1873B)[_$_6add[83]](_$_6add[82])[_$_6add[81]](function(){var _0x1877D=$(this)[_$_6add[24]](_$_6add[65]);if(_0x1873B[_$_6add[76]](_$_6add[75])){$(this)[_$_6add[24]](_$_6add[65],_0x1877D[_$_6add[46]]())}else {$(this)[_$_6add[24]](_$_6add[65],_0x1877D[_$_6add[80]]())}})},showSymbol:function(){$(_$_6add[85])[_$_6add[84]]();$(_$_6add[87])[_$_6add[86]]();$(_$_6add[89])[_$_6add[79]](_$_6add[88])},showAlpha:function(){$(_$_6add[90])[_$_6add[84]]();$(_$_6add[91])[_$_6add[86]]();$(_$_6add[89])[_$_6add[79]](_$_6add[88])},showZuYing:function(){$(_$_6add[92])[_$_6add[84]]();$(_$_6add[93])[_$_6add[86]]();$(_$_6add[89])[_$_6add[78]](_$_6add[88])},generateMatchCharacter:function(_0x188C7){var _0x18801=_$_6add[54];var _0x18909=1;var _0x187BF=1;var _0x18885=1;var _0x1894B=_0x188C7[_$_6add[51]];try{_0x18801+= _$_6add[94];for(var _0x18843=0;_0x18843< _0x1894B;_0x18843++){if(_0x18909== 1&& _0x187BF== 1){_0x18801+= _$_6add[95]+ _0x18885+ _$_6add[96]+ _0x18909+ _$_6add[97];if(_0x18885> 1){_0x18801+= _$_6add[98]};_0x18801+= _$_6add[99]};if(_0x1894B> 10&& _0x18909== 1&& _0x187BF== 9){_0x18801+= _$_6add[100];if(_0x18885== 1){_0x18801+= _$_6add[101]};_0x18801+= _$_6add[102]+ _0x18885+ _$_6add[103]+ _0x18885+ _$_6add[104];_0x18909++;_0x187BF= 1}else {if((_0x18909== 2|| _0x18909== 3|| _0x18909== 4)&& _0x187BF== 11){_0x18909++;_0x187BF= 1}};_0x18801+= _$_6add[105]+ _0x18843+ _$_6add[106]+ _0x18909+ _$_6add[107]+ _0x187BF+ _$_6add[108]+ _0x18885+ _$_6add[109]+ _0x188C7[_0x18843]+ _$_6add[110];_0x187BF++;if(_0x1894B> 10&& _0x18909== 1&& _0x187BF< 9&& _0x18843== (_0x1894B- 1)){_0x18801+= _$_6add[100];if(_0x18885== 1){_0x18801+= _$_6add[101]};_0x18801+= _$_6add[102]+ _0x18885+ _$_6add[103]+ _0x18885+ _$_6add[104]};if(_0x18909== 5&& _0x187BF== 7){if(_0x18843!= (_0x1894B- 1)){if(_0x18885== 1){_0x18801+= _$_6add[111]}else {_0x18801+= _$_6add[112]+ (_0x18885- 1)+ _$_6add[113]};_0x18801+= _$_6add[114]+ (_0x18885+ 1)+ _$_6add[113];_0x18801+= _$_6add[115]};_0x18909= 1;_0x187BF= 1;_0x18885++};if(_0x1894B> 44&& _0x18843== (_0x1894B- 1)){if(_0x18885== 1){_0x18801+= _$_6add[111]}else {_0x18801+= _$_6add[112]+ (_0x18885- 1)+ _$_6add[113]};_0x18801+= _$_6add[116];_0x18801+= _$_6add[115]}}}catch(e){_0x18801= _$_6add[54];ACCoreJS[_$_6add[119]](_$_6add[117]+ e[_$_6add[118]])};return _0x18801},toggleZhuyin:function(_0x183E1){var _0x1898D=$(_0x183E1[_$_6add[66]]);_0x1898D[_$_6add[121]](_$_6add[120]);if(_0x1898D[_$_6add[76]](_$_6add[120])){$(_$_6add[122]+ _0x1898D[_$_6add[24]](_$_6add[123])+ _$_6add[124])[_$_6add[84]]()}else {$(_$_6add[122]+ _0x1898D[_$_6add[24]](_$_6add[123])+ _$_6add[124])[_$_6add[86]]()}},pageNaviZhuyin:function(_0x183E1){var _0x1898D=$(_0x183E1[_$_6add[66]]);_0x1898D[_$_6add[121]](_$_6add[120]);if(_0x1898D[_$_6add[76]](_$_6add[120])){$(_$_6add[122]+ _0x1898D[_$_6add[24]](_$_6add[123])+ _$_6add[124])[_$_6add[84]]()}else {$(_$_6add[122]+ _0x1898D[_$_6add[24]](_$_6add[123])+ _$_6add[124])[_$_6add[86]]()}},toggleUp:function(_0x183E1){var _0x1898D=$(_0x183E1[_$_6add[66]]);var _0x18A11=_0x1898D[_$_6add[24]](_$_6add[123]);var _0x189CF=parseInt(_0x1898D[_$_6add[24]](_$_6add[123]))+ 1;if(parseInt(_0x18A11)<= 0){_0x18A11= 1};$(_$_6add[122]+ _0x18A11+ _$_6add[125]+ _0x18A11+ _$_6add[124])[_$_6add[86]]();$(_$_6add[122]+ _0x189CF+ _$_6add[125]+ _0x189CF+ _$_6add[124])[_$_6add[84]]()},toggleDown:function(_0x183E1){var _0x1898D=$(_0x183E1[_$_6add[66]]);var _0x189CF=parseInt(_0x1898D[_$_6add[24]](_$_6add[123]))- 1;var _0x18A53=_0x1898D[_$_6add[24]](_$_6add[123]);$(_$_6add[122]+ _0x18A53+ _$_6add[125]+ _0x18A53+ _$_6add[124])[_$_6add[86]]();$(_$_6add[122]+ _0x189CF+ _$_6add[125]+ _0x189CF+ _$_6add[124])[_$_6add[84]]()},ResetKeyboard:function(){this[_$_6add[26]]();$(_$_6add[53])[_$_6add[52]](_$_6add[54]);$(_$_6add[55])[_$_6add[20]](_$_6add[54])},setSKBMode:function(_0x1839F){if( typeof _0x1839F!= _$_6add[62]){_0x1831B= _0x1839F[_$_6add[126]]}else {_0x1831B= _$_6add[15]}}});return _0x18AD7})