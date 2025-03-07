# GetGlyphs Method


Returns an array of glyph indices. Codepoints that are not represented by the font are returned as <code language="cs">0</code>.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ushort[] GetGlyphs(
	ReadOnlySpan<uint> codepoints
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetGlyphs ( 
	codepoints As ReadOnlySpan(Of UInteger)
) As UShort()
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetGlyphs : 
        codepoints : ReadOnlySpan<uint32> -> uint16[] 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IGlyphTypeface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlyspan-1" target="_blank" rel="noopener noreferrer">ReadOnlySpan</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>)</dt><dd>The codepoints to map.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>[]  
An array of glyph indices.

## See Also


#### Reference
<a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface Interface</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
