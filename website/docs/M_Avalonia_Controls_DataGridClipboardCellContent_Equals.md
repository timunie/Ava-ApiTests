# Equals Method


Field-by-field comparison to avoid reflection-based ValueType.Equals.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override bool Equals(
	Object obj
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function Equals ( 
	obj As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Equals : 
        obj : Object -> bool 
override Equals : 
        obj : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridClipboard.cs#L97" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>DataGridClipboardCellContent to compare.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True iff this and data are equal

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridClipboardCellContent">DataGridClipboardCellContent Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

