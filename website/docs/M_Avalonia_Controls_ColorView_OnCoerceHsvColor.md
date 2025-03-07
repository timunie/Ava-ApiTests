# OnCoerceHsvColor Method


Called when the <a href="P_Avalonia_Controls_ColorView_HsvColor">HsvColor</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual HsvColor OnCoerceHsvColor(
	HsvColor value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceHsvColor ( 
	value As HsvColor
) As HsvColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceHsvColor : 
        value : HsvColor -> HsvColor 
override OnCoerceHsvColor : 
        value : HsvColor -> HsvColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.cs#L316" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_HsvColor">HsvColor</a></dt><dd>The value to coerce.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HsvColor">HsvColor</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
