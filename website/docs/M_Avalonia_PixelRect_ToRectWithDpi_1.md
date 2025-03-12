# ToRectWithDpi(Double) Method


Converts the <a href="T_Avalonia_PixelRect">PixelRect</a> to a device-independent <a href="T_Avalonia_Rect">Rect</a> using the specified dots per inch (DPI).



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Rect ToRectWithDpi(
	double dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToRectWithDpi ( 
	dpi As Double
) As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ToRectWithDpi : 
        dpi : float -> Rect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelRect.cs#L364" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The dots per inch of the device.</dd></dl>

#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  
The device-independent rect.

## See Also


#### Reference
<a href="T_Avalonia_PixelRect">PixelRect Structure</a>  
<a href="Overload_Avalonia_PixelRect_ToRectWithDpi">ToRectWithDpi Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

