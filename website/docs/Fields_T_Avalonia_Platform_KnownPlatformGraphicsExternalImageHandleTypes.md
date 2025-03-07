# KnownPlatformGraphicsExternalImageHandleTypes Fields




## Fields
<table>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes_D3D11TextureGlobalSharedHandle">D3D11TextureGlobalSharedHandle</a></td>
<td>An DXGI global shared handle returned by IDXGIResource::GetSharedHandle D3D11_RESOURCE_MISC_SHARED or D3D11_RESOURCE_MISC_SHARED_KEYEDMUTEX flag. The handle does not own the reference to the underlying video memory, so the provider should make sure that the resource is valid until the handle has been successfully imported</td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes_D3D11TextureNtHandle">D3D11TextureNtHandle</a></td>
<td>A DXGI NT handle returned by IDXGIResource1::CreateSharedHandle for a texture created with D3D11_RESOURCE_MISC_SHARED_NTHANDLE or flag</td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes_VulkanOpaqueKmtHandle">VulkanOpaqueKmtHandle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes_VulkanOpaqueNtHandle">VulkanOpaqueNtHandle</a></td>
<td>A NT handle that's been exported by Vulkan using VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_WIN32_BIT or in a compatible way</td>
</tr>
<tr>
<td><a href="F_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes_VulkanOpaquePosixFileDescriptor">VulkanOpaquePosixFileDescriptor</a></td>
<td>A POSIX file descriptor that's exported by Vulkan using VK_EXTERNAL_MEMORY_HANDLE_TYPE_OPAQUE_FD_BIT or in a compatible way</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes">KnownPlatformGraphicsExternalImageHandleTypes Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
