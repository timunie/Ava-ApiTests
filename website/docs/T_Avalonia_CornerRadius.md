# CornerRadius Structure


Represents the radii of a rectangle's corners.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct CornerRadius : IEquatable<CornerRadius>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure CornerRadius
	Implements IEquatable(Of CornerRadius)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type CornerRadius = 
    struct
        inherit ValueType
        interface IEquatable<CornerRadius>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/CornerRadius.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  CornerRadius</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(CornerRadius)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_CornerRadius__ctor_2">CornerRadius(Double)</a></td>
<td>Initializes a new instance of the CornerRadius class</td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius__ctor_1">CornerRadius(Double, Double)</a></td>
<td>Initializes a new instance of the CornerRadius class</td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius__ctor">CornerRadius(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the CornerRadius class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_CornerRadius_BottomLeft">BottomLeft</a></td>
<td>Radius of the bottom left corner.</td>
</tr>
<tr>
<td><a href="P_Avalonia_CornerRadius_BottomRight">BottomRight</a></td>
<td>Radius of the bottom right corner.</td>
</tr>
<tr>
<td><a href="P_Avalonia_CornerRadius_IsUniform">IsUniform</a></td>
<td>Gets a value indicating whether all corner radii are equal.</td>
</tr>
<tr>
<td><a href="P_Avalonia_CornerRadius_TopLeft">TopLeft</a></td>
<td>Radius of the top left corner.</td>
</tr>
<tr>
<td><a href="P_Avalonia_CornerRadius_TopRight">TopRight</a></td>
<td>Radius of the top right corner.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_CornerRadius_Equals">Equals(CornerRadius)</a></td>
<td>Returns a boolean indicating whether the corner radius is equal to the other given corner radius.</td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius_Equals_1">Equals(Object)</a></td>
<td>Returns a boolean indicating whether the given Object is equal to this corner radius instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius_Parse">Parse(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_CornerRadius_op_Equality">Equality(CornerRadius, CornerRadius)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_CornerRadius_op_Inequality">Inequality(CornerRadius, CornerRadius)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
