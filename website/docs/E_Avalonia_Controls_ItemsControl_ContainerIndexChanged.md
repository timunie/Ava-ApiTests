import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ContainerIndexChanged Event


Occurs for each realized container when the index for the item it represents has changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ContainerIndexChangedEventArgs> ContainerIndexChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event ContainerIndexChanged As EventHandler(Of ContainerIndexChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContainerIndexChanged : IEvent<EventHandler<ContainerIndexChangedEventArgs>,
    ContainerIndexChangedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ContainerIndexChangedEventArgs">ContainerIndexChangedEventArgs</a>)This event is raised for each realized container where the index for the item it represents has changed. For example, when another item is added or removed in the data source, the index for items that come after in the ordering will be impacted.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
