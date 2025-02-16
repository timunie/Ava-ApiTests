---
title:IStreamGeometryContextImpl Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IStreamGeometryContextImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface IStreamGeometryContextImpl : IGeometryContext, 
	IDisposable
```
**VB**
``` VB
<UnstableAttribute>
Public Interface IStreamGeometryContextImpl
	Inherits IGeometryContext, IDisposable
```
**F#**
``` F#
[<UnstableAttribute>]
type IStreamGeometryContextImpl = 
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
<td><a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_CubicBezierTo">CubicBezierTo(Point, Point, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
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
<td><a href="M_Avalonia_Platform_IGeometryContext_QuadraticBezierTo">QuadraticBezierTo(Point, Point)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_SetFillRule">SetFillRule(FillRule)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
