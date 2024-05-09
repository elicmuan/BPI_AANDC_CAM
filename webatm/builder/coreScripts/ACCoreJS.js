	//window.onerror=function(msg, url, linenumber)
	//{
	//	parent.frames["leftFrame"].globalException(msg, url, linenumber);
	//	parent.frames["rightFrame"].location.href="../../error.html";
	//	return true;
	//}

  	var finalArryL1;
	var finalArryL2;
	var finalFormName;
	var printlangIdx;
	var isWaitForResponse = "0";
	var backgroundScreen = "";
	var plswait = "";
	var createComplete = 0;
	var x;
	var printModeType = "";
	var allowClearDS = "";
	var t1;
	var beepSound = "1";
	var keyActive = 0;
	var FDKKey = false;
	var createCompleteFailureCounter = 0;
	var alertTimeOut;
	var interNaviEvent = ""; //Added 
	var allowGetKeyData = false;
	var production = "0";
	var keyDataType = "";
	var currentKeyDataVal = "";
	var applicationReady = false;
	var beepAudio;
	
	try {
		beepAudio = new Audio("projectAssets/beep.mp3");
	} catch (e) {
		
	}

	var ACCoreJS = {
		SetKeyActive : function()
		{
			keyActive = 0;
		},

	 	ReactiveFDKAfterEnter:function()
		{
			this.jsGetKeyData();
			keyActive = 1;
		},

		SetCurrentKeyDataType : function(val)
		{
			this.Trace("SetCurrentKeyDataType : " + val);
			keyDataType = val;
		},

		GetKeyData:function(val)
		{
			this.Trace("GetKeyData : " +  val + " , " + currentKeyDataVal + " , " + keyActive + " , " + allowGetKeyData);

			if(currentKeyDataVal != val && keyActive == 1)
			{
				keyActive = 0;	
				this.keyboardCancel();
			}

			if(keyActive == 0  && allowGetKeyData == true) 
			{
				currentKeyDataVal = val;
				keyActive = 1;	
				processPinPadFDKSimulationButton(val , "1");
				this.jsGetKeyData(val);		  				
			}
		},

		GetPinEntry:function(pinStatus , keyValue)
		{
			//SAGetPinEntry();
			if(keyActive == 0 && allowGetKeyData == true)
			{
				this.Trace("GetPinEntry Status: " + pinStatus + " : " + keyValue);
				processPinPadFDKSimulationButton(keyValue);
				//this.jsGetKeyData();
				keyActive = 1;
			}
		},

		SetBufferValue : function(key, val)
		{

		},

		SetUCDIStr:function(CDI, val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetUCDIStr(CDI,val);
		},

		SetUCDIIntegar:function(CDI,val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetUCDIIntegar(CDI,val);
		},

		SetComString:function(key, val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetComString(key,val);
		},

		SetComInt:function(key, val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetComInt(key,val);
		},

		GetBufferValue : function(key)
		{
			return this.GetUCDIString(key);
		},

		GetUCDIString:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetUCDIString(CDI);
			this.Trace("GetUCDIString : " + CDI);
			if(CDI == "TXACC")
			{
				return "12345678";
			}
			else if(CDI == "TXAMT")
			{
				return "1000";
			}
			else if(CDI == "ssmglanguagesetting")
			{
				return "0,500,1000,1500,2000";
			}
			else if(CDI == "ssmgaccnumlist")
			{
				return "<accounts><from><account><bankId>013</bankId><no>0000001506017562</no></account></from></accounts>";
				 // return "<accounts><from><account><bankId>013</bankId><no>0000001035000328</no></account><account><bankId>013</bankId><no>0000001506108281</no></account><account><bankId>013</bankId><no>0000001506108299</no></account><account><bankId>013</bankId><no>0000001035007322</no></account><account><bankId>013</bankId><no>0000032506030870</no></account><account><bankId>013</bankId><no>0000032035004890</no></account><account><bankId>013</bankId><no>0000032506061686</no></account><account><bankId>013</bankId><no>0000032506061694</no></account></from><to><account><bankId>013</bankId><no>0000001506108281</no></account><account><bankId>013</bankId><no>0000001506108299</no></account><account><bankId>013</bankId><no>0000001035007322</no></account><account><bankId>013</bankId><no>0000032506030870</no></account><account><bankId>013</bankId><no>0000032035004890</no></account><account><bankId>013</bankId><no>0000032506061686</no></account><account><bankId>013</bankId><no>0000032506061694</no></account><account><bankId>444</bankId><no>0000000000125415</no></account></to></accounts>";

				 //return parent.frames["leftFrame"].GetSSMGAcctList(CDI);
			}
			else if(CDI == "BANKID_LIST")
			{
				return "<banks><bank><bankId>004</bankId><bankName>台灣銀行</bankName></bank><bank><bankId>005</bankId><bankName>土地銀行</bankName></bank><bank><bankId>006</bankId><bankName>合庫銀行</bankName></bank><bank><bankId>007</bankId><bankName>第一銀行</bankName></bank><bank><bankId>008</bankId><bankName>華南銀行</bankName></bank><bank><bankId>009</bankId><bankName>彰化銀行</bankName></bank><bank><bankId>011</bankId><bankName>上海銀行</bankName></bank><bank><bankId>012</bankId><bankName>台北富邦</bankName></bank><bank><bankId>013</bankId><bankName>國泰世華</bankName></bank><bank><bankId>016</bankId><bankName>高雄銀行</bankName></bank><bank><bankId>017</bankId><bankName>兆豐商銀</bankName></bank><bank><bankId>018</bankId><bankName>農業金庫</bankName></bank><bank><bankId>021</bankId><bankName>花旗台灣</bankName></bank><bank><bankId>022</bankId><bankName>美國銀行</bankName></bank><bank><bankId>025</bankId><bankName>首都銀行</bankName></bank><bank><bankId>039</bankId><bankName>澳盛(台灣)</bankName></bank><bank><bankId>040</bankId><bankName>中華開發</bankName></bank><bank><bankId>050</bankId><bankName>台灣企銀</bankName></bank><bank><bankId>052</bankId><bankName>渣打銀行</bankName></bank><bank><bankId>053</bankId><bankName>台中商銀</bankName></bank><bank><bankId>054</bankId><bankName>京城商銀</bankName></bank><bank><bankId>072</bankId><bankName>德意志銀行</bankName></bank><bank><bankId>075</bankId><bankName>東亞銀行</bankName></bank><bank><bankId>081</bankId><bankName>匯豐銀行</bankName></bank><bank><bankId>101</bankId><bankName>瑞興商銀</bankName></bank><bank><bankId>102</bankId><bankName>華泰銀行</bankName></bank><bank><bankId>103</bankId><bankName>新光銀行</bankName></bank><bank><bankId>104</bankId><bankName>台北五信</bankName></bank><bank><bankId>106</bankId><bankName>台北九信</bankName></bank><bank><bankId>108</bankId><bankName>陽信銀行</bankName></bank><bank><bankId>114</bankId><bankName>基隆一信</bankName></bank><bank><bankId>115</bankId><bankName>基隆二信</bankName></bank><bank><bankId>118</bankId><bankName>板信銀行</bankName></bank><bank><bankId>119</bankId><bankName>淡水一信</bankName></bank><bank><bankId>120</bankId><bankName>淡水信合社</bankName></bank><bank><bankId>124</bankId><bankName>宜蘭信合社</bankName></bank><bank><bankId>127</bankId><bankName>桃園信合社</bankName></bank><bank><bankId>130</bankId><bankName>新竹一信</bankName></bank><bank><bankId>132</bankId><bankName>新竹三信</bankName></bank><bank><bankId>135</bankId><bankName>新竹十信</bankName></bank><bank><bankId>142</bankId><bankName>豐原信合社</bankName></bank><bank><bankId>146</bankId><bankName>台中二信</bankName></bank><bank><bankId>147</bankId><bankName>三信銀行</bankName></bank><bank><bankId>158</bankId><bankName>彰化一信</bankName></bank><bank><bankId>161</bankId><bankName>彰化五信</bankName></bank><bank><bankId>162</bankId><bankName>彰化六信</bankName></bank><bank><bankId>163</bankId><bankName>彰化十信</bankName></bank><bank><bankId>165</bankId><bankName>鹿港信合社</bankName></bank><bank><bankId>176</bankId><bankName>嘉義一信</bankName></bank><bank><bankId>178</bankId><bankName>嘉義三信</bankName></bank><bank><bankId>188</bankId><bankName>台南三信</bankName></bank><bank><bankId>191</bankId><bankName>台南六信</bankName></bank><bank><bankId>192</bankId><bankName>台南七信</bankName></bank><bank><bankId>198</bankId><bankName>鳳山信合社</bankName></bank><bank><bankId>202</bankId><bankName>高新銀行</bankName></bank><bank><bankId>203</bankId><bankName>高雄二信</bankName></bank><bank><bankId>204</bankId><bankName>高雄三信</bankName></bank><bank><bankId>215</bankId><bankName>花蓮一信</bankName></bank><bank><bankId>216</bankId><bankName>花蓮二信</bankName></bank><bank><bankId>222</bankId><bankName>澎湖一信</bankName></bank><bank><bankId>223</bankId><bankName>澎湖二信</bankName></bank><bank><bankId>224</bankId><bankName>金門信合社</bankName></bank><bank><bankId>605</bankId><bankName>高雄地區農會</bankName></bank><bank><bankId>625</bankId><bankName>臺中地區農會</bankName></bank><bank><bankId>700</bankId><bankName>中華郵政</bankName></bank><bank><bankId>803</bankId><bankName>聯邦銀行</bankName></bank><bank><bankId>805</bankId><bankName>遠東銀行</bankName></bank><bank><bankId>806</bankId><bankName>元大銀行</bankName></bank><bank><bankId>807</bankId><bankName>永豐銀行</bankName></bank><bank><bankId>808</bankId><bankName>玉山銀行</bankName></bank><bank><bankId>809</bankId><bankName>凱基銀行</bankName></bank><bank><bankId>810</bankId><bankName>星展寶</bankName></bank><bank><bankId>812</bankId><bankName>台新銀行</bankName></bank><bank><bankId>814</bankId><bankName>大眾銀行</bankName></bank><bank><bankId>815</bankId><bankName>日盛銀行</bankName></bank><bank><bankId>816</bankId><bankName>安泰銀行</bankName></bank><bank><bankId>822</bankId><bankName>中國信託</bankName></bank><bank><bankId>922</bankId><bankName>臺南地區農會</bankName></bank></banks>";
			}
			else if(CDI == "InterActFavorList")
			{
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 50,000,808,0009993968000206,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel3>NT$ 50,000</favlabel3><favlabel5>808-0009993968000206</favlabel5><BKID>808</BKID><TXAMT>50000</TXAMT><TXACC>0009993968000206</TXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000032506030870,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000032506030870</favlabel5><BKID>013</BKID><TXACC>0000032506030870</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山銀行,NT$ 5,000,扣款帳號,013,0000001035000328,轉入帳號,808,0000000001000000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山銀行</favlabel2><favlabel3>NT$ 5,000</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000001000000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000001000000</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,台中商銀,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,053,0000000002555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>台中商銀</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>053-0000000002555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>053</TRBKID><TRTXACC>0000000002555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,0000000000050000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000000050000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000000050000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,0000002558800000,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000002558800000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000002558800000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山銀行,NT$ 5,000,扣款帳號,013,0000001035000328,轉入帳號,808,0000000001000000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山銀行</favlabel2><favlabel3>NT$ 5,000</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000001000000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000001000000</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,台中商銀,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,053,0000000002555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>台中商銀</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>053-0000000002555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>053</TRBKID><TRTXACC>0000000002555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,0000000000050000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000000050000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000000050000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,0000002558800000,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000002558800000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000002558800000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
	//			return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 2500,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel3>NT$ 2500</favlabel3><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXAMT>2500</TXAMT><TXACC>0000001035000328</TXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 5,000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel3>NT$ 5,000</favlabel3><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
	//			return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001035000328,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXACC>0000001035000328</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,扣款帳號,013,0000001035000328,轉入帳號,018,50000000,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>018-50000000</favlabel7><BKID>013</BKID><TXAMT>1233</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>018</TRBKID><TRTXACC>50000000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,2500000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,扣款帳號,013,0000001035000328,轉入帳號,018,50000000,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>018-50000000</favlabel7><BKID>013</BKID><TXAMT>1233</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>018</TRBKID><TRTXACC>50000000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,2500000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,扣款帳號,013,0000001035000328,轉入帳號,018,50000000,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>018-50000000</favlabel7><BKID>013</BKID><TXAMT>1233</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>018</TRBKID><TRTXACC>50000000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,155,855266558855,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>155-855266558855</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>155</TRBKID><TRTXACC>855266558855</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,Credit Card Payment,扣款帳號,013,0000001035000328,轉入帳號,808,12654789632458,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel2>Credit Card Payment</favlabel2><favlabel3/><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-12654789632458</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>12654789632458</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 30,000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 30,000</favlabel2><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXAMT>30000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>undefined</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,155,855266558855,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>155-855266558855</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>155</TRBKID><TRTXACC>855266558855</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,Credit Card Payment,扣款帳號,013,0000001035000328,轉入帳號,808,12654789632458,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel2>Credit Card Payment</favlabel2><favlabel3/><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-12654789632458</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>12654789632458</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
//				return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,扣款帳號,808,0009302966000276,轉入帳號,808,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>808-0009302966000276</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-</favlabel7><BKID>808</BKID><TXAMT>undefined</TXAMT><TXACC>0009302966000276</TXACC><TRBKID>808</TRBKID><TRTXACC/><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,交易帳號,013,0000001506017561,OPCODE,BALINQ</LabelName><infoList><info><key>label1</key><value>餘額查詢</value></info><info><key>label2</key><value>Balance Inquiry</value></info><info><key>fromAcct</key><value>0000001506017561</value></info><info><key>fromAcctLbl</key><value>交易帳號</value></info><info><key>opCode</key><value>BALINQ</value></info><info><key>ServiceType</key><value>BALINQ</value></info><info><key>ACTRX_TYPE</key><value>BALINQ</value></info><info><key>BANKID</key><value>013</value></info><info><key>CARD-ISSUE</key><value>ONUS</value></info></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,扣款帳號,808,0009302966000276,轉入帳號,808,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>808-0009302966000276</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-</favlabel7><BKID>808</BKID><TXAMT>undefined</TXAMT><TXACC>0009302966000276</TXACC><TRBKID>808</TRBKID><TRTXACC></TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,交易帳號,013,0000001506017561,OPCODE,BALINQ</LabelName><infoList><info><key>label1</key><value>餘額查詢</value></info><info><key>label2</key><value>Balance Inquiry</value></info><info><key>fromAcct</key><value>0000001506017561</value></info><info><key>fromAcctLbl</key><value>交易帳號</value></info><info><key>opCode</key><value>BALINQ</value></info><info><key>ServiceType</key><value>BALINQ</value></info><info><key>ACTRX_TYPE</key><value>BALINQ</value></info><info><key>BANKID</key><value>013</value></info><info><key>CARD-ISSUE</key><value>ONUS</value></info></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode></opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,Withdrawal,交易帳號,013,0000001506017561,提款金額,1000,OPCODE,CWDCWD</LabelName><infoList><info><key>label1</key><value>提款</value></info><info><key>label2</key><value>Withdrawal</value></info><info><key>fromAcct</key><value>0000001506017561</value></info><info><key>fromAcctLbl</key><value>交易帳號</value></info><info><key>toAcct</key><value>1000</value></info><info><key>toAcctLbl</key><value>提款金額</value></info><info><key>opCode</key><value>CWDCWD</value></info><info><key>ACTRX_TYPE</key><value>CWDCWD</value></info><info><key>TX-AMT</key><value>1000</value></info><info><key>Serv_Type</key><value>CWDCWD</value></info><info><key>BANKID</key><value>013</value></info></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
				return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>Cash Withdrawal</favlabel1><favlabel2></favlabel2><favlabel3>$ 1000</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>Cash Deposit</favlabel1><favlabel2></favlabel2><favlabel3>$ 1000</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>Balance Enquiry</favlabel1><favlabel2></favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>Cash Withdrawal</favlabel1><favlabel2></favlabel2><favlabel3>$ 200</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>Transfer</favlabel1><favlabel2>DBS</favlabel2><favlabel3>undefined</favlabel3><favlabel4>From Acc</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>To   Acc</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>OCBC Card Payment</favlabel1><favlabel2></favlabel2><favlabel4>From Acc</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>To   Acc</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>Cash Withdrawal</favlabel1><favlabel2></favlabel2><favlabel3>$ 1000</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>Cash Deposit</favlabel1><favlabel2></favlabel2><favlabel3>$ 1000</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>Balance Enquiry</favlabel1><favlabel2></favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>Cash Withdrawal</favlabel1><favlabel2></favlabel2><favlabel3>$ 200</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>Transfer</favlabel1><favlabel2>DBS</favlabel2><favlabel3>undefined</favlabel3><favlabel4>From Acc</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>To   Acc</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>OCBC Card Payment</favlabel1><favlabel2></favlabel2><favlabel4>From Acc</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>To   Acc</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
			}
			else if(CDI == "ATMC-STATUS")
			{
				 //return parent.frames["leftFrame"].GetAMTCStatus(CDI);
				return "01201110";
				// 1 : Healthy
				//INDEX 0 : RECEIPTSTATUS -- TAX not ALLOW if 0
				//INDEX 1 : CDM STATUS -- 1 healthy
				//INDEX 2 : CIM Status
				//INDEX 3 : SCAN Status
				//INDEX 4 : CARD READER
				//INDEX 5 : THOUSAND DOLLAR
				//INDEX 6 : HUNDRED DOLLAR
				//INDEX 7 :
			}
			else if(CDI == "R_DSPVAR_1")
			{
				return "$1000";
			}
			else if(CDI == "R_DSPVAR_2")
			{
				return "$3000";
			}
			else if(CDI == "RCT_AVAILBAL")
			{
				return "";
			}
			else if(CDI == "ACINITPOINTEXIST")
			{
				return "1";
			}
			else if(CDI == "ACINITNAVIPOINT")
			{
				// return "navi/conditionState/CONDITION_BALINQ_ACCTLIST";
				return "navi/sixBtnMenuState/SIXBTN_TRANSFER_TRX";
			}
			else if(CDI == "RCT_PID")
			{
				return "A123456781234";
			}
			else if(CDI == "USER_FAVORITE_SETTINGS")
			{
				return "2";
			}
			else if(CDI == "USER_PRINTING_SETTINGS")
			{
				return "0";
			}
			else if(CDI == "RCT_UNPOSTED") {
				return "--";
			}
			else if(CDI == "USER_PRINTING_SETTINGS_ID")
			{
				return "ABSDUD";
			}
			else if(CDI == "USER_FAVORITE_SETTINGS_ID")
			{
				return "";
			}
			else if(CDI == "R_DSPMSG")
			{
				return "402";
			}
			else if(CDI == "SERVER_DOWN")
			{
				return "0";
			}
			else if(CDI == "R_ALLPAY_AMT")
			{
				return "$21,000.00";
			}
			else if(CDI == "R_LOWPAY_AMT")
			{
				return "$20,000.00";
			}
			else if(CDI == "R_ATM_PAYNO")
			{
				return "123454323454345";
			}
			else if(CDI == "FOREIGNCASSETTES")
			{
				//return "";
				//return "<result><item><currency>USD</currency><description>美金 USD</description><value>100</value><cassetestatus>1</cassetestatus></item><item><currency>RMB</currency><description>人民幣RMB</description><value>100</value><cassetestatus>0</cassetestatus></item></result>";
                return "<result><item><currency>TWD</currency><description>新台幣TWD</description><value> 1000</value><cassetestatus>1</cassetestatus></item><item><currency>TWD</currency><description>新台幣TWD</description><value> 100</value><cassetestatus>1</cassetestatus></item></result>";
			}
			else if(CDI == "R_FWD_NTAMT")
			{
				return "40000";
			}
			else if(CDI == "getScreenData")
			{
				//return "040EN   $9,175,378.12IN   $9,175,378.12";
				return "300000=21100111075330EB1> 501078315001    FB2> 501104756001    J9";
			}
			else if(CDI == "getFastCashOptions")
			{
				return '[{"CurrencyId": "","Value": 80.0,"Available": true, "OpCode": "I"},{"CurrencyId": "","Value": 100.0,"Available": true, "OpCode": "H"},{"CurrencyId": "","Value": 200.0,"Available": true , "OpCode": "G"},{"CurrencyId": "","Value": 500.0,"Available": true , "OpCode": "F"}]';
			}
			else if(CDI == "getDepositData")
			{
				return '{"DepositInfo": {"1": {"CurrencyId": "MYR","LatestCount": 0,"LatestValue": 0.0,"TotalCount": 10,"TotalValue": 10.0},"5": {"CurrencyId": "MYR","LatestCount": 5,"LatestValue": 250.0,"TotalCount": 10,"TotalValue": 50.0},"10": {"CurrencyId": "MYR","LatestCount": 0,"LatestValue": 0.0,"TotalCount": 0,"TotalValue": 0.0},"20": {"CurrencyId": "MYR","LatestCount": 0,"LatestValue": 0.0,"TotalCount": 0,"TotalValue": 0.0},"50": {"CurrencyId": "MYR","LatestCount": 5,"LatestValue": 250.0,"TotalCount": 10,"TotalValue": 500.0}, "100": {"CurrencyId": "MYR","LatestCount": 5,"LatestValue": 250.0,"TotalCount": 10,"TotalValue": 1000.0}},"LatestDepositValue": 250.00,"TotalDepositValue": 1560.00}';
			}
			else if(CDI == "isWithdrawalAvailable")
			{
				return "true";
			}
			else if(CDI == "isCashDepositAvailable")
			{
				return "true";
			}
			else if(CDI == "isReceiptAvailable")
			{
				return "true";
			}
			else if(CDI == "getDBSAccounts")
			{
				return '[' +
					'{"AccNo": "03450000160000     ","AccType": "11","AvailBal": "000019779.54 ","TotalBal": "000019838.58 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "00019921170001     ","AccType": "20","AvailBal": "036716489.94 ","TotalBal": "036716489.94 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "03450000160000     ","AccType": "11","AvailBal": "000019779.54 ","TotalBal": "000019838.58 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "00019921170001     ","AccType": "20","AvailBal": "036716489.94 ","TotalBal": "036716489.94 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "03450000160000     ","AccType": "11","AvailBal": "000019779.54 ","TotalBal": "000019838.58 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "00019921170001     ","AccType": "20","AvailBal": "036716489.94 ","TotalBal": "036716489.94 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "03450000160000     ","AccType": "11","AvailBal": "000019779.54 ","TotalBal": "000019838.58 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "},' +
					'{"AccNo": "00019921170001     ","AccType": "20","AvailBal": "036716489.94 ","TotalBal": "036716489.94 ","OverdraftLimit": "000000000.00","HalfDayBal": "000000000.00 ","OneDayBal": "000000000.00 ","TwoDaysBal": "000000000.00 "}' +
				']';
			}
			else if(CDI == "getCardholderId")
			{
				return "12345678";
			}
			else if(CDI == "getWithdrawalBalances")
			{
				return '[ "10000" , "5000"]';
			}
			else if(CDI == "USERGROUP")
			{
				return "11";
			}


			if(String(CDI).indexOf('RCT_MEMO') >= 0)
			{
				return "MEMO12345";
			}
			else if(String(CDI).indexOf('RCT_UNIT') >= 0)
			{
				return "5";
			}
			else if(String(CDI).indexOf('RCT_DATE') >= 0)
			{
				return "2015-02-14";
			}
			else if(String(CDI).indexOf('RCT_AMT') >= 0)
			{
				return "15000";
			}
			else if(String(CDI).indexOf("AccNo") >= 0)
			{
				if(CDI == "AccNo1")
					return "0BBBXXXXXX000C";
				else if(CDI == "AccNo2")
					return "0BBBXXXXXX000C";
				else if(CDI == "AccNo3")
					return "0BBB0XXXXX000C";
				else if(CDI == "AccNo4")
					return "0BBB0XXXXX000C";
				else if(CDI == "AccNo5")
					return "082XXXXXXC";
				else if(CDI == "AccNo6")
					return "66666666";
				else if(CDI == "AccNo7")
					return "7777777";
				else if(CDI == "AccNo8")
					return "88888888";
				else if(CDI == "AccNo9")
					return "99999999";
				else if(CDI == "AccNo10")
					return "00000000";
			}
			else if(String(CDI).indexOf("AccType") >= 0)
			{
				if(CDI == "AccType1")
					return "20";
				else if(CDI == "AccType2")
					return "10";
				else if(CDI == "AccType3")
					return "21";
				else if(CDI == "AccType4")
					return "11";
				else if(CDI == "AccType5")
					return "CL";
				else if(CDI == "AccType6")
					return "CL";
				else if(CDI == "AccType7")
					return "10";
				else if(CDI == "AccType8")
					return "";
				else if(CDI == "AccType9")
					return "20";
				else if(CDI == "AccType10")
					return "21";
			}
			else if(String(CDI).indexOf("AvailBal") >= 0)
			{
				if(CDI == "AvailBal1")
					return "-28382779.55";
				else if(CDI == "AvailBal2")
					return "50";
				else if(CDI == "AvailBal3")
					return "90";
				else if(CDI == "AvailBal4")
					return "123";
				else if(CDI == "AvailBal5")
					return "25788";
				else if(CDI == "AvailBal6")
					return "-234123.33";
				else if(CDI == "AvailBal7")
					return "778";
				else if(CDI == "AvailBal8")
					return "433";
				else if(CDI == "AvailBal9")
					return "333";
				else if(CDI == "AvailBal10")
					return "1";
			}
			else if(String(CDI).indexOf("TotalBal") >= 0)
			{
				return "100";
			}
			else if(String(CDI).indexOf("HalfDayBal") >= 0)
			{
				return "1000";
			}
			else if(String(CDI).indexOf("OneDayBal") >= 0)
			{
				return "10000";
			}
			else if(String(CDI).indexOf("TwoDaysBal") >= 0)
			{
				return "100000";
			}
			else if(String(CDI).indexOf("OverdraftLimit") >= 0)
			{
				return "1000000";
			} else if(String(CDI).indexOf("setReceiptRequested") >= 0) {
				return "HideBalance";
			} else if(String(CDI).indexOf("availableBal1") >= 0) {
				return "0000125.30";
			}


			/*
			else if(CDI == "INITTRXTYPE")
			{
				return "OthersTrxInit";
			}
			else if(CDI == "LANGUAGESELECTED")
			{
				return "EN";
			}
			*/
			/* HKSCB */
			else if(CDI == "DeviceStatus")
			{
				return '0100000000';
			}
			else if(CDI == "AccountList")
			{
				return '['+

					//'{ "AcquirerType": "04", "IssuerType": "", "Number": "6012322001000000001", "UserName": "ONG", "AccountHolderName": "", "Currency": "", "Status": 0, "BankID": "9005" },' +
					'{ "AcquirerType": "03", "IssuerType": "", "Number": "9862622001000000001", "UserName": "LEE", "AccountHolderName": "", "Currency": "", "Status": 0, "BankID": "9005" }' +
					']';
			}
			else if(CDI == "Language")
			{
				return "en";
			}
			else if(CDI == "AccountBalances")
			{
				return 	'['+
							'{ "BalanceType": "001BALANCETYPE01", "Amount": { "CurrencyID": "HKD", "Value": 223456789.01 }, "EffectiveDate": "\/Date(1490318340447+0800)\/" }, ' +
							'{ "BalanceType": "004BALANCETYPE04", "Amount": { "CurrencyID": "HKD", "Value": 323456789.01 }, "EffectiveDate": "\/Date(1490318340447+0800)\/" }, ' +
							'{ "BalanceType": "002BALANCETYPE02", "Amount": { "CurrencyID": "HKD", "Value": 123456789.01 }, "EffectiveDate": "\/Date(1490318340447+0800)\/" } ' +
						']';
			}
		},

		GetUCDIIntegar:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetUCDIIntegar(CDI);

			if(CDI == "EzLinkFlag")
			{
				return 1;
			}
			else if(CDI == "CashCardFlag")
			{
				return 0;
			}
		},

		GetComString:function(key)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetComString(key);
			if(key == "2043")
			{
				return ";4616994156666598=24061261886654900001?";
			}
			else if(key == "2042")
			{
				return "Handsome";
			}
			else if(key == "1141")
			{
				return "000";
			}
			else if(key == "2014")
			{
				// alert("hello");
			}
		},

		GetComInt:function(key)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetComInt(key);

			if(key == 3126)
			{
				return "40000";
			}
			else if(key == 3127)
			{
				return "1500";
			}
            else if(key == 3129)
            {
                return "1700";
            }
			else if(key == 1248)
			{
				return "0";
			}
		},

		RetrieveScreenInterface:function(screen)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].RetrieveScreenInterface(screen);
		},

		GetCDIStoreValue:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetCDIStoreValue(CDI);
		},



		keyboardCancel:function()
		{
			this.Trace("keyboardCancel");
			keyActive = 0;
			processPinPadFDKSimulationButton("00000000000000");
			// if(production == "1")
				// parent.frames["leftFrame"].keyboardCancel();
		},

		ReceiptPrintStatus:function(status)
		{
			//TerminalUI.ReceiptPrintStatus(status);
		},

		BarCodeStatus:function(status , data)
		{
			//TerminalUI.BarCodeStatus(status , data);
		},

		ExitAANDCMainMenu:function(URL)
		{
			//parent.setRightFrameBlankHTML();
			// if(production == "1")
				// parent.frames["leftFrame"].ExitAANDCMainMenu(URL);
			//parent.maximizeRightFrame();

			this.Trace("Exit Point JS : " + this.GetAANDCExitLocation(URL))
		},

		Beep:function()
		{
			if(FDKKey == false)
			{
				//if(production == "1")
				//	parent.frames["leftFrame"].Beep();

			}
			else
			{
				beepSound = 1;
			}
			FDKKey = false;
				this.Trace("BEEP");
				
				try {
					beepAudio.pause();
					beepAudio.currentTime = 0;
					beepAudio.play();
				} catch (e) {
					
				}
		},

		/** Original VBS End**/

		GetIPAddress:function()
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetIPAddress();
			// else
				return "192.168.1.100";
		},

		LogToJournal:function(message)
		{
			// Trace("Journal = " + message);
			// if(production == "1")
				// parent.frames["leftFrame"].LogToJournal(message);

			this.Trace("EJ >>>> " + message);
		},

		Trace:function(message)
		{
			// if(production == "1")
			//	 parent.frames["leftFrame"].Trace(message);
				try {
					$('#debugLog').append('<br>' + String(message));
				} catch (e) {
					
				}
			// else
				
				console.log(message);
		},

		TimeOutBeep:function()
		{
			this.Trace("Beep Beep!");
			// if(production == "1")
				// parent.frames["leftFrame"].BeepTimeOut();
		},

		AlertBeep:function(val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].BeepTimeOut();

			if(val == "start")
			{
				alertTimeOut = setInterval(function(){
					this.TimeOutBeep();
				},250);
			}
			else
			{
				 clearInterval(cardEjectBeeper);
			}

		},

		SetPrinter:function()
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetPrinter();
		},

		GetPrinterType:function()
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetPrinterType();
		},

		PrintXFSReceipt:function(printData,formName,  langIdx)
		{
			var temp="";

			finalArryL1 = new Array();
			finalArryL2 = new Array();
			finalFormName = formName;
			printlangIdx = langIdx;

			for (i=0;i < printData[0].length;i++)
			{
				if(printData[0][i] == undefined || printData[0][i] == "")
				{
					finalArryL1[i] = "";
				}
				else
				{
					finalArryL1[i] = printData[0][i];
				}

			}

			for (x=0;x < printData[1].length;x++)
			{
				if(printData[1][x] == undefined || printData[1][x] == "")
				{
					finalArryL2[x] = "";
				}
				else
				{
					finalArryL2[x] = printData[1][x];
				}

			}

			//var y = setTimeout("printXFSDelay()",500);
			Trace("Form Name = " + formName);
			Trace("Print Data = " + finalArryL1.join());
			// if(production == "1")
				// parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,formName ,langIdx);
		},

		printXFSDelay:function()
		{
			// if(production == "1")
				// parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,finalFormName ,printlangIdx);
		},

		readBarcode:function(formName)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].readBARCode(formName);
		},

		disableBarcode:function()
		{
			// if(production == "1")
				// parent.frames["leftFrame"].disableBarcode();
		},

		setExtInteractionWaitForResponse:function(val)
		{
			isWaitForResponse = val;
			// if(production == "1")
				// parent.frames["leftFrame"].setWaitForResponse(val);
		},

		CallUpdateCustomerSeen:function(cardNo,campaignId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].CallUpdateCustomerSeen(cardNo, campaignId);
		},

		RegisterPreferenceTrx:function(cardNo,transData,opCode)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].RegisterPreferenceTrx(cardNo, transData,opCode);
		},

		DeRegisteredPreferenceTrx:function(myPreferenceId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
		},

		DeRegisteredPreferenceTrxWithUpdateInfo:function(myPreferenceId , cardNo)
		{
			// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
		},

		UpdateRegisteredPreferenceTrx:function(id,cardNo,transData,opCode)
		{
			// parent.frames["leftFrame"].updateFavoriteTransaction(id,cardNo,transData,opCode);
		},

		DeRegisteredListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
	        	// if(production == "1")
	        		// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceArray[i]);
	        }

		},

		DeRegisteredAANDCListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
	        	// if(production == "1")
	        		// parent.frames["leftFrame"].myPreferenceWS.DeRegisteredMyPreference(myPreferenceArray[i]);
	        }
		},



		RegisterThemeUser:function(cardNo,themeId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].RegisterThemeUser(cardNo, themeId);
		},

		PrintWINReceipt:function(printData)
		{
			//var a = printData.join();
			printData[0]="data 0";
			printData[1]="data 1";
			printData[2]="data 2";
			printData[3]="data 3";
			// if(production == "1")
				// parent.frames["leftFrame"].PrintXFSReceipt(printData, printData ,"ACTestForm" ,langIdx);

			//parent.frames["leftFrame"].PrintWINReceipt(temp);

		},

		setCookie:function(key, value)
		{
			// alert("Set Cookie : Key = " + key + " , Value = " + value);

			// if(production == "1")
				// parent.frames["leftFrame"].setCookie(key, value);
		},

		getCookie:function( key )
		{
			// if(production == "1")
				// return 	parent.frames["leftFrame"].getCookie(key);
		},

		removeCookie:function( key )
		{
			// if(production == "1")
				// parent.frames["leftFrame"].removeCookie(key);
	  	},

		findCookieIndex:function( key )
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].findCookieIndex(key);
	   	},

	   	removeAllCookie:function()
	   	{
	   		// if(production == "1")
	   			// parent.frames["leftFrame"].removeAllCookie();
	   	},

		jsGetKeyData:function()
		{
			var keyDataTimer;
			this.Trace("Current Keydata Type : " + keyDataType);
			// if(production == "1")
				// keyDataTimer = setTimeout(function(){parent.frames["leftFrame"].GetKeyData();},500);
		},

		/** HTML new Function **/
		ProcessKeyPad:function(Key)
		{
			if(keyActive == 1)
			{
				beepSound = 0;

				switch(Key.toUpperCase())
				{
					case "ENTER":
						Key = "10";
						break;
					case "CANCEL":
						Key = "11";
						break;
					case "CLEAR":
						Key = "13";
						break;
					case "BACKSPACE":
						Key = "14";
						break;
				}

				if(Key == "10")
				{
					this.keyboardCancel();
					this.GetKeyData();
				}
				else if(Key == "11")
				{
					this.keyboardCancel();
				}


				//TerminalUI.KeyPad_Event(Key);
				var app = require('app');
				app.BroadCaster.trigger("PinPadPress" , {key : Key });
				app.BroadCaster.trigger("KeepTimerAlive");
			}

		},

		ProcessPinEntry:function(Key)
		{
			if(keyActive == 1)
			{
				beepSound = 0;
				//TerminalUI.KeyPad_Event(Key);


				var app = require('app');
				app.BroadCaster.trigger("UpdatePin" , {key : Key });
				app.BroadCaster.trigger("KeepTimerAlive");

				if(Key == "10")
				{
					//this.keyboardCancel();
					//this.GetKeyData();
				}
				else if(Key == "11")
				{
					//var app = require('app');
					//
					//this.keyboardCancel();

					// app.router.navigate("exitTrx/PinpadCancel/THANKS" , {trigger: true});
				}
			}

		},

		ProcessFDK:function(Key)
		{
			if(keyActive == 1)
			{
				FDKKey = true;
				keyActive = 0;

				var app = require('app');
				app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
				app.BroadCaster.trigger("KeepTimerAlive");

				// this.keyboardCancel();
				// this.GetKeyData(currentKeyDataVal);
			}

			//FDKKey = true;
			//keyActive = 0;
            //
			//var app = require('app');
			//app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
			//app.BroadCaster.trigger("KeepTimerAlive");
			//this.keyboardCancel();
			//this.GetKeyData();
		},

		GetFDKKeyCode:function(Key)
		{

			var value = "";
			switch (String(Key))
			{
				case "FDK1":
					value = "I";
					break;
				case "FDK2":
					value = "H";
					break;
				case "FDK3":
					value = "G";
					break;
				case "FDK4":
					value = "F";
					break;
				case "FDK5":
					value = "A";
					break;
				case "FDK6":
					value = "B";
					break;
				case "FDK7":
					value = "C";
					break;
				case "FDK8":
					value = "D";
					break;
			}

			return value;
		},

		ATMCInterNavi:function(exitPoint)
		{
			var t = this;
			t.keyboardCancel();
			
			setTimeout(function()
			{
				// alert("ATMCInterNavi : " + exitPoint);
				t.Trace("*********************************************");
				t.Trace("SAREQFunction: " + exitPoint);
				t.Trace("*********************************************");
			} , 200);

			// alert("ATMCInterNavi : ATMC Processing Data...");
		},

		ATMCResponse:function(statusCode , additionalStatus)
		{
			var app = require('app');

			this.keyboardCancel();
			// this.GetKeyData();

			app.router.navigate("atmcResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},

		ATMResponse:function(statusCode , additionalStatus)
		{
			var app = require('app');

			// this.keyboardCancel();
			// this.GetKeyData();

			app.router.navigate("atmResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},

		InitACTransact:function(initData)
		{

			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();

			app.router.navigate("initTrx/" + initData , {trigger: true});
		},

		InitOthersACTransact:function(initData)
		{

			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();

			app.router.navigate("OthersTrxInit/" + initData , {trigger: true});
		},

		InitCardlessACTransact:function(initData)
		{

			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();

			app.router.navigate("CardlessTrxInit/" + initData , {trigger: true});
		},

		GetATMCNotesEntered:function(val)
		{
			// return parent.frames["leftFrame"].GetCashInTotalNoteCounter(val);

			if(val == "100")
			{
				return "0";
			}
			else if (val == "200")
			{
				return "0";
			}
			else if (val == "500")
			{
				return "0";
			}
			else if (val == "1000")
			{
				return "0";
			}
			else if (val == "2000")
			{
				return "2";
			}
		},

		GetATMCLatestNotesEntered:function(val)
		{
			// return parent.frames["leftFrame"].GetCashInTotalNoteCounter(val);

			if(val == "100")
			{
				return "0";
			}
			else if (val == "200")
			{
				return "0";
			}
			else if (val == "500")
			{
				return "0";
			}
			else if (val == "1000")
			{
				return "0";
			}
			else if (val == "2000")
			{
				return "1";
			}
		},

		GetATMCIsNoteTypesActive:function(key)
		{
			if(key == "100")
			{
				return true;
			}
			else if (key == "200")
			{
				return true;
			}
			else if (key == "500")
			{
				return true;
			}
			else if (key == "1000")
			{
				return true;
			}
			else if (key == "2000")
			{
				return true;
			}
		},

		 IBMtoBig5 : function(key)
		 {
		 	return "黃曉明";
		 },

        Idle:function(initData)
        {
            var app = require('app');
            this.Trace("Idle Init");

            //this.keyboardCancel();
            //this.GetKeyData();

            app.router.navigate("idle/" + initData , {trigger: true});
        },

        UnloadInterAct:function()
        {
            var app = require('app');
            app.BroadCaster.trigger("UnloadInterAct");
        },

        sendFeedBack : function(data)
        {
            this.Trace("Campaign Submit Result : " + data);


        },

        sendFeedBackNode :function(data)
        {
	       	this.Trace("Campaign Submit Result : " + data);

        	var requestData = { data : data };

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            dataType: "json",
            url: ConfigData.interActEndpoint + "SubmitResult",
            success: function(data)
            {
                // app.BroadCaster.trigger("ACTransactionResponse" , { statusCode : "0" , additionalStatus : "1"});
            }

        	});
        },

        validateEmail :  function(val)
        {
            return true;
        },

		//DisplayTransactScreen : function(initData)
		//{
		//	var t = this;
		//	if(applicationReady) {
		//		setTimeout(function() { t.DisplayTransactScreen2(initData); }, 2000);
		//	} else {
		//		t.DisplayTransactScreen2(initData);
		//	}
		//},
		
		DisplayTransactScreen: function(initData) {
			switch(initData)
			{

				case "IDLE":
				case "OOS":
				case "SYSTEMINIT":
				case "PLEASEWAIT":
				case "INIT_PLEASEWAIT":
				case "CARDEJECT":
				case "THANKYOU":
				case "ERROR":
				case "CASH_TAKECARD":
				case "CASH_TAKECASH":
				case "CASH_TAKECASH_RECEIPT":
					var app = require('app');
					allowGetKeyData = true;
					this.keyboardCancel();

					app.router.navigate("IDLE/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				case "PINENTRY":

					var app = require('app');

					if(ConfigData.bank == "DBSACTIVATE" || ConfigData.bank == "ACTIVATE")
						allowGetKeyData = true;
					else
						allowGetKeyData = false;
					this.keyboardCancel();
					app.router.navigate("pinEntryRemainVariable/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				default:
					var app = require('app');
					allowGetKeyData = true;
					this.keyboardCancel();
					// this.GetKeyData();

					//app.router.navigate("initTrx/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
			}
		},

		abstractHostReply : function(screenData)
		{
			// \u000C - FF
			// \u000E - SO
			// \u000F - SI
			// \u0009 - HT
			// \u0011 - DC1
			// \u0012 - DC2
			// \u001B - ESC
			// \u000B - VT
			// \u001C - FS
			var pattern = /(\u000C|\u000E|\u000F|\u0009|\u0011|\u0012|\u001B|\u000B|\u001C)/g;
			var result = screenData.match(pattern);

			var text = screenData;
			var screens = [];
			for (i = 0; i < result.length; i++) {
				var p = result[i];
				var regExp = new RegExp(p);
				var match = regExp.exec(text);
				var start = match.index;
				var screenControl = "";
				var j = i + 1;

				if (i < result.length - 1) {
					p = result[j];
					var end = text.indexOf(p, start + 1);
					screenControl = text.substring(start, end);
					text = text.substr(end);
				} else {
					screenControl = text.substr(start);
				};

				screenControl = screenControl.replace(pattern , " ");

				screens.push(screenControl.trim());
			};

			return screens;
		},

		 isHardCodeResulotion:function()
        {
            return true;
        },

        getWidth :  function()
        {
            return "1024";
        },

        getHeight : function()
        {
            return "768";
        },

		UpdatePin: function(PinLength) {
			var app = require('app');
			app.BroadCaster.trigger("UpdatePin" , {len : PinLength });
		},

		InitACTransactWithoutKey:function(initData) {
			var app = require('app');
			this.keyboardCancel();
			app.router.navigate("initTrx/" + initData , {trigger: true});
		},

		GetAANDCExitLocation:function(data)
		{
			if(parseInt(data) == 0)
			{
				return "http://webbrowsecomplete";
			}
			else
			{
				return "http://webbrowsecomplete" + data;
			}

		},

		setAppReady : function(val)
		{
			var app = require('app');
			app.BroadCaster.trigger("ApplicationReady" , {});
			applicationReady = val;
			SASetAppReady(true);
			//alert(applicationReady);

			app.systemInit();
		},
		
		TransactXPublishMessage : function(data)
		{
			var app = require('app');
			app.channel.transactXPublishReply(data);
		},

		TransactXTerminateAssist : function(data)
		{
			var app = require('app');
			 // "exitTrx/:template/:exitUrl" : "exitTrx",
            app.router.navigate("exitTrx/deviceProcessState/THANKS", {trigger: true});
		},

		TransactXBonusPointSimulationRequest : function(val)
		{
			var app = require('app');

			if(typeof val.point != "undefined")
				val["BONUSPOINT"] = val.point;

			ACCoreJS.InitOthersACTransact("bonusPointRedemptionSimulation");
			app.DS.update(val);
		},
        ExecuteExternalFunction: function(method, params) {
			this.Trace("*** Invoke Activate Method ***");
			this.Trace("Method Name: " + method);
			this.Trace("Params     : " + JSON.stringify(params));
			this.Trace("******************************");
			//return SAInvokeMethod(method, params);
		},
		ATMCExecuteFunction:function(functionName , stringParameter) {
			var app = require('app');
			this.keyboardCancel();
			app.router.navigate("atmcExecuteFunction/" + functionName + "/" + Base64.encode(stringParameter), {trigger: true});
		},
		
		PrintReceipt: function(logs) {
			this.Trace("******* Print  Receipt *******");
			this.Trace(JSON.stringify(logs));
			this.Trace("******************************");
		}
	};

	/** Original VBS **/


	//parent.frames["leftFrame"].Trace("*****ACTransactCoreJS*****");
	//parent.frames["leftFrame"].Trace("Version : 2014-12-10 12:00NN");
