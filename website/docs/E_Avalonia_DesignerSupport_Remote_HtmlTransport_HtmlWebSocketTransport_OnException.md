# OnException Event




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll) Version: 0.7.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event Action<IAvaloniaRemoteTransportConnection, Exception> OnException
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event OnException As Action(Of IAvaloniaRemoteTransportConnection, Exception)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnException : IEvent<Action<IAvaloniaRemoteTransportConnection, Exception>,
    EventArgs>
override OnException : IEvent<Action<IAvaloniaRemoteTransportConnection, Exception>,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.DesignerSupport/Remote/HtmlTransport/HtmlTransport.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(IAvaloniaRemoteTransportConnection, <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)

#### Implements
IAvaloniaRemoteTransportConnection.OnException  


## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_HtmlWebSocketTransport">HtmlWebSocketTransport Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  
