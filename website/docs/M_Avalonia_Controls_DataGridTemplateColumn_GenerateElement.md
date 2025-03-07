# GenerateElement Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Control GenerateElement(
	DataGridCell cell,
	Object dataItem
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function GenerateElement ( 
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
override GenerateElement : 
        cell : DataGridCell * 
        dataItem : Object -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridTemplateColumn.cs#L71" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridCell">DataGridCell</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridTemplateColumn">DataGridTemplateColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
