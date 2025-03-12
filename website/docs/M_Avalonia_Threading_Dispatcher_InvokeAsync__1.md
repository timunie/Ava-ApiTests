# InvokeAsync&lt;TResult&gt;(Func&lt;Task&lt;TResult&gt;&gt;, DispatcherPriority) Method


Executes the specified Func&lt;Task&lt;TResult&gt;&gt; asynchronously on the thread that the Dispatcher was created on



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task<TResult> InvokeAsync<TResult>(
	Func<Task<TResult>> action,
	DispatcherPriority priority
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function InvokeAsync(Of TResult) ( 
	action As Func(Of Task(Of TResult)),
	priority As DispatcherPriority
) As Task(Of TResult)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InvokeAsync : 
        action : Func<Task<'TResult>> * 
        priority : DispatcherPriority -> Task<'TResult> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L613" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(TResult))</dt><dd>A Func&lt;Task&lt;TResult&gt;&gt; delegate to invoke through the dispatcher.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>The priority that determines in what order the specified callback is invoked relative to the other pending operations in the Dispatcher.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(TResult)  
An task that completes after the task returned from callback finishes

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_InvokeAsync">InvokeAsync Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

