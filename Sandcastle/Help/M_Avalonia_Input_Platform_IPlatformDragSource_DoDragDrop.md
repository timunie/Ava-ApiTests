---
title:DoDragDrop Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DoDragDrop Method




## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
Task<DragDropEffects> DoDragDrop(
	PointerEventArgs triggerEvent,
	IDataObject data,
	DragDropEffects allowedEffects
)
```
**VB**
``` VB
Function DoDragDrop ( 
	triggerEvent As PointerEventArgs,
	data As IDataObject,
	allowedEffects As DragDropEffects
) As Task(Of DragDropEffects)
```
**F#**
``` F#
abstract DoDragDrop : 
        triggerEvent : PointerEventArgs * 
        data : IDataObject * 
        allowedEffects : DragDropEffects -> Task<DragDropEffects> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_DragDropEffects">DragDropEffects</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Input_DragDropEffects">DragDropEffects</a>)

## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_IPlatformDragSource">IPlatformDragSource Interface</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  
