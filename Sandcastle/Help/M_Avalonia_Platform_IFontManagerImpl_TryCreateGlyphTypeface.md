---
title:TryCreateGlyphTypeface(Stream, FontSimulations, IGlyphTypeface) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryCreateGlyphTypeface(Stream, FontSimulations, IGlyphTypeface) Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
bool TryCreateGlyphTypeface(
	Stream stream,
	FontSimulations fontSimulations,
	out IGlyphTypeface?? glyphTypeface
)
```
**VB**
``` VB
Function TryCreateGlyphTypeface ( 
	stream As Stream,
	fontSimulations As FontSimulations,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
**F#**
``` F#
abstract TryCreateGlyphTypeface : 
        stream : Stream * 
        fontSimulations : FontSimulations * 
        glyphTypeface : IGlyphTypeface byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_FontSimulations">FontSimulations</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="Overload_Avalonia_Platform_IFontManagerImpl_TryCreateGlyphTypeface">TryCreateGlyphTypeface Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
