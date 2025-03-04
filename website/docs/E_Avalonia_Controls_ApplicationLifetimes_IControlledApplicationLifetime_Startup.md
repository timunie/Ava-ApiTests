import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Startup Event


Sent when the application is starting up.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event EventHandler<ControlledApplicationLifetimeStartupEventArgs> Startup
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event Startup As EventHandler(Of ControlledApplicationLifetimeStartupEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Startup : IEvent<EventHandler<ControlledApplicationLifetimeStartupEventArgs>,
    ControlledApplicationLifetimeStartupEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ApplicationLifetimes/IControlledApplicationLifetime.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ControlledApplicationLifetimeStartupEventArgs">ControlledApplicationLifetimeStartupEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime Interface</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
