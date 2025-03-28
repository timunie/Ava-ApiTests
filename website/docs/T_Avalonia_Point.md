# Point Structure


Defines a point.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Point : IEquatable<Point>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Point
	Implements IEquatable(Of Point)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Point = 
    struct
        inherit ValueType
        interface IEquatable<Point>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Point</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Point)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Point__ctor">Point(Double, Double)</a></td>
<td>Initializes a new instance of the Point structure.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Point_X">X</a></td>
<td>Gets the X position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Point_Y">Y</a></td>
<td>Gets the Y position.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Point_Deconstruct">Deconstruct(Double, Double)</a></td>
<td>Deconstructs the point into its X and Y coordinates.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_Distance">Distance(Point, Point)</a></td>
<td>Computes the Euclidean distance between the two given points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_Equals_1">Equals(Object)</a></td>
<td>Checks for equality between a point and an object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_Equals">Equals(Point)</a></td>
<td>Returns a boolean indicating whether the point is equal to the other given point (bitwise).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_GetHashCode">GetHashCode()</a></td>
<td>Returns a hash code for a Point.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_NearlyEquals">NearlyEquals(Point)</a></td>
<td>Returns a boolean indicating whether the point is equal to the other given point (numerically).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_Parse">Parse(String)</a></td>
<td>Parses a Point string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_ToString">ToString()</a></td>
<td>Returns the string representation of the point.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_Transform">Transform(Matrix)</a></td>
<td>Transforms the point by a matrix.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_WithX">WithX(Double)</a></td>
<td>Returns a new point with the specified X coordinate.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_WithY">WithY(Double)</a></td>
<td>Returns a new point with the specified Y coordinate.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Point_op_Addition">Addition(Point, Point)</a></td>
<td>Adds two points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Addition_1">Addition(Point, Vector)</a></td>
<td>Adds a vector to a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Division">Division(Point, Double)</a></td>
<td>Divides a point by a factor coordinate-wise</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Equality">Equality(Point, Point)</a></td>
<td>Checks for equality between two Points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Implicit">Implicit(Point to Vector)</a></td>
<td>Converts the Point to a <a href="T_Avalonia_Vector">Vector</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Inequality">Inequality(Point, Point)</a></td>
<td>Checks for inequality between two Points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Multiply_2">Multiply(Double, Point)</a></td>
<td>Multiplies a point by a factor coordinate-wise</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Multiply">Multiply(Point, Matrix)</a></td>
<td>Applies a matrix to a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Multiply_1">Multiply(Point, Double)</a></td>
<td>Multiplies a point by a factor coordinate-wise</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Subtraction">Subtraction(Point, Point)</a></td>
<td>Subtracts two points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_Subtraction_1">Subtraction(Point, Vector)</a></td>
<td>Subtracts a vector from a point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Point_op_UnaryNegation">UnaryNegation(Point)</a></td>
<td>Negates a point.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKPoint">ToSKPoint()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

