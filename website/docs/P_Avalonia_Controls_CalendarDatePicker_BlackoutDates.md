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
public CalendarBlackoutDatesCollection? BlackoutDates { get; }
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



#### Property Value
<a href="T_Avalonia_Controls_Primitives_CalendarBlackoutDatesCollection">CalendarBlackoutDatesCollection</a>  
A collection of dates that cannot be selected. The default value is an empty collection.

## See Also


#### Reference
<a href="T_Avalonia_Controls_CalendarDatePicker">CalendarDatePicker Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
