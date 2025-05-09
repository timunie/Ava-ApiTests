# IsOffscreen Method


Gets a value that indicates whether an element is off the screen.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsOffscreen()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function IsOffscreen As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsOffscreen : unit -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Peers/AutomationPeer.cs#L170" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
This property does not indicate whether the element is visible. In some circumstances, an element is on the screen but is still not visible. For example, if the element is on the screen but obscured by other elements, it might not be visible. In this case, the method returns false.

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  

