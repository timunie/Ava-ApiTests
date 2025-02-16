---
title:AcceptWebSocket Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AcceptWebSocket Method




## Definition
**Namespace:** <a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport</a>  
**Assembly:** Avalonia.DesignerSupport (in Avalonia.DesignerSupport.dll) Version: 0.7.0

**C#**
``` C#
public Task<SimpleWebSocket> AcceptWebSocket(
	string protocol = null
)
```
**VB**
``` VB
Public Function AcceptWebSocket ( 
	Optional protocol As String = Nothing
) As Task(Of SimpleWebSocket)
```
**F#**
``` F#
member AcceptWebSocket : 
        ?protocol : string 
(* Defaults:
        let _protocol = defaultArg protocol null
*)
-> Task<SimpleWebSocket> 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocket">SimpleWebSocket</a>)

## See Also


#### Reference
<a href="T_Avalonia_DesignerSupport_Remote_HtmlTransport_SimpleWebSocketHttpRequest">SimpleWebSocketHttpRequest Class</a>  
<a href="N_Avalonia_DesignerSupport_Remote_HtmlTransport">Avalonia.DesignerSupport.Remote.HtmlTransport Namespace</a>  
