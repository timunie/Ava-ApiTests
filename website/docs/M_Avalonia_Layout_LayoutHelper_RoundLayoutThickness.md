# RoundLayoutThickness Method


Rounds a thickness to integer values for layout purposes, compensating for high DPI screen coordinates.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Thickness RoundLayoutThickness(
	Thickness thickness,
	double dpiScaleX,
	double dpiScaleY
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function RoundLayoutThickness ( 
	thickness As Thickness,
	dpiScaleX As Double,
	dpiScaleY As Double
) As Thickness
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RoundLayoutThickness : 
        thickness : Thickness * 
        dpiScaleX : float * 
        dpiScaleY : float -> Thickness 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutHelper.cs#L191" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Thickness">Thickness</a></dt><dd>Input thickness.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>DPI along x-dimension.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>DPI along y-dimension.</dd></dl>

#### Return Value
<a href="T_Avalonia_Thickness">Thickness</a>  
Value of thickness that will be rounded under screen DPI.

## Remarks
This is a layout helper method. It takes DPI into account and also does not return the rounded value if it is unacceptable for layout, e.g. Infinity or NaN. It's a helper associated with the UseLayoutRounding property and should not be used as a general rounding utility.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutHelper">LayoutHelper Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

