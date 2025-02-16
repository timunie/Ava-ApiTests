---
title:OnException Event
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# OnException Event




## Definition
**Namespace:** <a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol</a>  
**Assembly:** Avalonia.Remote.Protocol (in Avalonia.Remote.Protocol.dll) Version: 11.2.4

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
<a href="T_Avalonia_Remote_Protocol_TransportConnectionWrapper">TransportConnectionWrapper Class</a>  
<a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol Namespace</a>  
