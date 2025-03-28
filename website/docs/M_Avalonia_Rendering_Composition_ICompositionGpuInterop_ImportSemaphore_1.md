# ImportSemaphore(ICompositionImportableSharedGpuContextSemaphore) Method


Asynchronously imports a semaphore object. The returned object is immediately usable.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ICompositionImportedGpuImage ImportSemaphore(
	ICompositionImportableSharedGpuContextSemaphore image
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ImportSemaphore ( 
	image As ICompositionImportableSharedGpuContextSemaphore
) As ICompositionImportedGpuImage
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ImportSemaphore : 
        image : ICompositionImportableSharedGpuContextSemaphore -> ICompositionImportedGpuImage 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportableSharedGpuContextSemaphore">ICompositionImportableSharedGpuContextSemaphore</a></dt><dd>A semaphore that belongs to the same GPU context or the same GPU context sharing group as one used by compositor</dd></dl>

#### Return Value
<a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_ICompositionGpuInterop">ICompositionGpuInterop Interface</a>  
<a href="Overload_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportSemaphore">ImportSemaphore Overload</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

