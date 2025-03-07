# ShutdownRequested Event


Raised by the platform when a shutdown is requested.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IPlatformLifetimeEventsImpl.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ShutdownRequestedEventArgs">ShutdownRequestedEventArgs</a>)Raised on OSX via the Quit menu or right-clicking on the application icon and selecting Quit.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformLifetimeEventsImpl">IPlatformLifetimeEventsImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
