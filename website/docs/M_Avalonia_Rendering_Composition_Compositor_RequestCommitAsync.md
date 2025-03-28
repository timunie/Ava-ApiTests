# RequestCommitAsync Method


Requests pending changes in the composition objects to be serialized and sent to the render thread



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task RequestCommitAsync()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function RequestCommitAsync As Task
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestCommitAsync : unit -> Task 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Compositor.cs#L100" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>  
A task that completes when sent changes are applied on the render thread

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

