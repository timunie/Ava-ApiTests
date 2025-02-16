---
title:AddHandler&lt;TEventArgs&gt;(RoutedEvent&lt;TEventArgs&gt;, EventHandler&lt;TEventArgs&gt;, RoutingStrategies, Boolean) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddHandler&lt;TEventArgs&gt;(RoutedEvent&lt;TEventArgs&gt;, EventHandler&lt;TEventArgs&gt;, RoutingStrategies, Boolean) Method




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public void AddHandler<TEventArgs>(
	RoutedEvent<TEventArgs> routedEvent,
	EventHandler<TEventArgs>? handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
where TEventArgs : RoutedEventArgs

```
**VB**
``` VB
Public Sub AddHandler(Of TEventArgs As RoutedEventArgs) ( 
	routedEvent As RoutedEvent(Of TEventArgs),
	handler As EventHandler(Of TEventArgs),
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
)
```
**F#**
``` F#
member AddHandler : 
        routedEvent : RoutedEvent<'TEventArgs> * 
        handler : EventHandler<'TEventArgs> * 
        ?routes : RoutingStrategies * 
        ?handledEventsToo : bool 
(* Defaults:
        let _routes = defaultArg routes RoutingStrategies.Direct|RoutingStrategies.Bubble
        let _handledEventsToo = defaultArg handledEventsToo false
*)
-> unit  when 'TEventArgs : RoutedEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_Interactive">Interactive Class</a>  
<a href="Overload_Avalonia_Interactivity_Interactive_AddHandler">AddHandler Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
