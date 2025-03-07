# ICompositionImportedGpuSemaphore Interface


An imported GPU semaphore object that's usable by composition APIs



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ICompositionImportedGpuSemaphore : ICompositionGpuImportedObject, 
	IAsyncDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ICompositionImportedGpuSemaphore
	Inherits ICompositionGpuImportedObject, IAsyncDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ICompositionImportedGpuSemaphore = 
    interface
        interface ICompositionGpuImportedObject
        interface IAsyncDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable" target="_blank" rel="noopener noreferrer">IAsyncDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuImportedObject_ImportCompleted">ImportCompleted</a></td>
<td>Tracks the import status of the object. Once the task is completed, the user code is allowed to free the resource owner in case when a non-owning sharing handle was used.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuImportedObject_IsLost">IsLost</a></td>
<td>Indicates if the device context this instance is associated with is no longer available<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable.disposeasync" target="_blank" rel="noopener noreferrer">DisposeAsync()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources asynchronously.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable" target="_blank" rel="noopener noreferrer">IAsyncDisposable</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
