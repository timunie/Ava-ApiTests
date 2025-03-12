# ISkiaGpu Interface


Custom Skia gpu instance.



## Definition
**Namespace:** <a href="N_Avalonia_Skia">Avalonia.Skia</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ISkiaGpu : IPlatformGraphicsContext, 
	IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ISkiaGpu
	Inherits IPlatformGraphicsContext, IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ISkiaGpu = 
    interface
        interface IPlatformGraphicsContext
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Gpu/ISkiaGpu.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_ISkiaGpu_TryCreateRenderTarget">TryCreateRenderTarget(IEnumerable(Object))</a></td>
<td>Attempts to create custom render target from given surfaces.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_ISkiaGpu_TryCreateSurface">TryCreateSurface(PixelSize, ISkiaGpuRenderSession)</a></td>
<td>Creates an offscreen render target surface</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Skia">Avalonia.Skia Namespace</a>  

