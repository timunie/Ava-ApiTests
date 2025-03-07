# AwaitWithPriority&lt;T&gt;(Task&lt;T&gt;, DispatcherPriority) Method


Returns a task awaitable that would invoke continuation on specified dispatcher priority



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DispatcherPriorityAwaitable<T> AwaitWithPriority<T>(
	Task<T> task,
	DispatcherPriority priority
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AwaitWithPriority(Of T) ( 
	task As Task(Of T),
	priority As DispatcherPriority
) As DispatcherPriorityAwaitable(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AwaitWithPriority : 
        task : Task<'T> * 
        priority : DispatcherPriority -> DispatcherPriorityAwaitable<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L673" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(T)</dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Threading_DispatcherPriorityAwaitable_1">DispatcherPriorityAwaitable</a>(T)

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_AwaitWithPriority">AwaitWithPriority Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
