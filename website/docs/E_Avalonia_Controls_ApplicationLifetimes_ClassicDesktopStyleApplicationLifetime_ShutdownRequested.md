import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ShutdownRequested Event


Raised by the platform when an application shutdown is requested.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ShutdownRequestedEventArgs> ShutdownRequested
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event ShutdownRequested As EventHandler(Of ShutdownRequestedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShutdownRequested : IEvent<EventHandler<ShutdownRequestedEventArgs>,
    ShutdownRequestedEventArgs>
override ShutdownRequested : IEvent<EventHandler<ShutdownRequestedEventArgs>,
    ShutdownRequestedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ShutdownRequestedEventArgs">ShutdownRequestedEventArgs</a>)

#### Implements
<a href="E_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownRequested">IClassicDesktopStyleApplicationLifetime.ShutdownRequested</a>  
Application Shutdown can be requested for various reasons like OS shutdown. On Windows this will be called when an OS Session (logout or shutdown) terminates. Cancelling the eventargs will block OS shutdown. On OSX this has the same behavior as on Windows and in addition: This event is raised via the Quit menu or right-clicking on the application icon and selecting Quit. This event provides a first-chance to cancel application shutdown; if shutdown is not canceled at this point the application will try to close each non-owned open window, invoking the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event on each and allowing each window to cancel the shutdown of the application. Windows cannot however prevent OS shutdown.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
