---
title:Add Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Add Method




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public void Add(
	Interactive target,
	Delegate handler,
	RoutingStrategies routes,
	bool handledEventsToo = false,
	Action<Delegate, Object, RoutedEventArgs>? adapter = null
)
```
**VB**
``` VB
Public Sub Add ( 
	target As Interactive,
	handler As Delegate,
	routes As RoutingStrategies,
	Optional handledEventsToo As Boolean = false,
	Optional adapter As Action(Of Delegate, Object, RoutedEventArgs) = Nothing
)
```
**F#**
``` F#
member Add : 
        target : Interactive * 
        handler : Delegate * 
        routes : RoutingStrategies * 
        ?handledEventsToo : bool * 
        ?adapter : Action<Delegate, Object, RoutedEventArgs> 
(* Defaults:
        let _handledEventsToo = defaultArg handledEventsToo false
        let _adapter = defaultArg adapter null
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-3" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_EventRoute">EventRoute Class</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
