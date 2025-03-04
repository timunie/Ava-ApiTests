import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnCoerceIncrement Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_Increment">Increment</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual decimal OnCoerceIncrement(
	decimal baseValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceIncrement ( 
	baseValue As Decimal
) As Decimal
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceIncrement : 
        baseValue : decimal -> decimal 
override OnCoerceIncrement : 
        baseValue : decimal -> decimal 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/NumericUpDown/NumericUpDown.cs#L591" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
