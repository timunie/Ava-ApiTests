# CompositionGpuImportedImageSynchronizationCapabilities Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum CompositionGpuImportedImageSynchronizationCapabilities
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration CompositionGpuImportedImageSynchronizationCapabilities
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type CompositionGpuImportedImageSynchronizationCapabilities
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Semaphores</td>
<td>1</td>
<td>Pre-render and after-render semaphores must be provided alongside with the image</td>
</tr>
<tr>
<td>KeyedMutex</td>
<td>2</td>
<td>Image must be created with D3D11_RESOURCE_MISC_SHARED_KEYEDMUTEX or in other compatible way</td>
</tr>
<tr>
<td>Automatic</td>
<td>4</td>
<td>Synchronization and ordering is somehow handled by the underlying platform</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

