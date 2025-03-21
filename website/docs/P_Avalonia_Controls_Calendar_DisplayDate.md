# DisplayDate Property


Gets or sets the date to display.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/Calendar.cs#L752" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>  
The date to display.

## Remarks

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

