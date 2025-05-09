# Contains(DateTime, DateTime) Method


Returns a value that represents whether this collection contains the specified range of dates.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Contains(
	DateTime start,
	DateTime end
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Contains ( 
	start As DateTime,
	end As DateTime
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Contains : 
        start : DateTime * 
        end : DateTime -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/CalendarBlackoutDatesCollection.cs#L80" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a></dt><dd>The start of the date range.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a></dt><dd>The end of the date range.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if all dates in the range are contained in the collection; otherwise, false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_CalendarBlackoutDatesCollection">CalendarBlackoutDatesCollection Class</a>  
<a href="Overload_Avalonia_Controls_Primitives_CalendarBlackoutDatesCollection_Contains">Contains Overload</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

