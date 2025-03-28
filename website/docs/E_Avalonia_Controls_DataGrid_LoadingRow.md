# LoadingRow Event


Occurs after a <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a> is instantiated, so that you can customize it before it is used.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<DataGridRowEventArgs> LoadingRow
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event LoadingRow As EventHandler(Of DataGridRowEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member LoadingRow : IEvent<EventHandler<DataGridRowEventArgs>,
    DataGridRowEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_DataGridRowEventArgs">DataGridRowEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

