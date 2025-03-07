# D3D11TextureGlobalSharedHandle Field


An DXGI global shared handle returned by IDXGIResource::GetSharedHandle D3D11_RESOURCE_MISC_SHARED or D3D11_RESOURCE_MISC_SHARED_KEYEDMUTEX flag. The handle does not own the reference to the underlying video memory, so the provider should make sure that the resource is valid until the handle has been successfully imported



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public const string D3D11TextureGlobalSharedHandle = "D3D11TextureGlobalSharedHandle"
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Const D3D11TextureGlobalSharedHandle As String = "D3D11TextureGlobalSharedHandle"
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val mutable D3D11TextureGlobalSharedHandle: string
```
</TabItem>
</Tabs>



#### Field Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes">KnownPlatformGraphicsExternalImageHandleTypes Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
