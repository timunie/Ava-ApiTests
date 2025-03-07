# Multiply Operator


Multiplies two matrices together and returns the resulting matrix.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Matrix operator *(
	Matrix value1,
	Matrix value2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	value1 As Matrix,
	value2 As Matrix
) As Matrix
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        value1 : Matrix * 
        value2 : Matrix  : Matrix
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Matrix.cs#L160" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The first source matrix.</dd><dt>  <a href="T_Avalonia_Matrix">Matrix</a></dt><dd>The second source matrix.</dd></dl>

#### Return Value
<a href="T_Avalonia_Matrix">Matrix</a>  
The product matrix.

## See Also


#### Reference
<a href="T_Avalonia_Matrix">Matrix Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
