# IVulkanDevice Interface




## Definition
**Namespace:** <a href="N_Avalonia_Vulkan">Avalonia.Vulkan</a>  
**Assembly:** Avalonia.Vulkan (in Avalonia.Vulkan.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IVulkanDevice : IDisposable, 
	IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IVulkanDevice
	Inherits IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IVulkanDevice = 
    interface
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Vulkan/IVulkanDevice.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_EnabledExtensions">EnabledExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_GraphicsQueueFamilyIndex">GraphicsQueueFamilyIndex</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_Handle">Handle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_Instance">Instance</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_IsLost">IsLost</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_MainQueueHandle">MainQueueHandle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanDevice_PhysicalDeviceHandle">PhysicalDeviceHandle</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Vulkan_IVulkanDevice_Lock">Lock()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IOptionalFeatureProvider_TryGetFeature">TryGetFeature(Type)</a></td>
<td>Queries for an optional feature.<br />(Inherited from <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Vulkan">Avalonia.Vulkan Namespace</a>  
