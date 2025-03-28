# SendMessage(Boolean, Byte[], Int32, Int32) Method




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task SendMessage(
	bool isText,
	byte[] data,
	int offset,
	int length
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function SendMessage ( 
	isText As Boolean,
	data As Byte(),
	offset As Integer,
	length As Integer
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SendMessage : 
        isText : bool * 
        data : byte[] * 
        offset : int * 
        length : int -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.DesignerSupport/Remote/HtmlTransport/SimpleWebSocketHttpServer.cs#L298" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocket">SimpleWebSocket Class</a>  
<a href="Overload_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocket_SendMessage">SendMessage Overload</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  

