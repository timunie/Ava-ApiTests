# Contains Method


Return true if the item belongs to this view. No assumptions are made about the item. This method will behave similarly to IList.Contains(). If the caller knows that the item belongs to the underlying collection, it is more efficient to call PassesFilter.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool Contains(
	Object item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Contains ( 
	item As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Contains : 
        item : Object -> bool 
override Contains : 
        item : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L1852" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item we are checking to see whether it is within the collection</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
Boolean value of whether or not the collection contains the item

#### Implements
<a href="M_Avalonia_Collections_IDataGridCollectionView_Contains">IDataGridCollectionView.Contains(Object)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.ilist.contains" target="_blank" rel="noopener noreferrer">IList.Contains(Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

