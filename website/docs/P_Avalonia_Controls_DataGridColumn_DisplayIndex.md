# DisplayIndex Property


Gets or sets the display position of the column relative to the other columns in the <a href="T_Avalonia_Controls_DataGrid">DataGrid</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int DisplayIndex \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property DisplayIndex As Integer
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DisplayIndex : int with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridColumn.cs#L380" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The zero-based position of the column as it is displayed in the associated <a href="T_Avalonia_Controls_DataGrid">DataGrid</a>. The default is the index of the corresponding <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection-1.item" target="_blank" rel="noopener noreferrer">Item(Int32)</a> in the <a href="P_Avalonia_Controls_DataGrid_Columns">Columns</a> collection.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception" target="_blank" rel="noopener noreferrer">ArgumentOutOfRangeException</a></td>
<td>When setting this property, the specified value is less than -1 or equal to <a href="https://learn.microsoft.com/dotnet/api/system.int32.maxvalue" target="_blank" rel="noopener noreferrer">MaxValue</a>. -or- When setting this property on a column in a <a href="T_Avalonia_Controls_DataGrid">DataGrid</a>, the specified value is less than zero or greater than or equal to the number of columns in the <a href="T_Avalonia_Controls_DataGrid">DataGrid</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>When setting this property, the <a href="T_Avalonia_Controls_DataGrid">DataGrid</a> is already making DisplayIndex adjustments. For example, this exception is thrown when you attempt to set DisplayIndex in a <a href="E_Avalonia_Controls_DataGrid_ColumnDisplayIndexChanged">ColumnDisplayIndexChanged</a> event handler. -or- When setting this property, the specified value would result in a frozen column being displayed in the range of unfrozen columns, or an unfrozen column being displayed in the range of frozen columns.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
