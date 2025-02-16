---
title:Matrix Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Matrix Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct Matrix : IEquatable<Matrix>
```
**VB**
``` VB
Public Structure Matrix
	Implements IEquatable(Of Matrix)
```
**F#**
``` F#
[<SealedAttribute>]
type Matrix = 
    struct
        inherit ValueType
        interface IEquatable<Matrix>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Matrix</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Matrix)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Matrix__ctor_1">Matrix(Double, Double, Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Matrix class</td></tr>
<tr>
<td><a href="M_Avalonia_Matrix__ctor">Matrix(Double, Double, Double, Double, Double, Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Matrix class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Matrix_HasInverse">HasInverse</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_Identity">Identity</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_IsIdentity">IsIdentity</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M11">M11</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M12">M12</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M13">M13</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M21">M21</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M22">M22</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M23">M23</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M31">M31</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M32">M32</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Matrix_M33">M33</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Matrix_Append">Append(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_ContainsPerspective">ContainsPerspective()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateRotation">CreateRotation(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateScale">CreateScale(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateScale_1">CreateScale(Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateSkew">CreateSkew(Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateTranslation">CreateTranslation(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateTranslation_1">CreateTranslation(Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_Equals">Equals(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_GetDeterminant">GetDeterminant()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_Invert">Invert()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_Parse">Parse(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_Prepend">Prepend(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_ToRadians">ToRadians(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_Transform">Transform(Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_TryDecomposeTransform">TryDecomposeTransform(Matrix, Matrix.Decomposed)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_TryInvert">TryInvert(Matrix)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Matrix_op_Equality">Equality(Matrix, Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_op_Inequality">Inequality(Matrix, Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_op_Multiply">Multiply(Matrix, Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Matrix_op_UnaryNegation">UnaryNegation(Matrix)</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
