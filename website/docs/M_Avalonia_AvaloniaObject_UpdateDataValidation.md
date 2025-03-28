# UpdateDataValidation Method


Called to update the validation state for properties for which data validation is enabled.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void UpdateDataValidation(
	AvaloniaProperty property,
	BindingValueType state,
	Exception? error
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub UpdateDataValidation ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L716" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd><dt>  <a href="T_Avalonia_Data_BindingValueType">BindingValueType</a></dt><dd>The current data binding state.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The current data binding error, if any.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

