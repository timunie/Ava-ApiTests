# ScrollIntoView Method


Scrolls the specified item or RowGroupHeader and/or column into view. If item is not null: scrolls the row representing the item into view; If column is not null: scrolls the column into view; If both item and column are null, the method returns without scrolling.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ScrollIntoView(
	Object item,
	DataGridColumn column
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ScrollIntoView ( 
	item As Object,
	column As DataGridColumn
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ScrollIntoView : 
        item : Object * 
        column : DataGridColumn -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L2054" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>an item from the DataGrid's items source or a CollectionViewGroup from the collection view</dd><dt>  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a></dt><dd>a column from the DataGrid's columns collection</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
