import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Lock(FramebufferLockProperties) Method


Provides a framebuffer descriptor for drawing.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform_Surfaces">Avalonia.Controls.Platform.Surfaces</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ILockedFramebuffer Lock(
	out FramebufferLockProperties properties
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Lock ( 
	<OutAttribute> ByRef properties As FramebufferLockProperties
) As ILockedFramebuffer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Lock : 
        properties : FramebufferLockProperties byref -> ILockedFramebuffer 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Platform_Surfaces_FramebufferLockProperties">FramebufferLockProperties</a></dt><dd> </dd></dl>

#### Return Value
ILockedFramebufferContents should be drawn on actual window after disposing

## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTargetWithProperties">IFramebufferRenderTargetWithProperties Interface</a>  
<a href="Overload_Avalonia_Controls_Platform_Surfaces_IFramebufferRenderTargetWithProperties_Lock">Lock Overload</a>  
<a href="N_Avalonia_Controls_Platform_Surfaces">Avalonia.Controls.Platform.Surfaces Namespace</a>  
