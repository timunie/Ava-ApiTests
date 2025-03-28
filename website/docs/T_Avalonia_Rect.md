# Rect Structure


Defines a rectangle.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Rect : IEquatable<Rect>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Rect
	Implements IEquatable(Of Rect)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Rect = 
    struct
        inherit ValueType
        interface IEquatable<Rect>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rect.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Rect</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Rect)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Rect__ctor_2">Rect(Size)</a></td>
<td>Initializes a new instance of the Rect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect__ctor">Rect(Point, Point)</a></td>
<td>Initializes a new instance of the Rect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect__ctor_1">Rect(Point, Size)</a></td>
<td>Initializes a new instance of the Rect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect__ctor_3">Rect(Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Rect structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rect_Bottom">Bottom</a></td>
<td>Gets the bottom position of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_BottomLeft">BottomLeft</a></td>
<td>Gets the bottom left point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_BottomRight">BottomRight</a></td>
<td>Gets the bottom right point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Center">Center</a></td>
<td>Gets the center point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Height">Height</a></td>
<td>Gets the height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Left">Left</a></td>
<td>Gets the left position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Position">Position</a></td>
<td>Gets the position of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Right">Right</a></td>
<td>Gets the right position of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Size">Size</a></td>
<td>Gets the size of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Top">Top</a></td>
<td>Gets the top position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_TopLeft">TopLeft</a></td>
<td>Gets the top left point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_TopRight">TopRight</a></td>
<td>Gets the top right point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Width">Width</a></td>
<td>Gets the width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_X">X</a></td>
<td>Gets the X position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rect_Y">Y</a></td>
<td>Gets the Y position.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rect_CenterRect">CenterRect(Rect)</a></td>
<td>Centers another rectangle in this rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Contains">Contains(Point)</a></td>
<td>Determines whether a point is in the bounds of the rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Contains_1">Contains(Rect)</a></td>
<td>Determines whether the rectangle fully contains another rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_ContainsExclusive">ContainsExclusive(Point)</a></td>
<td>Determines whether a point is in the bounds of the rectangle, exclusive of the rectangle's bottom/right edge.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Deflate_1">Deflate(Double)</a></td>
<td>Deflates the rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Deflate">Deflate(Thickness)</a></td>
<td>Deflates the rectangle by a <a href="T_Avalonia_Thickness">Thickness</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Equals_1">Equals(Object)</a></td>
<td>Returns a boolean indicating whether the given object is equal to this rectangle.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Equals">Equals(Rect)</a></td>
<td>Returns a boolean indicating whether the rect is equal to the other given rect.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_GetHashCode">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Inflate_1">Inflate(Double)</a></td>
<td>Inflates the rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Inflate">Inflate(Thickness)</a></td>
<td>Inflates the rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Intersect">Intersect(Rect)</a></td>
<td>Gets the intersection of two rectangles.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Intersects">Intersects(Rect)</a></td>
<td>Determines whether a rectangle intersects with this rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Normalize">Normalize()</a></td>
<td>Normalizes the rectangle so both the <a href="P_Avalonia_Rect_Width">Width</a> and <a href="P_Avalonia_Rect_Height">Height</a> are positive, without changing the location of the rectangle</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Parse">Parse(String)</a></td>
<td>Parses a Rect string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_ToString">ToString()</a></td>
<td>Returns the string representation of the rectangle.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_TransformToAABB">TransformToAABB(Matrix)</a></td>
<td>Returns the axis-aligned bounding box of a transformed rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Translate">Translate(Vector)</a></td>
<td>Translates the rectangle by an offset.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_Union">Union(Rect)</a></td>
<td>Gets the union of two rectangles.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_WithHeight">WithHeight(Double)</a></td>
<td>Returns a new Rect with the specified height.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_WithWidth">WithWidth(Double)</a></td>
<td>Returns a new Rect with the specified width.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_WithX">WithX(Double)</a></td>
<td>Returns a new Rect with the specified X position.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_WithY">WithY(Double)</a></td>
<td>Returns a new Rect with the specified Y position.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Rect_op_Division">Division(Rect, Vector)</a></td>
<td>Divides a rectangle by a vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Equality">Equality(Rect, Rect)</a></td>
<td>Checks for equality between two Rects.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Inequality">Inequality(Rect, Rect)</a></td>
<td>Checks for inequality between two Rects.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Multiply">Multiply(Rect, Vector)</a></td>
<td>Multiplies a rectangle by a scaling vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rect_op_Multiply_1">Multiply(Rect, Double)</a></td>
<td>Multiplies a rectangle by a scale.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Layout_LayoutExtensions_Align">Align(Rect, HorizontalAlignment, VerticalAlignment)</a></td>
<td>Aligns a rect in a constraining rect according to horizontal and vertical alignment settings.<br />(Defined by <a href="T_Avalonia_Layout_LayoutExtensions">LayoutExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKRect">ToSKRect()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

