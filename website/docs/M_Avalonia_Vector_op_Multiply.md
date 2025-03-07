# Multiply(Vector, Vector) Operator


Calculates the dot product of two vectors.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static double operator *(
	Vector a,
	Vector b
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	a As Vector,
	b As Vector
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        a : Vector * 
        b : Vector  : float
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Vector.cs#L68" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>First vector.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>Second vector.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  
The dot product.

## See Also


#### Reference
<a href="T_Avalonia_Vector">Vector Structure</a>  
<a href="Overload_Avalonia_Vector_op_Multiply">Multiply Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
