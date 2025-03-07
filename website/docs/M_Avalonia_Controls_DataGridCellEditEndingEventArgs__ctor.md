# DataGridCellEditEndingEventArgs Constructor


Instantiates a new instance of this class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridCellEditEndingEventArgs(
	DataGridColumn column,
	DataGridRow row,
	Control editingElement,
	DataGridEditAction editAction
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	column As DataGridColumn,
	row As DataGridRow,
	editingElement As Control,
	editAction As DataGridEditAction
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        column : DataGridColumn * 
        row : DataGridRow * 
        editingElement : Control * 
        editAction : DataGridEditAction -> DataGridCellEditEndingEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs#L225" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a></dt><dd>The column of the cell that is about to exit edit mode.</dd><dt>  <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a></dt><dd>The row container of the cell container that is about to exit edit mode.</dd><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The editing element within the cell.</dd><dt>  <a href="T_Avalonia_Controls_DataGridEditAction">DataGridEditAction</a></dt><dd>The editing action that will be taken.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridCellEditEndingEventArgs">DataGridCellEditEndingEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
