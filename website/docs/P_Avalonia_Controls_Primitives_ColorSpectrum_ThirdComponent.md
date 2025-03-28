# ThirdComponent Property


Gets the third HSV color component that is NOT displayed by the spectrum. This is automatically calculated from the <a href="P_Avalonia_Controls_Primitives_ColorSpectrum_Components">Components</a> property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ColorComponent ThirdComponent { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property ThirdComponent As ColorComponent
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ThirdComponent : ColorComponent with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorSpectrum/ColorSpectrum.Properties.cs#L242" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_ColorComponent">ColorComponent</a>

## Remarks
This property should be used for any external color slider that represents the third component of the color. Note that this property uses the generic <a href="T_Avalonia_Controls_ColorComponent">ColorComponent</a> type instead of the more accurate <a href="T_Avalonia_Controls_HsvComponent">HsvComponent</a> to allow direct usage by the generalized color sliders.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorSpectrum">ColorSpectrum Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

