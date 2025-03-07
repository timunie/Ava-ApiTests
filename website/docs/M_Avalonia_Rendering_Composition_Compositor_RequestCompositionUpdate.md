# RequestCompositionUpdate Method


Enqueues a callback to be called before the next scheduled commit. If there is no scheduled commit it automatically schedules one This is useful for updating your composition tree objects after binding and layout passes have completed



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RequestCompositionUpdate(
	Action action
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RequestCompositionUpdate ( 
	action As Action
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestCompositionUpdate : 
        action : Action -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Compositor.cs#L236" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Compositor">Compositor Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
