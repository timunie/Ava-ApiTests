# InvokeAsync(Func&lt;Task&gt;, DispatcherPriority) Method


Executes the specified Func&lt;Task&gt; asynchronously on the thread that the Dispatcher was created on



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task InvokeAsync(
	Func<Task> callback,
	DispatcherPriority priority
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function InvokeAsync ( 
	callback As Func(Of Task),
	priority As DispatcherPriority
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InvokeAsync : 
        callback : Func<Task> * 
        priority : DispatcherPriority -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L579" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>)</dt><dd>A Func&lt;Task&gt; delegate to invoke through the dispatcher.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>The priority that determines in what order the specified callback is invoked relative to the other pending operations in the Dispatcher.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>  
An task that completes after the task returned from callback finishes

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_InvokeAsync">InvokeAsync Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

