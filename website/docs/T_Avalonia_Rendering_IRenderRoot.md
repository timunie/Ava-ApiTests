# IRenderRoot Interface


Represents the root of a renderable tree.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IRenderRoot
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IRenderRoot
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IRenderRoot = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/IRenderRoot.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_IRenderRoot_ClientSize">ClientSize</a></td>
<td>Gets the client size of the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_IRenderRoot_HitTester">HitTester</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_IRenderRoot_Renderer">Renderer</a></td>
<td>Gets the renderer for the window.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_IRenderRoot_RenderScaling">RenderScaling</a></td>
<td>The scaling factor to use in rendering.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderRoot_PointToClient">PointToClient(PixelPoint)</a></td>
<td>Converts a point from screen to client coordinates.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_IRenderRoot_PointToScreen">PointToScreen(Point)</a></td>
<td>Converts a point from client to screen coordinates.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  

