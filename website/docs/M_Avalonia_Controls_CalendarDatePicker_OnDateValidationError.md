import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnDateValidationError Method


Raises the <a href="E_Avalonia_Controls_CalendarDatePicker_DateValidationError">DateValidationError</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnDateValidationError(
	CalendarDatePickerDateValidationErrorEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnDateValidationError ( 
	e As CalendarDatePickerDateValidationErrorEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnDateValidationError : 
        e : CalendarDatePickerDateValidationErrorEventArgs -> unit 
override OnDateValidationError : 
        e : CalendarDatePickerDateValidationErrorEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/CalendarDatePicker/CalendarDatePicker.cs#L506" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs">CalendarDatePickerDateValidationErrorEventArgs</a></dt><dd>A <a href="T_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs">CalendarDatePickerDateValidationErrorEventArgs</a> that contains the event data.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
