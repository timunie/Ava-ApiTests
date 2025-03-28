# PaletteColors Property


Gets or sets the collection of individual colors in the palette.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IEnumerable<Color>? PaletteColors { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property PaletteColors As IEnumerable(Of Color)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PaletteColors : IEnumerable<Color> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.Properties.cs#L470" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Media_Color">Color</a>)

## Remarks
This is not commonly set manually. Instead, it should be set automatically by providing an <a href="T_Avalonia_Controls_IColorPalette">IColorPalette</a> to the <a href="P_Avalonia_Controls_ColorView_Palette">Palette</a> property.   
  
 Also note that this property is what should be bound in the control template. <a href="P_Avalonia_Controls_ColorView_Palette">Palette</a> is too high-level to use on its own.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

