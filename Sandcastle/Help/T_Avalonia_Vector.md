---
title:Vector Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Vector Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct Vector : IEquatable<Vector>
```
**VB**
``` VB
Public Structure Vector
	Implements IEquatable(Of Vector)
```
**F#**
``` F#
[<SealedAttribute>]
type Vector = 
    struct
        inherit ValueType
        interface IEquatable<Vector>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Vector</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Vector)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Vector__ctor">Vector(Double, Double)</a></td>
<td>Initializes a new instance of the Vector class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Vector_Length">Length</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_One">One</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_SquaredLength">SquaredLength</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_UnitX">UnitX</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_UnitY">UnitY</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_X">X</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_Y">Y</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vector_Zero">Zero</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Vector_Abs">Abs()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Add">Add(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Clamp">Clamp(Vector, Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Cross">Cross(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Deconstruct">Deconstruct(Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Distance">Distance(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_DistanceSquared">DistanceSquared(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Divide">Divide(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Divide_1">Divide(Vector, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Dot">Dot(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Equals">Equals(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Max">Max(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Min">Min(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Multiply">Multiply(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Multiply_1">Multiply(Vector, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_NearlyEquals">NearlyEquals(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Negate">Negate()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Negate_1">Negate(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Normalize">Normalize()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Normalize_1">Normalize(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Parse">Parse(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_Subtract">Subtract(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Vector_WithX">WithX(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_WithY">WithY(Double)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Vector_op_Addition">Addition(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Division">Division(Vector, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Equality">Equality(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Explicit">Explicit(Vector to Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Implicit">Implicit(Vector2 to Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Inequality">Inequality(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Multiply_2">Multiply(Double, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Multiply">Multiply(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Multiply_1">Multiply(Vector, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_Subtraction">Subtraction(Vector, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Vector_op_UnaryNegation">UnaryNegation(Vector)</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
