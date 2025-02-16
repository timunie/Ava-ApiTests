---
title:CreateGlyphRun Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateGlyphRun Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IGlyphRunImpl CreateGlyphRun(
	IGlyphTypeface glyphTypeface,
	double fontRenderingEmSize,
	IReadOnlyList<GlyphInfo> glyphInfos,
	Point baselineOrigin
)
```
**VB**
``` VB
Function CreateGlyphRun ( 
	glyphTypeface As IGlyphTypeface,
	fontRenderingEmSize As Double,
	glyphInfos As IReadOnlyList(Of GlyphInfo),
	baselineOrigin As Point
) As IGlyphRunImpl
```
**F#**
``` F#
abstract CreateGlyphRun : 
        glyphTypeface : IGlyphTypeface * 
        fontRenderingEmSize : float * 
        glyphInfos : IReadOnlyList<GlyphInfo> * 
        baselineOrigin : Point -> IGlyphRunImpl 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGlyphRunImpl">IGlyphRunImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
