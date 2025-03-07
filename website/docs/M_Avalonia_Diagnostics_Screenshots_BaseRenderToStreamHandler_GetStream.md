# GetStream Method


Get stream to write a screenshot to.



## Definition
**Namespace:** <a href="N_Avalonia_Diagnostics_Screenshots">Avalonia.Diagnostics.Screenshots</a>  
**Assembly:** Avalonia.Diagnostics (in Avalonia.Diagnostics.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract Task<Stream?> GetStream(
	Control control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function GetStream ( 
	control As Control
) As Task(Of Stream)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetStream : 
        control : Control -> Task<Stream> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Diagnostics/Diagnostics/Screenshots/BaseRenderToStreamHandler.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a>)  
stream to render the control

## See Also


#### Reference
<a href="T_Avalonia_Diagnostics_Screenshots_BaseRenderToStreamHandler">BaseRenderToStreamHandler Class</a>  
<a href="N_Avalonia_Diagnostics_Screenshots">Avalonia.Diagnostics.Screenshots Namespace</a>  
