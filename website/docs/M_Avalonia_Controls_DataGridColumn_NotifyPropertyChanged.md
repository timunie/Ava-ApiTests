# NotifyPropertyChanged Method


Called by a specific column type when one of its properties changed, and its current cells need to be updated.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void NotifyPropertyChanged(
	string propertyName
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub NotifyPropertyChanged ( 
	propertyName As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member NotifyPropertyChanged : 
        propertyName : string -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridColumn.cs#L772" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>Indicates which property changed and caused this call</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridColumn">DataGridColumn Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

