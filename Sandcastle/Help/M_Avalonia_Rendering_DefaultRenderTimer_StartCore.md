---
title:StartCore Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StartCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
protected virtual IDisposable StartCore(
	Action<TimeSpan> tick
)
```
**VB**
``` VB
Protected Overridable Function StartCore ( 
	tick As Action(Of TimeSpan)
) As IDisposable
```
**F#**
``` F#
abstract StartCore : 
        tick : Action<TimeSpan> -> IDisposable 
override StartCore : 
        tick : Action<TimeSpan> -> IDisposable 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
