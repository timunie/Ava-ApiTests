---
title:GenericTextRunProperties(Typeface, Double, TextDecorationCollection, IBrush, IBrush, BaselineAlignment, CultureInfo) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GenericTextRunProperties(Typeface, Double, TextDecorationCollection, IBrush, IBrush, BaselineAlignment, CultureInfo) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_GenericTextRunProperties">GenericTextRunProperties</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
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
**VB**
``` VB
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
**F#**
``` F#
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



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextDecorationCollection">TextDecorationCollection</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_BaselineAlignment">BaselineAlignment</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_GenericTextRunProperties">GenericTextRunProperties Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_GenericTextRunProperties__ctor">GenericTextRunProperties Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
