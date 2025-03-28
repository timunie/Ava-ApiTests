# RaiseValueChangedEvent Method


Raises the <a href="E_Avalonia_Controls_NumericUpDown_ValueChanged">ValueChanged</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void RaiseValueChangedEvent(
	decimal? oldValue,
	decimal? newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub RaiseValueChangedEvent ( 
	oldValue As Decimal?,
	newValue As Decimal?
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RaiseValueChangedEvent : 
        oldValue : Nullable<decimal> * 
        newValue : Nullable<decimal> -> unit 
override RaiseValueChangedEvent : 
        oldValue : Nullable<decimal> * 
        newValue : Nullable<decimal> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/NumericUpDown/NumericUpDown.cs#L653" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>)</dt><dd>The old value.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.decimal" target="_blank" rel="noopener noreferrer">Decimal</a>)</dt><dd>The new value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_NumericUpDown">NumericUpDown Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

