# DataGridRowEditEndingEventArgs Constructor


Instantiates a new instance of this class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridRowEditEndingEventArgs(
	DataGridRow row,
	DataGridEditAction editAction
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	row As DataGridRow,
	editAction As DataGridEditAction
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        row : DataGridRow * 
        editAction : DataGridEditAction -> DataGridRowEditEndingEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs#L389" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a></dt><dd>The row container of the cell container that is about to exit edit mode.</dd><dt>  <a href="T_Avalonia_Controls_DataGridEditAction">DataGridEditAction</a></dt><dd>The editing action that will be taken.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridRowEditEndingEventArgs">DataGridRowEditEndingEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

