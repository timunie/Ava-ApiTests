---
title:TryMatchCharacter Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryMatchCharacter Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
bool TryMatchCharacter(
	int codepoint,
	FontStyle fontStyle,
	FontWeight fontWeight,
	FontStretch fontStretch,
	string? familyName,
	CultureInfo? culture,
	out Typeface? typeface
)
```
**VB**
``` VB
Function TryMatchCharacter ( 
	codepoint As Integer,
	fontStyle As FontStyle,
	fontWeight As FontWeight,
	fontStretch As FontStretch,
	familyName As String,
	culture As CultureInfo,
	<OutAttribute> ByRef typeface As Typeface
) As Boolean
```
**F#**
``` F#
abstract TryMatchCharacter : 
        codepoint : int * 
        fontStyle : FontStyle * 
        fontWeight : FontWeight * 
        fontStretch : FontStretch * 
        familyName : string * 
        culture : CultureInfo * 
        typeface : Typeface byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_Fonts_IFontCollection">IFontCollection Interface</a>  
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
