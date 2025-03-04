import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectedTimeChanged Event


Raised when the <a href="P_Avalonia_Controls_TimePicker_SelectedTime">SelectedTime</a> property changes



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<TimePickerSelectedValueChangedEventArgs> SelectedTimeChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event SelectedTimeChanged As EventHandler(Of TimePickerSelectedValueChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedTimeChanged : IEvent<EventHandler<TimePickerSelectedValueChangedEventArgs>,
    TimePickerSelectedValueChangedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/DateTimePickers/TimePicker.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_TimePickerSelectedValueChangedEventArgs">TimePickerSelectedValueChangedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_TimePicker">TimePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
