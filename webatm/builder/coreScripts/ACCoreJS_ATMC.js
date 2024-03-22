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
	var interNaviEvent = "";
	var allowGetKeyData = false;
	var production = "0";
	var applicationReady = false;
	var keyDataType = "";

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

		GetKeyData:function()
		{
			if(keyActive == 0)
			{
				this.Trace("GetKeyData");
				this.jsGetKeyData();
				keyActive = 1;
			}
		},

		GetPIN : function(type)
		{
			if(keyActive == 0)
			{
				// alert("GETPIN : " + type);
				this.Trace("GETPIN");
				keyActive = 1;
			}

		},

		GetPINDone : function()
		{
			keyActive = 0;
		},

		GetPinEntry:function()
		{
			//SAGetPinEntry();
			if(keyActive == 0)
			{
				this.Trace("GetPinEntry");
				//this.jsGetKeyData();
				keyActive = 1;
			}
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

		GetUCDIString:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetUCDIString(CDI);

			if(CDI == "DEPOSIT_VIDEO")
			{
				return "BRM_cashin.mp4";
			}	
			else if(CDI == "TXACC")
			{
				return "12345678";
			}
			else if(CDI == "TXAMT")
			{
				return "1000";
			}
			else if(CDI == "ssmgaccnumlist")
			{
				//return "<accounts><from><account><bankId>013</bankId><no>0000001506017562</no></account></from></accounts>";
				 return "<accounts><from><account><bankId>013</bankId><no>0000001035000328</no></account><account><bankId>013</bankId><no>0000001506108281</no></account><account><bankId>013</bankId><no>0000001506108299</no></account><account><bankId>013</bankId><no>0000001035007322</no></account><account><bankId>013</bankId><no>0000032506030870</no></account><account><bankId>013</bankId><no>0000032035004890</no></account><account><bankId>013</bankId><no>0000032506061686</no></account><account><bankId>013</bankId><no>0000032506061694</no></account></from><to><account><bankId>013</bankId><no>0000001506108281</no></account><account><bankId>013</bankId><no>0000001506108299</no></account><account><bankId>013</bankId><no>0000001035007322</no></account><account><bankId>013</bankId><no>0000032506030870</no></account><account><bankId>013</bankId><no>0000032035004890</no></account><account><bankId>013</bankId><no>0000032506061686</no></account><account><bankId>013</bankId><no>0000032506061694</no></account><account><bankId>444</bankId><no>0000000000125415</no></account></to></accounts>";

				 //return parent.frames["leftFrame"].GetSSMGAcctList(CDI);
			}
			else if(CDI == "ssmgatmid")
			{
				return "L9999DDD";
			}
			else if(CDI == "VTMTXNAME")
			{
				return "";
			}
			else if(CDI == "BANKID_LIST")
			{
				return "<banks><bank><bankId>004</bankId><bankName>台灣銀行台灣銀行</bankName></bank><bank><bankId>005</bankId><bankName>土地銀行</bankName></bank><bank><bankId>006</bankId><bankName>合庫銀行</bankName></bank><bank><bankId>007</bankId><bankName>第一銀行</bankName></bank><bank><bankId>008</bankId><bankName>華南銀行</bankName></bank><bank><bankId>009</bankId><bankName>彰化銀行</bankName></bank><bank><bankId>011</bankId><bankName>上海銀行</bankName></bank><bank><bankId>012</bankId><bankName>台北富邦</bankName></bank><bank><bankId>013</bankId><bankName>國泰世華</bankName></bank><bank><bankId>016</bankId><bankName>高雄銀行</bankName></bank><bank><bankId>017</bankId><bankName>兆豐商銀</bankName></bank><bank><bankId>018</bankId><bankName>農業金庫</bankName></bank><bank><bankId>021</bankId><bankName>花旗台灣</bankName></bank><bank><bankId>022</bankId><bankName>美國銀行</bankName></bank><bank><bankId>025</bankId><bankName>首都銀行</bankName></bank><bank><bankId>039</bankId><bankName>澳盛(台灣)</bankName></bank><bank><bankId>040</bankId><bankName>中華開發</bankName></bank><bank><bankId>050</bankId><bankName>台灣企銀</bankName></bank><bank><bankId>052</bankId><bankName>渣打銀行</bankName></bank><bank><bankId>053</bankId><bankName>台中商銀</bankName></bank><bank><bankId>054</bankId><bankName>京城商銀</bankName></bank><bank><bankId>072</bankId><bankName>德意志銀行</bankName></bank><bank><bankId>075</bankId><bankName>東亞銀行</bankName></bank><bank><bankId>081</bankId><bankName>匯豐銀行</bankName></bank><bank><bankId>101</bankId><bankName>瑞興商銀</bankName></bank><bank><bankId>102</bankId><bankName>華泰銀行</bankName></bank><bank><bankId>103</bankId><bankName>新光銀行</bankName></bank><bank><bankId>104</bankId><bankName>台北五信</bankName></bank><bank><bankId>106</bankId><bankName>台北九信</bankName></bank><bank><bankId>108</bankId><bankName>陽信銀行</bankName></bank><bank><bankId>114</bankId><bankName>基隆一信</bankName></bank><bank><bankId>115</bankId><bankName>基隆二信</bankName></bank><bank><bankId>118</bankId><bankName>板信銀行</bankName></bank><bank><bankId>119</bankId><bankName>淡水一信</bankName></bank><bank><bankId>120</bankId><bankName>淡水信合社</bankName></bank><bank><bankId>124</bankId><bankName>宜蘭信合社</bankName></bank><bank><bankId>127</bankId><bankName>桃園信合社</bankName></bank><bank><bankId>130</bankId><bankName>新竹一信</bankName></bank><bank><bankId>132</bankId><bankName>新竹三信</bankName></bank><bank><bankId>135</bankId><bankName>新竹十信</bankName></bank><bank><bankId>142</bankId><bankName>豐原信合社</bankName></bank><bank><bankId>146</bankId><bankName>台中二信</bankName></bank><bank><bankId>147</bankId><bankName>三信銀行</bankName></bank><bank><bankId>158</bankId><bankName>彰化一信</bankName></bank><bank><bankId>161</bankId><bankName>彰化五信</bankName></bank><bank><bankId>162</bankId><bankName>彰化六信</bankName></bank><bank><bankId>163</bankId><bankName>彰化十信</bankName></bank><bank><bankId>165</bankId><bankName>鹿港信合社</bankName></bank><bank><bankId>176</bankId><bankName>嘉義一信</bankName></bank><bank><bankId>178</bankId><bankName>嘉義三信</bankName></bank><bank><bankId>188</bankId><bankName>台南三信</bankName></bank><bank><bankId>191</bankId><bankName>台南六信</bankName></bank><bank><bankId>192</bankId><bankName>台南七信</bankName></bank><bank><bankId>198</bankId><bankName>鳳山信合社</bankName></bank><bank><bankId>202</bankId><bankName>高新銀行</bankName></bank><bank><bankId>203</bankId><bankName>高雄二信</bankName></bank><bank><bankId>204</bankId><bankName>高雄三信</bankName></bank><bank><bankId>215</bankId><bankName>花蓮一信</bankName></bank><bank><bankId>216</bankId><bankName>花蓮二信</bankName></bank><bank><bankId>222</bankId><bankName>澎湖一信</bankName></bank><bank><bankId>223</bankId><bankName>澎湖二信</bankName></bank><bank><bankId>224</bankId><bankName>金門信合社</bankName></bank><bank><bankId>605</bankId><bankName>高雄地區農會</bankName></bank><bank><bankId>625</bankId><bankName>臺中地區農會</bankName></bank><bank><bankId>700</bankId><bankName>中華郵政</bankName></bank><bank><bankId>803</bankId><bankName>聯邦銀行</bankName></bank><bank><bankId>805</bankId><bankName>遠東銀行</bankName></bank><bank><bankId>806</bankId><bankName>元大銀行</bankName></bank><bank><bankId>807</bankId><bankName>永豐銀行</bankName></bank><bank><bankId>808</bankId><bankName>玉山銀行</bankName></bank><bank><bankId>809</bankId><bankName>凱基銀行</bankName></bank><bank><bankId>810</bankId><bankName>星展寶</bankName></bank><bank><bankId>812</bankId><bankName>台新銀行</bankName></bank><bank><bankId>814</bankId><bankName>大眾銀行</bankName></bank><bank><bankId>815</bankId><bankName>日盛銀行</bankName></bank><bank><bankId>816</bankId><bankName>安泰銀行</bankName></bank><bank><bankId>822</bankId><bankName>中國信託</bankName></bank><bank><bankId>922</bankId><bankName>臺南地區農會</bankName></bank></banks>";
			}
			else if(CDI == "InterActFavorList")
			{
				return "";
				// return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 50,000,808,0009993968000206,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel3>NT$ 50,000</favlabel3><favlabel5>808-0009993968000206</favlabel5><BKID>808</BKID><TXAMT>50000</TXAMT><TXACC>0009993968000206</TXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000032506030870,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000032506030870</favlabel5><BKID>013</BKID><TXACC>0000032506030870</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山銀行,NT$ 5,000,扣款帳號,013,0000001035000328,轉入帳號,808,0000000001000000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山銀行</favlabel2><favlabel3>NT$ 5,000</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000001000000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000001000000</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,台中商銀,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,053,0000000002555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>台中商銀</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>053-0000000002555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>053</TRBKID><TRTXACC>0000000002555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,0000000000050000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000000050000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000000050000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,0000002558800000,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000002558800000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000002558800000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山銀行,NT$ 5,000,扣款帳號,013,0000001035000328,轉入帳號,808,0000000001000000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山銀行</favlabel2><favlabel3>NT$ 5,000</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000001000000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000001000000</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,台中商銀,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,053,0000000002555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>台中商銀</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>053-0000000002555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>053</TRBKID><TRTXACC>0000000002555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,0000000000050000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000000000050000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000000000050000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,0000002558800000,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-0000002558800000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>0000002558800000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
	//			return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 2500,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel3>NT$ 2500</favlabel3><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXAMT>2500</TXAMT><TXACC>0000001035000328</TXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 5,000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel3>NT$ 5,000</favlabel3><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
//				return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001035000328,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXACC>0000001035000328</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,扣款帳號,013,0000001035000328,轉入帳號,018,50000000,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>018-50000000</favlabel7><BKID>013</BKID><TXAMT>1233</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>018</TRBKID><TRTXACC>50000000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,2500000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,扣款帳號,013,0000001035000328,轉入帳號,018,50000000,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>018-50000000</favlabel7><BKID>013</BKID><TXAMT>1233</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>018</TRBKID><TRTXACC>50000000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,013,0000001506108299,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel5>013-0000001506108299</favlabel5><BKID>013</BKID><TXACC>0000001506108299</TXACC><TXNAME>INQ</TXNAME><TXCODE>INQ</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,扣款帳號,013,0000001035000328,轉入帳號,808,2500000,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,扣款帳號,013,0000001035000328,轉入帳號,018,50000000,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>018-50000000</favlabel7><BKID>013</BKID><TXAMT>1233</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>018</TRBKID><TRTXACC>50000000</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,扣款帳號,013,0000001035000328,轉入帳號,808,2500000012361234,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-2500000012361234</favlabel7><BKID>013</BKID><TXAMT>250</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>2500000012361234</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 5600,扣款帳號,013,0000001035000328,轉入帳號,808,255555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 5600</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-255555555</favlabel7><BKID>013</BKID><TXAMT>5600</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>255555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,????,NT$ 500,扣款帳號,013,0000001035000328,轉入帳號,808,555555,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>????</favlabel2><favlabel3>NT$ 500</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-555555</favlabel7><BKID>013</BKID><TXAMT>500</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>555555</TRTXACC><TXNAME>TFR</TXNAME><TXCODE>TFR</TXCODE><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,155,855266558855,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>155-855266558855</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>155</TRBKID><TRTXACC>855266558855</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,Credit Card Payment,扣款帳號,013,0000001035000328,轉入帳號,808,12654789632458,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel2>Credit Card Payment</favlabel2><favlabel3/><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-12654789632458</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>12654789632458</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 30,000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 30,000</favlabel2><favlabel5>013-0000001035000328</favlabel5><BKID>013</BKID><TXAMT>30000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXNAME>CWD</TXNAME><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>undefined</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
				// return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳其他銀行帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,155,855266558855,OPCODE,FEE</LabelName><infoList><favlabel1>繳其他銀行帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>155-855266558855</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>155</TRBKID><TRTXACC>855266558855</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>2</FEETYPE></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-1AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳信用卡款,Credit Card Payment,扣款帳號,013,0000001035000328,轉入帳號,808,12654789632458,OPCODE,FEE</LabelName><infoList><favlabel1>繳信用卡款</favlabel1><favlabel2>Credit Card Payment</favlabel2><favlabel3/><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-12654789632458</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>12654789632458</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>01</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>3</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
//				return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,扣款帳號,808,0009302966000276,轉入帳號,808,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>808-0009302966000276</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-</favlabel7><BKID>808</BKID><TXAMT>undefined</TXAMT><TXACC>0009302966000276</TXACC><TRBKID>808</TRBKID><TRTXACC/><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,交易帳號,013,0000001506017561,OPCODE,BALINQ</LabelName><infoList><info><key>label1</key><value>餘額查詢</value></info><info><key>label2</key><value>Balance Inquiry</value></info><info><key>fromAcct</key><value>0000001506017561</value></info><info><key>fromAcctLbl</key><value>交易帳號</value></info><info><key>opCode</key><value>BALINQ</value></info><info><key>ServiceType</key><value>BALINQ</value></info><info><key>ACTRX_TYPE</key><value>BALINQ</value></info><info><key>BANKID</key><value>013</value></info><info><key>CARD-ISSUE</key><value>ONUS</value></info></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,扣款帳號,808,0009302966000276,轉入帳號,808,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>808-0009302966000276</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-</favlabel7><BKID>808</BKID><TXAMT>undefined</TXAMT><TXACC>0009302966000276</TXACC><TRBKID>808</TRBKID><TRTXACC></TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,交易帳號,013,0000001506017561,OPCODE,BALINQ</LabelName><infoList><info><key>label1</key><value>餘額查詢</value></info><info><key>label2</key><value>Balance Inquiry</value></info><info><key>fromAcct</key><value>0000001506017561</value></info><info><key>fromAcctLbl</key><value>交易帳號</value></info><info><key>opCode</key><value>BALINQ</value></info><info><key>ServiceType</key><value>BALINQ</value></info><info><key>ACTRX_TYPE</key><value>BALINQ</value></info><info><key>BANKID</key><value>013</value></info><info><key>CARD-ISSUE</key><value>ONUS</value></info></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode></opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,Withdrawal,交易帳號,013,0000001506017561,提款金額,1000,OPCODE,CWDCWD</LabelName><infoList><info><key>label1</key><value>提款</value></info><info><key>label2</key><value>Withdrawal</value></info><info><key>fromAcct</key><value>0000001506017561</value></info><info><key>fromAcctLbl</key><value>交易帳號</value></info><info><key>toAcct</key><value>1000</value></info><info><key>toAcctLbl</key><value>提款金額</value></info><info><key>opCode</key><value>CWDCWD</value></info><info><key>ACTRX_TYPE</key><value>CWDCWD</value></info><info><key>TX-AMT</key><value>1000</value></info><info><key>Serv_Type</key><value>CWDCWD</value></info><info><key>BANKID</key><value>013</value></info></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳費,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,500,85544588,OPCODE,FEE</LabelName><infoList><favlabel1>繳費</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>500-85544588</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>500</TRBKID><TRTXACC>85544588</TRTXACC><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList></result>";
				//return "<result><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 1000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AD</id><opcode>DEP</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>存款,NT$ 1000,013,0000001035000328,OPCODE,DEP</LabelName><infoList><favlabel1>存款</favlabel1><favlabel2>NT$ 1000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>1000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>DEP</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>1/15/2014 5:08:27 PM</createDateTime><id>8E83B3EB-CFB4-4584-88D2-E05C6D6A56AA</id><opcode>BALINQ</opcode><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>餘額查詢,Balance Inquiry,013,0000001506108281,OPCODE,INQ</LabelName><infoList><favlabel1>餘額查詢</favlabel1><favlabel2>Balance Inquiry</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001506108281</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>undefined</TXAMT><TXACC>0000001506108281</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>INQ</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>4DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>提款,NT$ 10000,013,0000001035000328,OPCODE,CWD</LabelName><infoList><favlabel1>提款</favlabel1><favlabel2>NT$ 10000</favlabel2><favlabel3>undefined</favlabel3><favlabel4>undefined</favlabel4><favlabel5>0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>undefined</favlabel7><BKID>013</BKID><TXAMT>10000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>undefined</TRBKID><TRTXACC>undefined</TRTXACC><TXCODE>CWD</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>undefined</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F8B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>轉帳,玉山帳號,扣款帳號,013,0000001035000328,808,500000,OPCODE,TFR</LabelName><infoList><favlabel1>轉帳</favlabel1><favlabel2>玉山帳號</favlabel2><favlabel3>undefined</favlabel3><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>undefined</favlabel6><favlabel7>808-500000</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>500000</TRTXACC><TXCODE>TFR</TXCODE><FEEEX>undefined</FEEEX><MSGTYP>AA</MSGTYP></infoList></favor></transactionData></favoriteTransactionList><favoriteTransactionList><channel>ATM</channel><cardNo>0130000001506017561</cardNo><createDateTime>9/29/2014 10:24:56 AM</createDateTime><id>1DB07F1B-4C7C-4AFA-A39C-A28061EDE76C</id><opcode/><serviceFlag>0</serviceFlag><transactionData><favor><LabelName>繳玉山帳號,Bill Payment,扣款帳號,013,0000001035000328,轉入帳號,808,1236547891236547,OPCODE,FEE</LabelName><infoList><favlabel1>繳玉山帳號</favlabel1><favlabel2>Bill Payment</favlabel2><favlabel4>扣款帳號</favlabel4><favlabel5>013-0000001035000328</favlabel5><favlabel6>轉入帳號</favlabel6><favlabel7>808-1236547891236547</favlabel7><BKID>013</BKID><TXAMT>5000</TXAMT><TXACC>0000001035000328</TXACC><TRBKID>808</TRBKID><TRTXACC>1236547891236547</TRTXACC><TXNAME>FEE</TXNAME><TXCODE>FEE</TXCODE><FEEEX>02</FEEEX><MSGTYP>AA</MSGTYP><FEETYPE>1</FEETYPE></infoList></favor></transactionData></favoriteTransactionList></result>";
			}
			else if(CDI == "MAXCWDAMT")
			{
				return "10000";
			}
			else if(CDI == "ATMC-STATUS")
			{
				 // return parent.frames["leftFrame"].GetAMTCStatus(CDI);
				return "111111111";
				//122112211
				// 1 : Healthy
				//INDEX 0 : RECEIPTSTATUS -- TAX not ALLOW if 0
				//INDEX 1 : CDM STATUS -- 1 healthy
				//INDEX 2 : CIM Status
				//INDEX 3 : SCAN Status
				//INDEX 4 : CARD READER
				//INDEX 5 : THOUSAND DOLLAR
				//INDEX 6 : HUNDRED DOLLAR
				//INDEX 7 : Coin
				//INDEX 8 : A4 Printer
			}
			else if(CDI == "R_DSPVAR_1")
			{
				return "$1,000     ";
			}
			else if(CDI == "R_DSPVAR_2")
			{
				return "$3000     ";
			}
			else if(CDI == "R_PAYNO")
			{
				return "1234565432345";
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
				return "192";
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
				//return parent.frames["leftFrame"].GetForeignCasseteStatus();
				// return "";
				return "<result><item><currency>TWD</currency><description>新台幣</description><value> 1000</value><cassetestatus>1</cassetestatus></item><item><currency>TWD</currency><description>新台幣</description><value> 100</value><cassetestatus>1</cassetestatus></item><item><currency>HKD</currency><description>港幣</description><value> 500</value><cassetestatus>1</cassetestatus></item><item><currency>CNY</currency><description>人民幣</description><value> 100</value><cassetestatus>0</cassetestatus></item></result>";
				//return "<result><item><currency>TWD</currency><description>新台幣TWD</description><value> 1000</value><cassetestatus>1</cassetestatus></item><item><currency>USD</currency><description>美金USD</description><value> 100</value><cassetestatus>1</cassetestatus></item><item><currency>JPY</currency><description>日幣JPY</description><value> 10000</value><cassetestatus>1</cassetestatus></item><item><currency>HKD</currency><description>港幣HKD</description><value> 500</value><cassetestatus>1</cassetestatus></item></result>";
				// return "<result><item><currency>USD</currency><description>美金USD</description><value> 100</value><cassetestatus>1</cassetestatus></item><item><currency>JPY</currency><description>日幣JPY</description><value> 10000</value><cassetestatus>1</cassetestatus></item><item><currency>HKD</currency><description>港幣HKD</description><value> 500</value><cassetestatus>1</cassetestatus></item></result>";
                //return "<result><item><currency>TWD</currency><description>新台幣TWD</description><value> 1000</value><cassetestatus>1</cassetestatus></item><item><currency>TWD</currency><description>新台幣TWD</description><value> 100</value><cassetestatus>1</cassetestatus></item></result>";
			}
			else if(CDI == "SCANDATA")
			{
				return "";
				//return parent.frames["leftFrame"].GetBarcode();
			}
			else if(CDI == "R_FWD_NTAMT")
			{
				return "TWD $3,250";
			}
			else if(CDI == "R_FWD_TXACC")
			{
				return "123456543";
			}
			else if(CDI == "CAMPAIGNID")
			{
				return "1234";
			}
			else if(CDI == "CARDTYPE")
			{
				return "TK2_ONUS";
			}
			else if(CDI == "INSERTEDAMT")
			{
				return "";
				// return parent.frames["leftFrame"].GetEnteredCashNote();
			}
			else if(CDI == "ATM-VENDOR")
			{
				return "NCR";
			}
			else if(CDI == "DEFAULTPRESENT")
			{
				// return '{"500":"1","100":"1","50":"1","10":"2","1":"3"}';
				//return '[{"key" : "500","value" : "1" ,"allow" : "Y"},{"key" : "100","value" : "1","allow" : "Y"},{"key" : "50","value" : "2","allow" : "N"},{"key" : "10","value" : "2","allow" : "N"},{"key" : "1","value" : "3","allow" : "N"}]';
				return '[{"key":"100","value":"3","allow":"Y"},{"key":"500","value":"1","allow":"Y"},{"key":"1","value":"3","allow":"N"},{"key":"1","value":"0","allow":"N"},{"key":"10","value":"1","allow":"N"},{"key":"50","value":"0","allow":"N"}]';
			}
			else if(CDI == "CANCHANGE")
			{
				return 'Y';
			}
			else if(CDI == "GOVPAYMENT")
			{
				return "1";
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
			} else if(String(CDI).indexOf('VTM_OPENACC') >= 0) {
				return "1";
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
		},

		GetUCDIIntegar:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetUCDIIntegar(CDI);
		},

		GetComString:function(key)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetComString(key);
			if(key == "2043")
			{
				return ";4616994156666598=24061261886654900001?";
			}
		},

		GetComInt:function(key)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetComInt(key);

			if(key == 3126)
			{
				return "15";
			}
			else if(key == 3127)
			{
				return "15";
			}
            else if(key == 3129)
            {
                return "15";
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
			if(keyActive == 1)
			{
				this.Trace("keyboardCancel");
				keyActive = 0;
			}

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
		},

		Beep:function()
		{
			// if(FDKKey == false)
			// {
			// 	if(production == "1")
			// 		parent.frames["leftFrame"].Beep();
			// }
			// else
			// {
			// 	beepSound = 1;
			// }
			// FDKKey = false;
				this.Trace("BEEP");
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
				if(typeof parent.frames["leftFrame"] != "undefined" && typeof parent.frames["leftFrame"].Trace != "undefined")
					parent.frames["leftFrame"].Trace(message);
				else
					SATrace(message);
			// else
				console.log((new Date()).toLocaleTimeString()+ " : " + message);

				$('#debugLog').append('\n' + message);
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

			// try
			// {
			// 	var requestData = new Object();
			// 	requestData["id"] = "393CD5B6-C929-43D5-84E3-0C0C11A7D63F";
			// 	requestData["cardNo"] = cardNo;

			// 	$.support.cors = true;
		 //        $.ajax({
		 //            type: 'POST',
		 //            // async: false,
		 //            cache: false,
		 //            data: requestData,
		 //            dataType: "json",
		 //            url: "http://localhost:8000/ACUserPreference/DeRegisteredPreferenceTrxWithUpdateInfo",
		 //            success: function (data)
		 //            {
		 //                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
		 //                // self.aandcFavListProcess("XML", data["result"]);
		 //                // ACCoreJS.Trace("Response : " + data["result"]);
		 //                return data["result"];
		 //            },
		 //            error: function (data)
		 //            {
		 //                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
		 //                // App.DS.update({"systemFavList": ""});

		 //                return "";
		 //            }
		 //        });

			// 	// return myPreferenceWSObJ.DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo);
			// }
			// catch(err)
			// {
			// 	SATrace("SADeRegisteredPreferenceTrxWithUpdateInfo ERROR : " + err);
			// 	return "";
			// }
		},

		DeRegisteredPreferenceTrx:function(myPreferenceId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
		},

		DeRegisteredPreferenceTrxWithUpdateInfo:function(myPreferenceId , cardNo , callBack)
		{
			// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);

			// SADeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo , callBack);
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
			// if(production == "1")
				// keyDataTimer = setTimeout(function(){parent.frames["leftFrame"].GetKeyData();},500);
		},

		/** HTML new Function **/
		ProcessKeyPad:function(Key)
		{
			beepSound = 0;

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
		},

		ProcessFDK:function(Key)
		{
			FDKKey = true;
			keyActive = 0;

			var app = require('app');
			app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
			app.BroadCaster.trigger("KeepTimerAlive");
			this.keyboardCancel();
			this.GetKeyData();
		},

		ProcessEcho : function(Key)
		{

			beepSound = 0;

			var app = require('app');

			app.BroadCaster.trigger("KeepTimerAlive");

			if(Key == "10")
			{
				//this.keyboardCancel();
				//this.GetKeyData();
				app.BroadCaster.trigger("PinPadPress" , {key : Key });
			}
			else if(Key == "11")
			{
				//var app = require('app');
				//
				//this.keyboardCancel();

				// app.router.navigate("exitTrx/PinpadCancel/THANKS" , {trigger: true});
				app.BroadCaster.trigger("PinPadPress" , {key : Key });
			}
			else
			{
				app.BroadCaster.trigger("UpdatePin" , {key : Key });
			}
		},

		GetFDKKeyCode:function(Key)
		{
			var value = "";
			switch (String(Key))
			{
				case "32":
					value = "I";
					break;
				case "33":
					value = "H";
					break;
				case "34":
					value = "G";
					break;
				case "35":
					value = "F";
					break;
				case "36":
					value = "A";
					break;
				case "37":
					value = "B";
					break;
				case "38":
					value = "C";
					break;
				case "39":
					value = "D";
					break;
			}

			return value;
		},

		ATMCInterNavi:function(exitPoint)
		{
			// this.keyboardCancel();

			interNaviEvent = exitPoint;
			var app = require('app');
			app.BroadCaster.trigger("cleanEventQueue");

			setTimeout(function()
			{
				// alert("ATMCInterNavi : " + exitPoint);
			} , 200);

			// alert("ATMCInterNavi : ATMC Processing Data...");
		},

		ATMCResponse:function(statusCode , additionalStatus , atmcResponseEvent)
		{
			this.Trace("*** ATMCResponse ***");
			var app = require('app');

			this.keyboardCancel();
			// this.GetKeyData();

			// app.router.navigate("atmcResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
			app.BroadCaster.trigger("atmcResponse" , {statusCode : statusCode , additionalStatus:additionalStatus , atmcResponseEvent :interNaviEvent });
		},

		ATMResponse:function(statusCode , additionalStatus)
		{
			var app = require('app');

			this.keyboardCancel();
			// this.GetKeyData();

			app.router.navigate("atmResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},

		DisplayTransactScreen:function(initData)
		{

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

		IdleSreen:function(initData)
		{

			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();

			app.router.navigate("idleMenu/" + initData , {trigger: true});
		},

		GetATMCNotesEntered:function(val)
		{
			// return parent.frames["leftFrame"].GetCashInTotalNoteCounter(val);

			// if(val == "100")
			// {
			// 	return "0";
			// }
			// else if (val == "200")
			// {
			// 	return "0";
			// }
			// else if (val == "500")
			// {
			// 	return "0";
			// }
			// else if (val == "1000")
			// {
			// 	return "0";
			// }
			// else if (val == "2000")
			// {
			// 	return "2";
			// }

			return "0";
			// return parent.frames["leftFrame"].GetEnteredCashNote(val);
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

            this.keyboardCancel();
            this.GetKeyData();

            app.router.navigate("idle/" + initData , {trigger: true});
        },

   		 idleMenu:function(initData)
        {
            var app = require('app');
            this.Trace("Idle Menu");

            this.keyboardCancel();
            // this.GetKeyData();

            app.router.navigate("idleMenu/" + initData , {trigger: true});
        },

        displayScreen : function(navitype)
        {
        	var app = require('app');
			app.router.navigate(navitype, {trigger: true});
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

        validateEmail :  function(val)
        {
            return true;
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
            return "577";
        },

		currentBank : function()
		{
			return "ESB";
		},

		ProcessPINEntered : function(result , value)
		{
 			var app = require('app');
			app.BroadCaster.trigger("PINEntered" , {result : result , val:value });
			app.BroadCaster.trigger("KeepTimerAlive");
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

		setAppReady : function(val)
		{
			applicationReady = val;

			if(typeof TransactXApplicationReady != "undefined")
			{
				TransactXApplicationReady(val);
			}
		},

		SingleByte2DoubleByte:function(val)
		{
			// if(typeof(SASingleByte2DoubleByte) =="undefined")
			// {	
				return "";
				// return parent.frames["leftFrame"].SingleByte2DoubleByte(val); 
			// }
			// else
			// 	return SASingleByte2DoubleByte(val);
		},

		TransactXBonusPointSimulationRequest : function(val)
		{
			var app = require('app');

			if(typeof val.point != "undefined")
				val["BONUSPOINT"] = val.point;

			ACCoreJS.InitOthersACTransact("bonusPointRedemptionSimulation");
			app.DS.update(val);
		}



	};

	/** Original VBS **/


	//parent.frames["leftFrame"].Trace("*****ACTransactCoreJS*****");
	//parent.frames["leftFrame"].Trace("Version : 2014-12-10 12:00NN");
