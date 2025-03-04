import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IFramebufferRenderTargetWithProperties Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform_Surfaces">Avalonia.Controls.Platform.Surfaces</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IFramebufferRenderTargetWithProperties : IFramebufferRenderTarget, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IFramebufferRenderTargetWithProperties
	Inherits IFramebufferRenderTarget, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IFramebufferRenderTargetWithProperties = 
    interface
        interface IFramebufferRenderTarget
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTarget">IFramebufferRenderTarget</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTargetWithProperties_RetainsFrameContents">RetainsFrameContents</a></td>
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
<td><a href="M_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTarget_Lock">Lock()</a></td>
<td>Provides a framebuffer descriptor for drawing.<br />(Inherited from <a href="T_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTarget">IFramebufferRenderTarget</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTargetWithProperties_Lock">Lock(FramebufferLockProperties)</a></td>
<td>Provides a framebuffer descriptor for drawing.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Platform_Surfaces">Avalonia.Controls.Platform.Surfaces Namespace</a>  
