# Startup Event


Sent when the application is starting up.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ControlledApplicationLifetimeStartupEventArgs> Startup
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Startup As EventHandler(Of ControlledApplicationLifetimeStartupEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Startup : IEvent<EventHandler<ControlledApplicationLifetimeStartupEventArgs>,
    ControlledApplicationLifetimeStartupEventArgs>
override Startup : IEvent<EventHandler<ControlledApplicationLifetimeStartupEventArgs>,
    ControlledApplicationLifetimeStartupEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ControlledApplicationLifetimeStartupEventArgs">ControlledApplicationLifetimeStartupEventArgs</a>)

#### Implements
<a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Startup">IControlledApplicationLifetime.Startup</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

