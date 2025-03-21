# CubicBezierTo Method


Draws a Bezier curve to the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void CubicBezierTo(
	Point controlPoint1,
	Point controlPoint2,
	Point endPoint
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub CubicBezierTo ( 
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
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryContext.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The first control point used to specify the shape of the curve.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The second control point used to specify the shape of the curve.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The destination point for the end of the curve.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

