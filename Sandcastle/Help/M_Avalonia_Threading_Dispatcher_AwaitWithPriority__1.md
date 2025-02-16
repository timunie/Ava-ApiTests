---
title:AwaitWithPriority&lt;T&gt;(Task&lt;T&gt;, DispatcherPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AwaitWithPriority&lt;T&gt;(Task&lt;T&gt;, DispatcherPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public DispatcherPriorityAwaitable<T> AwaitWithPriority<T>(
	Task<T> task,
	DispatcherPriority priority
)

```
**VB**
``` VB
Public Function AwaitWithPriority(Of T) ( 
	task As Task(Of T),
	priority As DispatcherPriority
) As DispatcherPriorityAwaitable(Of T)
```
**F#**
``` F#
member AwaitWithPriority : 
        task : Task<'T> * 
        priority : DispatcherPriority -> DispatcherPriorityAwaitable<'T> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(T)</dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Threading_DispatcherPriorityAwaitable_1">DispatcherPriorityAwaitable</a>(T)

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_AwaitWithPriority">AwaitWithPriority Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
