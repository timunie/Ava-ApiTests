import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# RaisePropertyChangedEvent Method


Raises an event to notify the automation client of a changed property value.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  <a href="T_Avalonia_Automation_AutomationProperty">AutomationProperty</a></dt><dd>The property that changed.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The previous value of the property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The new value of the property.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
