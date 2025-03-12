# Filter Property


Gets or sets the Filter, which is a callback set by the consumer of the ICollectionView and used by the implementation of the ICollectionView to determine if an item is suitable for inclusion in the view.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Func<Object, bool> Filter { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Filter As Func(Of Object, Boolean)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Filter : Func<Object, bool> with get, set
override Filter : Func<Object, bool> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L620" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

#### Implements
<a href="P_Avalonia_Collections_IDataGridCollectionView_Filter">IDataGridCollectionView.Filter</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>Simpler implementations do not support filtering and will throw a NotSupportedException. Use  property to test if filtering is supported before assigning a non-null value.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
<a href="P_Avalonia_Collections_DataGridCollectionView_CanFilter">CanFilter</a>  

