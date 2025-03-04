import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Text Property


Gets or sets the text that is displayed by the <a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string? Text { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Text As String
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Text : string with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/CalendarDatePicker/CalendarDatePicker.Properties.cs#L253" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The text displayed by the <a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker</a>.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.formatexception" target="_blank" rel="noopener noreferrer">FormatException</a></td>
<td>The text entered cannot be parsed to a valid date, and the exception is not suppressed.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>The text entered parses to a date that is not selectable.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
