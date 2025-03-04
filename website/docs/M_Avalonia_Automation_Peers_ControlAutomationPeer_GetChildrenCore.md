import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetChildrenCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual IReadOnlyList<AutomationPeer>? GetChildrenCore()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function GetChildrenCore As IReadOnlyList(Of AutomationPeer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetChildrenCore : unit -> IReadOnlyList<AutomationPeer> 
override GetChildrenCore : unit -> IReadOnlyList<AutomationPeer> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/Peers/ControlAutomationPeer.cs#L81" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
