# SceneInvalidatedEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Rendering_SceneInvalidatedEventArgs">SceneInvalidatedEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public SceneInvalidatedEventArgs(
	IRenderRoot root,
	Rect dirtyRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	root As IRenderRoot,
	dirtyRect As Rect
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        root : IRenderRoot * 
        dirtyRect : Rect -> SceneInvalidatedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/SceneInvalidatedEventArgs.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rendering_IRenderRoot">IRenderRoot</a></dt><dd>The render root that has been updated.</dd><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The updated area.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_SceneInvalidatedEventArgs">SceneInvalidatedEventArgs Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
