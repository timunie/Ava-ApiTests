# CommitEdit(DataGridEditingUnit, Boolean) Method


Commits editing mode for the specified DataGridEditingUnit and pushes changes to the backend.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool CommitEdit(
	DataGridEditingUnit editingUnit,
	bool exitEditingMode
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CommitEdit ( 
	editingUnit As DataGridEditingUnit,
	exitEditingMode As Boolean
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CommitEdit : 
        editingUnit : DataGridEditingUnit * 
        exitEditingMode : bool -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L2030" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridEditingUnit">DataGridEditingUnit</a></dt><dd>Specifies whether to commit edit for a Cell or Row.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Editing mode is left if True.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if operation was successful. False otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="Overload_Avalonia_Controls_DataGrid_CommitEdit">CommitEdit Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

