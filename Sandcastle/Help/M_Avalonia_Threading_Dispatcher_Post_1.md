---
title:Post(SendOrPostCallback, Object, DispatcherPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Post(SendOrPostCallback, Object, DispatcherPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public void Post(
	SendOrPostCallback action,
	Object? arg,
	DispatcherPriority priority = default
)
```
**VB**
``` VB
Public Sub Post ( 
	action As SendOrPostCallback,
	arg As Object,
	Optional priority As DispatcherPriority = Nothing
)
```
**F#**
``` F#
member Post : 
        action : SendOrPostCallback * 
        arg : Object * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.sendorpostcallback" target="_blank" rel="noopener noreferrer">SendOrPostCallback</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_Post">Post Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
