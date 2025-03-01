import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectionMode Property


Gets or sets a value that indicates what kind of selections are allowed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Property Value
<a href="T_Avalonia_Controls_CalendarSelectionMode">CalendarSelectionMode</a>  
A value that indicates the current selection mode. The default is <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.calendarselectionmode#system-windows-controls-calendarselectionmode-singledate" target="_blank" rel="noopener noreferrer">SingleDate</a>.
This property determines whether the Calendar allows no selection, selection of a single date, or selection of multiple dates. The selection mode is specified with the CalendarSelectionMode enumeration.

When this property is changed, all selected dates will be cleared.


## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
