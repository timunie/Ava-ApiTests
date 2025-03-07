# GetGlyph Method


Returns an glyph index for the specified codepoint.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ushort GetGlyph(
	uint codepoint
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetGlyph ( 
	codepoint As UInteger
) As UShort
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetGlyph : 
        codepoint : uint32 -> uint16 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IGlyphTypeface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd>The codepoint.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>  
A glyph index.Returns `0` if a glyph isn't found.

## See Also


#### Reference
<a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface Interface</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
