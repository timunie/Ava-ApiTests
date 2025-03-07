# IStreamGeometryImpl Interface


Defines the platform-specific interface for a <a href="T_Avalonia_Media_StreamGeometry">StreamGeometry</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IStreamGeometryImpl : IGeometryImpl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IStreamGeometryImpl
	Inherits IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IStreamGeometryImpl = 
    interface
        interface IGeometryImpl
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IStreamGeometryImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IGeometryImpl_Bounds">Bounds</a></td>
<td>Gets the geometry's bounding rectangle.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IGeometryImpl_ContourLength">ContourLength</a></td>
<td>Gets the geometry's total length as if all its contours are placed in a straight line.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IStreamGeometryImpl_Clone">Clone()</a></td>
<td>Clones the geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_FillContains">FillContains(Point)</a></td>
<td>Indicates whether the geometry's fill contains the specified point.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_GetRenderBounds">GetRenderBounds(IPen)</a></td>
<td>Gets the geometry's bounding rectangle with the specified pen.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_GetWidenedGeometry">GetWidenedGeometry(IPen)</a></td>
<td>Gets a geometry that is the shape defined by the stroke on the geometry produced by the specified Pen.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_Intersect">Intersect(IGeometryImpl)</a></td>
<td>Intersects the geometry with another geometry.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IStreamGeometryImpl_Open">Open()</a></td>
<td>Opens the geometry to start defining it.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_StrokeContains">StrokeContains(IPen, Point)</a></td>
<td>Indicates whether the geometry's stroke contains the specified point.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetPointAndTangentAtDistance">TryGetPointAndTangentAtDistance(Double, Point, Point)</a></td>
<td>Attempts to get the corresponding point and tangent from the specified distance along the contour of the geometry.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetPointAtDistance">TryGetPointAtDistance(Double, Point)</a></td>
<td>Attempts to get the corresponding point at the specified distance<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetSegment">TryGetSegment(Double, Double, Boolean, IGeometryImpl)</a></td>
<td>Attempts to get the corresponding path segment given by the two distances specified. Imagine it like snipping a part of the current geometry.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_WithTransform">WithTransform(Matrix)</a></td>
<td>Makes a clone of the geometry with the specified transform.<br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
