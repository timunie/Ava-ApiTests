---
title:StartTimer Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StartTimer Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IDisposable StartTimer(
	DispatcherPriority priority,
	TimeSpan interval,
	Action tick
)
```
**VB**
``` VB
Function StartTimer ( 
	priority As DispatcherPriority,
	interval As TimeSpan,
	tick As Action
) As IDisposable
```
**F#**
``` F#
abstract StartTimer : 
        priority : DispatcherPriority * 
        interval : TimeSpan * 
        tick : Action -> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformThreadingInterface">IPlatformThreadingInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
