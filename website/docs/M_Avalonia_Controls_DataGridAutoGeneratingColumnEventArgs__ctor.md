# DataGridAutoGeneratingColumnEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_DataGridAutoGeneratingColumnEventArgs">DataGridAutoGeneratingColumnEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DataGridAutoGeneratingColumnEventArgs(
	string propertyName,
	Type propertyType,
	DataGridColumn column
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	propertyName As String,
	propertyType As Type,
	column As DataGridColumn
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        propertyName : string * 
        propertyType : Type * 
        column : DataGridColumn -> DataGridAutoGeneratingColumnEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/EventArgs.cs#L31" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the property bound to the generated column.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the property bound to the generated column.</dd><dt>  <a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn</a></dt><dd>The generated column.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridAutoGeneratingColumnEventArgs">DataGridAutoGeneratingColumnEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

