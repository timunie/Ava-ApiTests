# Multiply(Double, Vector) Operator


Scales a vector.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Vector operator *(
	double scale,
	Vector vector
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	scale As Double,
	vector As Vector
) As Vector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        scale : float * 
        vector : Vector  : Vector
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Vector.cs#L86" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The scaling factor.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The vector.</dd></dl>

#### Return Value
<a href="T_Avalonia_Vector">Vector</a>  
The scaled vector.

## See Also


#### Reference
<a href="T_Avalonia_Vector">Vector Structure</a>  
<a href="Overload_Avalonia_Vector_op_Multiply">Multiply Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

