# OnCoerceMaximum Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_Maximum">Maximum</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual decimal OnCoerceMaximum(
	decimal baseValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceMaximum ( 
	baseValue As Decimal
) As Decimal
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceMaximum : 
        baseValue : decimal -> decimal 
override OnCoerceMaximum : 
        baseValue : decimal -> decimal 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/NumericUpDown/NumericUpDown.cs#L601" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

