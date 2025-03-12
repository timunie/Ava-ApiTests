# IGeometryContext Interface


Describes a geometry using drawing commands.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IGeometryContext : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IGeometryContext
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IGeometryContext = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryContext.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_ArcTo">ArcTo(Point, Size, Double, Boolean, SweepDirection)</a></td>
<td>Draws an arc to the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a></td>
<td>Begins a new figure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_CubicBezierTo">CubicBezierTo(Point, Point, Point)</a></td>
<td>Draws a Bezier curve to the specified point.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_EndFigure">EndFigure(Boolean)</a></td>
<td>Ends the figure started by <a href="M_Avalonia_Platform_IGeometryContext_BeginFigure">BeginFigure(Point, Boolean)</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_LineTo">LineTo(Point)</a></td>
<td>Draws a line to the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_QuadraticBezierTo">QuadraticBezierTo(Point, Point)</a></td>
<td>Draws a quadratic Bezier curve to the specified point</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGeometryContext_SetFillRule">SetFillRule(FillRule)</a></td>
<td>Sets path's winding rule (default is EvenOdd). You should call this method before any calls to BeginFigure.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

