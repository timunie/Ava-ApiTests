---
title:Register Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Register Method




## Definition
**Namespace:** <a href="N_MicroCom_Runtime">MicroCom.Runtime</a>  
**Assembly:** MicroCom.Runtime (in MicroCom.Runtime.dll) Version: 0.11.0

**C#**
``` C#
public static void Register(
	Type t,
	Guid guid,
	Func<IntPtr, bool, Object> proxyFactory
)
```
**VB**
``` VB
Public Shared Sub Register ( 
	t As Type,
	guid As Guid,
	proxyFactory As Func(Of IntPtr, Boolean, Object)
)
```
**F#**
``` F#
static member Register : 
        t : Type * 
        guid : Guid * 
        proxyFactory : Func<IntPtr, bool, Object> -> unit 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.guid" target="_blank" rel="noopener noreferrer">Guid</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime Class</a>  
<a href="N_MicroCom_Runtime">MicroCom.Runtime Namespace</a>  
