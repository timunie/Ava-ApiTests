# ImportCompleted Property


Tracks the import status of the object. Once the task is completed, the user code is allowed to free the resource owner in case when a non-owning sharing handle was used.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task ImportCompleted { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property ImportCompleted As Task
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ImportCompleted : Task with get
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task" target="_blank" rel="noopener noreferrer">Task</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject Interface</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

