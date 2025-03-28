# RequestPlatformInhibition Method


Requests a <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a> to be inhibited. The behavior remains inhibited until the return value is disposed. The available set of <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a>s depends on the platform. If a behavior is inhibited on a platform where this type is not supported the request will have no effect.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task<IDisposable> RequestPlatformInhibition(
	PlatformInhibitionType type,
	string reason
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function RequestPlatformInhibition ( 
	type As PlatformInhibitionType,
	reason As String
) As Task(Of IDisposable)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestPlatformInhibition : 
        type : PlatformInhibitionType * 
        reason : string -> Task<IDisposable> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TopLevel.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

