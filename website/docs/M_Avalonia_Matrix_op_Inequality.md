# Inequality Operator


Returns a boolean indicating whether the given matrices are not equal.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	Matrix value1,
	Matrix value2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	value1 As Matrix,
	value2 As Matrix
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        value1 : Matrix * 
        value2 : Matrix  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Matrix.cs#L202" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The first source matrix.</dd><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The second source matrix.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the matrices are not equal; False if they are equal.

## See Also


#### Reference
<a href="T_Avalonia_Matrix">Matrix Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

