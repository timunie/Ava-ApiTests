# Compositor Constructor


Creates a new compositor on a specified render loop that would use a particular GPU



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Compositor(
	IPlatformGraphics? gpu,
	bool useUiThreadForSynchronousCommits = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	gpu As IPlatformGraphics,
	Optional useUiThreadForSynchronousCommits As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        gpu : IPlatformGraphics * 
        ?useUiThreadForSynchronousCommits : bool 
(* Defaults:
        let _useUiThreadForSynchronousCommits = defaultArg useUiThreadForSynchronousCommits false
*)
-> Compositor
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Compositor.cs#L70" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
