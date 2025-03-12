# DataGridBeginningEditEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_DataGridBeginningEditEventArgs">DataGridBeginningEditEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridBeginningEditEventArgs(
	DataGridColumn column,
	DataGridRow row,
	RoutedEventArgs editingEventArgs
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	column As DataGridColumn,
	row As DataGridRow,
	editingEventArgs As RoutedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        column : DataGridColumn * 
        row : DataGridRow * 
        editingEventArgs : RoutedEventArgs -> DataGridBeginningEditEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs#L84" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a></dt><dd>The column that contains the cell to be edited.</dd><dt>  <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a></dt><dd>The row that contains the cell to be edited.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a></dt><dd>Information about the user gesture that caused the cell to enter edit mode.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridBeginningEditEventArgs">DataGridBeginningEditEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

