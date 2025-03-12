# SortDescriptions Property


Gets the Sort criteria to sort items in collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridSortDescriptionCollection SortDescriptions { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property SortDescriptions As DataGridSortDescriptionCollection
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SortDescriptions : DataGridSortDescriptionCollection with get
override SortDescriptions : DataGridSortDescriptionCollection with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L943" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Collections_DataGridSortDescriptionCollection">DataGridSortDescriptionCollection</a>

#### Implements
<a href="P_Avalonia_Collections_IDataGridCollectionView_SortDescriptions">IDataGridCollectionView.SortDescriptions</a>  

Clear a sort criteria by assigning SortDescription.Empty to this property. One or more sort criteria in form of  can be used, each specifying a property and direction to sort by.


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>Simpler implementations do not support sorting and will throw a NotSupportedException. Use  property to test if sorting is supported before adding to SortDescriptions.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
<a href="T_Avalonia_Collections_DataGridSortDescription">DataGridSortDescription</a>  
<a href="P_Avalonia_Collections_DataGridCollectionView_CanSort">CanSort</a>  

