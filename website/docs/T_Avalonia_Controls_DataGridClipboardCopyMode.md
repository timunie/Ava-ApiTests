# DataGridClipboardCopyMode Enumeration


Defines modes that indicates how DataGrid content is copied to the Clipboard.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum DataGridClipboardCopyMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration DataGridClipboardCopyMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DataGridClipboardCopyMode
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>Disable the DataGrid's ability to copy selected items as text.</td>
</tr>
<tr>
<td>ExcludeHeader</td>
<td>1</td>
<td>Enable the DataGrid's ability to copy selected items as text, but do not include the column header content as the first line in the text that gets copied to the Clipboard.</td>
</tr>
<tr>
<td>IncludeHeader</td>
<td>2</td>
<td>Enable the DataGrid's ability to copy selected items as text, and include the column header content as the first line in the text that gets copied to the Clipboard.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

