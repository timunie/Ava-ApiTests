# IsRoundingEnabled Property


Gets or sets a value indicating whether rounding of color component values is enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsRoundingEnabled { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property IsRoundingEnabled As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsRoundingEnabled : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorSlider/ColorSlider.Properties.cs#L158" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>This is applicable for the HSV color model only. The <a href="T_Avalonia_Media_HsvColor">HsvColor</a> struct uses double values while the <a href="T_Avalonia_Media_Color">Color</a> struct uses byte. Only double types need rounding.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ColorSlider">ColorSlider Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

