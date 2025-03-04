import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# UpdateDataValidation Method


Called to update the validation state for properties for which data validation is enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Primitives/SelectingItemsControl.cs#L583" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  AvaloniaProperty</dt><dd>The property.</dd><dt>  BindingValueType</dt><dd>The current data binding state.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The current data binding error, if any.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
