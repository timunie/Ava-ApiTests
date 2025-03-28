# RendererDebugOverlays Enumeration


Represents the various types of overlays that can be drawn by a renderer.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum RendererDebugOverlays
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration RendererDebugOverlays
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type RendererDebugOverlays
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/RendererDebugOverlays.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>Do not draw any overlay.</td>
</tr>
<tr>
<td>Fps</td>
<td>1</td>
<td>Draw a FPS counter.</td>
</tr>
<tr>
<td>DirtyRects</td>
<td>2</td>
<td>Draw invalidated rectangles each frame.</td>
</tr>
<tr>
<td>LayoutTimeGraph</td>
<td>4</td>
<td>Draw a graph of past layout times.</td>
</tr>
<tr>
<td>RenderTimeGraph</td>
<td>8</td>
<td>Draw a graph of past render times.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  

