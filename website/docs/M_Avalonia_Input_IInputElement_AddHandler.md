# AddHandler Method


Adds a handler for the specified routed event.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void AddHandler(
	RoutedEvent routedEvent,
	Delegate handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub AddHandler ( 
	routedEvent As RoutedEvent,
	handler As Delegate,
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputElement.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd>The routed event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a></dt><dd>The handler.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd>The routing strategies to listen to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether handled events should also be listened for.</dd></dl>

#### Return Value
A disposable that terminates the event subscription.

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputElement">IInputElement Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

