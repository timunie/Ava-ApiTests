---
title:Connect Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Connect Method




## Definition
**Namespace:** <a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol</a>  
**Assembly:** Avalonia.Remote.Protocol (in Avalonia.Remote.Protocol.dll) Version: 11.2.4

**C#**
``` C#
public Task<IAvaloniaRemoteTransportConnection> Connect(
	IPAddress address,
	int port
)
```
**VB**
``` VB
Public Function Connect ( 
	address As IPAddress,
	port As Integer
) As Task(Of IAvaloniaRemoteTransportConnection)
```
**F#**
``` F#
member Connect : 
        address : IPAddress * 
        port : int -> Task<IAvaloniaRemoteTransportConnection> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.net.ipaddress" target="_blank" rel="noopener noreferrer">IPAddress</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection">IAvaloniaRemoteTransportConnection</a>)

## See Also


#### Reference
<a href="T_Avalonia_Remote_Protocol_TcpTransportBase">TcpTransportBase Class</a>  
<a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol Namespace</a>  
