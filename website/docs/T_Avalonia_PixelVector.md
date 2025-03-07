# PixelVector Structure


Defines a vector.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct PixelVector
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure PixelVector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PixelVector = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelVector.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PixelVector</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_PixelVector__ctor">PixelVector(Int32, Int32)</a></td>
<td>Initializes a new instance of the PixelVector structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_PixelVector_Length">Length</a></td>
<td>Length of the vector</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelVector_X">X</a></td>
<td>Gets the X vector.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelVector_Y">Y</a></td>
<td>Gets the Y vector.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_PixelVector_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_Equals">Equals(PixelVector)</a></td>
<td>Check if two vectors are equal (bitwise).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_NearlyEquals">NearlyEquals(PixelVector)</a></td>
<td>Check if two vectors are nearly equal (numerically).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_ToString">ToString()</a></td>
<td>Returns the string representation of the point.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_WithX">WithX(Int32)</a></td>
<td>Returns a new vector with the specified X coordinate.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_WithY">WithY(Int32)</a></td>
<td>Returns a new vector with the specified Y coordinate.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Addition">Addition(PixelVector, PixelVector)</a></td>
<td>Adds two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Division">Division(PixelVector, Int32)</a></td>
<td>Scales a vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Equality">Equality(PixelVector, PixelVector)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Explicit">Explicit(PixelVector to PixelPoint)</a></td>
<td>Converts the PixelVector to a <a href="T_Avalonia_PixelPoint">PixelPoint</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Inequality">Inequality(PixelVector, PixelVector)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Multiply">Multiply(PixelVector, PixelVector)</a></td>
<td>Calculates the dot product of two vectors</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Multiply_1">Multiply(PixelVector, Int32)</a></td>
<td>Scales a vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_Subtraction">Subtraction(PixelVector, PixelVector)</a></td>
<td>Subtracts two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelVector_op_UnaryNegation">UnaryNegation(PixelVector)</a></td>
<td>Negates a vector.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
