---
title:Post Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Post Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
void Post(
	Action action,
	DispatcherPriority priority = default
)
```
**VB**
``` VB
Sub Post ( 
	action As Action,
	Optional priority As DispatcherPriority = Nothing
)
```
**F#**
``` F#
abstract Post : 
        action : Action * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_IDispatcher">IDispatcher Interface</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
