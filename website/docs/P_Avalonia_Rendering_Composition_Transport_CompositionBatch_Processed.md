# Processed Property


Indicates that batch got deserialized on the render thread and will soon be rendered. It's generally a good time to start producing the next one



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Transport">Avalonia.Rendering.Composition.Transport</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Task Processed { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Processed As Task
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Processed : Task with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Transport/Batch.cs#L43" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>To allow timing-sensitive code to receive the notification in time, the TaskCompletionSource is configured to invoke continuations _synchronously_, so your `await` could happen from the render loop if it happens to run on the UI thread. It's recommended to use Dispatcher.AwaitOnPriority when consuming from the UI thread

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Transport_CompositionBatch">CompositionBatch Class</a>  
<a href="N_Avalonia_Rendering_Composition_Transport">Avalonia.Rendering.Composition.Transport Namespace</a>  

