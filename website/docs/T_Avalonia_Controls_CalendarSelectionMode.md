import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CalendarSelectionMode Enumeration


Specifies values that describe the available selection modes for a <a href="T_Avalonia_Controls_Calendar">Calendar</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum CalendarSelectionMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration CalendarSelectionMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CalendarSelectionMode
```
</TabItem>
</Tabs>

This enumeration provides the values that are used by the SelectionMode property.

## Members
<table>
<tr>
<td>SingleDate</td>
<td>0</td>
<td>Only a single date can be selected. Use the <a href="P_Avalonia_Controls_Calendar_SelectedDate">SelectedDate</a> property to retrieve the selected date.</td>
</tr>
<tr>
<td>SingleRange</td>
<td>1</td>
<td>A single range of dates can be selected. Use <a href="P_Avalonia_Controls_Calendar_SelectedDates">SelectedDates</a> property to retrieve the selected dates.</td>
</tr>
<tr>
<td>MultipleRange</td>
<td>2</td>
<td>Multiple non-contiguous ranges of dates can be selected. Use the <a href="P_Avalonia_Controls_Calendar_SelectedDates">SelectedDates</a> property to retrieve the selected dates.</td>
</tr>
<tr>
<td>None</td>
<td>3</td>
<td>No selections are allowed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
