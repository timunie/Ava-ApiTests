# Multiply(Rect, Double) Operator


Multiplies a rectangle by a scale.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Rect operator *(
	Rect rect,
	double scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator * ( 
	rect As Rect,
	scale As Double
) As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (*)
        rect : Rect * 
        scale : float  : Rect
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rect.cs#L207" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rectangle.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The scale.</dd></dl>

#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  
The scaled rectangle.

## See Also


#### Reference
<a href="T_Avalonia_Rect">Rect Structure</a>  
<a href="Overload_Avalonia_Rect_op_Multiply">Multiply Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

