# AddDisposableHandler&lt;TEventArgs&gt; Method


Adds a handler for the specified routed event and returns a disposable that can terminate the event subscription.



## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDisposable AddDisposableHandler<TEventArgs>(
	this Interactive o,
	RoutedEvent<TEventArgs> routedEvent,
	EventHandler<TEventArgs> handler,
	RoutingStrategies routes = RoutingStrategies.Direct|RoutingStrategies.Bubble,
	bool handledEventsToo = false
)
where TEventArgs : RoutedEventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function AddDisposableHandler(Of TEventArgs As RoutedEventArgs) ( 
	o As Interactive,
	routedEvent As RoutedEvent(Of TEventArgs),
	handler As EventHandler(Of TEventArgs),
	Optional routes As RoutingStrategies = RoutingStrategies.Direct Or RoutingStrategies.Bubble,
	Optional handledEventsToo As Boolean = false
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/InteractiveExtensions.cs#L26" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a></dt><dd>Target for adding given event handler.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)</dt><dd>The routed event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd>The handler.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a>  (Optional)</dt><dd>The routing strategies to listen to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether handled events should also be listened for.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the event's args.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A disposable that terminates the event subscription.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Interactivity_Interactive">Interactive</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_InteractiveExtensions">InteractiveExtensions Class</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

