import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContainerClearing Event


Occurs each time a container is cleared.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ContainerClearingEventArgs> ContainerClearing
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event ContainerClearing As EventHandler(Of ContainerClearingEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContainerClearing : IEvent<EventHandler<ContainerClearingEventArgs>,
    ContainerClearingEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ItemsControl.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ContainerClearingEventArgs">ContainerClearingEventArgs</a>)

## 
This event is raised immediately each time an container is cleared, such as when it falls outside the range of realized items or the corresponding item is removed.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
