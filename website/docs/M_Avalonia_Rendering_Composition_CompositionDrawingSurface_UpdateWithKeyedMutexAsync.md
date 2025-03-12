# UpdateWithKeyedMutexAsync Method


Updates the surface contents using an imported memory image using a keyed mutex as the means of synchronization



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task UpdateWithKeyedMutexAsync(
	ICompositionImportedGpuImage image,
	uint acquireIndex,
	uint releaseIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function UpdateWithKeyedMutexAsync ( 
	image As ICompositionImportedGpuImage,
	acquireIndex As UInteger,
	releaseIndex As UInteger
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateWithKeyedMutexAsync : 
        image : ICompositionImportedGpuImage * 
        acquireIndex : uint32 * 
        releaseIndex : uint32 -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionDrawingSurface.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a></dt><dd>GPU image with new surface contents</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd>The mutex key to wait for before accessing the image</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd>The mutex key to release for after accessing the image</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>  
A task that completes when update operation is completed and user code is free to destroy or dispose the image

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionDrawingSurface">CompositionDrawingSurface Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

