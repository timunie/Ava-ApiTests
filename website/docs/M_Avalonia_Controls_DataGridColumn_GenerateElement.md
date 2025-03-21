# GenerateElement Method


When overridden in a derived class, gets a read-only element that is bound to the column's <a href="P_Avalonia_Controls_DataGridBoundColumn_Binding">Binding</a> property value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract Control GenerateElement(
	DataGridCell cell,
	Object dataItem
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function GenerateElement ( 
	cell As DataGridCell,
	dataItem As Object
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GenerateElement : 
        cell : DataGridCell * 
        dataItem : Object -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridColumn.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a></dt><dd>The cell that will contain the generated element.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data item represented by the row that contains the intended cell.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
A new, read-only element that is bound to the column's <a href="P_Avalonia_Controls_DataGridBoundColumn_Binding">Binding</a> property value.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

