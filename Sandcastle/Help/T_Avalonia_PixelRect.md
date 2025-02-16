---
title:PixelRect Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# PixelRect Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct PixelRect : IEquatable<PixelRect>
```
**VB**
``` VB
Public Structure PixelRect
	Implements IEquatable(Of PixelRect)
```
**F#**
``` F#
[<SealedAttribute>]
type PixelRect = 
    struct
        inherit ValueType
        interface IEquatable<PixelRect>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PixelRect</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PixelRect)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor_2">PixelRect(PixelSize)</a></td>
<td>Initializes a new instance of the PixelRect class</td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor">PixelRect(PixelPoint, PixelPoint)</a></td>
<td>Initializes a new instance of the PixelRect class</td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor_1">PixelRect(PixelPoint, PixelSize)</a></td>
<td>Initializes a new instance of the PixelRect class</td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor_3">PixelRect(Int32, Int32, Int32, Int32)</a></td>
<td>Initializes a new instance of the PixelRect class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_PixelRect_Bottom">Bottom</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_BottomLeft">BottomLeft</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_BottomRight">BottomRight</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Center">Center</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Height">Height</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Position">Position</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Right">Right</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Size">Size</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_TopLeft">TopLeft</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_TopRight">TopRight</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Width">Width</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_X">X</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Y">Y</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_PixelRect_CenterRect">CenterRect(PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Contains">Contains(PixelPoint)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Contains_1">Contains(PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ContainsExclusive">ContainsExclusive(PixelPoint)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Equals">Equals(PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRect">FromRect(Rect, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRect_1">FromRect(Rect, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRectWithDpi">FromRectWithDpi(Rect, Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRectWithDpi_1">FromRectWithDpi(Rect, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Intersect">Intersect(PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Intersects">Intersects(PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Parse">Parse(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRect_1">ToRect(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRect">ToRect(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRectWithDpi_1">ToRectWithDpi(Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRectWithDpi">ToRectWithDpi(Vector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Translate">Translate(PixelVector)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Union">Union(PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithHeight">WithHeight(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithWidth">WithWidth(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithX">WithX(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithY">WithY(Int32)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_PixelRect_op_Equality">Equality(PixelRect, PixelRect)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_PixelRect_op_Inequality">Inequality(PixelRect, PixelRect)</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
