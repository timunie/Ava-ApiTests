# ShapeText Method


Shapes the specified region within the text and returns a shaped buffer.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ShapedBuffer ShapeText(
	ReadOnlyMemory<char> text,
	TextShaperOptions options
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ShapeText ( 
	text As ReadOnlyMemory(Of Char),
	options As TextShaperOptions
) As ShapedBuffer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShapeText : 
        text : ReadOnlyMemory<char> * 
        options : TextShaperOptions -> ShapedBuffer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/ITextShaperImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd>The text buffer.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions</a></dt><dd>Text shaper options to customize the shaping process.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer</a>  
A shaped glyph run.

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITextShaperImpl">ITextShaperImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
