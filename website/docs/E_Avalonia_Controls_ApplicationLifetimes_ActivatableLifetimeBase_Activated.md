import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Activated Event




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ActivatedEventArgs> Activated
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Activated As EventHandler(Of ActivatedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Activated : IEvent<EventHandler<ActivatedEventArgs>,
    ActivatedEventArgs>
override Activated : IEvent<EventHandler<ActivatedEventArgs>,
    ActivatedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ApplicationLifetimes/ActivatableLifetimeBase.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_ActivatedEventArgs">ActivatedEventArgs</a>)

#### Implements
<a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Activated">IActivatableLifetime.Activated</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase">ActivatableLifetimeBase Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
