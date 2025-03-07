# IDrawingContextLayerWithRenderContextAffinityImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IDrawingContextLayerWithRenderContextAffinityImpl : IDrawingContextLayerImpl, 
	IRenderTargetBitmapImpl, IBitmapImpl, IDisposable, IRenderTarget
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IDrawingContextLayerWithRenderContextAffinityImpl
	Inherits IDrawingContextLayerImpl, IRenderTargetBitmapImpl, IBitmapImpl, IDisposable, 
	IRenderTarget
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IDrawingContextLayerWithRenderContextAffinityImpl = 
    interface
        interface IDrawingContextLayerImpl
        interface IRenderTargetBitmapImpl
        interface IBitmapImpl
        interface IDisposable
        interface IRenderTarget
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>, <a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>, <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>, <a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IDrawingContextLayerImpl_CanBlit">CanBlit</a></td>
<td>Returns true if layer supports optimized blit.<br />(Inherited from <a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_Dpi">Dpi</a></td>
<td>Gets the dots per inch (DPI) of the image.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IDrawingContextLayerWithRenderContextAffinityImpl_HasRenderContextAffinity">HasRenderContextAffinity</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTarget_IsCorrupted">IsCorrupted</a></td>
<td>Indicates if the render target is no longer usable and needs to be recreated<br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_PixelSize">PixelSize</a></td>
<td>Gets the size of the bitmap, in device pixels.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_Version">Version</a></td>
<td>Version of the pixel data<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextLayerImpl_Blit">Blit(IDrawingContextImpl)</a></td>
<td>Does optimized blit with Src blend mode.<br />(Inherited from <a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IRenderTarget_CreateDrawingContext">CreateDrawingContext(Boolean)</a></td>
<td>Creates an <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a> for a rendering session.<br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextLayerWithRenderContextAffinityImpl_CreateNonAffinedSnapshot">CreateNonAffinedSnapshot()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IBitmapImpl_Save">Save(Stream, Nullable(Int32))</a></td>
<td>Saves the bitmap to a stream in png format.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IBitmapImpl_Save_1">Save(String, Nullable(Int32))</a></td>
<td>Saves the bitmap to a file.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
