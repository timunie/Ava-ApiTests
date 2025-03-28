# Win32CompositionMode Enumeration


Represents the Win32 window composition mode.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum Win32CompositionMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration Win32CompositionMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Win32CompositionMode
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>WinUIComposition</td>
<td>1</td>
<td>Render Avalonia to a texture inside the Windows.UI.Composition tree.</td>
</tr>
<tr>
<td>DirectComposition</td>
<td>2</td>
<td>Render Avalonia to a texture inside the DirectComposition tree.</td>
</tr>
<tr>
<td>LowLatencyDxgiSwapChain</td>
<td>3</td>
<td>When LowLatencyDxgiSwapChain is active, renders Avalonia through a low-latency Dxgi Swapchain.</td>
</tr>
<tr>
<td>RedirectionSurface</td>
<td>4</td>
<td>The window renders to a redirection surface.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

