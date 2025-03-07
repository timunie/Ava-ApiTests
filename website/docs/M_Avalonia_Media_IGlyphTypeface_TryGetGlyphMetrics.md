# TryGetGlyphMetrics Method


Tries to get a glyph's metrics in em units.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryGetGlyphMetrics(
	ushort glyph,
	out GlyphMetrics metrics
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetGlyphMetrics ( 
	glyph As UShort,
	<OutAttribute> ByRef metrics As GlyphMetrics
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetGlyphMetrics : 
        glyph : uint16 * 
        metrics : GlyphMetrics byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IGlyphTypeface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a></dt><dd>The glyph id.</dd><dt>  <a href="T_Avalonia_Media_GlyphMetrics">GlyphMetrics</a></dt><dd>The glyph metrics.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`true` if an glyph's metrics was found, `false` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface Interface</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
