# Thickness Structure


Describes the thickness of a frame around a rectangle.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Thickness : IEquatable<Thickness>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Thickness
	Implements IEquatable(Of Thickness)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Thickness = 
    struct
        inherit ValueType
        interface IEquatable<Thickness>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Thickness.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Thickness</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Thickness)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Thickness__ctor_2">Thickness(Double)</a></td>
<td>Initializes a new instance of the Thickness structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness__ctor_1">Thickness(Double, Double)</a></td>
<td>Initializes a new instance of the Thickness structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness__ctor">Thickness(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Thickness structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Thickness_Bottom">Bottom</a></td>
<td>Gets the thickness on the bottom.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Thickness_IsUniform">IsUniform</a></td>
<td>Gets a value indicating whether all sides are equal.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Thickness_Left">Left</a></td>
<td>Gets the thickness on the left.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Thickness_Right">Right</a></td>
<td>Gets the thickness on the right.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Thickness_Top">Top</a></td>
<td>Gets the thickness on the top.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Thickness_Deconstruct">Deconstruct(Double, Double, Double, Double)</a></td>
<td>Deconstructor the thickness into its left, top, right and bottom thickness values.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_Equals_1">Equals(Object)</a></td>
<td>Checks for equality between a thickness and an object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_Equals">Equals(Thickness)</a></td>
<td>Returns a boolean indicating whether the thickness is equal to the other given point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_GetHashCode">GetHashCode()</a></td>
<td>Returns a hash code for a Thickness.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_Parse">Parse(String)</a></td>
<td>Parses a Thickness string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_ToString">ToString()</a></td>
<td>Returns the string representation of the thickness.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Thickness_op_Addition">Addition(Size, Thickness)</a></td>
<td>Adds a Thickness to a Size.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_op_Addition_1">Addition(Thickness, Thickness)</a></td>
<td>Adds two Thicknesses.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_op_Equality">Equality(Thickness, Thickness)</a></td>
<td>Compares two Thicknesses.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_op_Inequality">Inequality(Thickness, Thickness)</a></td>
<td>Compares two Thicknesses.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_op_Multiply">Multiply(Thickness, Double)</a></td>
<td>Multiplies a Thickness to a scalar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_op_Subtraction">Subtraction(Size, Thickness)</a></td>
<td>Subtracts a Thickness from a Size.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Thickness_op_Subtraction_1">Subtraction(Thickness, Thickness)</a></td>
<td>Subtracts two Thicknesses.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

