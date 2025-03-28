# ArcTo(Point, Size, Double, Boolean, SweepDirection, Boolean) Method


Draws an arc to the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void ArcTo(
	Point point,
	Size size,
	double rotationAngle,
	bool isLargeArc,
	SweepDirection sweepDirection,
	bool isStroked
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub ArcTo ( 
	point As Point,
	size As Size,
	rotationAngle As Double,
	isLargeArc As Boolean,
	sweepDirection As SweepDirection,
	isStroked As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArcTo : 
        point : Point * 
        size : Size * 
        rotationAngle : float * 
        isLargeArc : bool * 
        sweepDirection : SweepDirection * 
        isStroked : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryContext2.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The destination point.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The radii of an oval whose perimeter is used to draw the angle.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The rotation angle (in radians) of the oval that specifies the curve.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>true to draw the arc greater than 180 degrees; otherwise, false.</dd><dt>  <a href="T_Avalonia_Media_SweepDirection">SweepDirection</a></dt><dd>A value that indicates whether the arc is drawn in the Clockwise or Counterclockwise direction.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether the segment is stroked</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryContext2">IGeometryContext2 Interface</a>  
<a href="Overload_Avalonia_Platform_IGeometryContext2_ArcTo">ArcTo Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

