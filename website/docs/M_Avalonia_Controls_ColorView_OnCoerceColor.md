# OnCoerceColor Method


Called when the <a href="P_Avalonia_Controls_ColorView_Color">Color</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Color OnCoerceColor(
	Color value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceColor ( 
	value As Color
) As Color
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceColor : 
        value : Color -> Color 
override OnCoerceColor : 
        value : Color -> Color 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.cs#L303" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The value to coerce.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_Color">Color</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

