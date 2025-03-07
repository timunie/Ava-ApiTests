# DisplayDate Property


Gets or sets the date to display.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DateTime DisplayDate \{ get; set; }
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/CalendarDatePicker/CalendarDatePicker.Properties.cs#L130" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>  
The date to display. The default is <a href="https://learn.microsoft.com/dotnet/api/system.datetime.today" target="_blank" rel="noopener noreferrer">Today</a>.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>The specified date is not in the range defined by <a href="P_Avalonia_Controls_CalendarDatePicker_DisplayDateStart">DisplayDateStart</a> and <a href="P_Avalonia_Controls_CalendarDatePicker_DisplayDateEnd">DisplayDateEnd</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
