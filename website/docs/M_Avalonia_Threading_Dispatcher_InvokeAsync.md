# InvokeAsync(Action, DispatcherPriority, CancellationToken) Method


Executes the specified Action asynchronously on the thread that the Dispatcher was created on.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DispatcherOperation InvokeAsync(
	Action callback,
	DispatcherPriority priority,
	CancellationToken cancellationToken
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function InvokeAsync ( 
	callback As Action,
	priority As DispatcherPriority,
	cancellationToken As CancellationToken
) As DispatcherOperation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InvokeAsync : 
        callback : Action * 
        priority : DispatcherPriority * 
        cancellationToken : CancellationToken -> DispatcherOperation 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L309" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>An Action delegate to invoke through the dispatcher.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>The priority that determines in what order the specified callback is invoked relative to the other pending operations in the Dispatcher.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a></dt><dd>A cancellation token that can be used to cancel the operation. If the operation has not started, it will be aborted when the cancellation token is canceled. If the operation has started, the operation can cooperate with the cancellation request.</dd></dl>

#### Return Value
<a href="T_Avalonia_Threading_DispatcherOperation">DispatcherOperation</a>  
An operation representing the queued delegate to be invoked.

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_InvokeAsync">InvokeAsync Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

