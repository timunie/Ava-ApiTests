import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PlacementMode Enumeration


Defines the placement for a <a href="T_Avalonia_Controls_Primitives_Popup">Popup</a> control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum PlacementMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration PlacementMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type PlacementMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/PlacementMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Pointer</td>
<td>0</td>
<td>The popup is placed at the pointer position.</td>
</tr>
<tr>
<td>Bottom</td>
<td>1</td>
<td>Preferred location is below the target element.</td>
</tr>
<tr>
<td>Right</td>
<td>2</td>
<td>Preferred location is to the right of the target element.</td>
</tr>
<tr>
<td>Left</td>
<td>3</td>
<td>Preferred location is to the left of the target element.</td>
</tr>
<tr>
<td>Top</td>
<td>4</td>
<td>Preferred location is above the target element.</td>
</tr>
<tr>
<td>Center</td>
<td>5</td>
<td>Preferred location is centered over the target element.</td>
</tr>
<tr>
<td>AnchorAndGravity</td>
<td>6</td>
<td>The popup is placed according to <a href="P_Avalonia_Controls_Primitives_Popup_PlacementAnchor">PlacementAnchor</a> and <a href="P_Avalonia_Controls_Primitives_Popup_PlacementGravity">PlacementGravity</a> rules.</td>
</tr>
<tr>
<td>TopEdgeAlignedLeft</td>
<td>7</td>
<td>Preferred location is above the target element, with the left edge of the popup aligned with the left edge of the target element.</td>
</tr>
<tr>
<td>TopEdgeAlignedRight</td>
<td>8</td>
<td>Preferred location is above the target element, with the right edge of popup aligned with right edge of the target element.</td>
</tr>
<tr>
<td>BottomEdgeAlignedLeft</td>
<td>9</td>
<td>Preferred location is below the target element, with the left edge of popup aligned with left edge of the target element.</td>
</tr>
<tr>
<td>BottomEdgeAlignedRight</td>
<td>10</td>
<td>Preferred location is below the target element, with the right edge of popup aligned with right edge of the target element.</td>
</tr>
<tr>
<td>LeftEdgeAlignedTop</td>
<td>11</td>
<td>Preferred location is to the left of the target element, with the top edge of popup aligned with top edge of the target element.</td>
</tr>
<tr>
<td>LeftEdgeAlignedBottom</td>
<td>12</td>
<td>Preferred location is to the left of the target element, with the bottom edge of popup aligned with bottom edge of the target element.</td>
</tr>
<tr>
<td>RightEdgeAlignedTop</td>
<td>13</td>
<td>Preferred location is to the right of the target element, with the top edge of popup aligned with top edge of the target element.</td>
</tr>
<tr>
<td>RightEdgeAlignedBottom</td>
<td>14</td>
<td>Preferred location is to the right of the target element, with the bottom edge of popup aligned with bottom edge of the target element.</td>
</tr>
<tr>
<td>Custom</td>
<td>15</td>
<td>A position and repositioning behavior that is defined by the <a href="P_Avalonia_Controls_Primitives_Popup_CustomPopupPlacementCallback">CustomPopupPlacementCallback</a> property.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
