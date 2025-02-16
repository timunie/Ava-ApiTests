---
title:Tick Event
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Tick Event




## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public event Action<TimeSpan> Tick
```
**VB**
``` VB
Public Event Tick As Action(Of TimeSpan)
```
**F#**
``` F#
abstract Tick : IEvent<Action<TimeSpan>,
    EventArgs>
override Tick : IEvent<Action<TimeSpan>,
    EventArgs>
```



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)

#### Implements
<a href="E_Avalonia_Rendering_IRenderTimer_Tick">IRenderTimer.Tick</a>  


## See Also


#### Reference
<a href="T_Avalonia_Rendering_SleepLoopRenderTimer">SleepLoopRenderTimer Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
