import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetSelection Method




## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<AutomationPeer> GetSelection()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetSelection As IReadOnlyList(Of AutomationPeer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetSelection : unit -> IReadOnlyList<AutomationPeer> 
override GetSelection : unit -> IReadOnlyList<AutomationPeer> 
```
</TabItem>
</Tabs>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)

#### Implements
<a href="M_Avalonia_Automation_Provider_ISelectionProvider_GetSelection">ISelectionProvider.GetSelection()</a>  


## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer">SelectingItemsControlAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
