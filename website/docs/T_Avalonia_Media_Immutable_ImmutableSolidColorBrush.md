# ImmutableSolidColorBrush Class


Fills an area with a solid color.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ImmutableSolidColorBrush : IImmutableSolidColorBrush, 
	ISolidColorBrush, IBrush, IImmutableBrush, IEquatable<ImmutableSolidColorBrush>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ImmutableSolidColorBrush
	Implements IImmutableSolidColorBrush, ISolidColorBrush, IBrush, IImmutableBrush, 
	IEquatable(Of ImmutableSolidColorBrush)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ImmutableSolidColorBrush = 
    class
        interface IImmutableSolidColorBrush
        interface ISolidColorBrush
        interface IBrush
        interface IImmutableBrush
        interface IEquatable<ImmutableSolidColorBrush>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableSolidColorBrush.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ImmutableSolidColorBrush</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a>, <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a>, <a href="T_Avalonia_Media_IImmutableSolidColorBrush">IImmutableSolidColorBrush</a>, <a href="T_Avalonia_Media_ISolidColorBrush">ISolidColorBrush</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(ImmutableSolidColorBrush)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush__ctor_1">ImmutableSolidColorBrush(ISolidColorBrush)</a></td>
<td>Initializes a new instance of the ImmutableSolidColorBrush class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush__ctor_2">ImmutableSolidColorBrush(UInt32)</a></td>
<td>Initializes a new instance of the ImmutableSolidColorBrush class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush__ctor">ImmutableSolidColorBrush(Color, Double, ImmutableTransform)</a></td>
<td>Initializes a new instance of the ImmutableSolidColorBrush class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableSolidColorBrush_Color">Color</a></td>
<td>Gets the color of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableSolidColorBrush_Opacity">Opacity</a></td>
<td>Gets the opacity of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableSolidColorBrush_Transform">Transform</a></td>
<td>Gets the transform of the brush.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Immutable_ImmutableSolidColorBrush_TransformOrigin">TransformOrigin</a></td>
<td>Gets the transform origin of the brush</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush_Equals">Equals(ImmutableSolidColorBrush)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
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
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush_ToString">ToString()</a></td>
<td>Returns a string representation of the brush.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush_op_Equality">Equality(ImmutableSolidColorBrush, ImmutableSolidColorBrush)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Immutable_ImmutableSolidColorBrush_op_Inequality">Inequality(ImmutableSolidColorBrush, ImmutableSolidColorBrush)</a></td>
<td> </td>
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
