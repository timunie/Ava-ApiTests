---
title:ThreadProxyRenderTimer Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ThreadProxyRenderTimer Constructor


Initializes a new instance of the <a href="T_Avalonia_Rendering_ThreadProxyRenderTimer">ThreadProxyRenderTimer</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public ThreadProxyRenderTimer(
	IRenderTimer inner,
	int maxStackSize = 1048576
)
```
**VB**
``` VB
Public Sub New ( 
	inner As IRenderTimer,
	Optional maxStackSize As Integer = 1048576
)
```
**F#**
``` F#
new : 
        inner : IRenderTimer * 
        ?maxStackSize : int 
(* Defaults:
        let _maxStackSize = defaultArg maxStackSize 1048576
*)
-> ThreadProxyRenderTimer
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_IRenderTimer">IRenderTimer</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_ThreadProxyRenderTimer">ThreadProxyRenderTimer Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
