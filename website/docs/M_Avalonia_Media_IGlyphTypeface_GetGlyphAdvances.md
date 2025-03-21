# GetGlyphAdvances Method


Returns an array of glyph advances in design em size.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
int[] GetGlyphAdvances(
	ReadOnlySpan<ushort> glyphs
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetGlyphAdvances ( 
	glyphs As ReadOnlySpan(Of UShort)
) As Integer()
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetGlyphAdvances : 
        glyphs : ReadOnlySpan<uint16> -> int[] 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IGlyphTypeface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlyspan-1" target="_blank" rel="noopener noreferrer">ReadOnlySpan</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>)</dt><dd>The glyph indices.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>[]  
An array of glyph advances.

## See Also


#### Reference
<a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface Interface</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

