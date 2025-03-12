# IsAlphaVisible Property


Gets or sets a value indicating whether the alpha component is visible and rendered. When false, this ensures that the gradient is always visible and never transparent regardless of the actual color. This property is ignored when the alpha component itself is being displayed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsAlphaVisible { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property IsAlphaVisible As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsAlphaVisible : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorSlider/ColorSlider.Properties.cs#L123" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>Setting to false means the alpha component is always forced to maximum for components other than <a href="P_Avalonia_Controls_Primitives_ColorSlider_ColorComponent">ColorComponent</a> during rendering. This doesn't change the value of the alpha component in the color – it is only for display.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorSlider">ColorSlider Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

