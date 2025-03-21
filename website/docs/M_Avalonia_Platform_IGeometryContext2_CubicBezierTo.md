# CubicBezierTo(Point, Point, Point, Boolean) Method


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
	Point endPoint,
	bool isStroked
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub CubicBezierTo ( 
	controlPoint1 As Point,
	controlPoint2 As Point,
	endPoint As Point,
	isStroked As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CubicBezierTo : 
        controlPoint1 : Point * 
        controlPoint2 : Point * 
        endPoint : Point * 
        isStroked : bool -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryContext2.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The first control point used to specify the shape of the curve.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The second control point used to specify the shape of the curve.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The destination point for the end of the curve.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether the segment is stroked</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryContext2">IGeometryContext2 Interface</a>  
<a href="Overload_Avalonia_Platform_IGeometryContext2_CubicBezierTo">CubicBezierTo Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

