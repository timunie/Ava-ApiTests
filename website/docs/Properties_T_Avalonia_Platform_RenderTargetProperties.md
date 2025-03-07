# RenderTargetProperties Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_RenderTargetProperties_IsSuitableForDirectRendering">IsSuitableForDirectRendering</a></td>
<td>Indicates that the render target can be used without CreateLayer It's currently not true for every render target, since with OpenGL rendering we often use framebuffers without a stencil attachment that is required for clipping with Skia</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_RenderTargetProperties_RetainsPreviousFrameContents">RetainsPreviousFrameContents</a></td>
<td>Indicates that render target contents are preserved between CreateDrawingContext calls. Notable examples are retained CPU-memory framebuffers and swapchains with DXGI_SWAP_EFFECT_SEQUENTIAL/DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_RenderTargetProperties">RenderTargetProperties Structure</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
