---
title:Register&lt;TSender, TEventArgs&gt;(Action&lt;TSender, EventHandler&lt;TEventArgs&gt;&gt;, Action&lt;TSender, EventHandler&lt;TEventArgs&gt;&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Register&lt;TSender, TEventArgs&gt;(Action&lt;TSender, EventHandler&lt;TEventArgs&gt;&gt;, Action&lt;TSender, EventHandler&lt;TEventArgs&gt;&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static WeakEvent<TSender, TEventArgs> Register<TSender, TEventArgs>(
	Action<TSender, EventHandler<TEventArgs>> subscribe,
	Action<TSender, EventHandler<TEventArgs>> unsubscribe
)
where TSender : class
where TEventArgs : EventArgs

```
**VB**
``` VB
Public Shared Function Register(Of TSender As Class, TEventArgs As EventArgs) ( 
	subscribe As Action(Of TSender, EventHandler(Of TEventArgs)),
	unsubscribe As Action(Of TSender, EventHandler(Of TEventArgs))
) As WeakEvent(Of TSender, TEventArgs)
```
**F#**
``` F#
static member Register : 
        subscribe : Action<'TSender, EventHandler<'TEventArgs>> * 
        unsubscribe : Action<'TSender, EventHandler<'TEventArgs>> -> WeakEvent<'TSender, 'TEventArgs>  when 'TSender : not struct when 'TEventArgs : EventArgs
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TSender, <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs))</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TSender, <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs))</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Utilities_WeakEvent_2">WeakEvent</a>(TSender, TEventArgs)

## See Also


#### Reference
<a href="T_Avalonia_Utilities_WeakEvent">WeakEvent Class</a>  
<a href="Overload_Avalonia_Utilities_WeakEvent_Register">Register Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
