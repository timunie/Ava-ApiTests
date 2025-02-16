---
title:ShapeText(ReadOnlyMemory&lt;Char&gt;, TextShaperOptions) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ShapeText(ReadOnlyMemory&lt;Char&gt;, TextShaperOptions) Method




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public ShapedBuffer ShapeText(
	ReadOnlyMemory<char> text,
	TextShaperOptions options = default
)
```
**VB**
``` VB
Public Function ShapeText ( 
	text As ReadOnlyMemory(Of Char),
	Optional options As TextShaperOptions = Nothing
) As ShapedBuffer
```
**F#**
``` F#
member ShapeText : 
        text : ReadOnlyMemory<char> * 
        ?options : TextShaperOptions 
(* Defaults:
        let _options = defaultArg options new TextShaperOptions()
*)
-> ShapedBuffer 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer</a>

## See Also


#### Reference
<a href="T_Avalonia_Media_TextFormatting_TextShaper">TextShaper Class</a>  
<a href="Overload_Avalonia_Media_TextFormatting_TextShaper_ShapeText">ShapeText Overload</a>  
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
