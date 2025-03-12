# PathGeometryContext Class




## Definition
**Namespace:** <a href="N_Avalonia_Visuals_Platform">Avalonia.Visuals.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class PathGeometryContext : IGeometryContext, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class PathGeometryContext
	Implements IGeometryContext, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type PathGeometryContext = 
    class
        interface IGeometryContext
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/PathGeometryContext.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  PathGeometryContext</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext__ctor">PathGeometryContext(PathGeometry)</a></td>
<td>Initializes a new instance of the PathGeometryContext class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_ArcTo">ArcTo(Point, Size, Double, Boolean, SweepDirection)</a></td>
<td>Draws an arc to the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a></td>
<td>Begins a new figure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_CubicBezierTo">CubicBezierTo(Point, Point, Point)</a></td>
<td>Draws a Bezier curve to the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_Dispose">Dispose()</a></td>
<td>Releases all resources used by the PathGeometryContext</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_EndFigure">EndFigure(Boolean)</a></td>
<td>Ends the figure started by <a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_LineTo">LineTo(Point)</a></td>
<td>Draws a line to the specified point.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_QuadraticBezierTo">QuadraticBezierTo(Point, Point)</a></td>
<td>Draws a quadratic Bezier curve to the specified point</td>
</tr>
<tr>
<td><a href="M_Avalonia_Visuals_Platform_PathGeometryContext_SetFillRule">SetFillRule(FillRule)</a></td>
<td>Sets path's winding rule (default is EvenOdd). You should call this method before any calls to BeginFigure.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Visuals_Platform">Avalonia.Visuals.Platform Namespace</a>  

