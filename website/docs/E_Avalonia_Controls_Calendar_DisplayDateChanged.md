# DisplayDateChanged Event


Occurs when the <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.displaydate" target="_blank" rel="noopener noreferrer">DisplayDate</a> property is changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<CalendarDateChangedEventArgs> DisplayDateChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event DisplayDateChanged As EventHandler(Of CalendarDateChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DisplayDateChanged : IEvent<EventHandler<CalendarDateChangedEventArgs>,
    CalendarDateChangedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/Calendar.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_CalendarDateChangedEventArgs">CalendarDateChangedEventArgs</a>)This event occurs after DisplayDate is assigned its new value.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

