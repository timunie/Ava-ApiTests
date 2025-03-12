# GenerateEditingElement Method


When overridden in a derived class, gets an editing element that is bound to the column's <a href="P_Avalonia_Controls_DataGridBoundColumn_Binding">Binding</a> property value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract Control GenerateEditingElement(
	DataGridCell cell,
	Object dataItem,
	out ICellEditBinding binding
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function GenerateEditingElement ( 
	cell As DataGridCell,
	dataItem As Object,
	<OutAttribute> ByRef binding As ICellEditBinding
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GenerateEditingElement : 
        cell : DataGridCell * 
        dataItem : Object * 
        binding : ICellEditBinding byref -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridColumn.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a></dt><dd>The cell that will contain the generated element.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data item represented by the row that contains the intended cell.</dd><dt>  <a href="T_Avalonia_Controls_Utils_ICellEditBinding">ICellEditBinding</a></dt><dd>When the method returns, contains the applied binding.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
A new editing element that is bound to the column's <a href="P_Avalonia_Controls_DataGridBoundColumn_Binding">Binding</a> property value.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

