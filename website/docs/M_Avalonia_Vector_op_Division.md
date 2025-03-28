# Division Operator


Scales a vector.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Vector operator /(
	Vector vector,
	double scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator / ( 
	vector As Vector,
	scale As Double
) As Vector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (/)
        vector : Vector * 
        scale : float  : Vector
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Vector.cs#L95" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The vector.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The divisor.</dd></dl>

#### Return Value
<a href="T_Avalonia_Vector">Vector</a>  
The scaled vector.

## See Also


#### Reference
<a href="T_Avalonia_Vector">Vector Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

