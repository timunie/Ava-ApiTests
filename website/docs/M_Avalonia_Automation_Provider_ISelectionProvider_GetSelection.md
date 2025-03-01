import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetSelection Method


Retrieves a provider for each child element that is selected.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IReadOnlyList<AutomationPeer> GetSelection()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetSelection As IReadOnlyList(Of AutomationPeer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetSelection : unit -> IReadOnlyList<AutomationPeer> 
```
</TabItem>
</Tabs>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>)

## See Also


#### Reference
<a href="T_Avalonia_Automation_Provider_ISelectionProvider">ISelectionProvider Interface</a>  
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
