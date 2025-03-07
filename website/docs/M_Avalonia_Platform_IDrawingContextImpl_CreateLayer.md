# CreateLayer Method


Creates a new <a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a> that can be used as a render layer for the current render target.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IDrawingContextLayerImpl CreateLayer(
	PixelSize size
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateLayer ( 
	size As PixelSize
) As IDrawingContextLayerImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateLayer : 
        size : PixelSize -> IDrawingContextLayerImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IDrawingContextImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size of the layer in DIPs.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>  
An <a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a>Depending on the rendering backend used, a layer created via this method may be more performant than a standard render target bitmap. In particular the Direct2D backend has to do a format conversion each time a standard render target bitmap is rendered, but a layer created via this method has no such overhead.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
