---
title:Win32Properties.CustomWindowStylesCallback Delegate
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Win32Properties.CustomWindowStylesCallback Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public delegate (uint style, uint exStyle) CustomWindowStylesCallback(
	uint style,
	uint exStyle
)
```
**VB**
``` VB
Public Delegate Function CustomWindowStylesCallback ( 
	style As UInteger,
	exStyle As UInteger
) As (style As UInteger, exStyle As UInteger)
```
**F#**
``` F#
type CustomWindowStylesCallback = 
    delegate of 
        style : uint32 * 
        exStyle : uint32 -> ValueTuple<uint32, uint32>
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>, <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>)

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
