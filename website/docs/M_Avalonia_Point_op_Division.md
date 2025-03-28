# Division Operator


Divides a point by a factor coordinate-wise



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Point operator /(
	Point p,
	double k
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator / ( 
	p As Point,
	k As Double
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (/)
        p : Point * 
        k : float  : Point
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs#L157" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>Point to divide by</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Factor</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
Points having its coordinates divided

## See Also


#### Reference
<a href="T_Avalonia_Point">Point Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

