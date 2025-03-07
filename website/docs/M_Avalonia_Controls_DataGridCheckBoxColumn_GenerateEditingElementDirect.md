# GenerateEditingElementDirect Method


Gets a <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.checkbox" target="_blank" rel="noopener noreferrer">CheckBox</a> control that is bound to the column's <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.datagridboundcolumn.binding" target="_blank" rel="noopener noreferrer">Binding</a> property value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Control GenerateEditingElementDirect(
	DataGridCell cell,
	Object dataItem
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function GenerateEditingElementDirect ( 
	cell As DataGridCell,
	dataItem As Object
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GenerateEditingElementDirect : 
        cell : DataGridCell * 
        dataItem : Object -> Control 
override GenerateEditingElementDirect : 
        cell : DataGridCell * 
        dataItem : Object -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridCheckBoxColumn.cs#L89" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a></dt><dd>The cell that will contain the generated element.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data item represented by the row that contains the intended cell.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
A new <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.checkbox" target="_blank" rel="noopener noreferrer">CheckBox</a> control that is bound to the column's <a href="https://learn.microsoft.com/dotnet/api/system.windows.controls.datagridboundcolumn.binding" target="_blank" rel="noopener noreferrer">Binding</a> property value.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridCheckBoxColumn">DataGridCheckBoxColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
