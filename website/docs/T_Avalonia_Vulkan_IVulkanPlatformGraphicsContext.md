# IVulkanPlatformGraphicsContext Interface




## Definition
**Namespace:** <a href="N_Avalonia_Vulkan">Avalonia.Vulkan</a>  
**Assembly:** Avalonia.Vulkan (in Avalonia.Vulkan.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IVulkanPlatformGraphicsContext : IPlatformGraphicsContext, 
	IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IVulkanPlatformGraphicsContext
	Inherits IPlatformGraphicsContext, IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IVulkanPlatformGraphicsContext = 
    interface
        interface IPlatformGraphicsContext
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanPlatformGraphicsContext_Device">Device</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Vulkan_IVulkanPlatformGraphicsContext_Instance">Instance</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Vulkan_IVulkanPlatformGraphicsContext_CreateRenderTarget">CreateRenderTarget(IEnumerable(Object))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Vulkan">Avalonia.Vulkan Namespace</a>  

