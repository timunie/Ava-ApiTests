# Matrix Methods




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
<td>Parses a <a href="T_Avalonia_Matrix">Matrix</a> string.</td>
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

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Skia_SkiaSharpExtensions_ToSKMatrix">ToSKMatrix()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Skia_SkiaSharpExtensions">SkiaSharpExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Matrix">Matrix Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
