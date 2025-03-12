# PixelPoint Structure


Represents a point in device pixels.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct PixelPoint : IEquatable<PixelPoint>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure PixelPoint
	Implements IEquatable(Of PixelPoint)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type PixelPoint = 
    struct
        inherit ValueType
        interface IEquatable<PixelPoint>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelPoint.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  PixelPoint</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PixelPoint)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_PixelPoint__ctor">PixelPoint(Int32, Int32)</a></td>
<td>Initializes a new instance of the PixelPoint structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_PixelPoint_X">X</a></td>
<td>Gets the X co-ordinate.</td>
</tr>
<tr>
<td><a href="P_Avalonia_PixelPoint_Y">Y</a></td>
<td>Gets the Y co-ordinate.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_PixelPoint_Equals_1">Equals(Object)</a></td>
<td>Checks for equality between a point and an object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_Equals">Equals(PixelPoint)</a></td>
<td>Returns a boolean indicating whether the point is equal to the other given point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_FromPoint">FromPoint(Point, Vector)</a></td>
<td>Converts a <a href="T_Avalonia_Point">Point</a> to device pixels using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_FromPoint_1">FromPoint(Point, Double)</a></td>
<td>Converts a <a href="T_Avalonia_Point">Point</a> to device pixels using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_FromPointWithDpi">FromPointWithDpi(Point, Vector)</a></td>
<td>Converts a <a href="T_Avalonia_Point">Point</a> to device pixels using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_FromPointWithDpi_1">FromPointWithDpi(Point, Double)</a></td>
<td>Converts a <a href="T_Avalonia_Point">Point</a> to device pixels using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_GetHashCode">GetHashCode()</a></td>
<td>Returns a hash code for a PixelPoint.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_Parse">Parse(String)</a></td>
<td>Parses a PixelPoint string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_ToPoint_1">ToPoint(Double)</a></td>
<td>Converts the PixelPoint to a device-independent <a href="T_Avalonia_Point">Point</a> using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_ToPoint">ToPoint(Vector)</a></td>
<td>Converts the PixelPoint to a device-independent <a href="T_Avalonia_Point">Point</a> using the specified scaling factor.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_ToPointWithDpi_1">ToPointWithDpi(Double)</a></td>
<td>Converts the PixelPoint to a device-independent <a href="T_Avalonia_Point">Point</a> using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_ToPointWithDpi">ToPointWithDpi(Vector)</a></td>
<td>Converts the PixelPoint to a device-independent <a href="T_Avalonia_Point">Point</a> using the specified dots per inch (DPI).</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_ToString">ToString()</a></td>
<td>Returns the string representation of the point.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_WithX">WithX(Int32)</a></td>
<td>Returns a new PixelPoint with the same Y co-ordinate and the specified X co-ordinate.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_WithY">WithY(Int32)</a></td>
<td>Returns a new PixelPoint with the same X co-ordinate and the specified Y co-ordinate.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Addition">Addition(PixelPoint, PixelPoint)</a></td>
<td>Adds two points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Addition_1">Addition(PixelPoint, PixelVector)</a></td>
<td>Adds a vector to a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Equality">Equality(PixelPoint, PixelPoint)</a></td>
<td>Checks for equality between two PixelPoints.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Implicit">Implicit(PixelPoint to PixelVector)</a></td>
<td>Converts the <a href="T_Avalonia_Point">Point</a> to a <a href="T_Avalonia_Vector">Vector</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Inequality">Inequality(PixelPoint, PixelPoint)</a></td>
<td>Checks for inequality between two PixelPoints.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Subtraction">Subtraction(PixelPoint, PixelPoint)</a></td>
<td>Subtracts two points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_PixelPoint_op_Subtraction_1">Subtraction(PixelPoint, PixelVector)</a></td>
<td>Subtracts a vector from a point.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_PixelPoint_Origin">Origin</a></td>
<td>A point representing 0,0.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

