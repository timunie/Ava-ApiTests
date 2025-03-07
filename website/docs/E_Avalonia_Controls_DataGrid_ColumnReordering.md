# ColumnReordering Event


Raised when starting a column reordering action. Subscribers to this event can set tooltip and caret UIElements, constrain tooltip position, indicate that a preview should be shown, or cancel reordering.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<DataGridColumnReorderingEventArgs> ColumnReordering
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event ColumnReordering As EventHandler(Of DataGridColumnReorderingEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ColumnReordering : IEvent<EventHandler<DataGridColumnReorderingEventArgs>,
    DataGridColumnReorderingEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_DataGridColumnReorderingEventArgs">DataGridColumnReorderingEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
