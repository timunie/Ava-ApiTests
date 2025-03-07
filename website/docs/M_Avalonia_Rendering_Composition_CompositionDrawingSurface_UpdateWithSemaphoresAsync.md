# UpdateWithSemaphoresAsync Method


Updates the surface contents using an imported memory image using a semaphore pair as the means of synchronization



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task UpdateWithSemaphoresAsync(
	ICompositionImportedGpuImage image,
	ICompositionImportedGpuSemaphore waitForSemaphore,
	ICompositionImportedGpuSemaphore signalSemaphore
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function UpdateWithSemaphoresAsync ( 
	image As ICompositionImportedGpuImage,
	waitForSemaphore As ICompositionImportedGpuSemaphore,
	signalSemaphore As ICompositionImportedGpuSemaphore
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateWithSemaphoresAsync : 
        image : ICompositionImportedGpuImage * 
        waitForSemaphore : ICompositionImportedGpuSemaphore * 
        signalSemaphore : ICompositionImportedGpuSemaphore -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionDrawingSurface.cs#L38" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a></dt><dd>GPU image with new surface contents</dd><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuSemaphore">ICompositionImportedGpuSemaphore</a></dt><dd>The semaphore to wait for before accessing the image</dd><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuSemaphore">ICompositionImportedGpuSemaphore</a></dt><dd>The semaphore to signal after accessing the image</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>  
A task that completes when update operation is completed and user code is free to destroy or dispose the image

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionDrawingSurface">CompositionDrawingSurface Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
