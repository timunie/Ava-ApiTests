# CellTemplate Property




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ContentAttribute]
[InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))]
public IDataTemplate CellTemplate { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ContentAttribute>
<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType := GetType(DataGrid))>
Public Property CellTemplate As IDataTemplate
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ContentAttribute>]
[<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))>]
member CellTemplate : IDataTemplate with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridTemplateColumn.cs#L30" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridTemplateColumn">DataGridTemplateColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

