# ISkiaGpuWithPlatformGraphicsContext Interface




## Definition
**Namespace:** <a href="N_Avalonia_Skia">Avalonia.Skia</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute]
public interface ISkiaGpuWithPlatformGraphicsContext : ISkiaGpu, 
	IPlatformGraphicsContext, IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute>
Public Interface ISkiaGpuWithPlatformGraphicsContext
	Inherits ISkiaGpu, IPlatformGraphicsContext, IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute>]
type ISkiaGpuWithPlatformGraphicsContext = 
    interface
        interface ISkiaGpu
        interface IPlatformGraphicsContext
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>, <a href="T_Avalonia_Skia_ISkiaGpu">ISkiaGpu</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Skia_ISkiaGpuWithPlatformGraphicsContext_PlatformGraphicsContext">PlatformGraphicsContext</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_ISkiaGpu_TryCreateRenderTarget">TryCreateRenderTarget(IEnumerable(Object))</a></td>
<td>Attempts to create custom render target from given surfaces.<br />(Inherited from <a href="T_Avalonia_Skia_ISkiaGpu">ISkiaGpu</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_ISkiaGpu_TryCreateSurface">TryCreateSurface(PixelSize, ISkiaGpuRenderSession)</a></td>
<td>Creates an offscreen render target surface<br />(Inherited from <a href="T_Avalonia_Skia_ISkiaGpu">ISkiaGpu</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Skia_ISkiaGpuWithPlatformGraphicsContext_TryGetGrContext">TryGetGrContext()</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Skia">Avalonia.Skia Namespace</a>  

