---
title:IVulkanPlatformGraphicsContext Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IVulkanPlatformGraphicsContext Interface




## Definition
**Namespace:** <a href="N_Avalonia_Vulkan">Avalonia.Vulkan</a>  
**Assembly:** Avalonia.Vulkan (in Avalonia.Vulkan.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface IVulkanPlatformGraphicsContext : IPlatformGraphicsContext, 
	IDisposable, IOptionalFeatureProvider
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface IVulkanPlatformGraphicsContext
	Inherits IPlatformGraphicsContext, IDisposable, IOptionalFeatureProvider
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type IVulkanPlatformGraphicsContext = 
    interface
        interface IPlatformGraphicsContext
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanPlatformGraphicsContext_Device">Device</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanPlatformGraphicsContext_Instance">Instance</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformGraphicsContext_IsLost">IsLost</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Vulkan_IVulkanPlatformGraphicsContext_CreateRenderTarget">CreateRenderTarget(IEnumerable(Object))</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformGraphicsContext_EnsureCurrent">EnsureCurrent()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IOptionalFeatureProvider_TryGetFeature">TryGetFeature(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Vulkan">Avalonia.Vulkan Namespace</a>  
