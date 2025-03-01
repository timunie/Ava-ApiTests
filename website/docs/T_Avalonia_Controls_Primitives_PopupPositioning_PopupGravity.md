import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PopupGravity Enumeration


Defines the direction in which a popup will open.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum PopupGravity
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration PopupGravity
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type PopupGravity
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>The popup will be centered over the anchor edge.</td>
</tr>
<tr>
<td>Top</td>
<td>1</td>
<td>The popup will be positioned above the anchor edge</td>
</tr>
<tr>
<td>Bottom</td>
<td>2</td>
<td>The popup will be positioned below the anchor edge</td>
</tr>
<tr>
<td>Left</td>
<td>4</td>
<td>The popup will be positioned to the left of the anchor edge</td>
</tr>
<tr>
<td>TopLeft</td>
<td>5</td>
<td>The popup will be positioned to the top-left of the anchor edge</td>
</tr>
<tr>
<td>BottomLeft</td>
<td>6</td>
<td>The popup will be positioned to the bottom-left of the anchor edge</td>
</tr>
<tr>
<td>Right</td>
<td>8</td>
<td>The popup will be positioned to the right of the anchor edge</td>
</tr>
<tr>
<td>TopRight</td>
<td>9</td>
<td>The popup will be positioned to the top-right of the anchor edge</td>
</tr>
<tr>
<td>BottomRight</td>
<td>10</td>
<td>The popup will be positioned to the bottom-right of the anchor edge</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
