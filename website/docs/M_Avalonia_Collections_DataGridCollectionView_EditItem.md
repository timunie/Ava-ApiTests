# EditItem Method


Begins an editing transaction on the given item. The transaction is completed by calling either CommitEdit or CancelEdit. Any changes made to the item during the transaction are considered "pending", provided that the view supports the notion of "pending changes" for the given item.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void EditItem(
	Object item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub EditItem ( 
	item As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract EditItem : 
        item : Object -> unit 
override EditItem : 
        item : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L1881" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>Item we want to edit</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
