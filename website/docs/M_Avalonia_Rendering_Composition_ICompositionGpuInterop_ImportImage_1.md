# ImportImage(ICompositionImportableSharedGpuContextImage) Method


Asynchronously imports a texture. The returned object is immediately usable. If import operation fails, the caller is responsible for destroying the handle



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ICompositionImportedGpuImage ImportImage(
	ICompositionImportableSharedGpuContextImage image
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ImportImage ( 
	image As ICompositionImportableSharedGpuContextImage
) As ICompositionImportedGpuImage
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ImportImage : 
        image : ICompositionImportableSharedGpuContextImage -> ICompositionImportedGpuImage 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_Composition_ICompositionImportableSharedGpuContextImage">ICompositionImportableSharedGpuContextImage</a></dt><dd>An image that belongs to the same GPU context or the same GPU context sharing group as one used by compositor</dd></dl>

#### Return Value
<a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_ICompositionGpuInterop">ICompositionGpuInterop Interface</a>  
<a href="Overload_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportImage">ImportImage Overload</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
