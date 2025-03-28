# DeferRefresh Method


Enters a defer cycle that you can use to merge changes to the view and delay automatic refresh.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDisposable DeferRefresh()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function DeferRefresh As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract DeferRefresh : unit -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
The typical usage is to create a using scope with an implementation of this method and then include multiple view-changing calls within the scope. The implementation should delay automatic refresh until after the using scope exits.

## See Also


#### Reference
<a href="T_Avalonia_Collections_IDataGridCollectionView">IDataGridCollectionView Interface</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

