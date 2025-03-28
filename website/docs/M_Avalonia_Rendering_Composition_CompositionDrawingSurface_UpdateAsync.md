# UpdateAsync Method


Updates the surface contents using an unspecified automatic means of synchronization provided by the underlying platform



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task UpdateAsync(
	ICompositionImportedGpuImage image
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function UpdateAsync ( 
	image As ICompositionImportedGpuImage
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateAsync : 
        image : ICompositionImportedGpuImage -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionDrawingSurface.cs#L53" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a></dt><dd>GPU image with new surface contents</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>  
A task that completes when update operation is completed and user code is free to destroy or dispose the image

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionDrawingSurface">CompositionDrawingSurface Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

