# OnCoerceValue Method


Called when the <a href="P_Avalonia_Controls_NumericUpDown_Value">Value</a> property has to be coerced.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual decimal? OnCoerceValue(
	decimal? baseValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function OnCoerceValue ( 
	baseValue As Decimal?
) As Decimal?
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCoerceValue : 
        baseValue : Nullable<decimal> -> Nullable<decimal> 
override OnCoerceValue : 
        baseValue : Nullable<decimal> -> Nullable<decimal> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/NumericUpDown/NumericUpDown.cs#L618" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>)</dt><dd>The value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
