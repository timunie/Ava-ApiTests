---
title:Listen Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Listen Method




## Definition
**Namespace:** <a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol</a>  
**Assembly:** Avalonia.Remote.Protocol (in Avalonia.Remote.Protocol.dll) Version: 11.2.4

**C#**
``` C#
public IDisposable Listen(
	IPAddress address,
	int port,
	Action<IAvaloniaRemoteTransportConnection> cb
)
```
**VB**
``` VB
Public Function Listen ( 
	address As IPAddress,
	port As Integer,
	cb As Action(Of IAvaloniaRemoteTransportConnection)
) As IDisposable
```
**F#**
``` F#
member Listen : 
        address : IPAddress * 
        port : int * 
        cb : Action<IAvaloniaRemoteTransportConnection> -> IDisposable 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.net.ipaddress" target="_blank" rel="noopener noreferrer">IPAddress</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection">IAvaloniaRemoteTransportConnection</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Remote_Protocol_TcpTransportBase">TcpTransportBase Class</a>  
<a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol Namespace</a>  
