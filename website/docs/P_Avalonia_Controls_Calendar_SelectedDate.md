# SelectedDate Property


Gets or sets the currently selected date.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DateTime? SelectedDate { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SelectedDate As DateTime?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedDate : Nullable<DateTime> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/Calendar.cs#L524" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>)  
The date currently selected. The default is null.

## Remarks
Use this property when SelectionMode is set to SingleDate. In other modes, this property will always be the first date in SelectedDates.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>The given date is outside the range specified by <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.displaydatestart" target="_blank" rel="noopener noreferrer">DisplayDateStart</a> and <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.displaydateend" target="_blank" rel="noopener noreferrer">DisplayDateEnd</a> -or- The given date is in the <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.blackoutdates" target="_blank" rel="noopener noreferrer">BlackoutDates</a> collection.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>If set to anything other than null when <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.selectionmode" target="_blank" rel="noopener noreferrer">SelectionMode</a> is set to <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendarselectionmode#system-windows-controls-calendarselectionmode-none" target="_blank" rel="noopener noreferrer">None</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

