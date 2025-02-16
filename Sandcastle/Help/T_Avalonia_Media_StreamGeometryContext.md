---
title:StreamGeometryContext Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StreamGeometryContext Class




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class StreamGeometryContext : IGeometryContext, 
	IDisposable, IGeometryContext2
```
**VB**
``` VB
Public Class StreamGeometryContext
	Implements IGeometryContext, IDisposable, IGeometryContext2
```
**F#**
``` F#
type StreamGeometryContext = 
    class
        interface IGeometryContext
        interface IDisposable
        interface IGeometryContext2
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  StreamGeometryContext</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>, <a href="T_Avalonia_Platform_IGeometryContext2">IGeometryContext2</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext__ctor">StreamGeometryContext(IStreamGeometryContextImpl)</a></td>
<td>Initializes a new instance of the StreamGeometryContext class</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_ArcTo_1">ArcTo(Point, Size, Double, Boolean, SweepDirection)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_ArcTo">ArcTo(Point, Size, Double, Boolean, SweepDirection, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_CubicBezierTo_1">CubicBezierTo(Point, Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_CubicBezierTo">CubicBezierTo(Point, Point, Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_Dispose">Dispose()</a></td>
<td>Releases all resources used by the StreamGeometryContext</td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_EndFigure">EndFigure(Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_LineTo_1">LineTo(Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_LineTo">LineTo(Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_PreciseArcTo">PreciseArcTo(Point, Size, Double, Boolean, SweepDirection)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_QuadraticBezierTo_1">QuadraticBezierTo(Point, Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_QuadraticBezierTo">QuadraticBezierTo(Point, Point, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_StreamGeometryContext_SetFillRule">SetFillRule(FillRule)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
