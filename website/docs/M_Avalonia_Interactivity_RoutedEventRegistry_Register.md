# Register Method


Registers a <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a> on a type.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Register(
	Type type,
	RoutedEvent event
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Register ( 
	type As Type,
	event As RoutedEvent
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Register : 
        type : Type * 
        event : RoutedEvent -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/RoutedEventRegistry.cs#L32" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd>The event.</dd></dl>You won't usually want to call this method directly, instead use the <a href="M_Avalonia_Interactivity_RoutedEvent_Register__2">Register(TOwner, TEventArgs)(String, RoutingStrategies)</a> method.

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_RoutedEventRegistry">RoutedEventRegistry Class</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

