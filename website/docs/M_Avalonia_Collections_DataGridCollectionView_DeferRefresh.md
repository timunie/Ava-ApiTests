# DeferRefresh Method


Enter a Defer Cycle. Defer cycles are used to coalesce changes to the ICollectionView.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDisposable DeferRefresh()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function DeferRefresh As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DeferRefresh : unit -> IDisposable 
override DeferRefresh : unit -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L1864" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
IDisposable used to notify that we no longer need to defer, when we dispose

#### Implements
<a href="M_Avalonia_Collections_IDataGridCollectionView_DeferRefresh">IDataGridCollectionView.DeferRefresh()</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

