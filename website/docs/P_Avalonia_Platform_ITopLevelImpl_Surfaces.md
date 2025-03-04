import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Surfaces Property


The list of native platform's surfaces that can be consumed by rendering subsystems.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IEnumerable<Object> Surfaces { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property Surfaces As IEnumerable(Of Object)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Surfaces : IEnumerable<Object> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/ITopLevelImpl.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

## 
Rendering platform will check that list and see if it can utilize one of them to output. It should be enough to expose a native window handle via IPlatformHandle and add support for framebuffer (even if it's emulated one) via IFramebufferPlatformSurface. If you have some rendering platform that's tied to your particular windowing platform, just expose some toolkit-specific object (e. g. Func&lt;Gdk.Drawable&gt; in case of GTK#+Cairo)

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
