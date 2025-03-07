# Exit Event


Sent when the application is exiting.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ControlledApplicationLifetimeExitEventArgs> Exit
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Exit As EventHandler(Of ControlledApplicationLifetimeExitEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Exit : IEvent<EventHandler<ControlledApplicationLifetimeExitEventArgs>,
    ControlledApplicationLifetimeExitEventArgs>
override Exit : IEvent<EventHandler<ControlledApplicationLifetimeExitEventArgs>,
    ControlledApplicationLifetimeExitEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ControlledApplicationLifetimeExitEventArgs">ControlledApplicationLifetimeExitEventArgs</a>)

#### Implements
<a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Exit">IControlledApplicationLifetime.Exit</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
