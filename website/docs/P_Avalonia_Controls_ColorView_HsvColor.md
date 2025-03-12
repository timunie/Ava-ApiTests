# HsvColor Property


Gets or sets the currently selected color in the HSV color model.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public HsvColor HsvColor { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property HsvColor As HsvColor
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member HsvColor : HsvColor with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.Properties.cs#L284" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Media_HsvColor">HsvColor</a>This should be used in all cases instead of the <a href="P_Avalonia_Controls_Primitives_ColorSpectrum_Color">Color</a> property. Internally, the <a href="T_Avalonia_Controls_Primitives_ColorSpectrum">ColorSpectrum</a> uses the HSV color model and using this property will avoid loss of precision and color drifting.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

