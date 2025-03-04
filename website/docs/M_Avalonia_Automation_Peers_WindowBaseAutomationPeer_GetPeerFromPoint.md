import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetPeerFromPoint Method




## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AutomationPeer? GetPeerFromPoint(
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetPeerFromPoint ( 
	p As Point
) As AutomationPeer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetPeerFromPoint : 
        p : Point -> AutomationPeer 
override GetPeerFromPoint : 
        p : Point -> AutomationPeer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/Peers/WindowBaseAutomationPeer.cs#L34" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  Point</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>

#### Implements
<a href="M_Avalonia_Automation_Provider_IRootProvider_GetPeerFromPoint">IRootProvider.GetPeerFromPoint(Point)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_WindowBaseAutomationPeer">WindowBaseAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
