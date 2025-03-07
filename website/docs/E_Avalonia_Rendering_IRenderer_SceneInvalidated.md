# SceneInvalidated Event


Raised when a portion of the scene has been invalidated.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event EventHandler<SceneInvalidatedEventArgs> SceneInvalidated
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event SceneInvalidated As EventHandler(Of SceneInvalidatedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SceneInvalidated : IEvent<EventHandler<SceneInvalidatedEventArgs>,
    SceneInvalidatedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/IRenderer.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Rendering_SceneInvalidatedEventArgs">SceneInvalidatedEventArgs</a>)Indicates that the underlying low-level scene information has been updated. Used to signal that an update to the current pointer-over state may be required.

## See Also


#### Reference
<a href="T_Avalonia_Rendering_IRenderer">IRenderer Interface</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
