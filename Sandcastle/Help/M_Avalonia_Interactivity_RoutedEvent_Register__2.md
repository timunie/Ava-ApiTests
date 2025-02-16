---
title:Register&lt;TOwner, TEventArgs&gt;(String, RoutingStrategies) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Register&lt;TOwner, TEventArgs&gt;(String, RoutingStrategies) Method




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static RoutedEvent<TEventArgs> Register<TOwner, TEventArgs>(
	string name,
	RoutingStrategies routingStrategy
)
where TEventArgs : RoutedEventArgs

```
**VB**
``` VB
Public Shared Function Register(Of TOwner, TEventArgs As RoutedEventArgs) ( 
	name As String,
	routingStrategy As RoutingStrategies
) As RoutedEvent(Of TEventArgs)
```
**F#**
``` F#
static member Register : 
        name : string * 
        routingStrategy : RoutingStrategies -> RoutedEvent<'TEventArgs>  when 'TEventArgs : RoutedEventArgs
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent Class</a>  
<a href="Overload_Avalonia_Interactivity_RoutedEvent_Register">Register Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
