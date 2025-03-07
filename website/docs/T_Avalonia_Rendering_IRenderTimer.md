# IRenderTimer Interface


Defines the interface implemented by an application render timer.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IRenderTimer
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IRenderTimer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IRenderTimer = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/IRenderTimer.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_IRenderTimer_RunsInBackground">RunsInBackground</a></td>
<td>Indicates if the timer ticks on a non-UI thread</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Rendering_IRenderTimer_Tick">Tick</a></td>
<td>Raised when the render timer ticks to signal a new frame should be drawn.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
