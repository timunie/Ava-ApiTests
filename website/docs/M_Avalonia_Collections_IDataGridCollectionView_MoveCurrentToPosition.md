# MoveCurrentToPosition Method


Sets the item at the specified index to be the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> in the view.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool MoveCurrentToPosition(
	int position
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function MoveCurrentToPosition ( 
	position As Integer
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MoveCurrentToPosition : 
        position : int -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index to set the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> to.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the resulting <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> is an item in the view; otherwise, false.

## See Also


#### Reference
<a href="T_Avalonia_Collections_IDataGridCollectionView">IDataGridCollectionView Interface</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

