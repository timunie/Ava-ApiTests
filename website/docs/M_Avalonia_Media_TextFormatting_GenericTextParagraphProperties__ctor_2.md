# GenericTextParagraphProperties(TextRunProperties, TextAlignment, TextWrapping, Double, Double) Constructor


Constructing TextParagraphProperties



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public GenericTextParagraphProperties(
	TextRunProperties defaultTextRunProperties,
	TextAlignment textAlignment = TextAlignment.Left,
	TextWrapping textWrap = TextWrapping.NoWrap,
	double lineHeight = 0,
	double letterSpacing = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	defaultTextRunProperties As TextRunProperties,
	Optional textAlignment As TextAlignment = TextAlignment.Left,
	Optional textWrap As TextWrapping = TextWrapping.NoWrap,
	Optional lineHeight As Double = 0,
	Optional letterSpacing As Double = 0
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        defaultTextRunProperties : TextRunProperties * 
        ?textAlignment : TextAlignment * 
        ?textWrap : TextWrapping * 
        ?lineHeight : float * 
        ?letterSpacing : float 
(* Defaults:
        let _textAlignment = defaultArg textAlignment TextAlignment.Left
        let _textWrap = defaultArg textWrap TextWrapping.NoWrap
        let _lineHeight = defaultArg lineHeight 0
        let _letterSpacing = defaultArg letterSpacing 0
*)
-> GenericTextParagraphProperties
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/GenericTextParagraphProperties.cs#L21" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_TextRunProperties">TextRunProperties</a></dt><dd>default paragraph's default run properties</dd><dt>  <a href="T_Avalonia_Media_TextAlignment">TextAlignment</a>  (Optional)</dt><dd>logical horizontal alignment</dd><dt>  <a href="T_Avalonia_Media_TextWrapping">TextWrapping</a>  (Optional)</dt><dd>text wrap option</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>Paragraph line height</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>letter spacing</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_GenericTextParagraphProperties">GenericTextParagraphProperties Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_GenericTextParagraphProperties__ctor">GenericTextParagraphProperties Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
