# ShapeText(ReadOnlyMemory&lt;Char&gt;, TextShaperOptions) Method


Shapes the specified region within the text and returns a shaped buffer.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ShapedBuffer ShapeText(
	ReadOnlyMemory<char> text,
	TextShaperOptions options = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ShapeText ( 
	text As ReadOnlyMemory(Of Char),
	Optional options As TextShaperOptions = Nothing
) As ShapedBuffer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ShapeText : 
        text : ReadOnlyMemory<char> * 
        ?options : TextShaperOptions 
(* Defaults:
        let _options = defaultArg options new TextShaperOptions()
*)
-> ShapedBuffer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextShaper.cs#L44" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd>The text buffer.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions</a>  (Optional)</dt><dd>Text shaper options to customize the shaping process.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer</a>  
A shaped glyph run.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextShaper">TextShaper Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_TextShaper_ShapeText">ShapeText Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
