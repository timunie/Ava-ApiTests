# ToPoint(Vector) Method


Converts the <a href="T_Avalonia_PixelPoint">PixelPoint</a> to a device-independent <a href="T_Avalonia_Point">Point</a> using the specified scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Point ToPoint(
	Vector scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToPoint ( 
	scale As Vector
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToPoint : 
        scale : Vector -> Point 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelPoint.cs#L192" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
The device-independent point.

## See Also


#### Reference
<a href="T_Avalonia_PixelPoint">PixelPoint Structure</a>  
<a href="Overload_Avalonia_PixelPoint_ToPoint">ToPoint Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

