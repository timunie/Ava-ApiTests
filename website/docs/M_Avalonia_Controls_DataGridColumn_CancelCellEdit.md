# CancelCellEdit Method


When overridden in a derived class, causes the column cell being edited to revert to the unedited value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void CancelCellEdit(
	Control editingElement,
	Object uneditedValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub CancelCellEdit ( 
	editingElement As Control,
	uneditedValue As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CancelCellEdit : 
        editingElement : Control * 
        uneditedValue : Object -> unit 
override CancelCellEdit : 
        editingElement : Control * 
        uneditedValue : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridColumn.cs#L733" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The element that the column displays for a cell in editing mode.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The previous, unedited value in the cell being edited.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

