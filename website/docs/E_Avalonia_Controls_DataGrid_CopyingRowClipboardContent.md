# CopyingRowClipboardContent Event


This event is raised by OnCopyingRowClipboardContent method after the default row content is prepared. Event listeners can modify or add to the row clipboard content.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<DataGridRowClipboardEventArgs> CopyingRowClipboardContent
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event CopyingRowClipboardContent As EventHandler(Of DataGridRowClipboardEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CopyingRowClipboardContent : IEvent<EventHandler<DataGridRowClipboardEventArgs>,
    DataGridRowClipboardEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_DataGridRowClipboardEventArgs">DataGridRowClipboardEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

