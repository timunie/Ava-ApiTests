# MinSaturation Property


Gets or sets the minimum value of the Saturation component in the range from 0..100. This property must be less than <a href="P_Avalonia_Controls_Primitives_ColorSpectrum_MaxSaturation">MaxSaturation</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int MinSaturation { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property MinSaturation As Integer
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member MinSaturation : int with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.Properties.cs#L447" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## Remarks
Internally, the <a href="T_Avalonia_Controls_Primitives_ColorSpectrum">ColorSpectrum</a> uses the HSV color model.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

