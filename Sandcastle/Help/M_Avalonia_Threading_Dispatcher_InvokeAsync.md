---
title:InvokeAsync(Action, DispatcherPriority, CancellationToken) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# InvokeAsync(Action, DispatcherPriority, CancellationToken) Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public DispatcherOperation InvokeAsync(
	Action callback,
	DispatcherPriority priority,
	CancellationToken cancellationToken
)
```
**VB**
``` VB
Public Function InvokeAsync ( 
	callback As Action,
	priority As DispatcherPriority,
	cancellationToken As CancellationToken
) As DispatcherOperation
```
**F#**
``` F#
member InvokeAsync : 
        callback : Action * 
        priority : DispatcherPriority * 
        cancellationToken : CancellationToken -> DispatcherOperation 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Threading_DispatcherOperation">DispatcherOperation</a>

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_InvokeAsync">InvokeAsync Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
