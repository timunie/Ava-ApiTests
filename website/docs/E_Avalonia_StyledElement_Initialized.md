# Initialized Event


Occurs when the styled element has finished initialization.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler Initialized
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Initialized As EventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Initialized : IEvent<EventHandler,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledElement.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler" target="_blank" rel="noopener noreferrer">EventHandler</a>The Initialized event indicates that all property values on the styled element have been set. When loading the styled element from markup, it occurs when <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitialize.endinit" target="_blank" rel="noopener noreferrer">EndInit()</a> is called *and* the styled element is attached to a rooted logical tree. When the styled element is created by code and <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitialize" target="_blank" rel="noopener noreferrer">ISupportInitialize</a> is not used, it is called when the styled element is attached to the visual tree.

## See Also


#### Reference
<a href="T_Avalonia_StyledElement">StyledElement Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

