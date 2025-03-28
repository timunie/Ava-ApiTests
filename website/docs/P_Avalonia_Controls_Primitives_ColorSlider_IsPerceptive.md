# IsPerceptive Property


Gets or sets a value indicating whether the slider adapts rendering to improve user-perception over exactness.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsPerceptive { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property IsPerceptive As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsPerceptive : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorSlider/ColorSlider.Properties.cs#L145" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
When true in the HSVA color model, this ensures that the gradient is always visible and never washed out regardless of the actual color. When true in the RGBA color model, this ensures the gradient always appears as red, green or blue.   
  
 For example, with Hue in the HSVA color model, the Saturation and Value components are always forced to maximum values during rendering. In the RGBA color model, all components other than <a href="P_Avalonia_Controls_Primitives_ColorSlider_ColorComponent">ColorComponent</a> are forced to minimum values during rendering.   
  
 Note this property will only adjust components other than <a href="P_Avalonia_Controls_Primitives_ColorSlider_ColorComponent">ColorComponent</a> during rendering. This also doesn't change the values of any components in the actual color – it is only for display.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorSlider">ColorSlider Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

