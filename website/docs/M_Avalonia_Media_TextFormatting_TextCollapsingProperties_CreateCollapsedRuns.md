# CreateCollapsedRuns Method


Creates a list of runs for given collapsed length which includes specified symbol at the end.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static TextRun[] CreateCollapsedRuns(
	TextLine textLine,
	int collapsedLength,
	FlowDirection flowDirection,
	TextRun shapedSymbol
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function CreateCollapsedRuns ( 
	textLine As TextLine,
	collapsedLength As Integer,
	flowDirection As FlowDirection,
	shapedSymbol As TextRun
) As TextRun()
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member CreateCollapsedRuns : 
        textLine : TextLine * 
        collapsedLength : int * 
        flowDirection : FlowDirection * 
        shapedSymbol : TextRun -> TextRun[] 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextCollapsingProperties.cs#L41" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a></dt><dd>The text line.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The collapsed length.</dd><dt>  <a href="T_Avalonia_Media_FlowDirection">FlowDirection</a></dt><dd>The flow direction.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a></dt><dd>The symbol.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a>[]  
List of remaining runs.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextCollapsingProperties">TextCollapsingProperties Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
