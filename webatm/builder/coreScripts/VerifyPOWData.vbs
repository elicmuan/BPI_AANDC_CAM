'===================================================
'檢核繳費單電號 
'Return: 1=OK, 2=Fail
'===================================================
Function ChkPOWNO(lvPOWNo) 
	Dim strChkCode
	Dim i 
	Dim intTotal
	Dim strCode
	
	On Error Resume Next
	If Len(lvPOWNo) <> 11 Then
		ChkPOWNO = "2"
		Exit Function
	End If
	
	strChkCode = Right(lvPOWNo,1)
	'msgbox 3 mod 2 & "-" & 4 mod 2
	For i = 1 to 10
		strCode = Mid(lvPOWNo,i,1)
		If CInt(i) Mod 2 <> 0 Then
			intTotal = intTotal + AddFunc(CInt(strCode) * 2)
		Else
			intTotal = intTotal + CInt(strCode) * 1
		End If
		'msgbox intTotal
	Next
	'msgbox intTotal
	If Right(CStr(intTotal),1) <> strChkCode Then
		ChkPOWNO = "2"
	Else
		ChkPOWNO = "1"
	End If

End Function

'===================================================
'檢核查核碼
'Return: 1=OK, 2=Fail
'===================================================
Function ChkPOWCheckCode(lvDate, lvPOWNO, lvCHK, lvAMT)

	Dim strChkCode
	Dim i 
	Dim intTotal
	Dim strCode
	Dim strTmp
	On Error Resume Next
	
	If Len(lvDate) + Len(lvPOWNO) + Len(lvCHK) + Len(lvAMT) <> 29 Then
		ChkPOWCheckCode = "2"
		Exit Function
	End If
	
	strChkCode = Left(lvCHK,1)
	
	lvPOWNO = lvDate & lvPOWNO & Right(lvCHK,2) & lvAMT
	For i = 1 to 28
		strCode = Mid(lvPOWNo,i,1)
		If CInt(i) Mod 2 <> 0 Then
			intTotal = intTotal + AddFunc(CInt(strCode) * 2)
		Else
			intTotal = intTotal + CInt(strCode) * 1
		End If
	Next
	
	If Right(CStr(intTotal),1) <> strChkCode Then
		ChkPOWCheckCode = "2"
	Else
		ChkPOWCheckCode = "1"
	End If	
	
End Function

Function AddFunc(lvInt)

	Dim strInt
	Dim i
	Dim intTot
	
	On Error Resume Next
	
	strInt = CStr(lvInt)
	If Len(strInt) > 1 Then
		For i = 1 to Len(strInt)
			intTot = intTot + Cint(Mid(strInt,i,1))
		Next
	Else 
		intTot = lvInt
	End If
	'msgbox  intTot
	AddFunc = intTot
	
End Function
