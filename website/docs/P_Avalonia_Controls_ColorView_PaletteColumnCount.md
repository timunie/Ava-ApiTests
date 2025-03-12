# PaletteColumnCount Property


Gets or sets the number of colors in each row (section) of the color palette. Within a standard palette, rows are shades and columns are colors.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int PaletteColumnCount { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property PaletteColumnCount As Integer
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PaletteColumnCount : int with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.Properties.cs#L487" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>This is not commonly set manually. Instead, it should be set automatically by providing an <a href="T_Avalonia_Controls_IColorPalette">IColorPalette</a> to the <a href="P_Avalonia_Controls_ColorView_Palette">Palette</a> property.   
  
 Also note that this property is what should be bound in the control template. <a href="P_Avalonia_Controls_ColorView_Palette">Palette</a> is too high-level to use on its own.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

