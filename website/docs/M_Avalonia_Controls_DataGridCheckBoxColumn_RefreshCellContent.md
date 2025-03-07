# RefreshCellContent Method


Called by the DataGrid control when this column asks for its elements to be updated, because its CheckBoxContent or IsThreeState property changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override void RefreshCellContent(
	Control element,
	string propertyName
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Sub RefreshCellContent ( 
	element As Control,
	propertyName As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RefreshCellContent : 
        element : Control * 
        propertyName : string -> unit 
override RefreshCellContent : 
        element : Control * 
        propertyName : string -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridCheckBoxColumn.cs#L222" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridCheckBoxColumn">DataGridCheckBoxColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
