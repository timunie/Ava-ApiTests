# Add Method


Adds a handler to the route.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Add(
	Interactive target,
	Delegate handler,
	RoutingStrategies routes,
	bool handledEventsToo = false,
	Action<Delegate, Object, RoutedEventArgs>? adapter = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Add ( 
	target As Interactive,
	handler As Delegate,
	routes As RoutingStrategies,
	Optional handledEventsToo As Boolean = false,
	Optional adapter As Action(Of Delegate, Object, RoutedEventArgs) = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/EventRoute.cs#L51" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a></dt><dd>The target on which the event should be raised.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a></dt><dd>The handler for the event.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a></dt><dd>The routing strategies to listen to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>If true the handler will be raised even when the routed event is marked as handled.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-3" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a>)  (Optional)</dt><dd>An optional adapter which if supplied, will be called with <em>handler</em> and the parameters for the event. This adapter can be used to avoid calling `DynamicInvoke` on the handler.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_EventRoute">EventRoute Class</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
