# RaisePropertyChangedEvent Method


Raises an event to notify the automation client of a changed property value.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RaisePropertyChangedEvent(
	AutomationProperty property,
	Object? oldValue,
	Object? newValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RaisePropertyChangedEvent ( 
	property As AutomationProperty,
	oldValue As Object,
	newValue As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RaisePropertyChangedEvent : 
        property : AutomationProperty * 
        oldValue : Object * 
        newValue : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Peers/AutomationPeer.cs#L216" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Automation_AutomationProperty">AutomationProperty</a></dt><dd>The property that changed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The previous value of the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The new value of the property.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  

