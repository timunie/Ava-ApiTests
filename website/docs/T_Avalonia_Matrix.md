# Matrix Structure


A 3x3 matrix.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Matrix : IEquatable<Matrix>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Matrix
	Implements IEquatable(Of Matrix)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Matrix = 
    struct
        inherit ValueType
        interface IEquatable<Matrix>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Matrix.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Matrix</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Matrix)</td></tr>
</table>

Matrix layout: | 1st col | 2nd col | 3r col | 1st row | scaleX | skewY | perspX | 2nd row | skewX | scaleY | perspY | 3rd row | transX | transY | perspZ | Note: Skia.SkMatrix uses a transposed layout (where for example skewX/skewY and persp0/transX are swapped).

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Matrix__ctor_1">Matrix(Double, Double, Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Matrix struct (equivalent to a 2x3 Matrix without perspective).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix__ctor">Matrix(Double, Double, Double, Double, Double, Double, Double, Double, Double)</a></td>
<td>Initializes a new instance of the Matrix struct.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Matrix_HasInverse">HasInverse</a></td>
<td>HasInverse Property - returns true if this matrix is invertible, false otherwise.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_Identity">Identity</a></td>
<td>Returns the multiplicative identity matrix.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_IsIdentity">IsIdentity</a></td>
<td>Returns whether the matrix is the identity matrix.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M11">M11</a></td>
<td>The first element of the first row (scaleX).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M12">M12</a></td>
<td>The second element of the first row (skewY).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M13">M13</a></td>
<td>The third element of the first row (perspX: input x-axis perspective factor).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M21">M21</a></td>
<td>The first element of the second row (skewX).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M22">M22</a></td>
<td>The second element of the second row (scaleY).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M23">M23</a></td>
<td>The third element of the second row (perspY: input y-axis perspective factor).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M31">M31</a></td>
<td>The first element of the third row (offsetX/translateX).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M32">M32</a></td>
<td>The second element of the third row (offsetY/translateY).</td>
</tr>
<tr>
<td><a href="P_Avalonia_Matrix_M33">M33</a></td>
<td>The third element of the third row (perspZ: perspective scale factor).</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Matrix_Append">Append(Matrix)</a></td>
<td>Appends another matrix as post-multiplication operation. Equivalent to this * value;</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_ContainsPerspective">ContainsPerspective()</a></td>
<td>Determines if the current matrix contains perspective (non-affine) transforms (true) or only (affine) transforms that could be mapped into an 2x3 matrix (false).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateRotation">CreateRotation(Double)</a></td>
<td>Creates a rotation matrix using the given rotation in radians.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateScale">CreateScale(Vector)</a></td>
<td>Creates a scale matrix from the given vector scale.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateScale_1">CreateScale(Double, Double)</a></td>
<td>Creates a scale matrix from the given X and Y components.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateSkew">CreateSkew(Double, Double)</a></td>
<td>Creates a skew matrix from the given axis skew angles in radians.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateTranslation">CreateTranslation(Vector)</a></td>
<td>Creates a translation matrix from the given vector.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_CreateTranslation_1">CreateTranslation(Double, Double)</a></td>
<td>Creates a translation matrix from the given X and Y components.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_Equals">Equals(Matrix)</a></td>
<td>Returns a boolean indicating whether the matrix is equal to the other given matrix.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_Equals_1">Equals(Object)</a></td>
<td>Returns a boolean indicating whether the given Object is equal to this matrix instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_GetDeterminant">GetDeterminant()</a></td>
<td>Calculates the determinant for this matrix.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_GetHashCode">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_Invert">Invert()</a></td>
<td>Inverts the Matrix.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_Parse">Parse(String)</a></td>
<td>Parses a Matrix string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_Prepend">Prepend(Matrix)</a></td>
<td>Prepends another matrix as pre-multiplication operation. Equivalent to value * this;</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_ToRadians">ToRadians(Double)</a></td>
<td>Converts an angle in degrees to radians.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_ToString">ToString()</a></td>
<td>Returns a String representing this matrix instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_Transform">Transform(Point)</a></td>
<td>Transforms the point with the matrix</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_TryDecomposeTransform">TryDecomposeTransform(Matrix, Matrix.Decomposed)</a></td>
<td>Decomposes given matrix into transform operations.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_TryInvert">TryInvert(Matrix)</a></td>
<td>Attempts to invert the Matrix.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Matrix_op_Equality">Equality(Matrix, Matrix)</a></td>
<td>Returns a boolean indicating whether the given matrices are equal.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_op_Inequality">Inequality(Matrix, Matrix)</a></td>
<td>Returns a boolean indicating whether the given matrices are not equal.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_op_Multiply">Multiply(Matrix, Matrix)</a></td>
<td>Multiplies two matrices together and returns the resulting matrix.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Matrix_op_UnaryNegation">UnaryNegation(Matrix)</a></td>
<td>Negates the given matrix by multiplying all values by -1.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKMatrix">ToSKMatrix()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
