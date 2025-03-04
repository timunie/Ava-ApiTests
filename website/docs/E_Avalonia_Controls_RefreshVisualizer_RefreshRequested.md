import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# RefreshRequested Event


Occurs when an update of the content has been initiated.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<RefreshRequestedEventArgs> RefreshRequested
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event RefreshRequested As EventHandler(Of RefreshRequestedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RefreshRequested : IEvent<EventHandler<RefreshRequestedEventArgs>,
    RefreshRequestedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/PullToRefresh/RefreshVisualizer.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_RefreshRequestedEventArgs">RefreshRequestedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_RefreshVisualizer">RefreshVisualizer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
