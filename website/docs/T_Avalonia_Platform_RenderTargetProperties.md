# RenderTargetProperties Structure




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public struct RenderTargetProperties
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure RenderTargetProperties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type RenderTargetProperties = 
    struct
        inherit ValueType
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/RenderTargetProperties.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  RenderTargetProperties</td></tr>
</table>



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

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
