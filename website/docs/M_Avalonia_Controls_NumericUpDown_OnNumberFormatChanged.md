import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnNumberFormatChanged Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_NumberFormat">NumberFormat</a> property value changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnNumberFormatChanged(
	NumberFormatInfo? oldValue,
	NumberFormatInfo? newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnNumberFormatChanged ( 
	oldValue As NumberFormatInfo,
	newValue As NumberFormatInfo
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnNumberFormatChanged : 
        oldValue : NumberFormatInfo * 
        newValue : NumberFormatInfo -> unit 
override OnNumberFormatChanged : 
        oldValue : NumberFormatInfo * 
        newValue : NumberFormatInfo -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/NumericUpDown/NumericUpDown.cs#L466" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.numberformatinfo" target="_blank" rel="noopener noreferrer">NumberFormatInfo</a></dt><dd>The old value.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.numberformatinfo" target="_blank" rel="noopener noreferrer">NumberFormatInfo</a></dt><dd>The new value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
