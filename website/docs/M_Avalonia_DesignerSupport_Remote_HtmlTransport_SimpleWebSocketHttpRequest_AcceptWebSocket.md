# AcceptWebSocket Method




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task<SimpleWebSocket> AcceptWebSocket(
	string protocol = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AcceptWebSocket ( 
	Optional protocol As String = Nothing
) As Task(Of SimpleWebSocket)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AcceptWebSocket : 
        ?protocol : string 
(* Defaults:
        let _protocol = defaultArg protocol null
*)
-> Task<SimpleWebSocket> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.DesignerSupport/Remote/HtmlTransport/SimpleWebSocketHttpServer.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocket">SimpleWebSocket</a>)

## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocketHttpRequest">SimpleWebSocketHttpRequest Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  

