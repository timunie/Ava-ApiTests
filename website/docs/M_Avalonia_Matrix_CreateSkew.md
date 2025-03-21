# CreateSkew Method


Creates a skew matrix from the given axis skew angles in radians.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Matrix CreateSkew(
	double xAngle,
	double yAngle
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function CreateSkew ( 
	xAngle As Double,
	yAngle As Double
) As Matrix
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member CreateSkew : 
        xAngle : float * 
        yAngle : float -> Matrix 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Matrix.cs#L225" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The amount of skew along the X-axis, in radians.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The amount of skew along the Y-axis, in radians.</dd></dl>

#### Return Value
<a href="T_Avalonia_Matrix">Matrix</a>  
A rotation matrix.

## See Also


#### Reference
<a href="T_Avalonia_Matrix">Matrix Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

