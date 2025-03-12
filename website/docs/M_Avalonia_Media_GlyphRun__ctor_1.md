# GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory&lt;Char&gt;, IReadOnlyList&lt;UInt16&gt;, Nullable&lt;Point&gt;, Int32) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a> class by specifying properties of the class.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public GlyphRun(
	IGlyphTypeface glyphTypeface,
	double fontRenderingEmSize,
	ReadOnlyMemory<char> characters,
	IReadOnlyList<ushort> glyphIndices,
	Point? baselineOrigin = null,
	int biDiLevel = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	glyphTypeface As IGlyphTypeface,
	fontRenderingEmSize As Double,
	characters As ReadOnlyMemory(Of Char),
	glyphIndices As IReadOnlyList(Of UShort),
	Optional baselineOrigin As Point? = Nothing,
	Optional biDiLevel As Integer = 0
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        glyphTypeface : IGlyphTypeface * 
        fontRenderingEmSize : float * 
        characters : ReadOnlyMemory<char> * 
        glyphIndices : IReadOnlyList<uint16> * 
        ?baselineOrigin : Nullable<Point> * 
        ?biDiLevel : int 
(* Defaults:
        let _baselineOrigin = defaultArg baselineOrigin null
        let _biDiLevel = defaultArg biDiLevel 0
*)
-> GlyphRun
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs#L48" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd>The glyph typeface.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The rendering em size.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd>The characters.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>)</dt><dd>The glyph indices.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Point">Point</a>)  (Optional)</dt><dd>The baseline origin of the run.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd>The bidi level.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_GlyphRun">GlyphRun Class</a>  
<a href="Overload_Avalonia_Media_GlyphRun__ctor">GlyphRun Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

