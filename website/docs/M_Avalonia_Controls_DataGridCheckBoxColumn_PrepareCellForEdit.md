# PrepareCellForEdit Method


Called when a cell in the column enters editing mode.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Object PrepareCellForEdit(
	Control editingElement,
	RoutedEventArgs editingEventArgs
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function PrepareCellForEdit ( 
	editingElement As Control,
	editingEventArgs As RoutedEventArgs
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PrepareCellForEdit : 
        editingElement : Control * 
        editingEventArgs : RoutedEventArgs -> Object 
override PrepareCellForEdit : 
        editingElement : Control * 
        editingEventArgs : RoutedEventArgs -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridCheckBoxColumn.cs#L153" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The element that the column displays for a cell in editing mode.</dd><dt>  <a href="T_Avalonia_Interactivity_RoutedEventArgs">RoutedEventArgs</a></dt><dd>Information about the user gesture that is causing a cell to enter editing mode.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The unedited value.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridCheckBoxColumn">DataGridCheckBoxColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

