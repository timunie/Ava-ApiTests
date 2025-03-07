# CreateSymbol Method


Creates a shaped symbol.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ShapedTextRun CreateSymbol(
	TextRun textRun,
	FlowDirection flowDirection
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function CreateSymbol ( 
	textRun As TextRun,
	flowDirection As FlowDirection
) As ShapedTextRun
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member CreateSymbol : 
        textRun : TextRun * 
        flowDirection : FlowDirection -> ShapedTextRun 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextFormatter.cs#L53" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a></dt><dd>The symbol run to shape.</dd><dt>  <a href="T_Avalonia_Media_FlowDirection">FlowDirection</a></dt><dd>The flow direction.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_ShapedTextRun">ShapedTextRun</a>  
The shaped symbol.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextFormatter">TextFormatter Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
