---
title:ICompositionGpuInterop Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ICompositionGpuInterop Interface




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface ICompositionGpuInterop
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface ICompositionGpuInterop
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type ICompositionGpuInterop = interface end
```



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_DeviceLuid">DeviceLuid</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_DeviceUuid">DeviceUuid</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_IsLost">IsLost</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_SupportedImageHandleTypes">SupportedImageHandleTypes</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuInterop_SupportedSemaphoreTypes">SupportedSemaphoreTypes</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_GetSynchronizationCapabilities">GetSynchronizationCapabilities(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportImage_1">ImportImage(ICompositionImportableSharedGpuContextImage)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportImage">ImportImage(IPlatformHandle, PlatformGraphicsExternalImageProperties)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportSemaphore_1">ImportSemaphore(ICompositionImportableSharedGpuContextSemaphore)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ICompositionGpuInterop_ImportSemaphore">ImportSemaphore(IPlatformHandle)</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
