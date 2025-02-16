---
title:InvokeAsync&lt;TResult&gt;(Func&lt;TResult&gt;, DispatcherPriority) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# InvokeAsync&lt;TResult&gt;(Func&lt;TResult&gt;, DispatcherPriority) Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public DispatcherOperation<TResult> InvokeAsync<TResult>(
	Func<TResult> callback,
	DispatcherPriority priority
)

```
**VB**
``` VB
Public Function InvokeAsync(Of TResult) ( 
	callback As Func(Of TResult),
	priority As DispatcherPriority
) As DispatcherOperation(Of TResult)
```
**F#**
``` F#
member InvokeAsync : 
        callback : Func<'TResult> * 
        priority : DispatcherPriority -> DispatcherOperation<'TResult> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(TResult)</dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Threading_DispatcherOperation_1">DispatcherOperation</a>(TResult)

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_InvokeAsync">InvokeAsync Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
