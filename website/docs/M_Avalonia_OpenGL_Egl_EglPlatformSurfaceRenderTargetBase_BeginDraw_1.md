# BeginDraw(EglSurface, PixelSize, Double, Action, Boolean) Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected IGlPlatformSurfaceRenderingSession BeginDraw(
	EglSurface surface,
	PixelSize size,
	double scaling,
	Action? onFinish = null,
	bool isYFlipped = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function BeginDraw ( 
	surface As EglSurface,
	size As PixelSize,
	scaling As Double,
	Optional onFinish As Action = Nothing,
	Optional isYFlipped As Boolean = false
) As IGlPlatformSurfaceRenderingSession
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BeginDraw : 
        surface : EglSurface * 
        size : PixelSize * 
        scaling : float * 
        ?onFinish : Action * 
        ?isYFlipped : bool 
(* Defaults:
        let _onFinish = defaultArg onFinish null
        let _isYFlipped = defaultArg isYFlipped false
*)
-> IGlPlatformSurfaceRenderingSession 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglGlPlatformSurfaceBase.cs#L37" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_OpenGL_Egl_EglSurface">EglSurface</a></dt><dd> </dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_Surfaces_IGlPlatformSurfaceRenderingSession">IGlPlatformSurfaceRenderingSession</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase">EglPlatformSurfaceRenderTargetBase Class</a>  
<a href="Overload_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_BeginDraw">BeginDraw Overload</a>  
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  
