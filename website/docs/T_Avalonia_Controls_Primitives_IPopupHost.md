# IPopupHost Interface


Represents the top-level control opened by a <a href="T_Avalonia_Controls_Primitives_Popup">Popup</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
[UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")]
public interface IPopupHost : IDisposable, 
	IFocusScope
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>
Public Interface IPopupHost
	Inherits IDisposable, IFocusScope
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
[<UnstableAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>]
type IPopupHost = 
    interface
        interface IDisposable
        interface IFocusScope
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/IPopupHost.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Input_IFocusScope">IFocusScope</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Remarks
A popup host can be either be a popup window created by the operating system (<a href="T_Avalonia_Controls_Primitives_PopupRoot">PopupRoot</a>) or an <a href="T_Avalonia_Controls_Primitives_OverlayPopupHost">OverlayPopupHost</a> which is created on an <a href="T_Avalonia_Controls_Primitives_OverlayLayer">OverlayLayer</a>.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_Height">Height</a></td>
<td>Gets or sets the fixed height of the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_HostedVisualTreeRoot">HostedVisualTreeRoot</a></td>
<td>Gets the root of the visual tree in the case where the popup is presented using a separate visual tree.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_MaxHeight">MaxHeight</a></td>
<td>Gets or sets the maximum height of the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_MaxWidth">MaxWidth</a></td>
<td>Gets or sets the maximum width of the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_MinHeight">MinHeight</a></td>
<td>Gets or sets the minimum height of the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_MinWidth">MinWidth</a></td>
<td>Gets or sets the minimum width of the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_Presenter">Presenter</a></td>
<td>Gets the presenter from the control's template.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_Topmost">Topmost</a></td>
<td>Gets or sets whether the popup appears on top of all other windows.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_Transform">Transform</a></td>
<td>Gets or sets a transform that will be applied to the popup.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IPopupHost_Width">Width</a></td>
<td>Gets or sets the fixed width of the popup.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IPopupHost_ConfigurePosition">ConfigurePosition(PopupPositionRequest)</a></td>
<td>Configures the position of the popup according to a target control and a set of placement parameters.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IPopupHost_Hide">Hide()</a></td>
<td>Hides the popup.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IPopupHost_SetChild">SetChild(Control)</a></td>
<td>Sets the control to display in the popup.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IPopupHost_Show">Show()</a></td>
<td>Shows the popup.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_IPopupHost_TakeFocus">TakeFocus()</a></td>
<td>Takes focus from any currently focused native control.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_IPopupHost_TemplateApplied">TemplateApplied</a></td>
<td>Raised when the control's template is applied.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

