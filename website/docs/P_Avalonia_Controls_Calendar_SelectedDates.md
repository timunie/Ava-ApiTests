# SelectedDates Property


Gets a collection of selected dates.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public SelectedDatesCollection SelectedDates { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property SelectedDates As SelectedDatesCollection
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedDates : SelectedDatesCollection with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/Calendar.cs#L622" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Primitives_SelectedDatesCollection">SelectedDatesCollection</a>  
A <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.selecteddatescollection" target="_blank" rel="noopener noreferrer">SelectedDatesCollection</a> object that contains the currently selected dates. The default is an empty collection.Dates can be added to the collection either individually or in a range using the AddRange method. Depending on the value of the SelectionMode property, adding a date or range to the collection may cause it to be cleared. The following table lists how CalendarSelectionMode affects the SelectedDates property. CalendarSelectionMode Description None No selections are allowed. SelectedDate cannot be set and no values can be added to SelectedDates. SingleDate Only a single date can be selected, either by setting SelectedDate or the first value in SelectedDates. AddRange cannot be used. SingleRange A single range of dates can be selected. Setting SelectedDate, adding a date individually to SelectedDates, or using AddRange will clear all previous values from SelectedDates. MultipleRange Multiple non-contiguous ranges of dates can be selected. Adding a date individually to SelectedDates or using AddRange will not clear SelectedDates. Setting SelectedDate will still clear SelectedDates, but additional dates or range can then be added. Adding a range that includes some dates that are already selected or overlaps with another range results in the union of the ranges and does not cause an exception.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

