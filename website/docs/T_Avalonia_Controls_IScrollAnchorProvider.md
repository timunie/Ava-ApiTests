# IScrollAnchorProvider Interface


Specifies a contract for a scrolling control that supports scroll anchoring.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IScrollAnchorProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IScrollAnchorProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IScrollAnchorProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/IScrollAnchorProvider.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IScrollAnchorProvider_CurrentAnchor">CurrentAnchor</a></td>
<td>The currently chosen anchor element to use for scroll anchoring.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IScrollAnchorProvider_RegisterAnchorCandidate">RegisterAnchorCandidate(Control)</a></td>
<td>Registers a control as a potential scroll anchor candidate.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IScrollAnchorProvider_UnregisterAnchorCandidate">UnregisterAnchorCandidate(Control)</a></td>
<td>Unregisters a control as a potential scroll anchor candidate.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

