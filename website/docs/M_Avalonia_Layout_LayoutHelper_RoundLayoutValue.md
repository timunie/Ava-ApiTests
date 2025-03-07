# RoundLayoutValue Method


Calculates the value to be used for layout rounding at high DPI by rounding the value up or down to the nearest pixel.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static double RoundLayoutValue(
	double value,
	double dpiScale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RoundLayoutValue ( 
	value As Double,
	dpiScale As Double
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RoundLayoutValue : 
        value : float * 
        dpiScale : float -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutHelper.cs#L213" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Input value to be rounded.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Ratio of screen's DPI to layout DPI</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  
Adjusted value that will produce layout rounding on screen at high dpi.This is a layout helper method. It takes DPI into account and also does not return the rounded value if it is unacceptable for layout, e.g. Infinity or NaN. It's a helper associated with the UseLayoutRounding property and should not be used as a general rounding utility.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutHelper">LayoutHelper Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
