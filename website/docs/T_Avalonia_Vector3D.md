# Vector3D Structure




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Vector3D : IEquatable<Vector3D>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Vector3D
	Implements IEquatable(Of Vector3D)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Vector3D = 
    struct
        inherit ValueType
        interface IEquatable<Vector3D>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Vector3D.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Vector3D</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Vector3D)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Vector3D__ctor">Vector3D(Double, Double, Double)</a></td>
<td>Initializes a new instance of the Vector3D class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Vector3D_Length">Length</a></td>
<td>Length of the vector.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector3D_X">X</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector3D_Y">Y</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vector3D_Z">Z</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Vector3D_Abs">Abs()</a></td>
<td>Returns a vector whose elements are the absolute values of each of the specified vector's elements.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Add">Add(Vector3D, Vector3D)</a></td>
<td>Adds the second to the first vector</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Clamp">Clamp(Vector3D, Vector3D, Vector3D)</a></td>
<td>Restricts a vector between a minimum and a maximum value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Distance">Distance(Vector3D, Vector3D)</a></td>
<td>Computes the Euclidean distance between the two given points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_DistanceSquared">DistanceSquared(Vector3D, Vector3D)</a></td>
<td>Computes the squared Euclidean distance between the two given points.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Divide">Divide(Vector3D, Vector3D)</a></td>
<td>Divides the first vector by the second.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Divide_1">Divide(Vector3D, Double)</a></td>
<td>Divides the vector by the given scalar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Dot">Dot(Vector3D, Vector3D)</a></td>
<td>Calculates the dot product of two vectors.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Max">Max(Vector3D, Vector3D)</a></td>
<td>Returns a vector whose elements are the maximum of each of the pairs of elements in two specified vectors</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Min">Min(Vector3D, Vector3D)</a></td>
<td>Returns a vector whose elements are the minimum of each of the pairs of elements in two specified vectors</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Multiply">Multiply(Vector3D, Vector3D)</a></td>
<td>Multiplies the first vector by the second.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Multiply_1">Multiply(Vector3D, Double)</a></td>
<td>Multiplies the vector by the given scalar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Normalize">Normalize(Vector3D)</a></td>
<td>Returns a normalized version of this vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Parse">Parse(String)</a></td>
<td>Parses a <a href="T_Avalonia_Vector">Vector</a> string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_Substract">Substract(Vector3D, Vector3D)</a></td>
<td>Subtracts the second from the first vector</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Vector3D_op_Addition">Addition(Vector3D, Vector3D)</a></td>
<td>Adds the second to the first vector</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_op_Implicit">Implicit(Vector3 to Vector3D)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_op_Multiply">Multiply(Vector3D, Double)</a></td>
<td>Multiplies the vector by the given scalar.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_op_Subtraction">Subtraction(Vector3D, Vector3D)</a></td>
<td>Subtracts the second from the first vector</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vector3D_op_UnaryNegation">UnaryNegation(Vector3D)</a></td>
<td>Negates the vector</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

