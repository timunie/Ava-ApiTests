# FormatLine Method


Formats a text line.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract TextLine? FormatLine(
	ITextSource textSource,
	int firstTextSourceIndex,
	double paragraphWidth,
	TextParagraphProperties paragraphProperties,
	TextLineBreak? previousLineBreak = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustOverride Function FormatLine ( 
	textSource As ITextSource,
	firstTextSourceIndex As Integer,
	paragraphWidth As Double,
	paragraphProperties As TextParagraphProperties,
	Optional previousLineBreak As TextLineBreak = Nothing
) As TextLine
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract FormatLine : 
        textSource : ITextSource * 
        firstTextSourceIndex : int * 
        paragraphWidth : float * 
        paragraphProperties : TextParagraphProperties * 
        ?previousLineBreak : TextLineBreak 
(* Defaults:
        let _previousLineBreak = defaultArg previousLineBreak null
*)
-> TextLine 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextFormatter.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_ITextSource">ITextSource</a></dt><dd>The text source.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The first character index to start the text line from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>A <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a> value that specifies the width of the paragraph that the line fills.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a></dt><dd>A <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a> value that represents paragraph properties, such as TextWrapping, TextAlignment, or TextStyle.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextLineBreak">TextLineBreak</a>  (Optional)</dt><dd>A <a href="T_Avalonia_Media_TextFormatting_TextLineBreak">TextLineBreak</a> value that specifies the text formatter state, in terms of where the previous line in the paragraph was broken by the text formatting process.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a>  
The formatted line.

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextFormatter">TextFormatter Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
