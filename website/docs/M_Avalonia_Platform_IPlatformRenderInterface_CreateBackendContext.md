# CreateBackendContext Method


Creates a backend-specific object using a low-level API graphics context



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IPlatformRenderInterfaceContext CreateBackendContext(
	IPlatformGraphicsContext? graphicsApiContext
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateBackendContext ( 
	graphicsApiContext As IPlatformGraphicsContext
) As IPlatformRenderInterfaceContext
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateBackendContext : 
        graphicsApiContext : IPlatformGraphicsContext -> IPlatformRenderInterfaceContext 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a></dt><dd>An underlying low-level graphics context (e. g. wrapped OpenGL context, Vulkan device, D3DDevice, etc)</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IPlatformRenderInterfaceContext">IPlatformRenderInterfaceContext</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
