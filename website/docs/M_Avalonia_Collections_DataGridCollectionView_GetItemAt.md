# GetItemAt Method


Retrieve item at the given zero-based index in this DataGridCollectionView, after the source collection is filtered, sorted, and paged.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object GetItemAt(
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetItemAt ( 
	index As Integer
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetItemAt : 
        index : int -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/Collections/DataGridCollectionView.cs#L1969" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Index of the item we want to retrieve</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
Item at specified index

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>Thrown if index is out of range</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Collections_DataGridCollectionView">DataGridCollectionView Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
