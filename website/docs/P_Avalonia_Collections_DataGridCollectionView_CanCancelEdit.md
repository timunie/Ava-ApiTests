# CanCancelEdit Property


Gets a value indicating whether the view supports the notion of "pending changes" on the current edit item. This may vary, depending on the view and the particular item. For example, a view might return true if the current edit item implements IEditableObject, or if the view has special knowledge about the item that it can use to support rollback of pending changes.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool CanCancelEdit { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property CanCancelEdit As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CanCancelEdit : bool with get
override CanCancelEdit : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L395" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

