---
title:TryGetGlyphTypeface Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryGetGlyphTypeface Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
bool TryGetGlyphTypeface(
	string familyName,
	FontStyle style,
	FontWeight weight,
	FontStretch stretch,
	out IGlyphTypeface?? glyphTypeface
)
```
**VB**
``` VB
Function TryGetGlyphTypeface ( 
	familyName As String,
	style As FontStyle,
	weight As FontWeight,
	stretch As FontStretch,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
**F#**
``` F#
abstract TryGetGlyphTypeface : 
        familyName : string * 
        style : FontStyle * 
        weight : FontWeight * 
        stretch : FontStretch * 
        glyphTypeface : IGlyphTypeface byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_Fonts_IFontCollection">IFontCollection Interface</a>  
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
