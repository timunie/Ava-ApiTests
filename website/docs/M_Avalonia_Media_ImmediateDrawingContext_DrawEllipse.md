# DrawEllipse Method


Draws an ellipse with the specified Brush and Pen.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void DrawEllipse(
	IImmutableBrush? brush,
	ImmutablePen? pen,
	Point center,
	double radiusX,
	double radiusY
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub DrawEllipse ( 
	brush As IImmutableBrush,
	pen As ImmutablePen,
	center As Point,
	radiusX As Double,
	radiusY As Double
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DrawEllipse : 
        brush : IImmutableBrush * 
        pen : ImmutablePen * 
        center : Point * 
        radiusX : float * 
        radiusY : float -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/ImmediateDrawingContext.cs#L170" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a></dt><dd>The brush used to fill the ellipse, or <code>null</code> for no fill.</dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutablePen">ImmutablePen</a></dt><dd>The pen used to stroke the ellipse, or <code>null</code> for no stroke.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The location of the center of the ellipse.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The horizontal radius of the ellipse.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The vertical radius of the ellipse.</dd></dl>The brush and the pen can both be null. If the brush is null, then no fill is performed. If the pen is null, then no stoke is performed. If both the pen and the brush are null, then the drawing is not visible.

## See Also


#### Reference
<a href="T_Avalonia_Media_ImmediateDrawingContext">ImmediateDrawingContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

