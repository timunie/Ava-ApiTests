# RenderAsync(SKCanvas, Visual) Method


Renders Avalonia visual into a SKCanvas instance. This is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);



## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task RenderAsync(
	SKCanvas canvas,
	Visual visual
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RenderAsync ( 
	canvas As SKCanvas,
	visual As Visual
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RenderAsync : 
        canvas : SKCanvas * 
        visual : Visual -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/DrawingContextHelper.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  SKCanvas</dt><dd>Skia canvas to render into.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>Avalonia visual.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Skia_Helpers_DrawingContextHelper">DrawingContextHelper Class</a>  
<a href="Overload_Avalonia_Skia_Helpers_DrawingContextHelper_RenderAsync">RenderAsync Overload</a>  
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  

