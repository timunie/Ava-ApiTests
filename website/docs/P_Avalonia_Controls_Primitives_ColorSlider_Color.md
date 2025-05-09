# Color Property


Gets or sets the currently selected color in the RGB color model.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Color Color { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Color As Color
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Color : Color with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorSlider/ColorSlider.Properties.cs#L76" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Media_Color">Color</a>

## Remarks
Use this property instead of <a href="P_Avalonia_Controls_Primitives_ColorSlider_HsvColor">HsvColor</a> when in <a href="T_Avalonia_Controls_ColorModel">Rgba</a> to avoid loss of precision and color drifting.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorSlider">ColorSlider Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

