# IEmbeddedRootProvider Interface


Exposure methods and properties to support UI Automation client access to the root of an automation tree hosted by another UI framework.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IEmbeddedRootProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IEmbeddedRootProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IEmbeddedRootProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Provider/IEmbeddedRootProvider.cs" title="View the source code">View Source</a>

This interface is implemented by the <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> class, and can be used to embed an automation tree from a 3rd party UI framework that wishes to use Avalonia's automation support.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IEmbeddedRootProvider_GetFocus">GetFocus()</a></td>
<td>Gets the currently focused element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IEmbeddedRootProvider_GetPeerFromPoint">GetPeerFromPoint(Point)</a></td>
<td>Gets the element at the specified point, expressed in top-level coordinates.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Automation_Provider_IEmbeddedRootProvider_FocusChanged">FocusChanged</a></td>
<td>Raised by the automation peer when the focus changes.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  

