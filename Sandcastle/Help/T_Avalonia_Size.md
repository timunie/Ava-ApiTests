---
title:Size Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Size Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct Size : IEquatable<Size>
```
**VB**
``` VB
Public Structure Size
	Implements IEquatable(Of Size)
```
**F#**
``` F#
[<SealedAttribute>]
type Size = 
    struct
        inherit ValueType
        interface IEquatable<Size>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Size</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Size)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Size__ctor_1">Size(Vector2)</a></td>
<td>Initializes a new instance of the Size class</td></tr>
<tr>
<td><a href="M_Avalonia_Size__ctor">Size(Double, Double)</a></td>
<td>Initializes a new instance of the Size class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Size_AspectRatio">AspectRatio</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Size_Height">Height</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Size_Width">Width</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Size_Constrain">Constrain(Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_Deconstruct">Deconstruct(Double, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_Deflate">Deflate(Thickness)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Size_Equals">Equals(Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Size_Inflate">Inflate(Thickness)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_NearlyEquals">NearlyEquals(Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_Parse">Parse(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Size_WithHeight">WithHeight(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_WithWidth">WithWidth(Double)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Size_op_Addition">Addition(Size, Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Division">Division(Size, Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Division_1">Division(Size, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Division_2">Division(Size, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Equality">Equality(Size, Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Inequality">Inequality(Size, Size)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Multiply">Multiply(Size, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Multiply_1">Multiply(Size, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Size_op_Subtraction">Subtraction(Size, Size)</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Size_Infinity">Infinity</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
