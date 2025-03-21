# CreateCompositionVisualSnapshot Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task<Bitmap> CreateCompositionVisualSnapshot(
	CompositionVisual visual,
	double scaling
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreateCompositionVisualSnapshot ( 
	visual As CompositionVisual,
	scaling As Double
) As Task(Of Bitmap)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CreateCompositionVisualSnapshot : 
        visual : CompositionVisual * 
        scaling : float -> Task<Bitmap> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Compositor.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>)

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

