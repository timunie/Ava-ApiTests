---
title:RunOnce Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RunOnce Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable RunOnce(
	Action action,
	TimeSpan interval,
	DispatcherPriority priority = default
)
```
**VB**
``` VB
Public Shared Function RunOnce ( 
	action As Action,
	interval As TimeSpan,
	Optional priority As DispatcherPriority = Nothing
) As IDisposable
```
**F#**
``` F#
static member RunOnce : 
        action : Action * 
        interval : TimeSpan * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> IDisposable 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherTimer">DispatcherTimer Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
