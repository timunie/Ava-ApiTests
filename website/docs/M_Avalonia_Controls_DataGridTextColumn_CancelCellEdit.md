# CancelCellEdit Method


Causes the column cell being edited to revert to the specified value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void CancelCellEdit(
	Control editingElement,
	Object uneditedValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub CancelCellEdit ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridTextColumn.cs#L151" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The element that the column displays for a cell in editing mode.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The previous, unedited value in the cell being edited.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridTextColumn">DataGridTextColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
