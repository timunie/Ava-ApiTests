---
title:AnonymousObserver&lt;T&gt;(Action&lt;T&gt;, Action&lt;Exception&gt;, Action) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AnonymousObserver&lt;T&gt;(Action&lt;T&gt;, Action&lt;Exception&gt;, Action) Constructor


Initializes a new instance of the <a href="T_Avalonia_Reactive_AnonymousObserver_1">AnonymousObserver(T)</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Reactive">Avalonia.Reactive</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public AnonymousObserver(
	Action<T> onNext,
	Action<Exception> onError,
	Action onCompleted
)
```
**VB**
``` VB
Public Sub New ( 
	onNext As Action(Of T),
	onError As Action(Of Exception),
	onCompleted As Action
)
```
**F#**
``` F#
new : 
        onNext : Action<'T> * 
        onError : Action<Exception> * 
        onCompleted : Action -> AnonymousObserver
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Reactive_AnonymousObserver_1">T</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Reactive_AnonymousObserver_1">AnonymousObserver(T) Class</a>  
<a href="Overload_Avalonia_Reactive_AnonymousObserver_1__ctor">AnonymousObserver(T) Overload</a>  
<a href="N_Avalonia_Reactive">Avalonia.Reactive Namespace</a>  
