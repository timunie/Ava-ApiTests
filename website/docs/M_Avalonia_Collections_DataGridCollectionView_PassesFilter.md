# PassesFilter Method


Return true if the item belongs to this view. The item is assumed to belong to the underlying DataCollection; this method merely takes filters into account. It is commonly used during collection-changed notifications to determine if the added/removed item requires processing. Returns true if no filter is set on collection view.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool PassesFilter(
	Object item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function PassesFilter ( 
	item As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PassesFilter : 
        item : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L2323" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to compare against the Filter</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
Whether the item passes the filter

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

