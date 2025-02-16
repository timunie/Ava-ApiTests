---
title:HitTestFirst Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# HitTestFirst Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
Visual? HitTestFirst(
	Point p,
	Visual root,
	Func<Visual, bool>? filter
)
```
**VB**
``` VB
Function HitTestFirst ( 
	p As Point,
	root As Visual,
	filter As Func(Of Visual, Boolean)
) As Visual
```
**F#**
``` F#
abstract HitTestFirst : 
        p : Point * 
        root : Visual * 
        filter : Func<Visual, bool> -> Visual 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Visual">Visual</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Visual">Visual</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_IHitTester">IHitTester Interface</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
