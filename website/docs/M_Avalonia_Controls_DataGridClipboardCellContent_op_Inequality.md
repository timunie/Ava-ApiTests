# Inequality Operator


Field-by-field comparison to avoid reflection-based ValueType.Equals.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	DataGridClipboardCellContent clipboardCellContent1,
	DataGridClipboardCellContent clipboardCellContent2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	clipboardCellContent1 As DataGridClipboardCellContent,
	clipboardCellContent2 As DataGridClipboardCellContent
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        clipboardCellContent1 : DataGridClipboardCellContent * 
        clipboardCellContent2 : DataGridClipboardCellContent  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridClipboard.cs#L134" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_DataGridClipboardCellContent">DataGridClipboardCellContent</a></dt><dd>The first DataGridClipboardCellContent.</dd><dt>  <a href="T_Avalonia_Controls_DataGridClipboardCellContent">DataGridClipboardCellContent</a></dt><dd>The second DataGridClipboardCellContent.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True iff clipboardCellContent1 and clipboardCellContent2 are NOT equal.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridClipboardCellContent">DataGridClipboardCellContent Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
