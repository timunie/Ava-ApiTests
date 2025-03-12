# Vector Structure


Defines a vector.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Vector : IEquatable<Vector>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Vector
	Implements IEquatable(Of Vector)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Vector = 
    struct
        inherit ValueType
        interface IEquatable<Vector>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Vector.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Vector</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Vector)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Vector__ctor">Vector(Double, Double)</a></td>
<td>Initializes a new instance of the Vector structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Vector_Length">Length</a></td>
<td>Length of the vector.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_One">One</a></td>
<td>Returns the vector (1.0, 1.0).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_SquaredLength">SquaredLength</a></td>
<td>Squared Length of the vector.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_UnitX">UnitX</a></td>
<td>Returns the vector (1.0, 0.0).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_UnitY">UnitY</a></td>
<td>Returns the vector (0.0, 1.0).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_X">X</a></td>
<td>Gets the X component.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_Y">Y</a></td>
<td>Gets the Y component.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector_Zero">Zero</a></td>
<td>Returns the vector (0.0, 0.0).</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Vector_Abs">Abs()</a></td>
<td>Returns a vector whose elements are the absolute values of each of the specified vector's elements.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Add">Add(Vector, Vector)</a></td>
<td>Adds the second to the first vector</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Clamp">Clamp(Vector, Vector, Vector)</a></td>
<td>Restricts a vector between a minimum and a maximum value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Cross">Cross(Vector, Vector)</a></td>
<td>Returns the cross product of two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Deconstruct">Deconstruct(Double, Double)</a></td>
<td>Deconstructs the vector into its X and Y components.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Distance">Distance(Vector, Vector)</a></td>
<td>Computes the Euclidean distance between the two given points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_DistanceSquared">DistanceSquared(Vector, Vector)</a></td>
<td>Returns the Euclidean distance squared between two specified points</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Divide">Divide(Vector, Vector)</a></td>
<td>Divides the first vector by the second.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Divide_1">Divide(Vector, Double)</a></td>
<td>Divides the vector by the given scalar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Dot">Dot(Vector, Vector)</a></td>
<td>Returns the dot product of two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Equals">Equals(Vector)</a></td>
<td>Check if two vectors are equal (bitwise).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Max">Max(Vector, Vector)</a></td>
<td>Returns a vector whose elements are the maximum of each of the pairs of elements in two specified vectors</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Min">Min(Vector, Vector)</a></td>
<td>Returns a vector whose elements are the minimum of each of the pairs of elements in two specified vectors</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Multiply">Multiply(Vector, Vector)</a></td>
<td>Multiplies the first vector by the second.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Multiply_1">Multiply(Vector, Double)</a></td>
<td>Multiplies the vector by the given scalar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_NearlyEquals">NearlyEquals(Vector)</a></td>
<td>Check if two vectors are nearly equal (numerically).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Negate">Negate()</a></td>
<td>Returns a negated version of this vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Negate_1">Negate(Vector)</a></td>
<td>Negates the vector</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Normalize">Normalize()</a></td>
<td>Returns a normalized version of this vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Normalize_1">Normalize(Vector)</a></td>
<td>Normalizes the given vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Parse">Parse(String)</a></td>
<td>Parses a Vector string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_Subtract">Subtract(Vector, Vector)</a></td>
<td>Subtracts the second from the first vector</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_ToString">ToString()</a></td>
<td>Returns the string representation of the vector.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_WithX">WithX(Double)</a></td>
<td>Returns a new vector with the specified X component.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_WithY">WithY(Double)</a></td>
<td>Returns a new vector with the specified Y component.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Vector_op_Addition">Addition(Vector, Vector)</a></td>
<td>Adds two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Division">Division(Vector, Double)</a></td>
<td>Scales a vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Equality">Equality(Vector, Vector)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Explicit">Explicit(Vector to Point)</a></td>
<td>Converts the Vector to a <a href="T_Avalonia_Point">Point</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Implicit">Implicit(Vector2 to Vector)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Inequality">Inequality(Vector, Vector)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Multiply_2">Multiply(Double, Vector)</a></td>
<td>Scales a vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Multiply">Multiply(Vector, Vector)</a></td>
<td>Calculates the dot product of two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Multiply_1">Multiply(Vector, Double)</a></td>
<td>Scales a vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Subtraction">Subtraction(Vector, Vector)</a></td>
<td>Subtracts two vectors.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector_op_UnaryNegation">UnaryNegation(Vector)</a></td>
<td>Negates a vector.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKPoint_1">ToSKPoint()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

