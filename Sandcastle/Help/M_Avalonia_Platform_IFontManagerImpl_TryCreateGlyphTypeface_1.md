---
title:TryCreateGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryCreateGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface) Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
bool TryCreateGlyphTypeface(
	string familyName,
	FontStyle style,
	FontWeight weight,
	FontStretch stretch,
	out IGlyphTypeface?? glyphTypeface
)
```
**VB**
``` VB
Function TryCreateGlyphTypeface ( 
	familyName As String,
	style As FontStyle,
	weight As FontWeight,
	stretch As FontStretch,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
**F#**
``` F#
abstract TryCreateGlyphTypeface : 
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
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="Overload_Avalonia_Platform_IFontManagerImpl_TryCreateGlyphTypeface">TryCreateGlyphTypeface Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
