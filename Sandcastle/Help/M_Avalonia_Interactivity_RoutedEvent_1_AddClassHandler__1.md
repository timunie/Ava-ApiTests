---
title:AddClassHandler&lt;TTarget&gt;(Action&lt;TTarget, TEventArgs&gt;, RoutingStrategies, Boolean) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddClassHandler&lt;TTarget&gt;(Action&lt;TTarget, TEventArgs&gt;, RoutingStrategies, Boolean) Method




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public IDisposable AddClassHandler<TTarget>(
	Action<TTarget, TEventArgs> handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
where TTarget : Interactive

```
**VB**
``` VB
Public Function AddClassHandler(Of TTarget As Interactive) ( 
	handler As Action(Of TTarget, TEventArgs),
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
) As IDisposable
```
**F#**
``` F#
member AddClassHandler : 
        handler : Action<'TTarget, 'TEventArgs> * 
        ?routes : RoutingStrategies * 
        ?handledEventsToo : bool 
(* Defaults:
        let _routes = defaultArg routes RoutingStrategies.Direct|RoutingStrategies.Bubble
        let _handledEventsToo = defaultArg handledEventsToo false
*)
-> IDisposable  when 'TTarget : Interactive
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TTarget, <a href="T_Avalonia_Interactivity_RoutedEvent_1">TEventArgs</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent(TEventArgs) Class</a>  
<a href="Overload_Avalonia_Interactivity_RoutedEvent_1_AddClassHandler">AddClassHandler Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
