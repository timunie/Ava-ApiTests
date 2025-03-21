# ISkiaGpuRenderSession Interface


Custom render session for Skia render target.



## Definition
**Namespace:** <a href="N_Avalonia_Skia">Avalonia.Skia</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ISkiaGpuRenderSession : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ISkiaGpuRenderSession
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ISkiaGpuRenderSession = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Gpu/ISkiaGpuRenderSession.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Skia_ISkiaGpuRenderSession_GrContext">GrContext</a></td>
<td>GrContext used by this session.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Skia_ISkiaGpuRenderSession_ScaleFactor">ScaleFactor</a></td>
<td>Scaling factor.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Skia_ISkiaGpuRenderSession_SkSurface">SkSurface</a></td>
<td>Canvas that will be used to render.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Skia_ISkiaGpuRenderSession_SurfaceOrigin">SurfaceOrigin</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Skia">Avalonia.Skia Namespace</a>  

