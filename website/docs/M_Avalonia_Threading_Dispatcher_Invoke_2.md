# Invoke(Action, DispatcherPriority) Method


Executes the specified Action synchronously on the thread that the Dispatcher was created on.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Invoke(
	Action callback,
	DispatcherPriority priority
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Invoke ( 
	callback As Action,
	priority As DispatcherPriority
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Invoke : 
        callback : Action * 
        priority : DispatcherPriority -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L39" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>An Action delegate to invoke through the dispatcher.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>The priority that determines in what order the specified callback is invoked relative to the other pending operations in the Dispatcher.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_Invoke">Invoke Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

