# AddHandler&lt;TEventArgs&gt;(RoutedEvent&lt;TEventArgs&gt;, EventHandler&lt;TEventArgs&gt;, RoutingStrategies, Boolean) Method


Adds a handler for the specified routed event.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void AddHandler<TEventArgs>(
	RoutedEvent<TEventArgs> routedEvent,
	EventHandler<TEventArgs>? handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
where TEventArgs : RoutedEventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub AddHandler(Of TEventArgs As RoutedEventArgs) ( 
	routedEvent As RoutedEvent(Of TEventArgs),
	handler As EventHandler(Of TEventArgs),
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/Interactive.cs#L56" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)</dt><dd>The routed event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd>The handler.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd>The routing strategies to listen to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether handled events should also be listened for.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the event's args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_Interactive">Interactive Class</a>  
<a href="Overload_Avalonia_Interactivity_Interactive_AddHandler">AddHandler Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
