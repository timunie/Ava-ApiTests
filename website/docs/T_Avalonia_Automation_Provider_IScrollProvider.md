import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IScrollProvider Interface


Exposes methods and properties to support access by a UI Automation client to a control that acts as a scrollable container for a collection of child objects.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IScrollProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IScrollProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IScrollProvider = interface end
```
</TabItem>
</Tabs>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IScrollProvider_HorizontallyScrollable">HorizontallyScrollable</a></td>
<td>Gets a value that indicates whether the control can scroll horizontally.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IScrollProvider_HorizontalScrollPercent">HorizontalScrollPercent</a></td>
<td>Gets the current horizontal scroll position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IScrollProvider_HorizontalViewSize">HorizontalViewSize</a></td>
<td>Gets the current horizontal view size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IScrollProvider_VerticallyScrollable">VerticallyScrollable</a></td>
<td>Gets a value that indicates whether the control can scroll vertically.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IScrollProvider_VerticalScrollPercent">VerticalScrollPercent</a></td>
<td>Gets the current vertical scroll position.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IScrollProvider_VerticalViewSize">VerticalViewSize</a></td>
<td>Gets the vertical view size.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IScrollProvider_Scroll">Scroll</a></td>
<td>Scrolls the visible region of the content area horizontally and vertically.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IScrollProvider_SetScrollPercent">SetScrollPercent</a></td>
<td>Sets the horizontal and vertical scroll position as a percentage of the total content area within the control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
