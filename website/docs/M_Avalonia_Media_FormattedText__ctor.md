# FormattedText Constructor


Construct a FormattedText object.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FormattedText(
	string textToFormat,
	CultureInfo culture,
	FlowDirection flowDirection,
	Typeface typeface,
	double emSize,
	IBrush? foreground
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	textToFormat As String,
	culture As CultureInfo,
	flowDirection As FlowDirection,
	typeface As Typeface,
	emSize As Double,
	foreground As IBrush
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        textToFormat : string * 
        culture : CultureInfo * 
        flowDirection : FlowDirection * 
        typeface : Typeface * 
        emSize : float * 
        foreground : IBrush -> FormattedText
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FormattedText.cs#L28" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>String of text to be displayed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>Culture of text.</dd><dt>  <a href="T_Avalonia_Media_FlowDirection">FlowDirection</a></dt><dd>Flow direction of text.</dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd>Type face used to display text.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Font em size in visual units (1/96 of an inch).</dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>Foreground brush used to render text.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

