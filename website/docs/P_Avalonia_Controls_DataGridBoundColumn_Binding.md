# Binding Property


Gets or sets the binding that associates the column with a property in the data source.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[AssignBindingAttribute]
[InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))]
public virtual IBinding Binding { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<AssignBindingAttribute>
<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType := GetType(DataGrid))>
Public Overridable Property Binding As IBinding
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AssignBindingAttribute>]
[<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))>]
abstract Binding : IBinding with get, set
[<AssignBindingAttribute>]
[<InheritDataTypeFromItemsAttribute("ItemsSource", AncestorType = typeof(DataGrid))>]
override Binding : IBinding with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridBoundColumn.cs#L33" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Data_IBinding">IBinding</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridBoundColumn">DataGridBoundColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

