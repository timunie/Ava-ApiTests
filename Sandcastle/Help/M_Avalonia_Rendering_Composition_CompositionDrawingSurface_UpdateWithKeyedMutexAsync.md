---
title:UpdateWithKeyedMutexAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# UpdateWithKeyedMutexAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Task UpdateWithKeyedMutexAsync(
	ICompositionImportedGpuImage image,
	uint acquireIndex,
	uint releaseIndex
)
```
**VB**
``` VB
Public Function UpdateWithKeyedMutexAsync ( 
	image As ICompositionImportedGpuImage,
	acquireIndex As UInteger,
	releaseIndex As UInteger
) As Task
```
**F#**
``` F#
member UpdateWithKeyedMutexAsync : 
        image : ICompositionImportedGpuImage * 
        acquireIndex : uint32 * 
        releaseIndex : uint32 -> Task 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionDrawingSurface">CompositionDrawingSurface Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
