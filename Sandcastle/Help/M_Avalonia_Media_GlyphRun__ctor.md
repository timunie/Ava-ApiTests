---
title:GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory&lt;Char&gt;, IReadOnlyList&lt;GlyphInfo&gt;, Nullable&lt;Point&gt;, Int32) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory&lt;Char&gt;, IReadOnlyList&lt;GlyphInfo&gt;, Nullable&lt;Point&gt;, Int32) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public GlyphRun(
	IGlyphTypeface glyphTypeface,
	double fontRenderingEmSize,
	ReadOnlyMemory<char> characters,
	IReadOnlyList<GlyphInfo> glyphInfos,
	Point? baselineOrigin = null,
	int biDiLevel = 0
)
```
**VB**
``` VB
Public Sub New ( 
	glyphTypeface As IGlyphTypeface,
	fontRenderingEmSize As Double,
	characters As ReadOnlyMemory(Of Char),
	glyphInfos As IReadOnlyList(Of GlyphInfo),
	Optional baselineOrigin As Point? = Nothing,
	Optional biDiLevel As Integer = 0
)
```
**F#**
``` F#
new : 
        glyphTypeface : IGlyphTypeface * 
        fontRenderingEmSize : float * 
        characters : ReadOnlyMemory<char> * 
        glyphInfos : IReadOnlyList<GlyphInfo> * 
        ?baselineOrigin : Nullable<Point> * 
        ?biDiLevel : int 
(* Defaults:
        let _baselineOrigin = defaultArg baselineOrigin null
        let _biDiLevel = defaultArg biDiLevel 0
*)
-> GlyphRun
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Point">Point</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="Overload_Avalonia_Media_GlyphRun__ctor">GlyphRun Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
