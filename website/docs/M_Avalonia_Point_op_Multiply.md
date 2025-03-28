# Multiply(Point, Matrix) Operator


Applies a matrix to a point.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Point operator *(
	Point point,
	Matrix matrix
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	point As Point,
	matrix As Matrix
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        point : Point * 
        matrix : Matrix  : Point
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs#L165" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The matrix.</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
The resulting point.

## See Also


#### Reference
<a href="T_Avalonia_Point">Point Structure</a>  
<a href="Overload_Avalonia_Point_op_Multiply">Multiply Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

