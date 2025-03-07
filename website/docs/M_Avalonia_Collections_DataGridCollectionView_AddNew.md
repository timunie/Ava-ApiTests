# AddNew Method


Add a new item to the underlying collection. Returns the new item. After calling AddNew and changing the new item as desired, either CommitNew or CancelNew" should be called to complete the transaction.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object AddNew()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function AddNew As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract AddNew : unit -> Object 
override AddNew : unit -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L1183" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The new item we are adding

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
