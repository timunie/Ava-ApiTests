---
title:UpdateWithSemaphoresAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# UpdateWithSemaphoresAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Task UpdateWithSemaphoresAsync(
	ICompositionImportedGpuImage image,
	ICompositionImportedGpuSemaphore waitForSemaphore,
	ICompositionImportedGpuSemaphore signalSemaphore
)
```
**VB**
``` VB
Public Function UpdateWithSemaphoresAsync ( 
	image As ICompositionImportedGpuImage,
	waitForSemaphore As ICompositionImportedGpuSemaphore,
	signalSemaphore As ICompositionImportedGpuSemaphore
) As Task
```
**F#**
``` F#
member UpdateWithSemaphoresAsync : 
        image : ICompositionImportedGpuImage * 
        waitForSemaphore : ICompositionImportedGpuSemaphore * 
        signalSemaphore : ICompositionImportedGpuSemaphore -> Task 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuSemaphore">ICompositionImportedGpuSemaphore</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuSemaphore">ICompositionImportedGpuSemaphore</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionDrawingSurface">CompositionDrawingSurface Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
