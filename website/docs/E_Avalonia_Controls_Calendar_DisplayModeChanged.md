import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# DisplayModeChanged Event


Occurs when the <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendar.displaymode" target="_blank" rel="noopener noreferrer">DisplayMode</a> property is changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<CalendarModeChangedEventArgs> DisplayModeChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event DisplayModeChanged As EventHandler(Of CalendarModeChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DisplayModeChanged : IEvent<EventHandler<CalendarModeChangedEventArgs>,
    CalendarModeChangedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_CalendarModeChangedEventArgs">CalendarModeChangedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
