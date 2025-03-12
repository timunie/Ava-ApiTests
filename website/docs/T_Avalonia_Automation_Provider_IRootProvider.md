# IRootProvider Interface


Exposes methods and properties to support UI Automation client access to the root of an automation tree.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IRootProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IRootProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IRootProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Provider/IRootProvider.cs" title="View the source code">View Source</a>

This interface is implemented by the <a href="T_Avalonia_Automation_Peers_AutomationPeer">AutomationPeer</a> class, and should only be implemented on true root elements, such as Windows. To embed an automation tree, use <a href="T_Avalonia_Automation_Provider_IEmbeddedRootProvider">IEmbeddedRootProvider</a> instead.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IRootProvider_GetFocus">GetFocus()</a></td>
<td>Gets the currently focused element.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IRootProvider_GetPeerFromPoint">GetPeerFromPoint(Point)</a></td>
<td>Gets the element at the specified point, expressed in top-level coordinates.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Automation_Provider_IRootProvider_FocusChanged">FocusChanged</a></td>
<td>Raised by the automation peer when the focus changes.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  

