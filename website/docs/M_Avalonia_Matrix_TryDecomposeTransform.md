# TryDecomposeTransform Method


Decomposes given matrix into transform operations.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryDecomposeTransform(
	Matrix matrix,
	out Matrix.Decomposed decomposed
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryDecomposeTransform ( 
	matrix As Matrix,
	<OutAttribute> ByRef decomposed As Matrix.Decomposed
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryDecomposeTransform : 
        matrix : Matrix * 
        decomposed : Matrix.Decomposed byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Matrix.cs#L518" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>Matrix to decompose.</dd><dt>  <a href="T_Avalonia_Matrix_Decomposed">Matrix.Decomposed</a></dt><dd>Decomposed matrix.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
The status of the operation.

## See Also


#### Reference
<a href="T_Avalonia_Matrix">Matrix Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
