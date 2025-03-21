# CellEditingTemplate Property


Gets or sets the <a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a> which is used for the editing mode of the current <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a>



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))]
public IDataTemplate CellEditingTemplate { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType := GetType(DataGrid))>
Public Property CellEditingTemplate As IDataTemplate
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))>]
member CellEditingTemplate : IDataTemplate with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridTemplateColumn.cs#L57" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>  
An <a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a> for the editing mode of the current <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a>

## Remarks
If this property is null the column is read-only.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridTemplateColumn">DataGridTemplateColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

