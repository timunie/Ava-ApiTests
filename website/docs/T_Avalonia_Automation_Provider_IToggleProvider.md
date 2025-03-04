import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IToggleProvider Interface


Exposes methods and properties to support UI Automation client access to controls that can cycle through a set of states and maintain a particular state.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IToggleProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IToggleProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IToggleProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/Provider/IToggleProvider.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IToggleProvider_ToggleState">ToggleState</a></td>
<td>Gets the toggle state of the control.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IToggleProvider_Toggle">Toggle()</a></td>
<td>Cycles through the toggle states of a control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
