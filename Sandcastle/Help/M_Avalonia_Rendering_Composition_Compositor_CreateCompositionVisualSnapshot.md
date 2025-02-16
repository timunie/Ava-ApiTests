---
title:CreateCompositionVisualSnapshot Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateCompositionVisualSnapshot Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Task<Bitmap> CreateCompositionVisualSnapshot(
	CompositionVisual visual,
	double scaling
)
```
**VB**
``` VB
Public Function CreateCompositionVisualSnapshot ( 
	visual As CompositionVisual,
	scaling As Double
) As Task(Of Bitmap)
```
**F#**
``` F#
member CreateCompositionVisualSnapshot : 
        visual : CompositionVisual * 
        scaling : float -> Task<Bitmap> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
