---
title:Start Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Start Method




## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
Task Start(
	Visual? from,
	Visual? to,
	bool forward,
	CancellationToken cancellationToken
)
```
**VB**
``` VB
Function Start ( 
	from As Visual,
	to As Visual,
	forward As Boolean,
	cancellationToken As CancellationToken
) As Task
```
**F#**
``` F#
abstract Start : 
        from : Visual * 
        to : Visual * 
        forward : bool * 
        cancellationToken : CancellationToken -> Task 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken" target="_blank" rel="noopener noreferrer">CancellationToken</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Animation_IPageTransition">IPageTransition Interface</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
