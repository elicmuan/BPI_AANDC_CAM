	dim dbobjReceipt
	dim dbobj
	dim jnlobj
	dim printType
	dim printModeType
	dim atmType
	'Set jnlobj=CreateObject("SSMGJNLService.JNLService")
	Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
	Set myTransactHelperObJ=CreateObject("TransactHelper.MyTransactHelper")
    
	Sub SetUCDIStr(CDI, val)
		COM_UCDI_INTERFACE.UCDIstring(CDI)= val
	End Sub
	
	Sub SetUCDIIntegar(CDI, val)
		COM_UCDI_INTERFACE.UCDIinteger(CDI) = val
	End Sub
	
	function GetUCDIString(key)
		GetUCDIString =  COM_UCDI_INTERFACE.UCDIString(key)
	End Function
	
	function GetUCDIIntegar(key)
		GetUCDIIntegar =  COM_UCDI_INTERFACE.UCDIinteger(key)
	end function

	function GetComString(key)
		GetComString =  COMCDIINTERFACE.comString(key)		
	end function
	
	Sub SetComString(key, val)
		 COMCDIINTERFACE.comString(key) = val
	End Sub
	
	function GetComInt(key)
		GetComInt =  COMCDIINTERFACE.comInteger(key)
		'msgbox 	key & "  =  " & COMCDIINTERFACE.comInteger(key)
	End function
	
	Sub SetComInt(key, val)
		 COMCDIINTERFACE.comInteger(key) = val
	End Sub

	Sub LogToJournal(message)
		'If IsEmpty(jnlobj) Or IsNull(jnlobj) Or jnlobj Is Nothing then
		'	Set jnlobj=CreateObject("SSMGJNLService.JNLService")
		'end if
		'	jnlobj.Print(message)
		COM_UCDI_INTERFACE.UCDIstring("PRINT-JOURNAL")= message
	end Sub

	'*********************TAIWAN ATMC PIN handling************************
	Sub KEYBOARD_PINEntered (result, value)
		call ProcessPINEntered(result, value)		
	End Sub
					
	'*********************Key pad handling************************
	Sub KEYBOARD_KeyPressed (key, keyType)
		If keyType = "FDK" Then 
		   'Not sure do this
		    KEYBOARD.Cancel
		    
		    KEYBOARD.TerminateKeys.DeactivateAllKeys	
		    ProcessFDK (key)	 	      
		ELSE
		
			Dim finalPressValue
			
			If keyType = "ENTER" Then 
				KEYBOARD.TerminateKeys.DeactivateAllKeys
			elseif key="11" then
				KEYBOARD.TerminateKeys.DeactivateAllKeys
			END IF
			
			if keyType = "CANCEL" Then
				finalPressValue = "11"
			elseif keyType = "CLEAR" Or keyType = "BACK" Then
				finalPressValue = "13"
			else
				finalPressValue = key
			END IF
		      ProcessKeyPad(finalPressValue)
		END IF			
	End Sub
	


	' this method has to be called to enable 
	'touch screen support on html screens
	'TSINTERFACE.EnableMouseHook
	
'This event handler gets called when data is echoed on screen
'=====================
Sub DMINTERFACE_KeyEchoData(data)
'=====================
   on error resume next
   parent.ACContainer.ACCoreJS.KeyEchoed(data)      
end sub

'It receives FDK pressed events with FDK id
'=====================
Sub DMINTERFACE_KeyPressData(data)   
'=====================
   on error resume next
   parent.ACContainer.ACCoreJS.KeyPressed(data)    
end sub

	'function RegisterPreferenceTrx(cardNo,transData,opCode)
	'	If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
	'		Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
	'	end if
	'	RegisterPreferenceTrx =  myPreferenceWSObJ.RegisterPreferenceTrx(cardNo, transData,opCode)
	'end function
	
	sub RegisterPreferenceTrx(cardNo,transData,opCode)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		call myPreferenceWSObJ.RegisterPreferenceTrx(cardNo, transData,opCode)
	end sub
	
	'function updateFavoriteTransaction(id,transData,opCode)
	'	If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
	'		Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
	'	end if
	'	updateFavoriteTransaction =  myPreferenceWSObJ.UpdatePreferenceTrx(id, transData,opCode)
	'end function
	
	sub updateFavoriteTransaction(id,cardNo,transData,opCode)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		call myPreferenceWSObJ.UpdatePreferenceTrx(id, cardNo , transData,opCode)
	end sub
   
	'function DeRegisteredPreferenceTrx(myPreferenceId)
	'	If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
	'		Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
	'	end if
	'	DeRegisteredPreferenceTrx =  myPreferenceWSObJ.DeRegisteredPreferenceTrx(myPreferenceId)
	'end function
	
	sub DeRegisteredPreferenceTrx(myPreferenceId)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		call myPreferenceWSObJ.DeRegisteredPreferenceTrx(myPreferenceId)
	end sub
	
	function DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		DeRegisteredPreferenceTrxWithUpdateInfo =  myPreferenceWSObJ.DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo)
	end function
	
	function RegisterThemeUser(cardNo,themeId)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		RegisterThemeUser =  myPreferenceWSObJ.RegisterThemeUser(cardNo, themeId)
	end Function
	
	Function sendResult(xmlResult)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
	    sendResult = myPreferenceWSObJ.sendResult(xmlResult)
	End Function 
	
	Function CallUpdateCustomerSeen(cardNo, campaignNo)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
	    CallUpdateCustomerSeen = myPreferenceWSObJ.CallUpdateCustomerSeen(cardNo, campaignNo)
	End Function 

	Function ShowGreetingName(preferenceId ,cardNo)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		ShowGreetingName = myPreferenceWSObJ.ShowGreetingName(preferenceId, cardNo)
	End Function

	Function HideGreetingName(cardNo)
		If IsEmpty(myPreferenceWSObJ) Or IsNull(myPreferenceWSObJ) then
			Set myPreferenceWSObJ=CreateObject("InterActMyPreferenceServiceCLS.MyPreferenceWS")
		end if
		HideGreetingName = myPreferenceWSObJ.HideGreetingName(cardNo)
	End Function
	