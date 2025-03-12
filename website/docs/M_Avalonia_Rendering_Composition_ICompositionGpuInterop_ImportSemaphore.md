# ImportSemaphore(IPlatformHandle) Method


Asynchronously imports a semaphore object. The returned object is immediately usable. If import operation fails, the caller is responsible for destroying the handle



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ICompositionImportedGpuSemaphore ImportSemaphore(
	IPlatformHandle handle
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ImportSemaphore ( 
	handle As IPlatformHandle
) As ICompositionImportedGpuSemaphore
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ImportSemaphore : 
        handle : IPlatformHandle -> ICompositionImportedGpuSemaphore 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuSemaphore">ICompositionImportedGpuSemaphore</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_ICompositionGpuInterop">ICompositionGpuInterop Interface</a>  
<a href="Overload_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportSemaphore">ImportSemaphore Overload</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

