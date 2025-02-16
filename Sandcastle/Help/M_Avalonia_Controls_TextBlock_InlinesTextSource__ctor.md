---
title:TextBlock.InlinesTextSource Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TextBlock.InlinesTextSource Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_TextBlock_InlinesTextSource">TextBlock.InlinesTextSource</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public InlinesTextSource(
	IReadOnlyList<TextRun> textRuns,
	IReadOnlyList<ValueSpan<TextRunProperties>>? textModifier = null
)
```
**VB**
``` VB
Public Sub New ( 
	textRuns As IReadOnlyList(Of TextRun),
	Optional textModifier As IReadOnlyList(Of ValueSpan(Of TextRunProperties)) = Nothing
)
```
**F#**
``` F#
new : 
        textRuns : IReadOnlyList<TextRun> * 
        ?textModifier : IReadOnlyList<ValueSpan<TextRunProperties>> 
(* Defaults:
        let _textModifier = defaultArg textModifier null
*)
-> InlinesTextSource
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Utilities_ValueSpan_1">ValueSpan</a>(<a href="T_Avalonia_Media_TextFormatting_TextRunProperties">TextRunProperties</a>))  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBlock_InlinesTextSource">TextBlock.InlinesTextSource Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
