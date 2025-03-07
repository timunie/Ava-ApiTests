# FromPoint(Point, Vector) Method


Converts a <a href="T_Avalonia_Point">Point</a> to device pixels using the specified scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelPoint FromPoint(
	Point point,
	Vector scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromPoint ( 
	point As Point,
	scale As Vector
) As PixelPoint
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromPoint : 
        point : Point * 
        scale : Vector -> PixelPoint 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelPoint.cs#L226" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelPoint">PixelPoint</a>  
The device-independent point.

## See Also


#### Reference
<a href="T_Avalonia_PixelPoint">PixelPoint Structure</a>  
<a href="Overload_Avalonia_PixelPoint_FromPoint">FromPoint Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
