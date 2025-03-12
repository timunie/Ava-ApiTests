# FromComparer Method




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static DataGridSortDescription FromComparer(
	IComparer comparer,
	ListSortDirection direction = ListSortDirection.Ascending
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromComparer ( 
	comparer As IComparer,
	Optional direction As ListSortDirection = ListSortDirection.Ascending
) As DataGridSortDescription
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromComparer : 
        comparer : IComparer * 
        ?direction : ListSortDirection 
(* Defaults:
        let _direction = defaultArg direction ListSortDirection.Ascending
*)
-> DataGridSortDescription 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridSortDescription.cs#L261" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.icomparer" target="_blank" rel="noopener noreferrer">IComparer</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.listsortdirection" target="_blank" rel="noopener noreferrer">ListSortDirection</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Collections_DataGridSortDescription">DataGridSortDescription</a>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridSortDescription">DataGridSortDescription Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

