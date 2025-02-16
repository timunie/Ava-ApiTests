---
title:IDrawingContextLayerWithRenderContextAffinityImpl Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IDrawingContextLayerWithRenderContextAffinityImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public interface IDrawingContextLayerWithRenderContextAffinityImpl : IDrawingContextLayerImpl, 
	IRenderTargetBitmapImpl, IBitmapImpl, IDisposable, IRenderTarget
```
**VB**
``` VB
Public Interface IDrawingContextLayerWithRenderContextAffinityImpl
	Inherits IDrawingContextLayerImpl, IRenderTargetBitmapImpl, IBitmapImpl, IDisposable, 
	IRenderTarget
```
**F#**
``` F#
type IDrawingContextLayerWithRenderContextAffinityImpl = 
    interface
        interface IDrawingContextLayerImpl
        interface IRenderTargetBitmapImpl
        interface IBitmapImpl
        interface IDisposable
        interface IRenderTarget
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>, <a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>, <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>, <a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IDrawingContextLayerImpl_CanBlit">CanBlit</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_Dpi">Dpi</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IDrawingContextLayerWithRenderContextAffinityImpl_HasRenderContextAffinity">HasRenderContextAffinity</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTarget_IsCorrupted">IsCorrupted</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_PixelSize">PixelSize</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_Version">Version</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextLayerImpl_Blit">Blit(IDrawingContextImpl)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IRenderTarget_CreateDrawingContext">CreateDrawingContext(Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IDrawingContextLayerWithRenderContextAffinityImpl_CreateNonAffinedSnapshot">CreateNonAffinedSnapshot()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IBitmapImpl_Save">Save(Stream, Nullable(Int32))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_IBitmapImpl_Save_1">Save(String, Nullable(Int32))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
