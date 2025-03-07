# CreateRenderTargetBitmap Method


Creates a render target bitmap implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IRenderTargetBitmapImpl CreateRenderTargetBitmap(
	PixelSize size,
	Vector dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateRenderTargetBitmap ( 
	size As PixelSize,
	dpi As Vector
) As IRenderTargetBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateRenderTargetBitmap : 
        size : PixelSize * 
        dpi : Vector -> IRenderTargetBitmapImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size of the bitmap in device pixels.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The DPI of the bitmap.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a>  
An <a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
