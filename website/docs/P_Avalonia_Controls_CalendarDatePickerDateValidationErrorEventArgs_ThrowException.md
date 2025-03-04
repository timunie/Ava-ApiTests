import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ThrowException Property


Gets or sets a value indicating whether <a href="P_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs_Exception">Exception</a> should be thrown.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ThrowException { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ThrowException As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ThrowException : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/CalendarDatePicker/CalendarDatePickerDateValidationErrorEventArgs.cs#L75" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the exception should be thrown; otherwise, false.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>If set to true and <a href="P_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs_Exception">Exception</a> is null.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePickerDateValidationErrorEventArgs">CalendarDatePickerDateValidationErrorEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
