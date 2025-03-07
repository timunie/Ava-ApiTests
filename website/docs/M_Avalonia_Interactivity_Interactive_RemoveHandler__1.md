# RemoveHandler&lt;TEventArgs&gt;(RoutedEvent&lt;TEventArgs&gt;, EventHandler&lt;TEventArgs&gt;) Method


Removes a handler for the specified routed event.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RemoveHandler<TEventArgs>(
	RoutedEvent<TEventArgs> routedEvent,
	EventHandler<TEventArgs>? handler
)
where TEventArgs : RoutedEventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RemoveHandler(Of TEventArgs As RoutedEventArgs) ( 
	routedEvent As RoutedEvent(Of TEventArgs),
	handler As EventHandler(Of TEventArgs)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RemoveHandler : 
        routedEvent : RoutedEvent<'TEventArgs> * 
        handler : EventHandler<'TEventArgs> -> unit  when 'TEventArgs : RoutedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/Interactive.cs#L106" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)</dt><dd>The routed event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd>The handler.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the event's args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_Interactive">Interactive Class</a>  
<a href="Overload_Avalonia_Interactivity_Interactive_RemoveHandler">RemoveHandler Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  
