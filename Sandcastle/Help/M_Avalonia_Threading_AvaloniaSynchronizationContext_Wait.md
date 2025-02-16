---
title:Wait Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Wait Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public override int Wait(
	IntPtr[] waitHandles,
	bool waitAll,
	int millisecondsTimeout
)
```
**VB**
``` VB
Public Overrides Function Wait ( 
	waitHandles As IntPtr(),
	waitAll As Boolean,
	millisecondsTimeout As Integer
) As Integer
```
**F#**
``` F#
abstract Wait : 
        waitHandles : IntPtr[] * 
        waitAll : bool * 
        millisecondsTimeout : int -> int 
override Wait : 
        waitHandles : IntPtr[] * 
        waitAll : bool * 
        millisecondsTimeout : int -> int 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## See Also


#### Reference
<a href="T_Avalonia_Threading_AvaloniaSynchronizationContext">AvaloniaSynchronizationContext Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
