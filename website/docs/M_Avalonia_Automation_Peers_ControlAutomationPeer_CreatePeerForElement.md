# CreatePeerForElement Method


Gets the <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> for a <a href="T_Avalonia_Controls_Control">Control</a>, creating it if necessary.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AutomationPeer CreatePeerForElement(
	Control element
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function CreatePeerForElement ( 
	element As Control
) As AutomationPeer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member CreatePeerForElement : 
        element : Control -> AutomationPeer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Peers/ControlAutomationPeer.cs#L46" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>  
The automation peer.Despite the name (which comes from the analogous WPF API), this method does not create a new peer if one already exists: instead it returns the existing peer.

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_ControlAutomationPeer">ControlAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
