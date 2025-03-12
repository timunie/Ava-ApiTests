# ExpandCollapseState Enumeration


Contains values that specify the ExpandCollapseState of a UI Automation element.



## Definition
**Namespace:** <a href="N_Avalonia_Automation">Avalonia.Automation</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ExpandCollapseState
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ExpandCollapseState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ExpandCollapseState
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/ExpandCollapseState.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Collapsed</td>
<td>0</td>
<td>No child nodes, controls, or content of the UI Automation element are displayed.</td>
</tr>
<tr>
<td>Expanded</td>
<td>1</td>
<td>All child nodes, controls or content of the UI Automation element are displayed.</td>
</tr>
<tr>
<td>LeafNode</td>
<td>2</td>
<td>The UI Automation element has no child nodes, controls, or content to display.</td>
</tr>
<tr>
<td>PartiallyExpanded</td>
<td>3</td>
<td>Some, but not all, child nodes, controls, or content of the UI Automation element are displayed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation">Avalonia.Automation Namespace</a>  

