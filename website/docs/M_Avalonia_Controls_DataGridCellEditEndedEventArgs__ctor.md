# DataGridCellEditEndedEventArgs Constructor


Instantiates a new instance of this class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridCellEditEndedEventArgs(
	DataGridColumn column,
	DataGridRow row,
	DataGridEditAction editAction
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	column As DataGridColumn,
	row As DataGridRow,
	editAction As DataGridEditAction
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        column : DataGridColumn * 
        row : DataGridRow * 
        editAction : DataGridEditAction -> DataGridCellEditEndedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs#L133" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a></dt><dd>The column of the cell that has just exited edit mode.</dd><dt>  <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a></dt><dd>The row container of the cell container that has just exited edit mode.</dd><dt>  <a href="T_Avalonia_Controls_DataGridEditAction">DataGridEditAction</a></dt><dd>The editing action that has been taken.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridCellEditEndedEventArgs">DataGridCellEditEndedEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

