# RemoveAt Method


Remove the item at the given index from the underlying collection. The index is interpreted with respect to the view (filtered, sorted, and paged list).



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RemoveAt(
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RemoveAt ( 
	index As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RemoveAt : 
        index : int -> unit 
override RemoveAt : 
        index : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L2368" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Index of the item we want to remove</dd></dl>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist.removeat" target="_blank" rel="noopener noreferrer">IList.RemoveAt(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

