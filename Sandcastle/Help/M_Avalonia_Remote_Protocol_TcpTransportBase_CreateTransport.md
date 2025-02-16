---
title:CreateTransport Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateTransport Method




## Definition
**Namespace:** <a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol</a>  
**Assembly:** Avalonia.Remote.Protocol (in Avalonia.Remote.Protocol.dll) Version: 11.2.4

**C#**
``` C#
protected abstract IAvaloniaRemoteTransportConnection CreateTransport(
	IMessageTypeResolver resolver,
	Stream stream,
	Action disposeCallback
)
```
**VB**
``` VB
Protected MustOverride Function CreateTransport ( 
	resolver As IMessageTypeResolver,
	stream As Stream,
	disposeCallback As Action
) As IAvaloniaRemoteTransportConnection
```
**F#**
``` F#
abstract CreateTransport : 
        resolver : IMessageTypeResolver * 
        stream : Stream * 
        disposeCallback : Action -> IAvaloniaRemoteTransportConnection 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Remote_Protocol_IMessageTypeResolver">IMessageTypeResolver</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Remote_Protocol_IAvaloniaRemoteTransportConnection">IAvaloniaRemoteTransportConnection</a>

## See Also


#### Reference
<a href="T_Avalonia_Remote_Protocol_TcpTransportBase">TcpTransportBase Class</a>  
<a href="N_Avalonia_Remote_Protocol">Avalonia.Remote.Protocol Namespace</a>  
