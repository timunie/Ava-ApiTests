# MoveCurrentTo Method


Sets the specified item in the view as the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool MoveCurrentTo(
	Object item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function MoveCurrentTo ( 
	item As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MoveCurrentTo : 
        item : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to set as the current item.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the resulting <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> is an item in the view; otherwise, false.

## See Also


#### Reference
<a href="T_Avalonia_Collections_IDataGridCollectionView">IDataGridCollectionView Interface</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

