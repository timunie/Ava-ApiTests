---
title:RunAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RunAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Task RunAsync(
	Animatable control,
	CancellationToken cancellationToken = default
)
```
**VB**
``` VB
Public Function RunAsync ( 
	control As Animatable,
	Optional cancellationToken As CancellationToken = Nothing
) As Task
```
**F#**
``` F#
member RunAsync : 
        control : Animatable * 
        ?cancellationToken : CancellationToken 
(* Defaults:
        let _cancellationToken = defaultArg cancellationToken new CancellationToken()
*)
-> Task 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Animation_Animatable">Animatable</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Animation_Animation">Animation Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
