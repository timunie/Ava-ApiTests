import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CalendarDatePickerDateValidationErrorEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs">CalendarDatePickerDateValidationErrorEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CalendarDatePickerDateValidationErrorEventArgs(
	Exception exception,
	string text
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	exception As Exception,
	text As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        exception : Exception * 
        text : string -> CalendarDatePickerDateValidationErrorEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/CalendarDatePicker/CalendarDatePickerDateValidationErrorEventArgs.cs#L34" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The initial exception from the <a href="E_Avalonia_Controls_CalendarDatePicker_DateValidationError">DateValidationError</a> event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The text that caused the <a href="E_Avalonia_Controls_CalendarDatePicker_DateValidationError">DateValidationError</a> event.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs">CalendarDatePickerDateValidationErrorEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
