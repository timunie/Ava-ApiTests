import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SplitViewDisplayMode Enumeration


Defines constants for how the SplitView Pane should display



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum SplitViewDisplayMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration SplitViewDisplayMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SplitViewDisplayMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/SplitView/SplitViewDisplayMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Inline</td>
<td>0</td>
<td>Pane is displayed next to content, and does not auto collapse when tapped outside</td>
</tr>
<tr>
<td>CompactInline</td>
<td>1</td>
<td>Pane is displayed next to content. When collapsed, pane is still visible according to CompactPaneLength. Pane does not auto collapse when tapped outside</td>
</tr>
<tr>
<td>Overlay</td>
<td>2</td>
<td>Pane is displayed above content. Pane collapses when tapped outside</td>
</tr>
<tr>
<td>CompactOverlay</td>
<td>3</td>
<td>Pane is displayed above content. When collapsed, pane is still visible according to CompactPaneLength. Pane collapses when tapped outside</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
