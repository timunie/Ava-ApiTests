# HsvColor Property


Gets or sets the currently selected color in the HSV color model.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorSpectrum/ColorSpectrum.Properties.cs#L139" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Media_HsvColor">HsvColor</a>

## Remarks
This should be used in all cases instead of the <a href="P_Avalonia_Controls_Primitives_ColorSpectrum_Color">Color</a> property. Internally, the <a href="T_Avalonia_Controls_Primitives_ColorSpectrum">ColorSpectrum</a> uses the HSV color model and using this property will avoid loss of precision and color drifting.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorSpectrum">ColorSpectrum Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

