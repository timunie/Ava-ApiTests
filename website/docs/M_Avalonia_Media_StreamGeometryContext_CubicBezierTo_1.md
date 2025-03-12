# CubicBezierTo(Point, Point, Point) Method


Draws a Bezier curve to the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void CubicBezierTo(
	Point controlPoint1,
	Point controlPoint2,
	Point endPoint
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub CubicBezierTo ( 
	controlPoint1 As Point,
	controlPoint2 As Point,
	endPoint As Point
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CubicBezierTo : 
        controlPoint1 : Point * 
        controlPoint2 : Point * 
        endPoint : Point -> unit 
override CubicBezierTo : 
        controlPoint1 : Point * 
        controlPoint2 : Point * 
        endPoint : Point -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/StreamGeometryContext.cs#L73" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The first control point used to specify the shape of the curve.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The second control point used to specify the shape of the curve.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The destination point for the end of the curve.</dd></dl>

#### Implements
<a href="M_Avalonia_Platform_IGeometryContext_CubicBezierTo">IGeometryContext.CubicBezierTo(Point, Point, Point)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Media_StreamGeometryContext">StreamGeometryContext Class</a>  
<a href="Overload_Avalonia_Media_StreamGeometryContext_CubicBezierTo">CubicBezierTo Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

