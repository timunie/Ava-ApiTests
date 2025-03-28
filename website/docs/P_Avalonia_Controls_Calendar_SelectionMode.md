# SelectionMode Property


Gets or sets a value that indicates what kind of selections are allowed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CalendarSelectionMode SelectionMode { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SelectionMode As CalendarSelectionMode
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectionMode : CalendarSelectionMode with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/Calendar.cs#L461" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_CalendarSelectionMode">CalendarSelectionMode</a>  
A value that indicates the current selection mode. The default is <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendarselectionmode#system-windows-controls-calendarselectionmode-singledate" target="_blank" rel="noopener noreferrer">SingleDate</a>.

## Remarks

This property determines whether the Calendar allows no selection, selection of a single date, or selection of multiple dates. The selection mode is specified with the CalendarSelectionMode enumeration.

When this property is changed, all selected dates will be cleared.


## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

