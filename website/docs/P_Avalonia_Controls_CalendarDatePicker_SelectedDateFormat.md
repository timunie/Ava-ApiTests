import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectedDateFormat Property


Gets or sets the format that is used to display the selected date.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CalendarDatePickerFormat SelectedDateFormat { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SelectedDateFormat As CalendarDatePickerFormat
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedDateFormat : CalendarDatePickerFormat with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="T_Avalonia_Controls_CalendarDatePickerFormat">CalendarDatePickerFormat</a>  
The format that is used to display the selected date. The default is <a href="T_Avalonia_Controls_CalendarDatePickerFormat">Short</a>.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>An specified format is not valid.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
