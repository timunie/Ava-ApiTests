# CreateOffscreenRenderTarget Method


Creates an offscreen render target



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDrawingContextLayerImpl CreateOffscreenRenderTarget(
	PixelSize pixelSize,
	double scaling
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateOffscreenRenderTarget ( 
	pixelSize As PixelSize,
	scaling As Double
) As IDrawingContextLayerImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateOffscreenRenderTarget : 
        pixelSize : PixelSize * 
        scaling : float -> IDrawingContextLayerImpl 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size, in pixels, of the render target</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The scaling which will be reported by IBitmap.Dpi</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterfaceContext">IPlatformRenderInterfaceContext Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
