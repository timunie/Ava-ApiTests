# IsAlphaVisible Property


Gets or sets a value indicating whether the alpha component is visible in the Hex formatted text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Converters/ColorToHexConverter.cs#L24" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>When hidden the existing alpha component value is maintained. Also when hidden the user is still able to input an 8-digit number with alpha. Alpha will be processed but then removed when displayed. Because this property only controls whether alpha is displayed (and it is still processed regardless) it is termed 'Visible' instead of 'Enabled'.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_ColorToHexConverter">ColorToHexConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  

