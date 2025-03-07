# FromPointWithDpi(Point, Vector) Method


Converts a <a href="T_Avalonia_Point">Point</a> to device pixels using the specified dots per inch (DPI).



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelPoint FromPointWithDpi(
	Point point,
	Vector dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromPointWithDpi ( 
	point As Point,
	dpi As Vector
) As PixelPoint
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromPointWithDpi : 
        point : Point * 
        dpi : Vector -> PixelPoint 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelPoint.cs#L244" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The dots per inch of the device.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelPoint">PixelPoint</a>  
The device-independent point.

## See Also


#### Reference
<a href="T_Avalonia_PixelPoint">PixelPoint Structure</a>  
<a href="Overload_Avalonia_PixelPoint_FromPointWithDpi">FromPointWithDpi Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
