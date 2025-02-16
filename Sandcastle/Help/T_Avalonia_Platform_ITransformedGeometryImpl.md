---
title:ITransformedGeometryImpl Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ITransformedGeometryImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface ITransformedGeometryImpl : IGeometryImpl
```
**VB**
``` VB
<UnstableAttribute>
Public Interface ITransformedGeometryImpl
	Inherits IGeometryImpl
```
**F#**
``` F#
[<UnstableAttribute>]
type ITransformedGeometryImpl = 
    interface
        interface IGeometryImpl
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IGeometryImpl_Bounds">Bounds</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IGeometryImpl_ContourLength">ContourLength</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITransformedGeometryImpl_SourceGeometry">SourceGeometry</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_ITransformedGeometryImpl_Transform">Transform</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_FillContains">FillContains(Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_GetRenderBounds">GetRenderBounds(IPen)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_GetWidenedGeometry">GetWidenedGeometry(IPen)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_Intersect">Intersect(IGeometryImpl)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_StrokeContains">StrokeContains(IPen, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetPointAndTangentAtDistance">TryGetPointAndTangentAtDistance(Double, Point, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetPointAtDistance">TryGetPointAtDistance(Double, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_TryGetSegment">TryGetSegment(Double, Double, Boolean, IGeometryImpl)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryImpl_WithTransform">WithTransform(Matrix)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
