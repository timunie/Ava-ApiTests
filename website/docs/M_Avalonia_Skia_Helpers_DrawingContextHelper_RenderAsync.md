# RenderAsync(SKCanvas, Visual, Rect, Vector) Method


Renders Avalonia visual into a SKCanvas instance. This is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);



## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task RenderAsync(
	SKCanvas canvas,
	Visual visual,
	Rect clipRect,
	Vector dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RenderAsync ( 
	canvas As SKCanvas,
	visual As Visual,
	clipRect As Rect,
	dpi As Vector
) As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RenderAsync : 
        canvas : SKCanvas * 
        visual : Visual * 
        clipRect : Rect * 
        dpi : Vector -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/DrawingContextHelper.cs#L29" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  SKCanvas</dt><dd>Skia canvas to render into.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>Avalonia visual.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>Clipping rectangle.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>Dpi of drawings.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Skia_Helpers_DrawingContextHelper">DrawingContextHelper Class</a>  
<a href="Overload_Avalonia_Skia_Helpers_DrawingContextHelper_RenderAsync">RenderAsync Overload</a>  
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  
