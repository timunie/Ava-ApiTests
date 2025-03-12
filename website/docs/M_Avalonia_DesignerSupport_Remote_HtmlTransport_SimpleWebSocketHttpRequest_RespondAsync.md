# RespondAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll) Version: 0.7.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task RespondAsync(
	int code,
	byte[] data,
	string contentType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function RespondAsync ( 
	code As Integer,
	data As Byte(),
	contentType As String
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RespondAsync : 
        code : int * 
        data : byte[] * 
        contentType : string -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.DesignerSupport/Remote/HtmlTransport/SimpleWebSocketHttpServer.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocketHttpRequest">SimpleWebSocketHttpRequest Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  

