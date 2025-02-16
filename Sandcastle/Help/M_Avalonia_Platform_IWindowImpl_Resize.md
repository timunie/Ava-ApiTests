---
title:Resize Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Resize Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
void Resize(
	Size clientSize,
	WindowResizeReason reason = WindowResizeReason.Application
)
```
**VB**
``` VB
Sub Resize ( 
	clientSize As Size,
	Optional reason As WindowResizeReason = WindowResizeReason.Application
)
```
**F#**
``` F#
abstract Resize : 
        clientSize : Size * 
        ?reason : WindowResizeReason 
(* Defaults:
        let _reason = defaultArg reason WindowResizeReason.Application
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_WindowResizeReason">WindowResizeReason</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
