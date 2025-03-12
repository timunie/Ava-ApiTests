# Multiply(Double, Point) Operator


Multiplies a point by a factor coordinate-wise



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Point operator *(
	double k,
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	k As Double,
	p As Point
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        k : float * 
        p : Point  : Point
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs#L149" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Factor</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>Point to multiply</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
Points having its coordinates multiplied

## See Also


#### Reference
<a href="T_Avalonia_Point">Point Structure</a>  
<a href="Overload_Avalonia_Point_op_Multiply">Multiply Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

