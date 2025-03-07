# CancelEdit(DataGridEditingUnit) Method


Cancels editing mode for the specified DataGridEditingUnit and restores its original value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool CancelEdit(
	DataGridEditingUnit editingUnit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CancelEdit ( 
	editingUnit As DataGridEditingUnit
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CancelEdit : 
        editingUnit : DataGridEditingUnit -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L2009" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridEditingUnit">DataGridEditingUnit</a></dt><dd>Specifies whether to cancel edit for a Cell or Row.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if operation was successful. False otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="Overload_Avalonia_Controls_DataGrid_CancelEdit">CancelEdit Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
