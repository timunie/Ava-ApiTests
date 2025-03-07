# ToPointWithDpi(Double) Method


Converts the <a href="T_Avalonia_PixelPoint">PixelPoint</a> to a device-independent <a href="T_Avalonia_Point">Point</a> using the specified dots per inch (DPI).



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Point ToPointWithDpi(
	double dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToPointWithDpi ( 
	dpi As Double
) As Point
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToPointWithDpi : 
        dpi : float -> Point 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelPoint.cs#L200" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The dots per inch of the device.</dd></dl>

#### Return Value
<a href="T_Avalonia_Point">Point</a>  
The device-independent point.

## See Also


#### Reference
<a href="T_Avalonia_PixelPoint">PixelPoint Structure</a>  
<a href="Overload_Avalonia_PixelPoint_ToPointWithDpi">ToPointWithDpi Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
