# IsCancelable Property


Gets a value that indicates whether the <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.icollectionview.currentitem" target="_blank" rel="noopener noreferrer">CurrentItem</a> change can be canceled.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsCancelable { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property IsCancelable As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsCancelable : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/IDataGridCollectionView.cs#L45" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the event can be canceled; false if the event cannot be canceled.

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCurrentChangingEventArgs">DataGridCurrentChangingEventArgs Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

