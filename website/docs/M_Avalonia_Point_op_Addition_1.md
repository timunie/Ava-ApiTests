# Addition(Point, Vector) Operator


Adds a vector to a point.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Point operator +(
	Point a,
	Vector b
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator + ( 
	a As Point,
	b As Vector
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (+)
        a : Point * 
        b : Vector  : Point
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs#L110" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The vector.</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
A point that is the result of the addition.

## See Also


#### Reference
<a href="T_Avalonia_Point">Point Structure</a>  
<a href="Overload_Avalonia_Point_op_Addition">Addition Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

