# AwaitWithPriority(Task, DispatcherPriority) Method


Returns a task awaitable that would invoke continuation on specified dispatcher priority



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DispatcherPriorityAwaitable AwaitWithPriority(
	Task task,
	DispatcherPriority priority
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AwaitWithPriority ( 
	task As Task,
	priority As DispatcherPriority
) As DispatcherPriorityAwaitable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AwaitWithPriority : 
        task : Task * 
        priority : DispatcherPriority -> DispatcherPriorityAwaitable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L667" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Threading_DispatcherPriorityAwaitable">DispatcherPriorityAwaitable</a>

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_AwaitWithPriority">AwaitWithPriority Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
