# TextLayout(String, Typeface, Double, IBrush, TextAlignment, TextWrapping, TextTrimming, TextDecorationCollection, FlowDirection, Double, Double, Double, Double, Int32, IReadOnlyList&lt;ValueSpan&lt;TextRunProperties&gt;&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TextLayout(
	string? text,
	Typeface typeface,
	double fontSize,
	IBrush? foreground,
	TextAlignment textAlignment = TextAlignment.Left,
	TextWrapping textWrapping = TextWrapping.NoWrap,
	TextTrimming? textTrimming = null,
	TextDecorationCollection? textDecorations = null,
	FlowDirection flowDirection = FlowDirection.LeftToRight,
	double maxWidth = ∞,
	double maxHeight = ∞,
	double lineHeight = NaN,
	double letterSpacing = 0,
	int maxLines = 0,
	IReadOnlyList<ValueSpan<TextRunProperties>>? textStyleOverrides = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	text As String,
	typeface As Typeface,
	fontSize As Double,
	foreground As IBrush,
	Optional textAlignment As TextAlignment = TextAlignment.Left,
	Optional textWrapping As TextWrapping = TextWrapping.NoWrap,
	Optional textTrimming As TextTrimming = Nothing,
	Optional textDecorations As TextDecorationCollection = Nothing,
	Optional flowDirection As FlowDirection = FlowDirection.LeftToRight,
	Optional maxWidth As Double = ∞,
	Optional maxHeight As Double = ∞,
	Optional lineHeight As Double = NaN,
	Optional letterSpacing As Double = 0,
	Optional maxLines As Integer = 0,
	Optional textStyleOverrides As IReadOnlyList(Of ValueSpan(Of TextRunProperties)) = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        text : string * 
        typeface : Typeface * 
        fontSize : float * 
        foreground : IBrush * 
        ?textAlignment : TextAlignment * 
        ?textWrapping : TextWrapping * 
        ?textTrimming : TextTrimming * 
        ?textDecorations : TextDecorationCollection * 
        ?flowDirection : FlowDirection * 
        ?maxWidth : float * 
        ?maxHeight : float * 
        ?lineHeight : float * 
        ?letterSpacing : float * 
        ?maxLines : int * 
        ?textStyleOverrides : IReadOnlyList<ValueSpan<TextRunProperties>> 
(* Defaults:
        let _textAlignment = defaultArg textAlignment TextAlignment.Left
        let _textWrapping = defaultArg textWrapping TextWrapping.NoWrap
        let _textTrimming = defaultArg textTrimming null
        let _textDecorations = defaultArg textDecorations null
        let _flowDirection = defaultArg flowDirection FlowDirection.LeftToRight
        let _maxWidth = defaultArg maxWidth ∞
        let _maxHeight = defaultArg maxHeight ∞
        let _lineHeight = defaultArg lineHeight NaN
        let _letterSpacing = defaultArg letterSpacing 0
        let _maxLines = defaultArg maxLines 0
        let _textStyleOverrides = defaultArg textStyleOverrides null
*)
-> TextLayout
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLayout.cs#L55" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The text.</dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd>The typeface.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Size of the font.</dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The foreground.</dd><dt>  <a href="T_Avalonia_Media_TextAlignment">TextAlignment</a>  (Optional)</dt><dd>The text alignment.</dd><dt>  <a href="T_Avalonia_Media_TextWrapping">TextWrapping</a>  (Optional)</dt><dd>The text wrapping.</dd><dt>  <a href="T_Avalonia_Media_TextTrimming">TextTrimming</a>  (Optional)</dt><dd>The text trimming.</dd><dt>  <a href="T_Avalonia_Media_TextDecorationCollection">TextDecorationCollection</a>  (Optional)</dt><dd>The text decorations.</dd><dt>  <a href="T_Avalonia_Media_FlowDirection">FlowDirection</a>  (Optional)</dt><dd>The text flow direction.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The maximum width.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The maximum height.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The height of each line of text.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The letter spacing that is applied to rendered glyphs.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd>The maximum number of text lines.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Utilities_ValueSpan_1">ValueSpan</a>(<a href="T_Avalonia_Media_TextFormatting_TextRunProperties">TextRunProperties</a>))  (Optional)</dt><dd>The text style overrides.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_TextLayout__ctor">TextLayout Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

