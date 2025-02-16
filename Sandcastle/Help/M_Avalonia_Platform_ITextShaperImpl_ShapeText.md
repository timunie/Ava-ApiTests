---
title:ShapeText Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ShapeText Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
ShapedBuffer ShapeText(
	ReadOnlyMemory<char> text,
	TextShaperOptions options
)
```
**VB**
``` VB
Function ShapeText ( 
	text As ReadOnlyMemory(Of Char),
	options As TextShaperOptions
) As ShapedBuffer
```
**F#**
``` F#
abstract ShapeText : 
        text : ReadOnlyMemory<char> * 
        options : TextShaperOptions -> ShapedBuffer 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.readonlymemory-1" target="_blank" rel="noopener noreferrer">ReadOnlyMemory</a>(<a href="https://learn.microsoft.com/dotnet/api/system.char" target="_blank" rel="noopener noreferrer">Char</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITextShaperImpl">ITextShaperImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
