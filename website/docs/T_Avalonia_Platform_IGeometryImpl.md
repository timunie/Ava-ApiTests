# IGeometryImpl Interface


Defines the platform-specific interface for a <a href="T_Avalonia_Media_Geometry">Geometry</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IGeometryImpl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IGeometryImpl = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IGeometryImpl_Bounds">Bounds</a></td>
<td>Gets the geometry's bounding rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IGeometryImpl_ContourLength">ContourLength</a></td>
<td>Gets the geometry's total length as if all its contours are placed in a straight line.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_FillContains">FillContains(Point)</a></td>
<td>Indicates whether the geometry's fill contains the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_GetRenderBounds">GetRenderBounds(IPen)</a></td>
<td>Gets the geometry's bounding rectangle with the specified pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_GetWidenedGeometry">GetWidenedGeometry(IPen)</a></td>
<td>Gets a geometry that is the shape defined by the stroke on the geometry produced by the specified Pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_Intersect">Intersect(IGeometryImpl)</a></td>
<td>Intersects the geometry with another geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_StrokeContains">StrokeContains(IPen, Point)</a></td>
<td>Indicates whether the geometry's stroke contains the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetPointAndTangentAtDistance">TryGetPointAndTangentAtDistance(Double, Point, Point)</a></td>
<td>Attempts to get the corresponding point and tangent from the specified distance along the contour of the geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetPointAtDistance">TryGetPointAtDistance(Double, Point)</a></td>
<td>Attempts to get the corresponding point at the specified distance</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetSegment">TryGetSegment(Double, Double, Boolean, IGeometryImpl)</a></td>
<td>Attempts to get the corresponding path segment given by the two distances specified. Imagine it like snipping a part of the current geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_WithTransform">WithTransform(Matrix)</a></td>
<td>Makes a clone of the geometry with the specified transform.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
