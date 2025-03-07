# DisplayDateStart Property


Gets or sets the first date to be displayed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DateTime? DisplayDateStart \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property DisplayDateStart As DateTime?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DisplayDateStart : Nullable<DateTime> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Calendar/Calendar.cs#L803" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a>)  
The first date to display.To set this property in XAML, use a date specified in the format yyyy/mm/dd. The mm and dd components must always consist of two characters, with a leading zero if necessary. For instance, the month of May should be specified as 05.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Calendar">Calendar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
