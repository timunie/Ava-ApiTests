import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ShutdownRequested Event


Raised by the platform when a shutdown is requested.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event EventHandler<ShutdownRequestedEventArgs> ShutdownRequested
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event ShutdownRequested As EventHandler(Of ShutdownRequestedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShutdownRequested : IEvent<EventHandler<ShutdownRequestedEventArgs>,
    ShutdownRequestedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ShutdownRequestedEventArgs">ShutdownRequestedEventArgs</a>)Raised on OSX via the Quit menu or right-clicking on the application icon and selecting Quit.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformLifetimeEventsImpl">IPlatformLifetimeEventsImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
