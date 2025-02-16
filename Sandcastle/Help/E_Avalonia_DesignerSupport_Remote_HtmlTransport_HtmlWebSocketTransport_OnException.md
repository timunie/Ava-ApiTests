---
title:OnException Event
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# OnException Event




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll) Version: 0.7.0

**C#**
``` C#
public event Action<IAvaloniaRemoteTransportConnection, Exception> OnException
```
**VB**
``` VB
Public Event OnException As Action(Of IAvaloniaRemoteTransportConnection, Exception)
```
**F#**
``` F#
abstract OnException : IEvent<Action<IAvaloniaRemoteTransportConnection, Exception>,
    EventArgs>
override OnException : IEvent<Action<IAvaloniaRemoteTransportConnection, Exception>,
    EventArgs>
```



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection">IAvaloniaRemoteTransportConnection</a>, <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)

#### Implements
<a href="E_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection_OnException">IAvaloniaRemoteTransportConnection.OnException</a>  


## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_HtmlWebSocketTransport">HtmlWebSocketTransport Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  
