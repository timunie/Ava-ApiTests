# ImmutablePen Class


Describes how a stroke is drawn.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ImmutablePen : IPen, 
	IEquatable<IPen>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ImmutablePen
	Implements IPen, IEquatable(Of IPen)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ImmutablePen = 
    class
        interface IPen
        interface IEquatable<IPen>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutablePen.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ImmutablePen</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IPen">IPen</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(<a href="T_Avalonia_Media_IPen">IPen</a>)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutablePen__ctor">ImmutablePen(IImmutableBrush, Double, ImmutableDashStyle, PenLineCap, PenLineJoin, Double)</a></td>
<td>Initializes a new instance of the <a href="T_Avalonia_Media_Pen">Pen</a> class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutablePen__ctor_1">ImmutablePen(UInt32, Double, ImmutableDashStyle, PenLineCap, PenLineJoin, Double)</a></td>
<td>Initializes a new instance of the <a href="T_Avalonia_Media_Pen">Pen</a> class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutablePen_Brush">Brush</a></td>
<td>Gets the brush used to draw the stroke.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutablePen_DashStyle">DashStyle</a></td>
<td>Specifies the style of dashed lines drawn with a <a href="T_Avalonia_Media_Pen">Pen</a> object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutablePen_LineCap">LineCap</a></td>
<td>Specifies the type of graphic shape to use on both ends of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutablePen_LineJoin">LineJoin</a></td>
<td>Specifies how to join consecutive line or curve segments in a <a href="T_Avalonia_Media_PathFigure">PathFigure</a> (subpaths) contained in a <a href="T_Avalonia_Media_PathGeometry">PathGeometry</a> object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutablePen_MiterLimit">MiterLimit</a></td>
<td>The limit on the ratio of the miter length to half this pen's Thickness.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutablePen_Thickness">Thickness</a></td>
<td>Gets the stroke thickness.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutablePen_Equals">Equals(IPen)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutablePen_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutablePen_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable_2">ToImmutable()</a></td>
<td>Converts a pen to an immutable pen.<br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

