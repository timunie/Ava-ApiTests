# TextBlock.InlinesTextSource Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_TextBlock_InlinesTextSource">TextBlock.InlinesTextSource</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public InlinesTextSource(
	IReadOnlyList<TextRun> textRuns,
	IReadOnlyList<ValueSpan<TextRunProperties>>? textModifier = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	textRuns As IReadOnlyList(Of TextRun),
	Optional textModifier As IReadOnlyList(Of ValueSpan(Of TextRunProperties)) = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        textRuns : IReadOnlyList<TextRun> * 
        ?textModifier : IReadOnlyList<ValueSpan<TextRunProperties>> 
(* Defaults:
        let _textModifier = defaultArg textModifier null
*)
-> InlinesTextSource
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TextBlock.cs#L929" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Utilities_ValueSpan_1">ValueSpan</a>(<a href="T_Avalonia_Media_TextFormatting_TextRunProperties">TextRunProperties</a>))  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBlock_InlinesTextSource">TextBlock.InlinesTextSource Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

