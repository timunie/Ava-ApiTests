---
title:GlyphInfo Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GlyphInfo Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public GlyphInfo(
	ushort GlyphIndex,
	int GlyphCluster,
	double GlyphAdvance,
	Vector GlyphOffset = default
)
```
**VB**
``` VB
Public Sub New ( 
	GlyphIndex As UShort,
	GlyphCluster As Integer,
	GlyphAdvance As Double,
	Optional GlyphOffset As Vector = Nothing
)
```
**F#**
``` F#
new : 
        GlyphIndex : uint16 * 
        GlyphCluster : int * 
        GlyphAdvance : float * 
        ?GlyphOffset : Vector 
(* Defaults:
        let _GlyphOffset = defaultArg GlyphOffset new Vector()
*)
-> GlyphInfo
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo Structure</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
