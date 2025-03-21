# TextLayout(ITextSource, TextParagraphProperties, TextTrimming, Double, Double, Int32) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TextLayout(
	ITextSource textSource,
	TextParagraphProperties paragraphProperties,
	TextTrimming? textTrimming = null,
	double maxWidth = ∞,
	double maxHeight = ∞,
	int maxLines = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	textSource As ITextSource,
	paragraphProperties As TextParagraphProperties,
	Optional textTrimming As TextTrimming = Nothing,
	Optional maxWidth As Double = ∞,
	Optional maxHeight As Double = ∞,
	Optional maxLines As Integer = 0
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        textSource : ITextSource * 
        paragraphProperties : TextParagraphProperties * 
        ?textTrimming : TextTrimming * 
        ?maxWidth : float * 
        ?maxHeight : float * 
        ?maxLines : int 
(* Defaults:
        let _textTrimming = defaultArg textTrimming null
        let _maxWidth = defaultArg maxWidth ∞
        let _maxHeight = defaultArg maxHeight ∞
        let _maxLines = defaultArg maxLines 0
*)
-> TextLayout
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLayout.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_ITextSource">ITextSource</a></dt><dd>The text source.</dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a></dt><dd>The default text paragraph properties.</dd><dt>  <a href="T_Avalonia_Media_TextTrimming">TextTrimming</a>  (Optional)</dt><dd>The text trimming.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The maximum width.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The maximum height.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd>The maximum number of text lines.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_TextLayout__ctor">TextLayout Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

