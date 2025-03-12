# BuildEventRoute Method


Builds an event route for a routed event.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected EventRoute BuildEventRoute(
	RoutedEvent e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function BuildEventRoute ( 
	e As RoutedEvent
) As EventRoute
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BuildEventRoute : 
        e : RoutedEvent -> EventRoute 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/Interactive.cs#L143" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd>The routed event.</dd></dl>

#### Return Value
<a href="T_Avalonia_Interactivity_EventRoute">EventRoute</a>  
An <a href="T_Avalonia_Interactivity_EventRoute">EventRoute</a> describing the route.Usually, calling <a href="M_Avalonia_Interactivity_Interactive_RaiseEvent">RaiseEvent(RoutedEventArgs)</a> is sufficient to raise a routed event, however there are situations in which the construction of the event args is expensive and should be avoided if there are no handlers for an event. In these cases you can call this method to build the event route and check the <a href="P_Avalonia_Interactivity_EventRoute_HasHandlers">HasHandlers</a> property to see if there are any handlers registered on the route. If there are, call <a href="M_Avalonia_Interactivity_EventRoute_RaiseEvent">RaiseEvent(Interactive, RoutedEventArgs)</a> to raise the event.

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_Interactive">Interactive Class</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

