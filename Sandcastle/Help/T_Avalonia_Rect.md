---
title:Rect Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Rect Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct Rect : IEquatable<Rect>
```
**VB**
``` VB
Public Structure Rect
	Implements IEquatable(Of Rect)
```
**F#**
``` F#
[<SealedAttribute>]
type Rect = 
    struct
        inherit ValueType
        interface IEquatable<Rect>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Rect</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Rect)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Rect__ctor_2">Rect(Size)</a></td>
<td>Initializes a new instance of the Rect class</td></tr>
<tr>
<td><a href="M_Avalonia_Rect__ctor">Rect(Point, Point)</a></td>
<td>Initializes a new instance of the Rect class</td></tr>
<tr>
<td><a href="M_Avalonia_Rect__ctor_1">Rect(Point, Size)</a></td>
<td>Initializes a new instance of the Rect class</td></tr>
<tr>
<td><a href="M_Avalonia_Rect__ctor_3">Rect(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Rect class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rect_Bottom">Bottom</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_BottomLeft">BottomLeft</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_BottomRight">BottomRight</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Center">Center</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Height">Height</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Left">Left</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Position">Position</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Right">Right</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Size">Size</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Top">Top</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_TopLeft">TopLeft</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_TopRight">TopRight</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Width">Width</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_X">X</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rect_Y">Y</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rect_CenterRect">CenterRect(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Contains">Contains(Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Contains_1">Contains(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_ContainsExclusive">ContainsExclusive(Point)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Deflate_1">Deflate(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Deflate">Deflate(Thickness)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Equals">Equals(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Inflate_1">Inflate(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Inflate">Inflate(Thickness)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Intersect">Intersect(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Intersects">Intersects(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Normalize">Normalize()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Parse">Parse(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Rect_TransformToAABB">TransformToAABB(Matrix)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Translate">Translate(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_Union">Union(Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_WithHeight">WithHeight(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_WithWidth">WithWidth(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_WithX">WithX(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_WithY">WithY(Double)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Rect_op_Division">Division(Rect, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Equality">Equality(Rect, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Inequality">Inequality(Rect, Rect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Multiply">Multiply(Rect, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Multiply_1">Multiply(Rect, Double)</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Layout_LayoutExtensions_Align">Align(Rect, HorizontalAlignment, VerticalAlignment)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Layout_LayoutExtensions">LayoutExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
