# KnownPlatformGraphicsExternalSemaphoreHandleTypes Class


Describes various GPU semaphore handle types that are currently supported by Avalonia graphics backends



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class KnownPlatformGraphicsExternalSemaphoreHandleTypes
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class KnownPlatformGraphicsExternalSemaphoreHandleTypes
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type KnownPlatformGraphicsExternalSemaphoreHandleTypes = class end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  KnownPlatformGraphicsExternalSemaphoreHandleTypes</td></tr>
</table>



## Fields
<table>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes_Direct3D12FenceNtHandle">Direct3D12FenceNtHandle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes_VulkanOpaqueKmtHandle">VulkanOpaqueKmtHandle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes_VulkanOpaqueNtHandle">VulkanOpaqueNtHandle</a></td>
<td>A NT handle that's been exported by Vulkan using VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_OPAQUE_WIN32_BIT or in a compatible way</td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes_VulkanOpaquePosixFileDescriptor">VulkanOpaquePosixFileDescriptor</a></td>
<td>A POSIX file descriptor that's been exported by Vulkan using VK_EXTERNAL_SEMAPHORE_HANDLE_TYPE_OPAQUE_FD_BIT or in a compatible way</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

