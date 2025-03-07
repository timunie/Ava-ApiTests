# IExternalObjectsRenderInterfaceContextFeature Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IExternalObjectsRenderInterfaceContextFeature
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IExternalObjectsRenderInterfaceContextFeature
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IExternalObjectsRenderInterfaceContextFeature = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IExternalObjectsRenderInterfaceContextFeature.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_DeviceLuid">DeviceLuid</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_DeviceUuid">DeviceUuid</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_SupportedImageHandleTypes">SupportedImageHandleTypes</a></td>
<td>Returns the list of image handle types supported by the current GPU backend, see <a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes">KnownPlatformGraphicsExternalImageHandleTypes</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_SupportedSemaphoreTypes">SupportedSemaphoreTypes</a></td>
<td>Returns the list of semaphore types supported by the current GPU backend, see <a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes">KnownPlatformGraphicsExternalSemaphoreHandleTypes</a></td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_GetSynchronizationCapabilities">GetSynchronizationCapabilities(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_ImportImage_1">ImportImage(ICompositionImportableSharedGpuContextImage)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_ImportImage">ImportImage(IPlatformHandle, PlatformGraphicsExternalImageProperties)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature_ImportSemaphore">ImportSemaphore(IPlatformHandle)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
