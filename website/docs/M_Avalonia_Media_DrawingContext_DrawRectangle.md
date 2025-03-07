# DrawRectangle(IBrush, IPen, Rect, Double, Double, BoxShadows) Method


Draws a rectangle with the specified Brush and Pen.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void DrawRectangle(
	IBrush? brush,
	IPen? pen,
	Rect rect,
	double radiusX = 0,
	double radiusY = 0,
	BoxShadows boxShadows = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub DrawRectangle ( 
	brush As IBrush,
	pen As IPen,
	rect As Rect,
	Optional radiusX As Double = 0,
	Optional radiusY As Double = 0,
	Optional boxShadows As BoxShadows = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DrawRectangle : 
        brush : IBrush * 
        pen : IPen * 
        rect : Rect * 
        ?radiusX : float * 
        ?radiusY : float * 
        ?boxShadows : BoxShadows 
(* Defaults:
        let _radiusX = defaultArg radiusX 0
        let _radiusY = defaultArg radiusY 0
        let _boxShadows = defaultArg boxShadows new BoxShadows()
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/DrawingContext.cs#L131" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IBrush">IBrush</a></dt><dd>The brush used to fill the rectangle, or <code>null</code> for no fill.</dd><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The pen used to stroke the rectangle, or <code>null</code> for no stroke.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rectangle bounds.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The radius in the X dimension of the rounded corners. This value will be clamped to the range of 0 to Width/2</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The radius in the Y dimension of the rounded corners. This value will be clamped to the range of 0 to Height/2</dd><dt>  <a href="T_Avalonia_Media_BoxShadows">BoxShadows</a>  (Optional)</dt><dd>Box shadow effect parameters</dd></dl>The brush and the pen can both be null. If the brush is null, then no fill is performed. If the pen is null, then no stroke is performed. If both the pen and the brush are null, then the drawing is not visible.

## See Also


#### Reference
<a href="T_Avalonia_Media_DrawingContext">DrawingContext Class</a>  
<a href="Overload_Avalonia_Media_DrawingContext_DrawRectangle">DrawRectangle Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
