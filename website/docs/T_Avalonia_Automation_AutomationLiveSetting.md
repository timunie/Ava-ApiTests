import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AutomationLiveSetting Enumeration


Describes the notification characteristics of a particular live region



## Definition
**Namespace:** <a href="N_Avalonia_Automation">Avalonia.Automation</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum AutomationLiveSetting
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration AutomationLiveSetting
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AutomationLiveSetting
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/AutomationLiveSetting.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Off</td>
<td>0</td>
<td>The element does not send notifications if the content of the live region has changed.</td>
</tr>
<tr>
<td>Polite</td>
<td>1</td>
<td>The element sends non-interruptive notifications if the content of the live region has changed. With this setting, UI Automation clients and assistive technologies are expected to not interrupt the user to inform of changes to the live region.</td>
</tr>
<tr>
<td>Assertive</td>
<td>2</td>
<td>The element sends interruptive notifications if the content of the live region has changed. With this setting, UI Automation clients and assistive technologies are expected to interrupt the user to inform of changes to the live region.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation">Avalonia.Automation Namespace</a>  
