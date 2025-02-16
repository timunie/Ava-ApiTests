---
title:TryMatchCharacter Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryMatchCharacter Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
bool TryMatchCharacter(
	int codepoint,
	FontStyle fontStyle,
	FontWeight fontWeight,
	FontStretch fontStretch,
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
        culture : CultureInfo * 
        typeface : Typeface byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
