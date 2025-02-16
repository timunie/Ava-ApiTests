---
title:AddHandler Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddHandler Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
void AddHandler(
	RoutedEvent routedEvent,
	Delegate handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
```
**VB**
``` VB
Sub AddHandler ( 
	routedEvent As RoutedEvent,
	handler As Delegate,
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
)
```
**F#**
``` F#
abstract AddHandler : 
        routedEvent : RoutedEvent * 
        handler : Delegate * 
        ?routes : RoutingStrategies * 
        ?handledEventsToo : bool 
(* Defaults:
        let _routes = defaultArg routes RoutingStrategies.Direct|RoutingStrategies.Bubble
        let _handledEventsToo = defaultArg handledEventsToo false
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputElement">IInputElement Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
