# ShapedBuffer Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ShapedBuffer(
	ReadOnlyMemory<char> text,
	int bufferLength,
	IGlyphTypeface glyphTypeface,
	double fontRenderingEmSize,
	sbyte bidiLevel
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	text As ReadOnlyMemory(Of Char),
	bufferLength As Integer,
	glyphTypeface As IGlyphTypeface,
	fontRenderingEmSize As Double,
	bidiLevel As SByte
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        text : ReadOnlyMemory<char> * 
        bufferLength : int * 
        glyphTypeface : IGlyphTypeface * 
        fontRenderingEmSize : float * 
        bidiLevel : sbyte -> ShapedBuffer
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/ShapedBuffer.cs#L15" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.sbyte" target="_blank" rel="noopener noreferrer">SByte</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

