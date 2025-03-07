# IGlContextExternalObjectsFeature Interface




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IGlContextExternalObjectsFeature
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IGlContextExternalObjectsFeature
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IGlContextExternalObjectsFeature = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/IGlContextExternalObjectsFeature.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlContextExternalObjectsFeature_DeviceLuid">DeviceLuid</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlContextExternalObjectsFeature_DeviceUuid">DeviceUuid</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlContextExternalObjectsFeature_SupportedExportableExternalImageTypes">SupportedExportableExternalImageTypes</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlContextExternalObjectsFeature_SupportedExportableExternalSemaphoreTypes">SupportedExportableExternalSemaphoreTypes</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlContextExternalObjectsFeature_SupportedImportableExternalImageTypes">SupportedImportableExternalImageTypes</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlContextExternalObjectsFeature_SupportedImportableExternalSemaphoreTypes">SupportedImportableExternalSemaphoreTypes</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_CreateImage">CreateImage(String, PixelSize, PlatformGraphicsExternalImageFormat)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_CreateSemaphore">CreateSemaphore(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_GetSupportedFormatsForExternalMemoryType">GetSupportedFormatsForExternalMemoryType(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_GetSynchronizationCapabilities">GetSynchronizationCapabilities(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_ImportImage">ImportImage(IPlatformHandle, PlatformGraphicsExternalImageProperties)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_ImportSemaphore">ImportSemaphore(IPlatformHandle)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  
