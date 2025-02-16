---
title:IGeometryContext2 Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IGeometryContext2 Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public interface IGeometryContext2 : IGeometryContext, 
	IDisposable
```
**VB**
``` VB
Public Interface IGeometryContext2
	Inherits IGeometryContext, IDisposable
```
**F#**
``` F#
type IGeometryContext2 = 
    interface
        interface IGeometryContext
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_ArcTo">ArcTo(Point, Size, Double, Boolean, SweepDirection)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext2_ArcTo">ArcTo(Point, Size, Double, Boolean, SweepDirection, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_CubicBezierTo">CubicBezierTo(Point, Point, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext2_CubicBezierTo">CubicBezierTo(Point, Point, Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_EndFigure">EndFigure(Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_LineTo">LineTo(Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext2_LineTo">LineTo(Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_QuadraticBezierTo">QuadraticBezierTo(Point, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext2_QuadraticBezierTo">QuadraticBezierTo(Point, Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_SetFillRule">SetFillRule(FillRule)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
