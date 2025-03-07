# TryCreateSurface Method


Creates an offscreen render target surface



## Definition
**Namespace:** <a href="N_Avalonia_Skia">Avalonia.Skia</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ISkiaSurface? TryCreateSurface(
	PixelSize size,
	ISkiaGpuRenderSession? session
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryCreateSurface ( 
	size As PixelSize,
	session As ISkiaGpuRenderSession
) As ISkiaSurface
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryCreateSurface : 
        size : PixelSize * 
        session : ISkiaGpuRenderSession -> ISkiaSurface 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Gpu/ISkiaGpu.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>size in pixels.</dd><dt>  <a href="T_Avalonia_Skia_ISkiaGpuRenderSession">ISkiaGpuRenderSession</a></dt><dd>An optional custom render session.</dd></dl>

#### Return Value
<a href="T_Avalonia_Skia_ISkiaSurface">ISkiaSurface</a>

## See Also


#### Reference
<a href="T_Avalonia_Skia_ISkiaGpu">ISkiaGpu Interface</a>  
<a href="N_Avalonia_Skia">Avalonia.Skia Namespace</a>  
