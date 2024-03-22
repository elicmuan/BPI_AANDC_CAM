define([
  "app"
],
function(app) {
	var auditData = {
		"TerminateConnection" : 
		{ 	
			description : "VTM 與　客服結束連結",
			remarks : ""
		},
		"SystemTimeout" : 
		{ 	
			description : "客服 ({agentIDCode}) 忙碌中",
			remarks : ""
		},
		"CancelTrx" : 
		{ 	
			description : "顧客取消交易",
			remarks : ""
		},
		"SeekAssistance" : 
		{ 	
			description : "顧客尋找協助",
			remarks : ""
		},
		"SeekAgent" : 
		{ 	
			description : "要求客服 ({agentIDCode}) 接受協助 ",
			remarks : ""
		},
		"NoAvailableAgent" : 
		{ 	
			description : "客服皆忙碌中",
			remarks : ""
		},
		"SeekAgentAssist" : 
		{ 	
			description : "要求客服 ({agentIDCode}) 開始協助",
			remarks : ""
		},
		"AgentAccepted" : 
		{ 	
			description : "客服({agentIDCode}) 接受協助",
			remarks : ""
		},
		"InitTransaction" : 
		{ 	
			description : "客服協助 - 開始",
			remarks : ""
		},
		"RejectAssistance" : 
		{ 	
			description : "客服({agentIDCode}) 取消交易",
			remarks : ""
		},
		"StartScanID" : 
		{ 	
			description : "顧客開始掃描身分證證件 - 正面",
			remarks : ""
		},
		"ScanIDSuccussful" : 
		{ 	
			description : "掃描身分證證件成功",
			remarks : ""
		},
		"ConfirmID" : 
		{ 	
			description : "顧客確認身分證證件 - 正面 無誤",
			remarks : ""
		},
		"RescanID" : 
		{ 	
			description : "顧客重新掃描身分證 - 正面",
			remarks : ""
		},			
		"ScanIDFailure" : 
		{ 	
			description : "VTM 掃描失敗",
			remarks : ""
		},
		"StartScanIDBack" : 
		{ 	
			description : "顧客開始掃描身分證證件 - 反面",
			remarks : ""
		},
		"ConfirmIDBack" : 
		{ 	
			description : "顧客確認身分證證件 - 反面 無誤",
			remarks : ""
		},
		"RescanIDBack" : 
		{ 	
			description : "顧客重新掃描身分證 - 反面",
			remarks : ""
		},
		"StartScanSecondID" : 
		{ 	
			description : "顧客開始掃描第二證件 - 正面",
			remarks : ""
		},
		"ScanSecondIDSuccussful" : 
		{ 	
			description : "掃描第二證件成功  - 正面",
			remarks : ""
		},
		"ConfirmSecondID" : 
		{ 	
			description : "顧客確認第二證件 - 正面 無誤",
			remarks : ""
		},
		"RescanSecondID" : 
		{ 	
			description : "顧客重新掃描第二證件 - 正面",
			remarks : ""
		},
		"StartScanSecondIDBack" : 
		{ 	
			description : "顧客開始掃描第二證件 - 反面",
			remarks : ""
		},
		"ScanSecondIDBackSuccussful" : 
		{ 	
			description : "掃描第二證件成功  - 反面",
			remarks : ""
		},
		"ConfirmSecondIDBack" : 
		{ 	
			description : "顧客確認第二證件 - 反面 無誤",
			remarks : ""
		},
		"RescanSecondIDBack" : 
		{ 	
			description : "顧客重新掃描第二證件 - 反面",
			remarks : ""
		},			
		"MachineTimeOut" : 
		{ 	
			description : "VTM 沒有接受任何回應, 系統自動離開.",
			remarks : ""
		},			
		"OCRFrontIDSuccessfully" : 
		{ 	
			description : "VTM OCR 身分證 - 正面",
			remarks : ""
		},			
		"OCRBackIDSuccessfully" : 
		{ 	
			description : "VTM OCR 身分證 - 反面",
			remarks : ""
		},
		"OCRFailure" : 
		{ 	
			description : "VTM OCR 身分證失敗",
			remarks : ""
		},	
		"SubmitIDFrontImage" : 
		{ 	
			description : "VTM 上傳身分證 正面",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "{idfrontFileName}" }'
		},	
		"SubmitIDBackImage" : 
		{ 	
			description : "VTM 上傳身分證 反面",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "{idBackFileName}" }'
		},
		"SubmitIDUVFrontImage" : 
		{ 	
			description : "VTM 上傳身分證 (紫光) 正面",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "{idUVfrontFileName}" }'
		},
		"SubmitIDUVBackImage" : 
		{ 	
			description : "VTM 上傳身分證 (紫光) 反面",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "{idUVBackFileName}" }'
		},
		"SubmitSecondIDFrontImage" : 
		{ 	
			description : "VTM 上傳第二證件 正面",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "{secondIdFrontFile}" }'
		},	
		"SubmitSecondIDBackImage" : 
		{ 	
			description : "VTM 上傳第二證件 反面",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "{secondIdBackFile}" }'
		},
		"NotifyAgentViewImage" : 
		{ 	
			description : "VTM 要求客服檢核上傳證件",
			remarks : ""
		},
		"WaitingAgentVerifyImages" : 
		{ 	
			description : "VTM 等待客服檢核證件",
			remarks : ""
		},
		"AgentApproveImages" : 
		{ 	
			description : "客服 ({agentIDCode}) 確認上傳證件都無誤",
			remarks : ""
		},
		"CompleteAssist" :
		{
			description : "客服完成協助",
			remarks : ""
		},
		"CompleteRejectAssist" :
		{
			description : "客服結束協助",
			remarks : ""
		},
		"SubmitWaterMarkPDF" :
		{
			description : "VTM 上傳顧客開戶約定書簽名版本",
			remarks : '{"action" : "allow" , "type" : "viewImage" , "fileName" : "SignedDocument.jpg" }'
		},
		"SubmitKYCPDF" :
		{
			description : "VTM 上傳開戶作業檢核表",
			remarks : '{"action" : "allow" , "type" : "viewPDF" , "fileName" : "ESBKYCForm.pdf" }'
		},
		"AgentRejectIDFront" :
		{
			description : "客服要求重新掃描身分證 - 正面",
			remarks : ""
		},
		"AgentRejectIDBack" :
		{
			description : "客服要求重新掃描身分證 - 背面",
			remarks : ""
		},
		"AgentRejectID" :
		{
			description : "客服要求重新掃描身分證",
			remarks : ""
		},
		"AgentRejectSecondIDFront" :
		{
			description : "客服要求重新掃描第二證件 - 正面",
			remarks : ""
		},
		"AgentRejectSecondIDBack" :
		{
			description : "客服要求重新掃描第二證件 - 背面",
			remarks : ""
		},
		"AgentRejectSecondID" :
		{
			description : "客服要求重新掃描第二證件",
			remarks : ""
		},
		"UserInputBasicDetails" :
		{
			description : "客戶輸入身分證資訊 姓名 : {customerName} , 身分證字號 : {customerIDNumber} ,戶籍住址 : {customerDetailsAddState} {customerDetailsAddArea} {customerDetailsAddZone1} 里 {customerDetailsAddZone2} 鄰 {customerDetailsAdd} ,出生年月日 : {customerBirthday} , 發證日期 : {customerIDIssuedDate} ,出生地 : {customerBirthdayPlace} , 發證地 : {customerIDIssuedLocaltion} , 領補發類別 : {customerIDReissuedType}",
			remarks : ""
		},
		"vtmReqAgentVerifyBasicDetails" :
		{
			description : "VTM 要求客服身分證資訊",
			remarks : ""
		},
		"agentAcceptBasicDetails" :
		{
			description : "客服驗證身分證成功",
			remarks : ""
		},	
		"agentRequireEnterBasicDetails" :
		{
			description : "客服要求重新輸入身分證資訊",
			remarks : ""
		},
		"customerAcceptBasicDetails" :
		{
			description : "客戶確認身分資料正確",
			remarks : ""
		},
		"vtmRequestMQZ21" :
		{
			description : "VTM 系統查詢聯徵 Z21",
			remarks : ""
		},		
		"vtmResponseMQZ21Good" :
		{
			description : "VTM 系統查詢聯徵 Z21 - 成功",
			remarks : ""
		},		
		"vtmResponseMQZ21Bad" :
		{
			description : "VTM 系統查詢聯徵 Z21 - 失敗",
			remarks : ""
		},
		"vtmResponseMQZ21TimeOut" :
		{
			description : "VTM 系統查詢聯徵 Z21 - 交易逾時",
			remarks : ""
		},	
		"vtmRequestMQZ22" :
		{
			description : "VTM 系統查詢聯徵 Z22",
			remarks : ""
		},		
		"vtmResponseMQZ22Good" :
		{
			description : "VTM 系統查詢聯徵 Z22 - 成功",
			remarks : ""
		},		
		"vtmResponseMQZ22Bad" :
		{
			description : "VTM 系統查詢聯徵 Z22 - 失敗",
			remarks : ""
		},		
		"vtmResponseMQZ22TimeOut" :
		{
			description : "VTM 系統查詢聯徵 Z22 - 交易逾時",
			remarks : ""
		},					
		"UserInputAdditionalDetails" :
		{
			description : "客戶輸入聯絡及職業資訊 通訊地址 : {customerContactAddState}{customerContactAddArea}{customerContactAddZone1}里{customerContactAddZone2}鄰{customerContactAdd} ,E-MAIL : {customerEmail} , 年收入 : {customerAnnualIncome} ,職業 : {customerOccupation} , 身分 : {customerIentity} ,開戶用途 : {customerAcctOpenPurpose}",
			remarks : ""
		},
		"UserInputBankPin" :
		{
			description : "客戶輸入電話銀行密碼",
			remarks : ""
		},
		"UserInputChipCardPin" :
		{
			description : "客戶輸入數銀行密碼",
			remarks : ""
		},
		"vtmRequestESIP0003" :
		{
			description : "VTM 系統查詢 ESIP 0003",
			remarks : ""
		},		
		"vtmRequestESIP00031Good" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 成功",
			remarks : ""
		},		
		"vtmRequestESIP0003Bad" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 失敗",
			remarks : ""
		},
		"vtmRequestESIP0003TimeOut" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 交易逾時",
			remarks : ""
		},
		"vtmInputAdditionalDetails" :
		{
			description : "客戶開始輸入 聯絡及職業資訊",
			remarks : ""
		},
		"vtmInitStartKYCWithAgent" :
		{
			description : "VTM 系統開始要求客戶服 KYC",
			remarks : ""
		},
		"agentInitCustomerVerifyInfo" :
		{
			description : "客服要求客戶驗證輸入資訊",
			remarks : ""
		},
		"agentInitCustomerInfoReenter" :
		{
			description : "客戶要求重新輸入資訊",
			remarks : ""
		},
		"agentInitTakeCustomerPhoto" :
		{
			description : "客服要求 VTM 系統拍攝客戶影相",
			remarks : ""
		},
		"vtmRequestESIP0003CONFIRM" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 建檔",
			remarks : ""
		},		
		"vtmRequestESIP0003CONFIRMGood" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 建檔 - 成功",
			remarks : ""
		},		
		"vtmRequestESIP0003CONFIRMBad" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 建檔 - 失敗",
			remarks : ""
		},
		"vtmRequestESIP0003CONFIRMTimeOut" :
		{
			description : "VTM 系統查詢 ESIP 0003 - 建檔 - 交易逾時",
			remarks : ""
		},
		"vtmGenerateSignaureDocument" :
		{
			description : "VTM 系統產生 開戶約定書",
			remarks : ""
		},
		"vtmPrintSignatureDoucment" :
		{
			description : "VTM 系統產生 開戶約定書成功, 開始列印文件",
			remarks : ""
		},
		"vtmPrintSignDocFailed" :
		{
			description : "VTM 列印模組異常",
			remarks : ""
		},
		"vtmRequestCustomerScanDoc" :
		{
			description : "VTM 系統列印文件當中...",
			remarks : ""
		},
		"customerStartToScanDocument" :
		{
			description : "客戶開始掃描文件",
			remarks : ""
		},
		"vtmSystemAutoScanDocument" :
		{
			description : "VTM 系統開始掃描文件",
			remarks : ""
		},
		"vtmScanDocumentSuccessful" :
		{
			description : "VTM 系統掃描成功",
			remarks : ""
		},
		"vtmScanDocumentFailure" :
		{
			description : "VTM 系統掃描失敗, 重新掃描",
			remarks : ""
		},
		"vtmScanDocumentTimeout" :
		{
			description : "VTM 系統掃描逾時, 交易取消.",
			remarks : ""
		},
		"vtmSystemVerifyQRCode" :
		{
			description : "VTM 系統 QR 驗證成功",
			remarks : ""
		},
		"vtmSystemVerifyQRCodeFailuure" :
		{
			description : "VTM 系統 QR 驗證失敗",
			remarks : ""
		},
		"vtmSystemVerifyQRCodeRetry" :
		{
			description : "VTM 系統 QR 驗證失敗 - 重新掃描",
			remarks : ""
		},
		"vtmSystemUploadSignedDoc" :
		{
			description : "VTM 系統上傳簽名文件",
			remarks : ""
		},
		"vtmSystemNotifyCheckSignedDoc" :
		{
			description : "VTM 系統要求客服簽名文件",
			remarks : ""
		},
		"vtmSystemInsertNewCardToSlot" :
		{
			description : "VTM 系統插入新卡片",
			remarks : ""
		},
		"vtmSysInstNewCardToSlotFailure" :
		{
			description : "發卡機模組異常",
			remarks : ""
		},			
		"vtmRequestESIP0004" :
		{
			description : "VTM 系統查詢 ESIP 0004",
			remarks : ""
		},		
		"vtmRequestESIP0004Good" :
		{
			description : "VTM 系統查詢 ESIP 0004 - 成功",
			remarks : ""
		},		
		"vtmRequestESIP0004Bad" :
		{
			description : "VTM 系統查詢 ESIP 0004 - 失敗",
			remarks : ""
		},
		"vtmRequestESIP0004TimeOut" :
		{
			description : "VTM 系統查詢 ESIP 0004 - 交易逾時",
			remarks : ""
		},			
		"vtmRequestESIP0005" :
		{
			description : "VTM 系統查詢 ESIP 0005",
			remarks : ""
		},		
		"vtmRequestESIP0005Good" :
		{
			description : "VTM 系統查詢 ESIP 0005 - 成功",
			remarks : ""
		},		
		"vtmRequestESIP0005Bad" :
		{
			description : "VTM 系統查詢 ESIP 0005 - 失敗",
			remarks : ""
		},
		"vtmRequestESIP0005TimeOut" :
		{
			description : "VTM 系統查詢 ESIP 0005 - 交易逾時",
			remarks : ""
		},			
		"vtmRequestESIP0006" :
		{
			description : "VTM 系統查詢 ESIP 0006",
			remarks : ""
		},		
		"vtmRequestESIP0006Good" :
		{
			description : "VTM 系統查詢 ESIP 0006 - 成功",
			remarks : ""
		},		
		"vtmRequestESIP0006Bad" :
		{
			description : "VTM 系統查詢 ESIP 0006 - 失敗",
			remarks : ""
		},
		"vtmRequestESIP0006TimeOut" :
		{
			description : "VTM 系統查詢 ESIP 0006 - 交易逾時",
			remarks : ""
		},
		"vtmSystemStartToWritePinToCard" :
		{
			description : "VTM 系統開始寫卡",
			remarks : ""
		},
		"vtmSystemWriteCardSuccess" :
		{
			description : "寫卡成功",
			remarks : ""
		},
		"vtmSystemEjectNewCard" :
		{
			description : "發卡模組 退卡",
			remarks : ""
		},
		"vtmSystemEjectNewCardSuccess" :
		{
			description : "發卡模組 退卡成功",
			remarks : ""
		},
		"vtmSystemOpenAcctSuccess" :
		{
			description : "開戶成功",
			remarks : ""
		},
		"vtmSystemUdateTrxAudit" :
		{
			description : "VTM 系統更新交易報表",
			remarks : ""
		},
		"vtmSystemSMSEMAILIMG" :
		{
			description : "VTM 系統 開戶成功 通知客戶 SMS / EMAIL / 上傳印鑑系統",
			remarks : ""
		}
	};
	return auditData;
});