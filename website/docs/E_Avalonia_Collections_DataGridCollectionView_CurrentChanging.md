# CurrentChanging Event


Raised when the CurrentItem property is changing



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<DataGridCurrentChangingEventArgs> CurrentChanging
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event CurrentChanging As EventHandler(Of DataGridCurrentChangingEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CurrentChanging : IEvent<EventHandler<DataGridCurrentChangingEventArgs>,
    DataGridCurrentChangingEventArgs>
override CurrentChanging : IEvent<EventHandler<DataGridCurrentChangingEventArgs>,
    DataGridCurrentChangingEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Collections_DataGridCurrentChangingEventArgs">DataGridCurrentChangingEventArgs</a>)

#### Implements
<a href="E_Avalonia_Collections_IDataGridCollectionView_CurrentChanging">IDataGridCollectionView.CurrentChanging</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
