# ICompositionGpuInterop Interface




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface ICompositionGpuInterop
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface ICompositionGpuInterop
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type ICompositionGpuInterop = interface end
```
</TabItem>
</Tabs>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_DeviceLuid">DeviceLuid</a></td>
<td>The LUID of the graphics adapter used by the compositor</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_DeviceUuid">DeviceUuid</a></td>
<td>The UUID of the graphics adapter used by the compositor</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_IsLost">IsLost</a></td>
<td>Indicates if the device context this instance is associated with is no longer available</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_SupportedImageHandleTypes">SupportedImageHandleTypes</a></td>
<td>Returns the list of image handle types supported by the current GPU backend, see <a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes">KnownPlatformGraphicsExternalImageHandleTypes</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_SupportedSemaphoreTypes">SupportedSemaphoreTypes</a></td>
<td>Returns the list of semaphore types supported by the current GPU backend, see <a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes">KnownPlatformGraphicsExternalSemaphoreHandleTypes</a></td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_GetSynchronizationCapabilities">GetSynchronizationCapabilities(String)</a></td>
<td>Returns the supported ways to synchronize access to the imported GPU image</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportImage_1">ImportImage(ICompositionImportableSharedGpuContextImage)</a></td>
<td>Asynchronously imports a texture. The returned object is immediately usable. If import operation fails, the caller is responsible for destroying the handle</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportImage">ImportImage(IPlatformHandle, PlatformGraphicsExternalImageProperties)</a></td>
<td>Asynchronously imports a texture. The returned object is immediately usable.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportSemaphore_1">ImportSemaphore(ICompositionImportableSharedGpuContextSemaphore)</a></td>
<td>Asynchronously imports a semaphore object. The returned object is immediately usable.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportSemaphore">ImportSemaphore(IPlatformHandle)</a></td>
<td>Asynchronously imports a semaphore object. The returned object is immediately usable. If import operation fails, the caller is responsible for destroying the handle</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

