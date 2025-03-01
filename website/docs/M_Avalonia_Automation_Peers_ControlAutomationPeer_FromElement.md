import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FromElement Method


Gets an existing <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> for a <a href="T_Avalonia_Controls_Control">Control</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AutomationPeer? FromElement(
	Control element
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromElement ( 
	element As Control
) As AutomationPeer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromElement : 
        element : Control -> AutomationPeer 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>  
The automation peer if already created; otherwise null.To ensure that a peer is created, use <a href="M_Avalonia_Automation_Peers_ControlAutomationPeer_CreatePeerForElement">CreatePeerForElement(Control)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
