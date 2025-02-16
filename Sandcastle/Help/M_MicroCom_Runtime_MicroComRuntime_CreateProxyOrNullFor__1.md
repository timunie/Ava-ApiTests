---
title:CreateProxyOrNullFor&lt;T&gt;(IntPtr, Boolean) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateProxyOrNullFor&lt;T&gt;(IntPtr, Boolean) Method




## Definition
**Namespace:** <a href="N_MicroCom_Runtime">MicroCom.Runtime</a>  
**Assembly:** MicroCom.Runtime (in MicroCom.Runtime.dll) Version: 0.11.0

**C#**
``` C#
public static T CreateProxyOrNullFor<T>(
	IntPtr pObject,
	bool ownsHandle
)
where T : class

```
**VB**
``` VB
Public Shared Function CreateProxyOrNullFor(Of T As Class) ( 
	pObject As IntPtr,
	ownsHandle As Boolean
) As T
```
**F#**
``` F#
static member CreateProxyOrNullFor : 
        pObject : IntPtr * 
        ownsHandle : bool -> 'T  when 'T : not struct
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

## See Also


#### Reference
<a href="T_MicroCom_Runtime_MicroComRuntime">MicroComRuntime Class</a>  
<a href="Overload_MicroCom_Runtime_MicroComRuntime_CreateProxyOrNullFor">CreateProxyOrNullFor Overload</a>  
<a href="N_MicroCom_Runtime">MicroCom.Runtime Namespace</a>  
