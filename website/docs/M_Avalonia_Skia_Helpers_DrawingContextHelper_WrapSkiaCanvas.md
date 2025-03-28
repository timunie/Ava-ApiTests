# WrapSkiaCanvas Method


Wrap Skia canvas in drawing context so we can use Avalonia api to render to external skia canvas this is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);



## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("IDrawingContextImpl usage is not supported in Avalonia 11.0.")]
public static IDrawingContextImpl WrapSkiaCanvas(
	SKCanvas canvas,
	Vector dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("IDrawingContextImpl usage is not supported in Avalonia 11.0.")>
Public Shared Function WrapSkiaCanvas ( 
	canvas As SKCanvas,
	dpi As Vector
) As IDrawingContextImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("IDrawingContextImpl usage is not supported in Avalonia 11.0.")>]
static member WrapSkiaCanvas : 
        canvas : SKCanvas * 
        dpi : Vector -> IDrawingContextImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/DrawingContextHelper.cs#L47" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  SKCanvas</dt><dd>Skia canvas to render into.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd /></dl>

#### Return Value
IDrawingContextImpl  
DrawingContext

## See Also


#### Reference
<a href="T_Avalonia_Skia_Helpers_DrawingContextHelper">DrawingContextHelper Class</a>  
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  

