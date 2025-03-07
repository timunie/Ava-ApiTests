# UpdateDataValidation Method


Called to update the validation state for properties for which data validation is enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void UpdateDataValidation(
	AvaloniaProperty property,
	BindingValueType state,
	Exception? error
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub UpdateDataValidation ( 
	property As AvaloniaProperty,
	state As BindingValueType,
	error As Exception
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract UpdateDataValidation : 
        property : AvaloniaProperty * 
        state : BindingValueType * 
        error : Exception -> unit 
override UpdateDataValidation : 
        property : AvaloniaProperty * 
        state : BindingValueType * 
        error : Exception -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Slider.cs#L401" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd><dt>  <a href="T_Avalonia_Data_BindingValueType">BindingValueType</a></dt><dd>The current data binding state.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The current data binding error, if any.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Slider">Slider Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
