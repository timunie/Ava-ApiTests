import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnTextConverterChanged Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_Text">Text</a> property value changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnTextConverterChanged(
	IValueConverter? oldValue,
	IValueConverter? newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnTextConverterChanged ( 
	oldValue As IValueConverter,
	newValue As IValueConverter
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnTextConverterChanged : 
        oldValue : IValueConverter * 
        newValue : IValueConverter -> unit 
override OnTextConverterChanged : 
        oldValue : IValueConverter * 
        newValue : IValueConverter -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/NumericUpDown/NumericUpDown.cs#L562" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  IValueConverter</dt><dd>The old value.</dd><dt>  IValueConverter</dt><dd>The new value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
