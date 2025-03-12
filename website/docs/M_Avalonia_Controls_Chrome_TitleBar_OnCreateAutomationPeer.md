# OnCreateAutomationPeer Method


Returns a new, type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation for the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Chrome">Avalonia.Controls.Chrome</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Chrome/TitleBar.cs#L101" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a>  
The type-specific <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> implementation.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Chrome_TitleBar">TitleBar Class</a>  
<a href="N_Avalonia_Controls_Chrome">Avalonia.Controls.Chrome Namespace</a>  

