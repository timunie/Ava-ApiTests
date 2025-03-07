# DrawingContextHelper Class




## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class DrawingContextHelper
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class DrawingContextHelper
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type DrawingContextHelper = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/DrawingContextHelper.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DrawingContextHelper</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_Helpers_DrawingContextHelper_RenderAsync_1">RenderAsync(SKCanvas, Visual)</a></td>
<td>Renders Avalonia visual into a SKCanvas instance. This is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_Helpers_DrawingContextHelper_RenderAsync">RenderAsync(SKCanvas, Visual, Rect, Vector)</a></td>
<td>Renders Avalonia visual into a SKCanvas instance. This is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_Helpers_DrawingContextHelper_TryCreateDashEffect">TryCreateDashEffect(IPen, SKPathEffect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_Helpers_DrawingContextHelper_WrapSkiaCanvas">WrapSkiaCanvas(SKCanvas, Vector)</a></td>
<td>Wrap Skia canvas in drawing context so we can use Avalonia api to render to external skia canvas this is useful in scenarios where canvas is not controlled by application, but received from another non avalonia api like: SKCanvas canvas = SKDocument.BeginPage(...);</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  
