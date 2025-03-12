# RoundLayoutSizeUp Method


Rounds a size to integer values for layout purposes, compensating for high DPI screen coordinates by rounding the size up to the nearest pixel.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Size RoundLayoutSizeUp(
	Size size,
	double dpiScaleX,
	double dpiScaleY
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RoundLayoutSizeUp ( 
	size As Size,
	dpiScaleX As Double,
	dpiScaleY As Double
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RoundLayoutSizeUp : 
        size : Size * 
        dpiScaleX : float * 
        dpiScaleY : float -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutHelper.cs#L172" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>Input size.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>DPI along x-dimension.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>DPI along y-dimension.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
Value of size that will be rounded under screen DPI.This is a layout helper method. It takes DPI into account and also does not return the rounded value if it is unacceptable for layout, e.g. Infinity or NaN. It's a helper associated with the UseLayoutRounding property and should not be used as a general rounding utility.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutHelper">LayoutHelper Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

