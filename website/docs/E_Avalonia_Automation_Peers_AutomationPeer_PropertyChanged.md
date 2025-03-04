import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PropertyChanged Event


Occurs when a property value of the automation peer has changed.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<AutomationPropertyChangedEventArgs> PropertyChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event PropertyChanged As EventHandler(Of AutomationPropertyChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PropertyChanged : IEvent<EventHandler<AutomationPropertyChangedEventArgs>,
    AutomationPropertyChangedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/Peers/AutomationPeer.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Automation_AutomationPropertyChangedEventArgs">AutomationPropertyChangedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
