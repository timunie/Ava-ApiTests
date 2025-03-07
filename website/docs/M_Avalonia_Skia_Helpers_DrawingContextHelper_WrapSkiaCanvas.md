# WrapSkiaCanvas Method


Wrap Skia canvas in drawing context so we can use Avalonia api to render to external skia canvas this is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);



## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDrawingContextImpl WrapSkiaCanvas(
	SKCanvas canvas,
	Vector dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function WrapSkiaCanvas ( 
	canvas As SKCanvas,
	dpi As Vector
) As IDrawingContextImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member WrapSkiaCanvas : 
        canvas : SKCanvas * 
        dpi : Vector -> IDrawingContextImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/DrawingContextHelper.cs#L46" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  SKCanvas</dt><dd>Skia canvas to render into.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd /></dl>

#### Return Value
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a>  
DrawingContext

## See Also


#### Reference
<a href="T_Avalonia_Skia_Helpers_DrawingContextHelper">DrawingContextHelper Class</a>  
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  
