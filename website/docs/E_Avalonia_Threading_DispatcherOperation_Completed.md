# Completed Event


An event that is raised when the operation completes.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler Completed
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Completed As EventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Completed : IEvent<EventHandler,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherOperation.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a>Completed indicates that the operation was invoked and has either completed successfully or faulted. Note that a canceled or aborted operation is never is never considered completed.

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherOperation">DispatcherOperation Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
