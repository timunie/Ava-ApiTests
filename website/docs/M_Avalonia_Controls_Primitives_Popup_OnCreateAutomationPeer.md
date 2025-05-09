# OnCreateAutomationPeer Method


Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override AutomationPeer OnCreateAutomationPeer()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function OnCreateAutomationPeer As AutomationPeer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnCreateAutomationPeer : unit -> AutomationPeer 
override OnCreateAutomationPeer : unit -> AutomationPeer 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/Popup.cs#L741" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>  
The type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_Popup">Popup Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

