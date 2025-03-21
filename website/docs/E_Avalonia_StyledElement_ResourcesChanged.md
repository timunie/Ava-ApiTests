# ResourcesChanged Event


Occurs when a resource in this styled element or a parent styled element has changed.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ResourcesChangedEventArgs> ResourcesChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event ResourcesChanged As EventHandler(Of ResourcesChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ResourcesChanged : IEvent<EventHandler<ResourcesChangedEventArgs>,
    ResourcesChangedEventArgs>
override ResourcesChanged : IEvent<EventHandler<ResourcesChangedEventArgs>,
    ResourcesChangedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ResourcesChangedEventArgs">ResourcesChangedEventArgs</a>)

#### Implements
<a href="E_Avalonia_Controls_IResourceHost_ResourcesChanged">IResourceHost.ResourcesChanged</a>  


## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

