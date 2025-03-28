# TryGetDefaultCompositor Method


Attempts to get the Compositor instance that will be used by default for new TopLevels created by the current platform backend. This won't work for every single platform backend and backend settings, e. g. with web we'll need to have separate Compositor instances per output HTML canvas since they don't share OpenGL state. Another case where default compositor won't be available is our planned multithreaded rendering mode where each window would get its own Compositor instance This method is still useful for obtaining GPU device LUID to speed up initialization, but you should always check if default Compositor matches one used by our control once it gets attached to a TopLevel



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Compositor? TryGetDefaultCompositor()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryGetDefaultCompositor As Compositor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryGetDefaultCompositor : unit -> Compositor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Compositor.cs#L332" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor</a>  


## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

