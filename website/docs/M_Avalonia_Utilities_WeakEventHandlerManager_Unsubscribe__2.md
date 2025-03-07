# Unsubscribe&lt;TEventArgs, TSubscriber&gt; Method


Unsubscribes from an event.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void Unsubscribe<TEventArgs, TSubscriber>(
	Object target,
	string eventName,
	EventHandler<TEventArgs> subscriber
)
where TEventArgs : EventArgs
where TSubscriber : class

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub Unsubscribe(Of TEventArgs As EventArgs, TSubscriber As Class) ( 
	target As Object,
	eventName As String,
	subscriber As EventHandler(Of TEventArgs)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Unsubscribe : 
        target : Object * 
        eventName : string * 
        subscriber : EventHandler<'TEventArgs> -> unit  when 'TEventArgs : EventArgs when 'TSubscriber : not struct
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/WeakEventHandlerManager.cs#L50" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The event source.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(TEventArgs)</dt><dd>The subscriber.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the event arguments.</dd><dt /><dd>The type of the subscriber.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_WeakEventHandlerManager">WeakEventHandlerManager Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
