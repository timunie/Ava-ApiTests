# ImmutableRadialGradientBrush Class


A brush that draws with a radial gradient.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ImmutableRadialGradientBrush : ImmutableGradientBrush, 
	IRadialGradientBrush, IGradientBrush, IBrush
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ImmutableRadialGradientBrush
	Inherits ImmutableGradientBrush
	Implements IRadialGradientBrush, IGradientBrush, IBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ImmutableRadialGradientBrush = 
    class
        inherit ImmutableGradientBrush
        interface IRadialGradientBrush
        interface IGradientBrush
        interface IBrush
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableRadialGradientBrush.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a>  →  ImmutableRadialGradientBrush</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a>, <a href="T_Avalonia_Media_IGradientBrush">IGradientBrush</a>, <a href="T_Avalonia_Media_IRadialGradientBrush">IRadialGradientBrush</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableRadialGradientBrush__ctor">ImmutableRadialGradientBrush(RadialGradientBrush)</a></td>
<td>Initializes a new instance of the ImmutableRadialGradientBrush class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableRadialGradientBrush__ctor_1">ImmutableRadialGradientBrush(IReadOnlyList(ImmutableGradientStop), Double, ImmutableTransform, Nullable(RelativePoint), GradientSpreadMethod, Nullable(RelativePoint), Nullable(RelativePoint), Double)</a></td>
<td>Initializes a new instance of the ImmutableRadialGradientBrush class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableRadialGradientBrush__ctor_2">ImmutableRadialGradientBrush(IReadOnlyList(ImmutableGradientStop), Double, ImmutableTransform, Nullable(RelativePoint), GradientSpreadMethod, Nullable(RelativePoint), Nullable(RelativePoint), Nullable(RelativeScalar), Nullable(RelativeScalar))</a></td>
<td>Initializes a new instance of the ImmutableRadialGradientBrush class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableRadialGradientBrush_Center">Center</a></td>
<td>Gets the start point for the gradient.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableRadialGradientBrush_GradientOrigin">GradientOrigin</a></td>
<td>Gets the location of the two-dimensional focal point that defines the beginning of the gradient.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_GradientStops">GradientStops</a></td>
<td>Gets the brush's gradient stops.<br />(Inherited from <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.<br />(Inherited from <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableRadialGradientBrush_Radius">Radius</a></td>
<td><Tag type="is-danger">Obsolete.</Tag></td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableRadialGradientBrush_RadiusX">RadiusX</a></td>
<td>Gets the horizontal radius of the outermost circle of the radial gradient.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableRadialGradientBrush_RadiusY">RadiusY</a></td>
<td>Gets the vertical radius of the outermost circle of the radial gradient.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_SpreadMethod">SpreadMethod</a></td>
<td>Gets the brush's spread method that defines how to draw a gradient that doesn't fill the bounds of the destination control.<br />(Inherited from <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_Transform">Transform</a></td>
<td>Gets the transform of the brush.<br />(Inherited from <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_TransformOrigin">TransformOrigin</a></td>
<td>Gets the transform origin of the brush<br />(Inherited from <a href="T_Avalonia_Media_Immutable_ImmutableGradientBrush">ImmutableGradientBrush</a>)</td>
</tr>
</table>

## Methods
<table>
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
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable">ToImmutable()</a></td>
<td>Converts a brush to an immutable brush.<br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  

