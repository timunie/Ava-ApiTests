# DataGridCellPointerPressedEventArgs Constructor


Instantiates a new instance of this class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridCellPointerPressedEventArgs(
	DataGridCell cell,
	DataGridRow row,
	DataGridColumn column,
	PointerPressedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	cell As DataGridCell,
	row As DataGridRow,
	column As DataGridColumn,
	e As PointerPressedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        cell : DataGridCell * 
        row : DataGridRow * 
        column : DataGridColumn * 
        e : PointerPressedEventArgs -> DataGridCellPointerPressedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs#L181" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a></dt><dd>The cell that has been pressed.</dd><dt>  <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a></dt><dd>The row container of the cell that has been pressed.</dd><dt>  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a></dt><dd>The column of the cell that has been pressed.</dd><dt>  <a href="T_Avalonia_Input_PointerPressedEventArgs">PointerPressedEventArgs</a></dt><dd>The pointer action that has been taken.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridCellPointerPressedEventArgs">DataGridCellPointerPressedEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

