# CreateGlRenderTarget(IGlContext) Method




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IGlPlatformSurfaceRenderTarget CreateGlRenderTarget(
	IGlContext context
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreateGlRenderTarget ( 
	context As IGlContext
) As IGlPlatformSurfaceRenderTarget
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateGlRenderTarget : 
        context : IGlContext -> IGlPlatformSurfaceRenderTarget 
override CreateGlRenderTarget : 
        context : IGlContext -> IGlPlatformSurfaceRenderTarget 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/DrmOutput.cs#L251" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_OpenGL_IGlContext">IGlContext</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_Surfaces_IGlPlatformSurfaceRenderTarget">IGlPlatformSurfaceRenderTarget</a>

#### Implements
<a href="M_Avalonia_OpenGL_Surfaces_IGlPlatformSurface_CreateGlRenderTarget">IGlPlatformSurface.CreateGlRenderTarget(IGlContext)</a>  


## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Output_DrmOutput">DrmOutput Class</a>  
<a href="Overload_Avalonia_LinuxFramebuffer_Output_DrmOutput_CreateGlRenderTarget">CreateGlRenderTarget Overload</a>  
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  
