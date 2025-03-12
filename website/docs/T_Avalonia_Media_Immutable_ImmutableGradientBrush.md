# ImmutableGradientBrush Class


A brush that draws with a gradient.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class ImmutableGradientBrush : IGradientBrush, 
	IBrush, IImmutableBrush
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class ImmutableGradientBrush
	Implements IGradientBrush, IBrush, IImmutableBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type ImmutableGradientBrush = 
    class
        interface IGradientBrush
        interface IBrush
        interface IImmutableBrush
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableGradientBrush.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ImmutableGradientBrush</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_Immutable_ImmutableConicGradientBrush">Avalonia.Media.Immutable.ImmutableConicGradientBrush</a><br /><a href="T_Avalonia_Media_Immutable_ImmutableLinearGradientBrush">Avalonia.Media.Immutable.ImmutableLinearGradientBrush</a><br /><a href="T_Avalonia_Media_Immutable_ImmutableRadialGradientBrush">Avalonia.Media.Immutable.ImmutableRadialGradientBrush</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a>, <a href="T_Avalonia_Media_IGradientBrush">IGradientBrush</a>, <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableGradientBrush__ctor">ImmutableGradientBrush(GradientBrush)</a></td>
<td>Initializes a new instance of the ImmutableGradientBrush class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableGradientBrush__ctor_1">ImmutableGradientBrush(IReadOnlyList(ImmutableGradientStop), Double, ImmutableTransform, Nullable(RelativePoint), GradientSpreadMethod)</a></td>
<td>Initializes a new instance of the ImmutableGradientBrush class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_GradientStops">GradientStops</a></td>
<td>Gets the brush's gradient stops.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_SpreadMethod">SpreadMethod</a></td>
<td>Gets the brush's spread method that defines how to draw a gradient that doesn't fill the bounds of the destination control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_Transform">Transform</a></td>
<td>Gets the transform of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableGradientBrush_TransformOrigin">TransformOrigin</a></td>
<td>Gets the transform origin of the brush</td>
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

