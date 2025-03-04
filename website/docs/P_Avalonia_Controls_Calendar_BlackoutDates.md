import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# BlackoutDates Property


Gets a collection of dates that are marked as not selectable.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CalendarBlackoutDatesCollection BlackoutDates { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property BlackoutDates As CalendarBlackoutDatesCollection
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BlackoutDates : CalendarBlackoutDatesCollection with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Calendar/Calendar.cs#L864" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Primitives_CalendarBlackoutDatesCollection">CalendarBlackoutDatesCollection</a>  
A collection of dates that cannot be selected. The default value is an empty collection.

## 

Dates in this collection will appear as disabled on the calendar.

To make all past dates not selectable, you can use the AddDatesInPast method provided by the collection returned by this property.


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>Adding a date to this collection when it is already selected or adding a date outside the range specified by DisplayDateStart and DisplayDateEnd.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
