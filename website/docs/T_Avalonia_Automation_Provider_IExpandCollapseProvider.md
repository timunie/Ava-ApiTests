import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IExpandCollapseProvider Interface


Exposes methods and properties to support UI Automation client access to controls that visually expand to display content and collapse to hide content.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IExpandCollapseProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IExpandCollapseProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IExpandCollapseProvider = interface end
```
</TabItem>
</Tabs>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IExpandCollapseProvider_ExpandCollapseState">ExpandCollapseState</a></td>
<td>Gets the state, expanded or collapsed, of the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IExpandCollapseProvider_ShowsMenu">ShowsMenu</a></td>
<td>Gets a value indicating whether expanding the element shows a menu of items to the user, such as drop-down list.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IExpandCollapseProvider_Collapse">Collapse</a></td>
<td>Hides all nodes, controls, or content that are descendants of the control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IExpandCollapseProvider_Expand">Expand</a></td>
<td>Displays all child nodes, controls, or content of the control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
