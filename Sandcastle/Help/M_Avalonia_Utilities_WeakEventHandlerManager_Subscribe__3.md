---
title:Subscribe&lt;TTarget, TEventArgs, TSubscriber&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Subscribe&lt;TTarget, TEventArgs, TSubscriber&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static void Subscribe<TTarget, TEventArgs, TSubscriber>(
	TTarget target,
	string eventName,
	EventHandler<TEventArgs> subscriber
)
where TEventArgs : EventArgs
where TSubscriber : class

```
**VB**
``` VB
Public Shared Sub Subscribe(Of TTarget, TEventArgs As EventArgs, TSubscriber As Class) ( 
	target As TTarget,
	eventName As String,
	subscriber As EventHandler(Of TEventArgs)
)
```
**F#**
``` F#
static member Subscribe : 
        target : 'TTarget * 
        eventName : string * 
        subscriber : EventHandler<'TEventArgs> -> unit  when 'TEventArgs : EventArgs when 'TSubscriber : not struct
```



#### Parameters
<dl><dt>  TTarget</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_WeakEventHandlerManager">WeakEventHandlerManager Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
