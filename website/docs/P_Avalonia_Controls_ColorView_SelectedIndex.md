# SelectedIndex Property


Gets or sets the index of the selected tab/panel/page (subview).



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int SelectedIndex { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SelectedIndex As Integer
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedIndex : int with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.Properties.cs#L515" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## Remarks
When using the default control theme, this property is designed to be used with the <a href="T_Avalonia_Controls_ColorViewTab">ColorViewTab</a> enum. The <a href="T_Avalonia_Controls_ColorViewTab">ColorViewTab</a> enum defines the index values of each of the three standard tabs. Use like `SelectedIndex = (int)ColorViewTab.Palette`.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

