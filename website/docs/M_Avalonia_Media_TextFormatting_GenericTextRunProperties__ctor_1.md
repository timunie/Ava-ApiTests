# GenericTextRunProperties(Typeface, Double, TextDecorationCollection, IBrush, IBrush, BaselineAlignment, CultureInfo) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_GenericTextRunProperties">GenericTextRunProperties</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public GenericTextRunProperties(
	Typeface typeface,
	double fontRenderingEmSize = 12,
	TextDecorationCollection? textDecorations = null,
	IBrush? foregroundBrush = null,
	IBrush? backgroundBrush = null,
	BaselineAlignment baselineAlignment = BaselineAlignment.Baseline,
	CultureInfo? cultureInfo = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	typeface As Typeface,
	Optional fontRenderingEmSize As Double = 12,
	Optional textDecorations As TextDecorationCollection = Nothing,
	Optional foregroundBrush As IBrush = Nothing,
	Optional backgroundBrush As IBrush = Nothing,
	Optional baselineAlignment As BaselineAlignment = BaselineAlignment.Baseline,
	Optional cultureInfo As CultureInfo = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        typeface : Typeface * 
        ?fontRenderingEmSize : float * 
        ?textDecorations : TextDecorationCollection * 
        ?foregroundBrush : IBrush * 
        ?backgroundBrush : IBrush * 
        ?baselineAlignment : BaselineAlignment * 
        ?cultureInfo : CultureInfo 
(* Defaults:
        let _fontRenderingEmSize = defaultArg fontRenderingEmSize 12
        let _textDecorations = defaultArg textDecorations null
        let _foregroundBrush = defaultArg foregroundBrush null
        let _backgroundBrush = defaultArg backgroundBrush null
        let _baselineAlignment = defaultArg baselineAlignment BaselineAlignment.Baseline
        let _cultureInfo = defaultArg cultureInfo null
*)
-> GenericTextRunProperties
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/GenericTextRunProperties.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextDecorationCollection">TextDecorationCollection</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_BaselineAlignment">BaselineAlignment</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_GenericTextRunProperties">GenericTextRunProperties Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_GenericTextRunProperties__ctor">GenericTextRunProperties Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
