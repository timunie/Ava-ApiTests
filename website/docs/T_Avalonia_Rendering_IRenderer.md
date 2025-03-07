# IRenderer Interface


Defines the interface for a renderer.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IRenderer : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IRenderer
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IRenderer = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/IRenderer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_IRenderer_Diagnostics">Diagnostics</a></td>
<td>Gets a value indicating whether the renderer should draw specific diagnostics.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_AddDirty">AddDirty(Visual)</a></td>
<td>Mark a visual as dirty and needing re-rendering.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_Paint">Paint(Rect)</a></td>
<td>Called when a paint notification is received by the control being rendered.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_RecalculateChildren">RecalculateChildren(Visual)</a></td>
<td>Informs the renderer that the z-ordering of a visual's children has changed.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_Resized">Resized(Size)</a></td>
<td>Called when a resize notification is received by the control being rendered.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_Start">Start()</a></td>
<td>Starts the renderer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_Stop">Stop()</a></td>
<td>Stops the renderer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderer_TryGetRenderInterfaceFeature">TryGetRenderInterfaceFeature(Type)</a></td>
<td>Attempts to query for a feature from the platform render interface</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Rendering_IRenderer_SceneInvalidated">SceneInvalidated</a></td>
<td>Raised when a portion of the scene has been invalidated.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
