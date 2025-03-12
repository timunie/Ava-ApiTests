# PreciseArcTo Method


Draws an arc to the specified point using polylines, quadratic or cubic Bezier curves Significantly more precise when drawing elliptic arcs with extreme width:height ratios.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void PreciseArcTo(
	Point point,
	Size size,
	double rotationAngle,
	bool isLargeArc,
	SweepDirection sweepDirection
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub PreciseArcTo ( 
	point As Point,
	size As Size,
	rotationAngle As Double,
	isLargeArc As Boolean,
	sweepDirection As SweepDirection
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PreciseArcTo : 
        point : Point * 
        size : Size * 
        rotationAngle : float * 
        isLargeArc : bool * 
        sweepDirection : SweepDirection -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/StreamGeometryContext.cs#L59" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The destination point.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The radii of an oval whose perimeter is used to draw the angle.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The rotation angle (in radians) of the oval that specifies the curve.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>true to draw the arc greater than 180 degrees; otherwise, false.</dd><dt>  <a href="T_Avalonia_Media_SweepDirection">SweepDirection</a></dt><dd>A value that indicates whether the arc is drawn in the Clockwise or Counterclockwise direction.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_StreamGeometryContext">StreamGeometryContext Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

