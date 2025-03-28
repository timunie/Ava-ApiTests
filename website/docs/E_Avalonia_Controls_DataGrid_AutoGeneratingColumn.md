# AutoGeneratingColumn Event


Occurs one time for each public, non-static property in the bound data type when the <a href="P_Avalonia_Controls_DataGrid_ItemsSource">ItemsSource</a> property is changed and the <a href="P_Avalonia_Controls_DataGrid_AutoGenerateColumns">AutoGenerateColumns</a> property is true.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<DataGridAutoGeneratingColumnEventArgs> AutoGeneratingColumn
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event AutoGeneratingColumn As EventHandler(Of DataGridAutoGeneratingColumnEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AutoGeneratingColumn : IEvent<EventHandler<DataGridAutoGeneratingColumnEventArgs>,
    DataGridAutoGeneratingColumnEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_DataGridAutoGeneratingColumnEventArgs">DataGridAutoGeneratingColumnEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

