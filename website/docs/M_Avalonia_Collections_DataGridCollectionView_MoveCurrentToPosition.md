# MoveCurrentToPosition Method


Move CurrentItem to this index



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool MoveCurrentToPosition(
	int position
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function MoveCurrentToPosition ( 
	position As Integer
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MoveCurrentToPosition : 
        position : int -> bool 
override MoveCurrentToPosition : 
        position : int -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L2108" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Position we want to move the currency to</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the resulting CurrentItem is an item within the view; otherwise False

#### Implements
<a href="M_Avalonia_Collections_IDataGridCollectionView_MoveCurrentToPosition">IDataGridCollectionView.MoveCurrentToPosition(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

