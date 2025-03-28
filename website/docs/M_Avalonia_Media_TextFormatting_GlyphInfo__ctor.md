# GlyphInfo Constructor


Represents a single glyph.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public GlyphInfo(
	ushort GlyphIndex,
	int GlyphCluster,
	double GlyphAdvance,
	Vector GlyphOffset = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	GlyphIndex As UShort,
	GlyphCluster As Integer,
	GlyphAdvance As Double,
	Optional GlyphOffset As Vector = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/GlyphInfo.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo Structure</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

