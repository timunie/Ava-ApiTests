# GetRelativeLuminance Method


Gets the relative (perceptual) luminance/brightness of the given color. 1 is closer to white while 0 is closer to black.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static double GetRelativeLuminance(
	Color color
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetRelativeLuminance ( 
	color As Color
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetRelativeLuminance : 
        color : Color -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Helpers/ColorHelper.cs#L44" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The color to calculate relative luminance for.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  
The relative (perceptual) luminance/brightness of the given color.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorHelper">ColorHelper Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

