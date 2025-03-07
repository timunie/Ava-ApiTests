# OnMinimumChanged Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_Minimum">Minimum</a> property value changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnMinimumChanged(
	decimal oldValue,
	decimal newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnMinimumChanged ( 
	oldValue As Decimal,
	newValue As Decimal
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnMinimumChanged : 
        oldValue : decimal * 
        newValue : decimal -> unit 
override OnMinimumChanged : 
        oldValue : decimal * 
        newValue : decimal -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/NumericUpDown/NumericUpDown.cs#L532" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The old value.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a></dt><dd>The new value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
