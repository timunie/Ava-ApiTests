---
title:TextLayout(ITextSource, TextParagraphProperties, TextTrimming, Double, Double, Int32) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TextLayout(ITextSource, TextParagraphProperties, TextTrimming, Double, Double, Int32) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public TextLayout(
	ITextSource textSource,
	TextParagraphProperties paragraphProperties,
	TextTrimming? textTrimming = null,
	double maxWidth = ∞,
	double maxHeight = ∞,
	int maxLines = 0
)
```
**VB**
``` VB
Public Sub New ( 
	textSource As ITextSource,
	paragraphProperties As TextParagraphProperties,
	Optional textTrimming As TextTrimming = Nothing,
	Optional maxWidth As Double = ∞,
	Optional maxHeight As Double = ∞,
	Optional maxLines As Integer = 0
)
```
**F#**
``` F#
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



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_ITextSource">ITextSource</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextTrimming">TextTrimming</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_TextLayout__ctor">TextLayout Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
