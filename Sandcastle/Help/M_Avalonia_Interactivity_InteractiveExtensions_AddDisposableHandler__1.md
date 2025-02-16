---
title:AddDisposableHandler&lt;TEventArgs&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddDisposableHandler&lt;TEventArgs&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable AddDisposableHandler<TEventArgs>(
	this Interactive o,
	RoutedEvent<TEventArgs> routedEvent,
	EventHandler<TEventArgs> handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
where TEventArgs : RoutedEventArgs

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function AddDisposableHandler(Of TEventArgs As RoutedEventArgs) ( 
	o As Interactive,
	routedEvent As RoutedEvent(Of TEventArgs),
	handler As EventHandler(Of TEventArgs),
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member AddDisposableHandler : 
        o : Interactive * 
        routedEvent : RoutedEvent<'TEventArgs> * 
        handler : EventHandler<'TEventArgs> * 
        ?routes : RoutingStrategies * 
        ?handledEventsToo : bool 
(* Defaults:
        let _routes = defaultArg routes RoutingStrategies.Direct|RoutingStrategies.Bubble
        let _handledEventsToo = defaultArg handledEventsToo false
*)
-> IDisposable  when 'TEventArgs : RoutedEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions Class</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
