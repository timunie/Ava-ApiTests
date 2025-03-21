# GetGroupFromItem Method


Returns the Group at the indicated level or null if the item is not in the ItemsSource



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridCollectionViewGroup GetGroupFromItem(
	Object item,
	int groupLevel
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetGroupFromItem ( 
	item As Object,
	groupLevel As Integer
) As DataGridCollectionViewGroup
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetGroupFromItem : 
        item : Object * 
        groupLevel : int -> DataGridCollectionViewGroup 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L5997" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>item</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>groupLevel</dd></dl>

#### Return Value
<a href="T_Avalonia_Collections_DataGridCollectionViewGroup">DataGridCollectionViewGroup</a>  
The group the given item falls under or null if the item is not in the ItemsSource

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

