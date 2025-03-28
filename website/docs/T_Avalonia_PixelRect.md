# PixelRect Structure


Represents a rectangle in device pixels.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct PixelRect : IEquatable<PixelRect>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure PixelRect
	Implements IEquatable(Of PixelRect)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PixelRect = 
    struct
        inherit ValueType
        interface IEquatable<PixelRect>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelRect.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PixelRect</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PixelRect)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor_2">PixelRect(PixelSize)</a></td>
<td>Initializes a new instance of the PixelRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor">PixelRect(PixelPoint, PixelPoint)</a></td>
<td>Initializes a new instance of the PixelRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor_1">PixelRect(PixelPoint, PixelSize)</a></td>
<td>Initializes a new instance of the PixelRect structure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect__ctor_3">PixelRect(Int32, Int32, Int32, Int32)</a></td>
<td>Initializes a new instance of the PixelRect structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_PixelRect_Bottom">Bottom</a></td>
<td>Gets the bottom position of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_BottomLeft">BottomLeft</a></td>
<td>Gets the bottom left point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_BottomRight">BottomRight</a></td>
<td>Gets the bottom right point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Center">Center</a></td>
<td>Gets the center point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Height">Height</a></td>
<td>Gets the height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Position">Position</a></td>
<td>Gets the position of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Right">Right</a></td>
<td>Gets the right position of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Size">Size</a></td>
<td>Gets the size of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_TopLeft">TopLeft</a></td>
<td>Gets the top left point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_TopRight">TopRight</a></td>
<td>Gets the top right point of the rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Width">Width</a></td>
<td>Gets the width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_X">X</a></td>
<td>Gets the X position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelRect_Y">Y</a></td>
<td>Gets the Y position.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_PixelRect_CenterRect">CenterRect(PixelRect)</a></td>
<td>Centers another rectangle in this rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Contains">Contains(PixelPoint)</a></td>
<td>Determines whether a point in the bounds of the rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Contains_1">Contains(PixelRect)</a></td>
<td>Determines whether the rectangle fully contains another rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ContainsExclusive">ContainsExclusive(PixelPoint)</a></td>
<td>Determines whether a point is in the bounds of the rectangle, exclusive of the rectangle's bottom/right edge.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Equals_1">Equals(Object)</a></td>
<td>Returns a boolean indicating whether the given object is equal to this rectangle.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Equals">Equals(PixelRect)</a></td>
<td>Returns a boolean indicating whether the rect is equal to the other given rect.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRect">FromRect(Rect, Vector)</a></td>
<td>Converts a <a href="T_Avalonia_Rect">Rect</a> to device pixels using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRect_1">FromRect(Rect, Double)</a></td>
<td>Converts a <a href="T_Avalonia_Rect">Rect</a> to device pixels using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRectWithDpi">FromRectWithDpi(Rect, Vector)</a></td>
<td>Converts a <a href="T_Avalonia_Rect">Rect</a> to device pixels using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_FromRectWithDpi_1">FromRectWithDpi(Rect, Double)</a></td>
<td>Converts a <a href="T_Avalonia_Rect">Rect</a> to device pixels using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_GetHashCode">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Intersect">Intersect(PixelRect)</a></td>
<td>Gets the intersection of two rectangles.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Intersects">Intersects(PixelRect)</a></td>
<td>Determines whether a rectangle intersects with this rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Parse">Parse(String)</a></td>
<td>Parses a PixelRect string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRect_1">ToRect(Double)</a></td>
<td>Converts the PixelRect to a device-independent <a href="T_Avalonia_Rect">Rect</a> using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRect">ToRect(Vector)</a></td>
<td>Converts the PixelRect to a device-independent <a href="T_Avalonia_Rect">Rect</a> using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRectWithDpi_1">ToRectWithDpi(Double)</a></td>
<td>Converts the PixelRect to a device-independent <a href="T_Avalonia_Rect">Rect</a> using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToRectWithDpi">ToRectWithDpi(Vector)</a></td>
<td>Converts the PixelRect to a device-independent <a href="T_Avalonia_Rect">Rect</a> using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_ToString">ToString()</a></td>
<td>Returns the string representation of the rectangle.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Translate">Translate(PixelVector)</a></td>
<td>Translates the rectangle by an offset.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_Union">Union(PixelRect)</a></td>
<td>Gets the union of two rectangles.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithHeight">WithHeight(Int32)</a></td>
<td>Returns a new PixelRect with the specified height.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithWidth">WithWidth(Int32)</a></td>
<td>Returns a new PixelRect with the specified width.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithX">WithX(Int32)</a></td>
<td>Returns a new PixelRect with the specified X position.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_WithY">WithY(Int32)</a></td>
<td>Returns a new PixelRect with the specified Y position.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_PixelRect_op_Equality">Equality(PixelRect, PixelRect)</a></td>
<td>Checks for equality between two PixelRects.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelRect_op_Inequality">Inequality(PixelRect, PixelRect)</a></td>
<td>Checks for inequality between two PixelRects.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKRectI">ToSKRectI()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

