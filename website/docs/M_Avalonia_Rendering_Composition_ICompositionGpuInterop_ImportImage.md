# ImportImage(IPlatformHandle, PlatformGraphicsExternalImageProperties) Method


Asynchronously imports a texture. The returned object is immediately usable.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ICompositionImportedGpuImage ImportImage(
	IPlatformHandle handle,
	PlatformGraphicsExternalImageProperties properties
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ImportImage ( 
	handle As IPlatformHandle,
	properties As PlatformGraphicsExternalImageProperties
) As ICompositionImportedGpuImage
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ImportImage : 
        handle : IPlatformHandle * 
        properties : PlatformGraphicsExternalImageProperties -> ICompositionImportedGpuImage 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_PlatformGraphicsExternalImageProperties">PlatformGraphicsExternalImageProperties</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_ICompositionGpuInterop">ICompositionGpuInterop Interface</a>  
<a href="Overload_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportImage">ImportImage Overload</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

