---
title:Post(Action, DispatcherPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Post(Action, DispatcherPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public void Post(
	Action action,
	DispatcherPriority priority = default
)
```
**VB**
``` VB
Public Sub Post ( 
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
override Post : 
        action : Action * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_Threading_IDispatcher_Post">IDispatcher.Post(Action, DispatcherPriority)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_Post">Post Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
