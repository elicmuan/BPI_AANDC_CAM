
'---------------------------------------------
'VerifyPayerID: For Bill Payment Transaction
'InPut:	lvID = CustID / Businness ID
'	lvCheckCode = Check Type
'		      - Type1: A=10, B=11, C=12...  	
'		      - Type2: A=01, B=02, C=03... 
'---------------------------------------------
Function VerifyPayerID(lvID)
	Dim intID
	Dim i
	Dim strIdCode
	Dim blnChk
	Dim lvCheckCode
	
	
	lvCheckCode = "1"
	
	On Error Resume Next
	
	intID = Len(trim(lvID))
	'msgbox intid
	If intID = 8 or intID = 11 Then
		'Verify BusID
		If intID = 8 Then
			blnChk = tax_check_ban(lvID)
			If blnChk = False Then
				VerifyPayerID = "4"
				Exit Function
			End If				
		End If
		VerifyPayerID = "0"
	Else
		VerifyPayerID = "3"
		Exit Function
	End If
	
	If intID = 11 Then
		Select Case lvCheckCode
		Case "1"
			strIDCode = "A-10 B-11 C-12 D-13 E-14 F-15 G-16 H-17 I-34 J-18 K-19 L-20 M-21 N-22 O-35 P-23 Q-24 R-25 S-26 T-27 U-28 V-29 W-32 X-30 Y-31 Z-33"
			If Instr(strIDCode, Left(lvId,2)) = 0 Then
				VerifyPayerID = "3"
			Else
				'Verify CustId
				blnChk = tax_check_cid(lvID)
				'msgbox blnchk
				If blnChk = False Then
					VerifyPayerID = "5"
					Exit Function
				End If			
			
				VerifyPayerID = "0"
			End If
		Case "2"
			VerifyPayerID = "Error: ID"
			For i = 1 to 26
				If CInt(Left(lvID,2)) = i Then 
					VerifyPayerID = "0"
					Exit For
				End If
			Next
		Case Else
			VerifyPayerID = "6"
			Exit Function	
		End Select
	End If
	
	'If VerifyPayerID = "0" Then lvReturnId = lvID

End Function

Function ConvertIDCode(lvCode)
	lvCode = Left(lvCode,2)
	
	Select Case lvCode
	Case "10"
		ConvertIDCode = "A"
	Case "11"
		ConvertIDCode = "B"		
	Case "12"
		ConvertIDCode = "C"		
	Case "13"
		ConvertIDCode = "D"		
	Case "14"
		ConvertIDCode = "E"		
	Case "15"
		ConvertIDCode = "F"		
	Case "16"
		ConvertIDCode = "G"		
	Case "17"
		ConvertIDCode = "H"		
	Case "34"
		ConvertIDCode = "I"		
	Case "18"
		ConvertIDCode = "J"		
	Case "19"
		ConvertIDCode = "K"		
	Case "20"
		ConvertIDCode = "L"		
	Case "21"
		ConvertIDCode = "M"		
	Case "22"
		ConvertIDCode = "N"		
	Case "35"
		ConvertIDCode = "O"		
	Case "23"
		ConvertIDCode = "P"		
	Case "24"
		ConvertIDCode = "Q"		
	Case "25"
		ConvertIDCode = "R"		
	Case "26"
		ConvertIDCode = "S"		
	Case "27"
		ConvertIDCode = "T"		
	Case "28"
		ConvertIDCode = "U"		
	Case "29"
		ConvertIDCode = "V"		
	Case "32"
		ConvertIDCode = "W"		
	Case "30"
		ConvertIDCode = "X"		
	Case "31"
		ConvertIDCode = "Y"		
	Case "33"
		ConvertIDCode = "Z"	
	Case Else
		ConvertIDCode = lvCode
	End Select		
		
End Function

Function tax_check_digit(val)
	Dim accno
	Dim kind
	Dim amt
	Dim dt
    Dim chk1
    Dim chk2
    Dim taxacno
    Dim xx 
    Dim Length
    Dim valArry
	On Error Resume Next
	
	valArry = Split(val,",")
	accno = valArry(0)
	kind = valArry(1)
	amt = valArry(2)
	dt = valArry(3)
	
	'msgbox accno
	'msgbox kind
	'msgbox amt
	'msgbox dt
	
    chk1 = CInt(Mid(accno, 1, 1))
    chk2 = CInt(Mid(accno, 2, 1))
    accno = Trim(accno)
    taxacno = Mid(accno, 3, 14)
    Length = Len(taxacno)
    If (Length < 14) Then
        taxacno = taxacno & String(14 - Length, "7")
    End If
    xx = kind & taxacno
    If (tax_digit(xx) <> chk1) Then
          tax_check_digit = "1"
          Exit Function
    End If
    
    xx = Mid(taxacno, 12, 3)
    If Mid(kind, 2, 1) = "2" Or Mid(kind, 2, 1) = "4" Then
        xx = xx & String(7, "0")
    Else
        Length = Len(Trim(cstr(amt)))
        If Length < 7 Then
            xx = xx & String(7 - Length, "0") & Trim(amt)
        Else
            xx = xx & Trim(amt)
        End If
    End If
    xx = xx & dt
    If (tax_digit(xx) <> chk2) Then
        tax_check_digit = "1"
        Exit Function
    End If
    tax_check_digit = "0"
End Function

Function tax_digit(ss)
Const digit_weigh = "1313131313131313"
Dim sum1
Dim i
Dim x
Dim y
Dim str
On Error Resume Next
    sum1 = 0
    For i = 1 To 16
	str = Mid(ss, i, 1)
	If str = " " Then str = "0"
        x = Cint(str) * Mid(digit_weigh, i, 1)
	'msgbox Mid(ss, i, 1) & "*" & Mid(digit_weigh, i, 1) & "=" & x
        sum1 = sum1 + x

    Next

    y = sum1 Mod 10
	
    If y <> 0 Then
        tax_digit = 10 - y
    Else
        tax_digit = 0
    End If
End Function


Function tax_check_cid(cid)
Const cid_weigh = "19876543211"
Dim sum
Dim i
On Error Resume Next
    If Cint(Mid(cid, 1, 2)) < 10 Or Cint(Mid(cid, 1, 2)) > 35 Then
        tax_check_cid = False
        Exit Function
    End If
    
    sum = 0
    For i = 1 To 11
        sum = sum + Mid(cid, i, 1) * Mid(cid_weigh, i, 1)
    Next
    
    tax_check_cid = (sum Mod 10 = 0)
        
End Function

Private Function tax_check_ban(cid)
    Const ban_weigh = "12121241"
    Dim sum 
    Dim i 
    Dim x 
    Dim q
    Dim r
    Dim s
On Error Resume Next
    If cid = "00000000" Then
        tax_check_ban = False
        Exit Function
    End If
    sum = 0
    For i = 1 To 8
        x = Mid(cid, i, 1) * Mid(ban_weigh, i, 1)
        If (x >= 10) Then
            s = Int(x / 10) + x Mod 10
            sum = sum + s
        Else
            sum = sum + x
        End If
    Next
    
    tax_check_ban = (sum Mod 10 = 0)
    
    If Not tax_check_ban And Mid(cid, 7, 1) = "7" Then
        'try again
        sum = 0
        For i = 1 To 8
            x = Mid(cid, i, 1) * Mid(ban_weigh, i, 1)
            If (x >= 10) Then
                s = Int(x / 10) + x Mod 10
                If s >= 10 Then 'only the 7th byte is 7: 7*4=28 -> 2+8=10 -> 1
                    s = Cint(Left(Trim(s), 1))
                End If
                sum = sum + s
            Else
                sum = sum + x
            End If
        Next
        tax_check_ban = (sum Mod 10 = 0)
    End If
End Function


