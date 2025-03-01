import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# DisplayDate Property


Gets or sets the date to display.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DateTime DisplayDate { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property DisplayDate As DateTime
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DisplayDate : DateTime with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>  
The date to display.
This property allows the developer to specify a date to display. If this property is a null reference (Nothing in Visual Basic), SelectedDate is displayed. If SelectedDate is also a null reference (Nothing in Visual Basic), Today is displayed. The default is Today.

To set this property in XAML, use a date specified in the format yyyy/mm/dd. The mm and dd components must always consist of two characters, with a leading zero if necessary. For instance, the month of May should be specified as 05.


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>The given date is not in the range specified by <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.displaydatestart" target="_blank" rel="noopener noreferrer">DisplayDateStart</a> and <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.displaydateend" target="_blank" rel="noopener noreferrer">DisplayDateEnd</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
