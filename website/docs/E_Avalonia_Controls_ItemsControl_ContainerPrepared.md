# ContainerPrepared Event


Occurs each time a container is prepared for use.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<ContainerPreparedEventArgs> ContainerPrepared
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event ContainerPrepared As EventHandler(Of ContainerPreparedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContainerPrepared : IEvent<EventHandler<ContainerPreparedEventArgs>,
    ContainerPreparedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_ContainerPreparedEventArgs">ContainerPreparedEventArgs</a>)The prepared element might be newly created or an existing container that is being re- used.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

