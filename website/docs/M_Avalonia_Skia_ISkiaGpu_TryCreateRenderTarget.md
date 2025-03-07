# TryCreateRenderTarget Method


Attempts to create custom render target from given surfaces.



## Definition
**Namespace:** <a href="N_Avalonia_Skia">Avalonia.Skia</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ISkiaGpuRenderTarget? TryCreateRenderTarget(
	IEnumerable<Object> surfaces
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryCreateRenderTarget ( 
	surfaces As IEnumerable(Of Object)
) As ISkiaGpuRenderTarget
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryCreateRenderTarget : 
        surfaces : IEnumerable<Object> -> ISkiaGpuRenderTarget 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Gpu/ISkiaGpu.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>Surfaces.</dd></dl>

#### Return Value
<a href="T_Avalonia_Skia_ISkiaGpuRenderTarget">ISkiaGpuRenderTarget</a>  
Created render target or null if it fails.

## See Also


#### Reference
<a href="T_Avalonia_Skia_ISkiaGpu">ISkiaGpu Interface</a>  
<a href="N_Avalonia_Skia">Avalonia.Skia Namespace</a>  
