---
title:OnMessage Event
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# OnMessage Event




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll) Version: 0.7.0

**C#**
``` C#
public event Action<IAvaloniaRemoteTransportConnection, Object> OnMessage
```
**VB**
``` VB
Public Event OnMessage As Action(Of IAvaloniaRemoteTransportConnection, Object)
```
**F#**
``` F#
abstract OnMessage : IEvent<Action<IAvaloniaRemoteTransportConnection, Object>,
    EventArgs>
override OnMessage : IEvent<Action<IAvaloniaRemoteTransportConnection, Object>,
    EventArgs>
```



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection">IAvaloniaRemoteTransportConnection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

#### Implements
<a href="E_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection_OnMessage">IAvaloniaRemoteTransportConnection.OnMessage</a>  


## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_HtmlWebSocketTransport">HtmlWebSocketTransport Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  
