---
title:FormatLine Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FormatLine Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract TextLine? FormatLine(
	ITextSource textSource,
	int firstTextSourceIndex,
	double paragraphWidth,
	TextParagraphProperties paragraphProperties,
	TextLineBreak? previousLineBreak = null
)
```
**VB**
``` VB
Public MustOverride Function FormatLine ( 
	textSource As ITextSource,
	firstTextSourceIndex As Integer,
	paragraphWidth As Double,
	paragraphProperties As TextParagraphProperties,
	Optional previousLineBreak As TextLineBreak = Nothing
) As TextLine
```
**F#**
``` F#
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



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_TextFormatting_ITextSource">ITextSource</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextLineBreak">TextLineBreak</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextFormatter">TextFormatter Class</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
