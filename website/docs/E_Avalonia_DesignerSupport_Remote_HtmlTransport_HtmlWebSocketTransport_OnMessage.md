# OnMessage Event




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll) Version: 0.7.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event Action<IAvaloniaRemoteTransportConnection, Object> OnMessage
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event OnMessage As Action(Of IAvaloniaRemoteTransportConnection, Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnMessage : IEvent<Action<IAvaloniaRemoteTransportConnection, Object>,
    EventArgs>
override OnMessage : IEvent<Action<IAvaloniaRemoteTransportConnection, Object>,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.DesignerSupport/Remote/HtmlTransport/HtmlTransport.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(IAvaloniaRemoteTransportConnection, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

#### Implements
IAvaloniaRemoteTransportConnection.OnMessage  


## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_HtmlWebSocketTransport">HtmlWebSocketTransport Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  
